import "../LandingPage/landing-page.css";
import LPImg from "./landing-page-img.png";

export default function LandingPage() {
  return (
    <>
      <div className="lp-main" id="home">
        <div className="lp-text">
          <h1 className="lp-headline">Your Healthcare Partners</h1>
          <p className="lp-desc">
            The belief that customer satisfaction is as important as our
            products and services, have helped us garner a vast base of
            customers, which continues to grow by the day.
          </p>
        </div>
        <div className="lp-img">
          <img src={LPImg} alt="image" className="lp-dis-img" />
        </div>
      </div>
      <div className="lp-lines">
        <hr className="hori-line-top" />
        <hr className="hori-line-btm" />
      </div>

      <div className="Location" id="lp-location">
        <h1>Location</h1>
        <p className="lp-address">
          Shop No A, Himalaya Hall, Ground Floor, Lic Office Building, Mira
          Bhayander Road, Mira Road East, Thane - 401107 (Opposite Golden Nest)
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8956.494640993498!2d72.85727348058558!3d19.29357760878569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b119e9d93ac7%3A0x39464947c91cf601!2sPerficare%20Pathology%20Lab%20-%20Health%20Services%20-%20Blood%20Tests%20Services%20on%20Sunday!5e0!3m2!1sen!2sin!4v1721479764800!5m2!1sen!2sin"
          className="lp-map"
        ></iframe>
      </div>


      <div className="lp-lines">
        <hr className="hori-line-top" />
        <hr className="hori-line-btm" />
      </div>

      <div className="lp-faqs" id="faqs">
        <h1>Frequently Asked Questions</h1>
        <div className="lp-q">
        <h3>1. Do I need to book an appointment in advance?</h3>
        <p>
          Many tests require the patient to fast for a certain number of hours
          the night before. And some may require you to drink plenty of water
          and similar other preparations. Hence, it is a good idea to call ahead
          and let them know when you&apos;ll be coming in to avoid disappointments.
        </p>
        </div> 

        <div className="lp-q">
        <h3>
          2. What are the operational hours of Perficare Diagnostics Health
          Services?
        </h3>
        <p>
          You can come here for examinations or report collection anytime during
          Monday:- 7:30 am - 7:00 pm, Tuesday:- 7:30 am - 7:00 pm, Wednesday:-
          7:30 am - 7:00 pm, thu:- 7:30 am - 7:00 pm, Friday:- 7:30 am - 7:00
          pm, Saturday:- 7:30 am - 7:00 pm, Sunday:- Closed.
        </p>
        </div>

        <div className="lp-q">
        <h3>3. Where is Perficare Diagnostics Health Services located?</h3>
        <p>
          Perficare Diagnostics Health Services is located Opposite Golden Nest,
          so if you know this landmark, you should find it easily. The full address is
          Shop No A, Himalaya Hall, Ground Floor, Lic Office Building, Mira
          Bhayander Road, Mira Road East, Thane - 401107 (Opposite Golden Nest)
        </p>
        </div>
        

        <div className="lp-q">
        <h3>4. Do they come home for blood sample collection?</h3>
        <p>
          Most pathology labs these days send their representatives home for
          blood collection. This is beneficial for elderly people or severally
          ill people who cannot visit the lab. Please check with Perficare
          Diagnostics Health Services if they provide this facility.
        </p>
        </div>

      </div>

      <div className="lp-lines">
        <hr className="hori-line-top" />
        <hr className="hori-line-btm" />
      </div>

      <div className="about-us" id="lp-about-us"> 
        <h1>About Us</h1>
        <p>
          Perficare Diagnostics Health Services in Thane, Mumbai is one of the
          leading businesses in the Pathology Labs.
          <br /> <br />
          Welcome to our Pathology Centre, a trusted name in comprehensive
          diagnostic services. Renowned for our state-of-the-art pathology labs,
          we offer a wide range of tests, including blood testing and semen
          analysis. Our services extend beyond the lab with convenient blood
          test home visits, ensuring accessibility for all. <br /> <br />
          As a premier health check-up centre, we prioritize your well-being
          through thorough and accurate diagnostics. Our laboratory testing
          services are designed to meet the highest standards, providing
          reliable results for better health management. Additionally, we offer
          specialized pathology services at home for those who need them. As a
          dedicated diabetic centre, we focus on the specific needs of diabetic
          patients, ensuring timely and precise monitoring. At our Pathology
          Centre, your health is our priority, and we strive to deliver
          excellence in every test and service we provide.
        </p>
      </div>

      <div className="lp-lines">
        <hr className="hori-line-top" />
        <hr className="hori-line-btm" />
      </div>

      <div className="contact-us" id="lp-contact-us">
        <h1>Contact Us</h1>
        <p>
          <b>Phone No :</b> 08197329600<br/>
          <b>Email ID :</b> perficarehealthllp@gmail.com
        </p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScr4yPrlfNR5QjK_wgboawK6Yn08cdrylq93BtGCgbsjWltjQ/viewform"
          className="lp-cus"
        ></iframe>
      </div>
    </>
  );
}
