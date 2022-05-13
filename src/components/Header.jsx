import "./Bootstrap.css"
import "./Components.css"
import logo from "./../images/logo.png"
import phone from "./../images/phone.png"
import mail from "./../images/mail.png"
import facebook from "./../images/fb.png"
import twitter from "./../images/twitter.png"
import plus from "./../images/g-plus.png"
import linkedin from "./../images/linkedin.png"


export function Header () {
    return (
        <div className="hero_area custom_page-height">
            <section className="header_section">
            <div className="container">
              <nav className="navbar navbar-expand-lg custom_nav-container d-lg-none">
                <a className="navbar-brand" href="#">
                  <div className="logo-box">
                    <img src={logo} alt="logo" />
                    <span>
                      Transportz
                    </span>
                  </div>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav  ">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html"> About </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="service.html"> Service</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="shop.html"> Shop </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="company.html"> Company </a>
                    </li>
                    <li className="nav-item ">
                      <a className="nav-link " href="contact.html">Contact us</a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="header_container ">
                <div className="logo-box">
                  <img src={logo} alt="" />
                  <span>
                    Transportz
                  </span>
                </div>
                <div>
                  <div className="header_top">
                    <div className="header_top-contact">
                      <a href="" className="ml-4">
                        <div>
                          <img src={phone} alt="" />
                        </div>
                        <span>
                          (+71) 258964785
                        </span>
                      </a>
                      <a href="" className="ml-4">
                        <div>
                          <img src={mail} alt="" />
                        </div>
                        <span>
                          transportz@gmail.com
                        </span>
                      </a>
                    </div>
                    <div className="header_top-social">
                      <div>
                        <a href="">
                          <img src={facebook} alt="" />
                        </a>
                      </div>
                      <div>
                        <a href="">
                          <img src={twitter} alt="" />
                        </a>
                      </div>
                      <div>
                        <a href="">
                          <img src={plus} alt="" />
                        </a>
                      </div>
                      <div>
                        <a href="">
                          <img src={linkedin} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="header_btm">
                    <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
                      <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                          <ul className="navbar-nav  ">
                            <li className="nav-item active">
                              <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="about.html"> About </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="service.html"> Service</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="shop.html"> Shop </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="company.html"> Company </a>
                            </li>
                            <li className="nav-item ">
                              <a className="nav-link pr-0" href="contact.html">Contact us</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
                  </section>
        </div>
    )
}