import "../NavBar/navbar.css";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#lp-about-us">About Us</a>
            </li>
            <li>
              <a href="#lp-location">Location</a>
            </li>
            <li>
              <a href="#lp-contact-us">Contact Us</a>
            </li>
          </ul>
          <a href="#home"><img
            src="../../../perficare-logo-with-text.png"
            className="logo"
          ></img></a>
        </div>
      </nav>
    </>
  );
}
