import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:siddharth.h@itjobinbox.com" data-cursor="disable">
                siddharth.h@itjobinbox.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+17162020655" data-cursor="disable">
                +1 716-202-0655
              </a>
            </p>
            <h4>Location</h4>
            <p>
              Buffalo, NY
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/SiddharthHiraou"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/siddharth-hiraou/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Siddharth Hiraou</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
