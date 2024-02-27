/* eslint-disable react/prop-types */
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
const Image = (props) => {
  return (
    <>
      {props.data.map((datas) => {
        return (
          <div id="block" key={datas.id}>
            <div id="main-container">
              <div className="image-container">
                <img className="img" src={datas.image} alt="" />
                <p className="designation">{datas.designation}</p>
              </div>
              <br />
              <div className="text-container">
                <p className="name">{datas.eName}</p> <br />
                <p className="desc">{datas.description}</p>
              </div>
              <div>
                  <nav>
                    <ul className="social-handles">
                      <li className="facebook">
                        <a href="">
                          <FaFacebookF />
                        </a>
                      </li>

                      <li className="linkedIn">
                        <a href="">
                          <FaLinkedinIn />
                        </a>
                      </li>
                      <li className="instagram">
                        <a href="">
                          <FiInstagram />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Image;
