import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectSliderProps } from "../sliderProps";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
const Projects = () => {
  useEffect(() => {
    dataImage();
  }, []);
  const [detailsPopup, setDetailsPopup] = useState(false);
  const [imagePath, setImagePath] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [client, setClient] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const openPopupWithImage = (
    path,
    title,
    description,
    client,
    category,
    date
  ) => {
    setImagePath(path); // Set the image path dynamically
    setTitle(title);
    setDescription(description);
    setClient(client);
    setCategory(category);
    setDate(date);
    setDetailsPopup(true); // Open the popup
  };

  return (
    <Fragment>
      <DetailsPopup
        close={() => setDetailsPopup(false)}
        open={detailsPopup}
        path={imagePath}
        title={title}
        description={description}
        client={client}
        category={category}
        date={date}
      />
      <div className="orido_tm_section" id="portfolio">
        <div className="orido_tm_portfolio">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  Look at my
                  <br />
                  recent projects
                </span>
              </h3>
            </div>
            <div className="portfolio_list">
              <Swiper
                {...projectSliderProps}
                className="owl-carousel gallery_zoom"
              >
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/1.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Byte-Of-Code</span>
                      <h3 className="title">
                        <span>Portfolio</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link a-pointer"
                      onClick={() =>
                        openPopupWithImage(
                          "1_.png",
                          "Byte Of Code",
                          "My personal blog page built with Next.js and Tailwind Css which " +
                            "takes the content from markdown files and renders it using Next.js. " +
                            "Supports dark mode and easy-to-write blogs using markdown.",
                          "Oussama H.Mokhtar",
                          "Web App",
                          "12-Octobre-2023"
                        )
                      }
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/2.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Web App</span>
                      <h3 className="title">
                        <span>Chatify</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link a-pointer"
                      onClick={() =>
                        openPopupWithImage(
                          "2_.png",
                          "Chatify",
                          "Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages.",
                          "Smail Bounia",
                          "Ai Tool",
                          "12-january-2023"
                        )
                      }
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/3.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Web Editor</span>
                      <h3 className="title">
                        <span>Editorio</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link a-pointer"
                      onClick={() =>
                        openPopupWithImage(
                          "3_.png",
                          "Editor.io",
                          "Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage",
                          "Rachid Amiri",
                          "Editor App",
                          "22-March-2023"
                        )
                      }
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/4.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Ai App</span>
                      <h3 className="title">
                        <span>Emotion Detection with Ai</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link a-pointer"
                      onClick={() =>
                        openPopupWithImage(
                          "4_.png",
                          "Emotion Detection with Ai",
                          "Trained a model classifier using 'FER-2023 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%. Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person.",
                          "Training Ai Project",
                          "Ai Tool",
                          "06-Juin"
                        )
                      }
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="list_inner">
                    <div className="image">
                      <img src="img/thumbs/37-40.jpg" alt="" />
                      <div
                        className="main"
                        data-img-url="img/portfolio/5.jpg"
                      />
                    </div>
                    <div className="details">
                      <span className="category">Web App</span>
                      <h3 className="title">
                        <span>Ai For Social Good</span>
                      </h3>
                    </div>
                    <a
                      className="orido_tm_full_link details_link a-pointer"
                      onClick={() =>
                        openPopupWithImage(
                          "5_.png",
                          "Ai For Social Good",
                          "Using Natural Launguage Processing for the detection of suicide-related posts and user's suicide ideation in cyberspace and thus helping in sucide prevention.",
                          "Training Project",
                          "Ai Tool",
                          "15-April-2024"
                        )
                      }
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <a className="prev_button" href="#">
                <img className="svg" src="img/svg/prev.svg" alt="" />
              </a>
              <a className="next_button" href="#">
                <img className="svg" src="img/svg/next.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
