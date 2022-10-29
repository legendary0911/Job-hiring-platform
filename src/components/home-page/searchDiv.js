import React from 'react';
import ReactDOM from 'react-dom/client';
import ExtendedResultCard from './extendedResultCard';
import SearchBar from './searchBar';



function SearchDiv(props) {
  
  return (
    <div class="w-[100%] lg:w-2/5">
    <SearchBar on={props.change}></SearchBar>
      

    <ExtendedResultCard 
    image={props.image}
    title={props.title}
    description={props.description}
    tag={props.tag}
    amount={props.amount}
    deadline={props.deadline}
    requirements={props.requirements}

    ></ExtendedResultCard>
     
    </div>

  )
};

export default SearchDiv;