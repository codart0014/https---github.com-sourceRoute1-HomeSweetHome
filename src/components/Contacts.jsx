import ProfileImage from "../assets/images/Image.png";
import MessageIcon from "../assets/images/message.svg";

export default function Contacts(toggleAddContact) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="contact-details-img">
            <img src={ProfileImage} alt="Profile" />
          </div>

          <div className="contact-details">
            <div className="">
              <h5>Jason Fiberensia</h5>
              <p style={{ color: "#979797" }}>kuhlman.jermey@yahoo.com</p>
            </div>
            <button className="contact-details-button">
              <img
                src={MessageIcon}
                alt="Send Message"
                style={{ width: "1.1em", marginRight: "0.5em" }}
              />
              <span>Message</span>
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-details-img">
            <img src={ProfileImage} alt="Profile" />
          </div>

          <div className="contact-details">
            <div className="">
              <h5>Jason Fiberensia</h5>
              <p style={{ color: "#979797" }}>kuhlman.jermey@yahoo.com</p>
            </div>
            <button className="contact-details-button">
              <img
                src={MessageIcon}
                alt="Send Message"
                style={{ width: "1.1em", marginRight: "0.5em" }}
              />
              <span>Message</span>
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-details-img">
            <img src={ProfileImage} alt="Profile" />
          </div>

          <div className="contact-details">
            <div className="">
              <h5>Jason Fiberensia</h5>
              <p style={{ color: "#979797" }}>kuhlman.jermey@yahoo.com</p>
            </div>
            <button className="contact-details-button">
              <img
                src={MessageIcon}
                alt="Send Message"
                style={{ width: "1.1em", marginRight: "0.5em" }}
              />
              <span>Message</span>
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contact-details-img">
            <img src={ProfileImage} alt="Profile" />
          </div>

          <div className="contact-details">
            <div className="">
              <h5>Jason Fiberensia</h5>
              <p style={{ color: "#979797" }}>kuhlman.jermey@yahoo.com</p>
            </div>
            <button className="contact-details-button">
              <img
                src={MessageIcon}
                alt="Send Message"
                style={{ width: "1.1em", marginRight: "0.5em" }}
              />
              <span>Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
