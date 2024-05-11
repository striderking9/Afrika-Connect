import Header from "./Header";
import Footer from "./Footer";
import Hero4 from "../hero/hero-4";
import JobFilterTab from "../job-featured/JobFilterTab";
import Block2 from "../block/Block2";
import TopCompany from "../top-company/TopCompany";
import JobCategorie1 from "../job-categories/JobCategorie1";
import Blog6 from "../blog/Blog6";
import Partner from "../common/partner/Partner";
import LoginPopup from "../common/form/login/LoginPopup";
import MobileMenu from "../header/MobileMenu";

const index = () => {
  return (
    <>
      <LoginPopup />
      {/* End Login Popup Modal */}

      <Header />
      {/* <!--End Main Header --> */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero4 />
      {/* <!-- End Banner Section--> */}

      <section className="job-section alternate">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Emplois les plus populaires</h2>
            <div className="text">
              Connaissez votre valeur et trouvez l'emploi qui correspond à votre vie
            </div>
          </div>
          {/* End sec-title */}

          <div className="default-tabs tabs-box">
            <JobFilterTab />
          </div>
          {/* End .default-tabs */}
        </div>
      </section>
      {/* <!-- End Job Section --> */}

      <section className="process-section pt-0">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Comment ça marche?</h2>
            <div className="text">Un emploi pour tous, partout</div>
          </div>

          <div className="row" data-aos="fade-up">
            <Block2 />
          </div>
        </div>
      </section>
      {/* <!-- End Process Section --> */}

      <section className="top-companies style-two">
        <div className="auto-container">
          <div className="sec-title">
            <h2>Top Entreprise Enregistrée</h2>
            <div className="text">
              Quelques-unes des entreprises que nous avons aidées à recruter d'excellents candidats
              au fil des ans.
            </div>
          </div>

          <div className="carousel-outer" data-aos="fade-up">
            <div className="companies-carousel">
              <TopCompany />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Top Companies --> */}

      <section className="job-categories">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Catégories d'emplois populaires</h2>
            <div className="text">2020 emplois en direct - 293 ajoutés aujourd'hui.</div>
          </div>

          <div
            className="row "
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
          >
            {/* <!-- Category Block --> */}
            <JobCategorie1 />
          </div>
        </div>
      </section>
      {/* End Job Categorie Section */}

      <section className="news-section style-two">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Articles récents</h2>
            <div className="text">
              Des nouvelles fraîches sur l'emploi sont publiées chaque jour.
            </div>
          </div>
          {/* End ."sec-title */}
          <div className="row" data-aos="fade-up">
            <Blog6 />
          </div>
        </div>
      </section>
      {/* <!-- End News Section --> */}

      <section className="clients-section alternate">
        <div className="sponsors-outer" data-aos="fade">
          {/* <!--Sponsors Carousel--> */}
          <ul className="sponsors-carousel">
            <Partner />
          </ul>
        </div>
      </section>
      {/* <!-- End Clients Section--> */}

      <Footer />
      {/* <!-- End Main Footer --> */}
    </>
  );
};

export default index;
