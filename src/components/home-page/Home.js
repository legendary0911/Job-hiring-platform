import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Footer1 from "../footer";
import Header from "../Header";
import JobResultCard1 from "./jobResultCard";
import ProfileDiv from "./profileDiv";
import SearchDiv from "./searchDiv";
import jobDetails from '../../details';
import SearchBar from './searchBar';











function Home() {

  const [filter, setFilter] = useState(jobDetails[0]);
  const [name, setName] = useState("Results");
  const [filteredData, setFilterData] = useState(jobDetails.slice(0, 10));
  const [search,setSearch]=useState();

  function handleFilter(event) {
    const searchWord = event.target.value;
    setSearch(searchWord);
    setName(searchWord + " Results");
    const newFilter = jobDetails.filter((value) => {
      return (value.tag.toLowerCase().includes(searchWord.toLowerCase()));
    });
    if (searchWord === "") {
      setFilterData(jobDetails);
    }
    else {
      setFilterData(newFilter)
    }
  };



  function Create(job) {
    return (
      <div onClick={() => { setFilter(job) }}>
        <JobResultCard1
          star={job.star}
          title={job.title.substring(0, 40) + "..."}
          description={job.description.substring(0, 150) + "..."}
          img={job.img}
          key={job.id}
          id={job.id}
          tag={job.tag}>

        </JobResultCard1>
      </div>
    )
  };


  function CreateMain(even) {
    return (<SearchDiv change={handleFilter}
      image={even.img}
      title={even.title}
      description={even.description}
      tag={even.tag}
      amount={even.amount}
      deadline={even.deadline}
      requirements={even.requirements}

    >

    </SearchDiv>)
  };

  // useEffect(()=>{
  //   console.log("name changed")
  // },[name])

 
  
  return (
    
    <div>
      <Header ></Header>
      <div className=" flex flex-wrap-reverse lg:flex">
        <div className="w-[100%] lg:w-2/5 bg-[#76f2fe] mb-10">
          <div className="m-4 px-4 py-4 bg-white rounded-md h-[54px] ">{name}</div>
          <div className="overflow-y-scroll scrollbar-hide h-[500px] " id="huehue">{filteredData.map(Create)}</div>
          <div className="overflow-y-scroll scrollbar-hide h-[500px] " id="huehue">
        
          </div>

        </div>
        {CreateMain(filter)}
        <ProfileDiv></ProfileDiv>
      </div>
      <Footer1 />
    </div>

   
  );
}

export default Home;

