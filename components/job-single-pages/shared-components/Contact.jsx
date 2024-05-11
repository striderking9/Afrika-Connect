const Contact = () => {
  return (
    <form>
      <div className="row clearfix">
        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <input type="text" name="fullName" placeholder="Nom Complet" required />
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <input
            type="email"
            name="email"
            placeholder="Adresse Email"
            required
          />
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <textarea
            className="darma"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        {/* End .col */}

        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="submit-form"
          >
            Envoyer un message
          </button>
        </div>
        {/* End .col */}
      </div>
    </form>
  );
};

export default Contact;
