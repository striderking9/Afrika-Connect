import Image from "next/image";
import CopyrightFooter from "../footer/common-footer/CopyrightFooter";
import FooterApps from "../footer/FooterApps";
import FooterContent3 from "../footer/FooterContent3";
import SearchForm2 from "../footer/SearchForm2";

const Footer = () => {
  return (
    <footer
      className="main-footer style-three"
      style={{ backgroundImage: "url(/images/background/3.png)" }}
    >
      <div className="auto-container">
        {/* <!--Widgets Section--> */}
        <div className="widgets-section" data-aos="fade-up">
          <div className="newsletter-form wow fadeInUp">
            <div className="sec-title light text-center">
              <h2>S'abonner à notre newsletter</h2>
              <div className="text">Nous n'envoyons pas de spam, ne vous inquiétez pas.</div>
            </div>
            <SearchForm2 />
          </div>
          {/* End .newsletter-form */}

          <div className="row">
            <div className="big-column col-xl-3 col-lg-3 col-md-12">
              <div className="footer-column about-widget">
                <div className="logo">
                  <a href="#">
                    <Image
                    // Default 154, 50
                      width={100}
                      height={50}
                      src="/images/logo-2.svg"
                      alt="brand"
                    />
                  </a>
                </div>
                <p className="phone-num">
                  <span>Appelez-nous </span>
                  <a href="thebeehost@support.com">123 456 7890</a>
                </p>
                <p className="address">
                  Azerty, 100, ACI 2000, Bamako,
                  <br /> 3051, Mali. <br />
                  <a href="mailto:support@support.com" className="email">
                    support@support.com
                  </a>
                </p>
              </div>
            </div>
            {/* End footer address left widget */}

            <div className="big-column col-xl-9 col-lg-9 col-md-12">
              <div className="row">
                <FooterContent3 />

                <div className="footer-column col-lg-3 col-md-6 col-sm-12">
                  <div className="footer-widget">
                    <h4 className="widget-title">Mobile Apps</h4>
                    <FooterApps />
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End col-xl-8 */}
          </div>
        </div>
      </div>
      {/* End auto-container */}

      <CopyrightFooter />
      {/* <!--Bottom--> */}
    </footer>
  );
};

export default Footer;
