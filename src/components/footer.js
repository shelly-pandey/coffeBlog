import "font-awesome/css/font-awesome.min.css";
import "mdbreact/dist/css/mdb.css";
import logo from "../assets/logo.png";
import { Navbar } from "react-bootstrap";
import images1 from "../assets/images/sponsors/images1.png";
import images2 from "../assets/images/sponsors/images2.png";
import images3 from "../assets/images/sponsors/images3.png";
import images4 from "../assets/images/sponsors/images4.png";
import images5 from "../assets/images/sponsors/images5.png";
import images6 from "../assets/images/sponsors/images6.png";
import images7 from "../assets/images/sponsors/images7.png";
import images8 from "../assets/images/sponsors/images8.png";
import images9 from "../assets/images/sponsors/images9.png";
import images10 from "../assets/images/sponsors/images10.png";
import images11 from "../assets/images/sponsors/images11.png";
import images12 from "../assets/images/sponsors/images12.png";
import images13 from "../assets/images/sponsors/images13.png";
import images14 from "../assets/images/sponsors/images14.png";
import images15 from "../assets/images/sponsors/images15.png";
import images16 from "../assets/images/sponsors/images16.png";
import images17 from "../assets/images/sponsors/images17.png";
import images18 from "../assets/images/sponsors/images18.png";
import images19 from "../assets/images/sponsors/images19.png";
import images20 from "../assets/images/sponsors/images20.png";

import Info from "./info";

export default function Footer() {
  const mdbreact = require("mdbreact");
  const { Footer, Container } = mdbreact;

  return (
    <>
      <Info/>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              <img src={images1} alt=""></img>
              <img src={images2} alt=""></img>
              <img src={images3} alt=""></img>
              <img src={images4} alt=""></img>
              <img src={images5} alt=""></img>
              <img src={images6} alt=""></img>
              <img src={images7} alt=""></img>
              <img src={images8} alt=""></img>
              <img src={images9} alt=""></img>
              <img src={images10} alt=""></img>
              <img src={images11} alt=""></img>
              <img src={images12} alt=""></img>
              <img src={images13} alt=""></img>
              <img src={images14} alt=""></img>
              <img src={images15} alt=""></img>
              <img src={images16} alt=""></img>
              <img src={images17} alt=""></img>
              <img src={images18} alt=""></img>
              <img src={images19} alt=""></img>
              <img src={images20} alt=""></img>
              
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Footer
        color="stylish-color-dark"
        className="page-footer font-small pt-5 mt-5"
      >
        <div className="text-center">
          <ul className="list-unstyled list-inline">
            <img src={logo} width="40%" alt=""></img>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm btn-fb mx-1" href="#action1">
                <i className="fa fa-facebook"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm btn-tw mx-1" href="#action1">
                <i className="fa fa-twitter"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm btn-gplus mx-1" href="#action1">
                <i className="fa fa-google-plus"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm btn-li mx-1" href="#action1">
                <i className="fa fa-linkedin"> </i>
              </a>
            </li>
            <li className="list-inline-item">
              <a
                className="btn-floating btn-sm btn-dribbble mx-1"
                href="#action1"
              >
                <i className="fa fa-dribbble"> </i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright text-center">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.MDBootstrap.com"> Shelly Pandey </a>
          </Container>
        </div>
      </Footer>
    </>
  );
}
