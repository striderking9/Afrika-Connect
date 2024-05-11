const Form = () => {
  return (
    <form className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Ancien mot de passe </label>
          <input type="password" name="name" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Nouveau mot de passe</label>
          <input type="password" name="password" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-7 col-md-12">
          <label>Confirmer le mot de passe</label>
          <input type="password" name="confirmpassword" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Mettre à jour
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
