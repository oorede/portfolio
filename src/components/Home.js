const Home = ({ dark }) => {
  return (
    <div className="orido_tm_hero orido_tm_section" id="home">
      <div className="container">
        <div className="content">
          <div className="details">
            <div className="short">
              <h3>
                Oussama H.M
                <img className="svg" src="img/svg/hi.svg" alt="" />
              </h3>
              <span className="job">Web Developer</span>
            </div>
            <div className="text">
              <p>
                {`I'm`} Experienced with React, Next.js, Tailwind CSS, and a
                versatile tech stack including TypeScript, Redux, Node.js, and
                PostgreSQL, I excel at building responsive, user-focused web
                applications. My approach combines innovative design thinking
                with efficient coding practices to deliver seamless
                functionality and visually appealing interfaces. Passionate
                about turning complex challenges into intuitive solutions, I am
                committed to delivering exceptional digital experiences tailored
                to meet diverse needs.
              </p>
            </div>
            <div className="buttons">
              <div className="orido_tm_boxed_button">
                <a className="anchor" href="#contact">
                  Say Hello{" "}
                  <img className="svg" src="img/svg/send.svg" alt="" />
                </a>
              </div>
              <div className="orido_tm_simple_button">
                <a className="line_effect anchor" href="#portfolio">
                  My Works{" "}
                  <img className="svg" src="img/svg/top-arrow.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="orido_tm_down">
        <a className="anchor" href="#about">
          <img
            className="svg"
            src={`img/svg/${dark ? "down_button_light" : "down_button"}.svg`}
            alt=""
          />
        </a>
      </div>
      <div className="avatar">
        <div className="img">
          <img src="img/hero/1.png" alt="" />
          <div className="video_button">
            <a className="popup-youtube" href="#">
              <img className="anim_circle" src="img/hero/2.png" alt="" />
              <img className="svg" src="img/svg/play.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
