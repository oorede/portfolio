import Popup from "./Popup";
const DetailsPopup = ({
  open,
  close,
  path,
  title,
  description,
  client,
  category,
  date,
}) => {
  return (
    <Popup open={open} close={close}>
      <div className="popup_details">
        <div className="top_image">
          <img src="img/thumbs/4-2.jpg" alt="" />
          <div
            className="main"
            data-img-url={`img/portfolio/${path}`}
            style={{ backgroundImage: `url(img/portfolio/${path})` }}
          />
        </div>
        <div className="portfolio_main_title">
          <h3>{title}</h3>
          <span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Details
            </a>
          </span>
          <div />
        </div>
        <div className="main_details">
          <div className="textbox">
            <p>{description}</p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Client</span>
                <span>{client}</span>
              </li>
              <li>
                <span className="first">Category</span>
                <span>
                  <a href="#">{category}</a>
                </span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>{date}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Popup>
  );
};
export default DetailsPopup;
