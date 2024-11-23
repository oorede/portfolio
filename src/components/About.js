const About = () => {
  return (
    <div className="orido_tm_section" id="about">
      <div className="orido_tm_about">
        <div className="about_in">
          <div className="left">
            <div className="box">
              <h4 className="year">4</h4>
              <span className="experience">Years of Experience</span>
              <h3 className="name">Oussama</h3>
            </div>
          </div>
          <div className="right">
            <span className="element">
              <img className="svg" src="img/svg/element.svg" alt="" />
            </span>
            <div className="orido_tm_main_title">
              <h3>
                <span>About Me</span>
              </h3>
            </div>
            <div className="text">
              <p>
                With 4 years experience as a professional Web developer, I have
                acquired the skills and knowledge necessary to make your project
                a success. I enjoy every step of the design process, from
                discussion and collaboration.
              </p>
            </div>
            <div className="short">
              <div className="orido_tm_boxed_button">
                <a href="doc/cv/resume.pdf" download>
                  Download CV{" "}
                  <img className="svg" src="img/svg/paper.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
