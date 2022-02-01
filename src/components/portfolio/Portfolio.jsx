import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  vanillajsPortfolio,
  reactPortfolio,
  rubyPortfolio,
  rubyonrailsPortfolio,
  reactandrailsPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "vanillajs",
      title: "Vanilla JS Apps",
    },
    {
      id: "react",
      title: "React Apps",
    },
    {
      id: "ruby",
      title: "Ruby Apps",
    },
    {
      id: "rubyonrails",
      title: "Ruby on Rails Apps",
    },
    {
      id: "reactandrails",
      title: "React and Rails Apps",
    },
  ];

  useEffect(()=>{

    switch(selected){
      case "featured":
        setData(featuredPortfolio)
        break;
      case "vanillajs":
        setData(vanillajsPortfolio)
        break;
      case "react":
        setData(reactPortfolio)
        break;
      case "ruby":
        setData(rubyPortfolio)
        break;
      case "rubyonrails":
        setData(rubyonrailsPortfolio)
        break;
      case "reactandrails":
        setData(reactandrailsPortfolio)
        break;
        default:
          setData(featuredPortfolio)
    }

  },[selected])

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map(d=>(
        <a href={d.link} target="_blank" rel="noreferrer" className="item">
          <img
            src={d.img}
            alt=""
          />
          <h3>{d.title}</h3>
        </a>
        ))}
      </div>
    </div>
  );
}
