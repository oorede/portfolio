const Contact = () => {
  const email = "hadjmokhtar.oussama@protonmail.com";
  return (
    <div className="orido_tm_section" id="contact">
      <div className="orido_tm_contact">
        <div className="container">
          <div className="infobox">
            <div className="video_button">
              <a className="popup-youtube" href="#">
                <img className="anim_circle" src="img/contact/2.png" alt="" />
              </a>
            </div>
            <div className="text">
              <h3>{`Let's`} work together</h3>
              <p>
                I’m here to turn your ideas into dynamic, user-friendly web
                applications. Whether {`it's`} translating Figma designs to
                Tailwind CSS or building full-stack solutions, let’s work
                together to bring your vision to life!
              </p>
            </div>
            <div className="orido_tm_boxed_button">
              <a href={`mailto:${email}`}>
                Email Us{" "}
                <img className="svg" src="img/svg/send.svg" alt="Send Icon" />
              </a>
            </div>
          </div>
          <div className="connect">
            <div className="left">
              <ul>
                <li>
                  <span className="name">Call:</span>
                  <p>
                    <a className="line_effect" href="#">
                      +(213) 557 671 890
                    </a>
                  </p>
                </li>
                <li>
                  <span className="name">Email:</span>
                  <p>
                    <a className="line_effect" href="#">
                      hadjmokhtar.oussama@protonmail.com
                    </a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="right">
              <div className="orido_tm_follow">
                <span>Follow me:</span>
                <ul>
                  <li>
                    <a href="#">
                      <img className="svg" src="img/svg/social/be.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="img/svg/social/dribbble.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        className="svg"
                        src="img/svg/social/instagarm.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="element">
          <img className="svg" src="img/svg/elements.svg" alt="" />
        </span>
        <span className="element2">
          <img className="svg" src="img/svg/element-2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Contact;
