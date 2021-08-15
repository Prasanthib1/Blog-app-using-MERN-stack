import {MdCall} from 'react-icons/md';
import {FiMail} from 'react-icons/fi';
import {MdLocationOn} from 'react-icons/md';
import {FaInstagram} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-wrapper">
      <span className="contact-title">Contact</span>        
      <p><MdCall/>&nbsp;+91 1234567890</p>
      <p><FiMail/>&nbsp;sample@sample.com</p>
      <p><MdLocationOn/>&nbsp;ABC Street, Hyderabad, TS, India 500008</p>
      <div className="contact-icons">
          <FaFacebook className="c-icon"/>
          <FaInstagram className="c-icon"/>
          <FaTwitter className="c-icon"/>
      </div>
      </div>
    </div>
  );
}
