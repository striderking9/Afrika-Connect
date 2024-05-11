import Map from "../../../Map";

const ContactInfoBox = () => {
  return (
    <form className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Pays</label>
          <select className="chosen-single form-select" required>
            <option>Mali</option>
            <option>Cote d'Ivoire</option>
            <option>Sénégal</option>
            <option>Guinée</option>
            <option>Burkina Faso</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Ville</label>
          <select className="chosen-single form-select" required>
            <option>Bamako</option>
            <option>Abidjan</option>
            <option>Dakar</option>
            <option>Conakry</option>
            <option>Ouagadougou</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Adresse Complete</label>
          <input
            type="text"
            name="adresse_complete"
            placeholder="Veuillez saisir votre adresse complète."
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Trouver mon emplacement exact.</label>
          <input
            type="text"
            name="emplacement"
            placeholder="Veuillez saisir votre adresse complète."
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Latitude</label>
          <input type="text" name="latitude" placeholder="Latitude" />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Longitude</label>
          <input type="text" name="longitude" placeholder="Longitude" />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <button className="theme-btn btn-style-three">Localisation de la recherche</button>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div>
        {/* End MapBox */}

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Enregistrer
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactInfoBox;
