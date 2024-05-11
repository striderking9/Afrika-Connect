const Form = () => {
  return (
    <form>
      <div className="row">
        <div className="form-group col-lg-12 col-md-12 col-sm-12">
          <div className="response"></div>
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>Nom complet</label>
          <input
            type="text"
            name="username"
            className="username"
            placeholder="Nom complet*"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
          <label>Adresse Email</label>
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Inserer votre Email*"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <label>Sujet</label>
          <input
            type="text"
            name="subject"
            className="subject"
            placeholder="Subject *"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <label>Mesage</label>
          <textarea
            name="message"
            placeholder="Entrer votre message..."
            required=""
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            id="submit"
            name="submit-form"
          >
            Soumettre
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default Form;
