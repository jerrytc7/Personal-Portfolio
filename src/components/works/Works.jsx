import "./works.scss";

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>Title</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur veritatis aliquam sed vitae, distinctio dicta.
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="https://support.brightervision.com/wp-content/uploads/2019/05/background-color.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" />
      <img src="assets/arrow.png" className="arrow right" alt="" />
    </div>
  );
}
