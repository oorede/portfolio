const Feedback = ({ dark }) => {
  return (
    <div className="orido_tm_section">
      <div className="orido_tm_testimonials">
        <div className="container">
          <div className="orido_tm_main_title">
            <h3>
              <span>
                Valuable feedback
                <br />
                from my client
              </span>
            </h3>
          </div>
          <div className="testimonials_in">
            <img src="img/testimonials/1.png" alt="" />
            <div className="info">
              <div className="text">
                <p>
                  “Working with Oussama was an outstanding experience. He took
                  our vision for an eCommerce platform and turned it into a
                  sleek, responsive, and user-friendly website that went beyond
                  what we imagined. His expertise in React, Next.js, and
                  Tailwind CSS ensured a fast, modern site, and his ability to
                  transform our Figma designs into flawless, functional
                  interfaces was remarkable. He was professional, communicative,
                  and always delivered on time. I highly recommend him for
                  anyone in need of a skilled and creative developer.”
                </p>
              </div>
              <div className="details">
                <h3 className="name">
                  <span>Smail Benkhaled</span>
                </h3>
                <span className="job">Sarl Nouha Benkhaled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Feedback;
