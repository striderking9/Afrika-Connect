import Link from "next/link";

const CallToAction2 = () => {
  return (
    <section
      className="call-to-action-two"
      style={{ backgroundImage: "url(/images/background/1.jpg)" }}
    >
      <div className="auto-container" data-aos="fade-up">
        <div className="sec-title light text-center">
          <h2>Votre emploi de rêve vous attends</h2>
          <div className="text">
            Plus d'1 million interactions, 50.000 success stories. Construisez le votre.
          </div>
        </div>

        <div className="btn-box">
          <Link href="/job-list-v4" className="theme-btn btn-style-three">
            Recherche d'emploi
          </Link>
          <Link href="/register" className="theme-btn btn-style-two">
            Créer un compte
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction2;
