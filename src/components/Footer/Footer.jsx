import "./footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="message-container">
            <div className="message-contents">
              <p className="footer-p">
              Established in the year 2024, Perficare Diagnostics Health Services is a top player in 
              the category of Pathology Labs in the Thane, Mumbai. 
              This well-known establishment acts as a one-stop destination servicing customers both 
              local and from other parts the city.<br/><br/>
              Phone Number: 08197329600 <br/>
              Email ID: perficarehealthllp@gmail.com
              </p>
            </div>
          </div>

          <div className="legal-container">
            <div className="legal-contents">
              <ul>
                <li>
                  <a href="#faqs" rel="noopener noreferrer">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#lp-about-us" rel="noopener noreferrer">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#lp-location" rel="noopener noreferrer">
                    Location
                  </a>
                </li>
                <li>
                  <a href="#lp-contact-us" rel="noopener noreferrer">
                    Contact us
                  </a>
                </li>
              </ul>
              <p>
                Copyright {new Date().getFullYear()+" "}
                <a href="https://github.com/nisargshahh">Nisarg Shah</a>{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;