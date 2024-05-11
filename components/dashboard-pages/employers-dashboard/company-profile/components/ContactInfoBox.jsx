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
                        <option>Sénégal</option>
                        <option>Tunisie</option>
                        <option>Algérie</option>
                        <option>Burkina Faso</option>
                    </select>
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Ville</label>
                    <select className="chosen-single form-select" required>
                        <option>Bamako</option>
                        <option>Dakar</option>
                        <option>Tunis</option>
                        <option>Alger</option>
                        <option>Ouagadougou</option>
                    </select>
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-12 col-md-12">
                    <label>Adresse complete</label>
                    <input
                        type="text"
                        name="adresseComplet"
                        placeholder="Veuiller saisir l'adresse complète."
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Trouver sur la carte</label>
                    <input
                        type="text"
                        name="adresseMap"
                        placeholder="Veuiller saisir l'adresse complète"
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-3 col-md-12">
                    <label>Latitude</label>
                    <input
                        type="text"
                        name="latitude"
                        placeholder="latitude"
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-3 col-md-12">
                    <label>Longitude</label>
                    <input
                        type="text"
                        name="longitude"
                        placeholder="Longitude"
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-12 col-md-12">
                    <button className="theme-btn btn-style-three">
                        Trouver l'emplacement
                    </button>
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
