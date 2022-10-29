const jobDetails = [
    {
        id: 1,
        img: "data:image/png;base64,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",
        title: "April seriously wondered about her sleeping partner choices. She looked at her bed and what a mess it had become. How did she get to the point in her life where she had two dogs, three cats, and a raccoon sleeping with her every night?",
        description: "April seriously wondered about her sleeping partner choices. She looked at her bed and what a mess it had become. How did she get to the point in her life where she had two dogs, three cats, and a raccoon sleeping with her every night?",
        star: "⭐⭐⭐⭐⭐",
        tag: "web",
        amount: "500 dollars",
        deadline: "2 days of work",
        requirements: "should be trained in {this.tag} for more than 5 years "


    },
    {
        id: 2,
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8Yd/IAcvIAbvL1+v4SevKWuvgAcPGHr/elxfkAb/INdPIGc/L7/v/Q4fy30fqyzvrw9v7e6v0jfvPC1/sAaPGgwvnV5Pzr8/681fvl7f2KtfhsoPVKjfQsgvNclvVMkPRzp/Znn/ZemvXH3Pt/qvaTuPhyXbNsAAADSklEQVR4nO3b63LaMBSFUWIb7EjmZhMC4Z7b+z9iC0lmmrbEspQzZ592f/+Z0RpjSxZiMGCMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxtgvFatmspjOZrPpejFpHlbzYqw9pO+rmW62uzZzuXsvz1023O8O22p0+9ystMeX1nx92teurP3N73nv66wsz9bjabmw6RxPj879BfeHtS7vltqDjWi1GbpO3UflrfZwe7eqfBnKMykc9fLZE963rpfPnHBUBt9/JoXFoe8FNCZctVl/oCVhM+z9DbUlfGijgHaERdwVtCMc7+o4oBlh1W+atyecRkwTpoRFtM+K8DFmIrQknMR/R40Ij5EThRnhOk8AmhAeUi6hBeF9yl1oQnhKeJDaEKZdQgPChOWMEeFT7JLbinA+TAPiCyf9Xiou+/mfgt/zfu0hzHK/226Wt59a3msTOgqe7r3z1fNce7j9m7eBwLJFv9+u1ATOFa6y+rNo4GzoptoDjW4Z9KDJF9rjjK8KWZQ6o7fgpceAFU39pD3KlEJe732jPcqU9t3Ceqs9yKRC7kL0RcuXjQMepa32IJMquqdD41/SonubrZxpDzKpAGE+0R5kUiFCm6e6PgoQukJ7kEkFCDPtMaYVIrT62vQWhRTiRyGF+FFIIX4UUogfhRTiRyGF+P0H+zQBe97aY+yuuhlerxN489Wnf9YCbKfG/9EgIL8HuE2DfsiOFh60eQNhYX3S5g2EhSXCqTZRoUM4hyJ7DRFOMYgKIVY8kkK/19adkxTWj9q6c5LCcqStOycpxDizKCnEOMYgKoQ4Fi0pHGrjLgkKIdbdosLsRRt3SVAIse4WFbpnbdwlyWv4oI27JChsISYLQaHfIbxZSApRDvHLCbONtu0tOaEDOT4sJywh1t2iz1KA/e5zckKU/ymICf1Rm/aemBBk3S0oBFl3DwYveXm1EPzVD9+ttWnvrV9HV3vt/uuav/rhDcij9MvG//6v3DypQCF8FFKIH4UU4kchhfhRSCF+FFKIH4UU4kchhfhRSCF+FFKIH4UU4kchhfhRSCF+FFKIH4UU4kchhfhRSCF+FFKIH4UU4kchhfhRSCF+FFKIH4UU4kchhfhRSCF+FFL4Df0A5OFCR5kbfNAAAAAASUVORK5CYII=",
        title: "How had she been so wrong? All her instincts and intuition completely failed her for the first time in her life. She had so heavily relied on both when making decisions up until this moment and she felt a seismic shift take place in her self-confidence. If she could be so completely wrong about something so simple as this, how could she make decisions about really important things taking place in her life? She wasn't sure what she should do next.",
        description: "How had she been so wrong? All her instincts and intuition completely failed her for the first time in her life. She had so heavily relied on both when making decisions up until this moment and she felt a seismic shift take place in her self-confidence. If she could be so completely wrong about something so simple as this, how could she make decisions about really important things taking place in her life? She wasn't sure what she should do next.",
        star: "⭐⭐⭐",
        tag: "cpp",
        amount: "500 dollars",
        deadline: "2 days of work",
        requirements: "should be trained in {this.tag} for more than 5 years "

    },
    {
        id: 3,
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEUAAADyUCJ/ugAApO//uQAuLi46VACDwAAAHy0Aq/kAk9b6UyOdNBZSeQD4UiPZSB8tDwZgjQBuJA8wIwD/wAB0VADBjADkpgAAHy4AmN6MLhSjNhcdCgQmNwA+WwDeSR+GxABjIQ4TBgMaJgAsQAAVDwAlGwD/xgDJkgAAg79oTACtfgDF/SD2AAABfUlEQVR4nO3bR04DQBBEUROcyRiwSTbRhPvfD8kWG1agZgQF7x+gNE+9nk7nj9f96Qc0jzA/wvwI8yPMjzA/wvwI8yPMjzA/wvwI8yPMjzA/wvwI8yPMjzA/wvwI8yPMjzA/wg+d75S6uFytXO3Wum4onI/3Ko0PViu9Rb/S4rChcH+j1Luwv1mpT0hISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISPifhPNxrd//d+3mqNbtauWuV+u+oTAwwvwI8/uicDAdVJquVx6Oaz02FM6GtdbEk+Wk0vKpoXC0VWo4WAsn26VOCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQk/LZx+h3DSUvg8KjVb3/DlrNZrQ2FghPkR5keYH2F+hPkR5keYH2F+hPkR5keYH2F+hPkR5keYH2F+hPkR5keYH2F+hPkR5td9A4oV8ThocrpkAAAAAElFTkSuQmCC",
        title: "It was difficult for him to admit he was wrong. He had been so certain that he was correct and the deeply held belief could never be shaken. Yet the proof that he had been incorrect stood right before his eyes. See daddy, I told you that they are real! his daughter excitedly proclaimed.",
        description: "April seriously wondered about her sleeping partner choices. She looked at her bed and what a mess it had become. How did she get to the point in her life where she had two dogs, three cats, and a raccoon sleeping with her every night?",
        star: "⭐⭐⭐⭐",
        tag: "app",
        amount: "500 dollars",
        deadline: "2 days of work",
        requirements: "should be trained in {this.tag} for more than 5 years "

    },
    {
        id: 4,
        img: "https://icon-library.com/images/verified-icon-png/verified-icon-png-12.jpg",
        title: "She was aware that things could go wrong. In fact, she had trained her entire life in anticipation that things would go wrong one day. She had quiet confidence as she started to see that this was the day that all her training would be worthwhile and useful. At this point, she had no idea just how wrong everything would go that day.",
        description: "She was aware that things could go wrong. In fact, she had trained her entire life in anticipation that things would go wrong one day. She had quiet confidence as she started to see that this was the day that all her training would be worthwhile and useful. At this point, she had no idea just how wrong everything would go that day.",
        star: "⭐⭐⭐⭐⭐",
        tag: "web",
        amount: "500 dollars",
        deadline: "2 days of work",
        requirements: "should be trained in {this.tag} for more than 5 years "

    },
    {
        id: 5,
        img: "",
        title: "April seriously wondered about her sleeping partner choices. She looked at her bed and what a mess it had become. How did she get to the point in her life where she had two dogs, three cats, and a raccoon sleeping with her every night?",
        description: "April seriously wondered about her sleeping partner choices. She looked at her bed and what a mess it had become. How did she get to the point in her life where she had two dogs, three cats, and a raccoon sleeping with her every night?",
        star: "⭐⭐⭐⭐",
        tag: "app",
        amount: "500 dollars",
        deadline: "2 days of work",
        requirements: "should be trained in {this.tag} for more than 5 years "

    },
    



]

export default jobDetails;