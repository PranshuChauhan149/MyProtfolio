import Img from "../../public/image/pranshu.jpeg";
import { GiCalendar, GiClawSlashes, GiPhone } from "react-icons/gi";
import { GiMailbox } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";

const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={Img} alt="" width="80px" />
        </figure>
        <div className="info-content">
          <h1 className="name">Pranshu Chauhan</h1>
          <p className="title">Web Developer</p>
        </div>
        <button className="info_more-btn">
          <span>Show Cont</span>
        </button>
        <GiClawSlashes />
      </div>
      {/* contact info */}
      <div className="sidebar-info_more">
        <hr className="separator2" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a
                href="mailto:pranshuchauhan@gmail.com"
                className="contact-link"
              >
                pranshuchauhan@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>
            <div className="contact-info">
              <p className="contact-title">PHONE</p>
              <a href="tel:1234 56789" className="contact-link">
                +00 1234 56789
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiCalendar />
            </div>
            <div className="contact-info">
              <p className="contact-title">BIRTHDAY</p>
              <time dateTime="1999-04-27" className="contact-link">
                september 4, 2005
              </time>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FaLocationDot />
            </div>
            <div className="contact-info">
              <p className="contact-title">LOCATION</p>
              <address>Uttar pardesh,kanpur</address>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
