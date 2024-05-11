const CallToActions = () => {
  return (
    <div className="call-to-action-four ">
      <h5>Recrutez-vous ??</h5>
      <p>
        Publiez vos offres d'emploi auprès de millions d'utilisateurs mensuels et recherchez 15,8 millions
        de CV dans notre base de données.
      </p>
      <a href="/employers-dashboard/post-jobs" className="theme-btn btn-style-one bg-blue">
        <span className="btn-title">Commencez à recruter dès maintenant</span>
      </a>
      <div
        className="image"
        style={{ backgroundImage: "url(/images/resource/ads-bg-4.png)" }}
      ></div>
    </div>
  );
};

export default CallToActions;
