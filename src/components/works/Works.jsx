import { useState } from "react";
import "./works.scss";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      title: "FB Demo App",
      img: "https://www.citypng.com/public/uploads/preview/-11595350631lczyog2lld.png",
    },
    {
      id: 2,
      title: "Instagram Demo App",
      img: "https://igram.io/static/img/instagram-image.jpg",
      link: "https://phase-2-project-gk.herokuapp.com/"
    },
    {
      id: 3,
      title: "MLB Roster & HR Search",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1200px-Major_League_Baseball_logo.svg.png",
      link: "https://jerrytc7.github.io/MLB-Roster-Home-Run-Search/"
    },
  ];

  const handleClick = (way)=>{
    way === "left" 
    ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2)
    : setCurrentSlide(currentSlide<data.length -1 ?currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.img} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href={d.link} target="_blank" rel="noreferrer">Test out the deployed app!</a>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://support.brightervision.com/wp-content/uploads/2019/05/background-color.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")}/>
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
    </div>
  );
}
