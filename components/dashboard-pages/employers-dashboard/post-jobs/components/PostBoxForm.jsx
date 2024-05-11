
'use client'

import Map from "../../../Map";
import Select from "react-select";

const PostBoxForm = () => {
  const specialisms = [
    { value : "Banking", label : "Banque" },
    { value : "Digital & Creative", label : "Digital & Creative" },
    { value : "Commerce de détail", label : "Commerce de détail" },
    { value : "Ressources humaines", label : "Ressources humaines" },
    { value : "Managemnet", label : "Managemnet" },
    { value : "Accounting & Finance", label : "Accounting & Finance" },
    { value : "Digital", label : "Digital" },
    { value : "Art créatif", label : "Art créatif" },
  ];

  return (
    <form className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Intitulé du poste</label>
          <input type="text" name="titleJob" placeholder="Titre" required />
        </div>

        {/* <!-- About Company --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Description du poste</label>
          <textarea required placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Adresse email</label>
          <input type="email" name="emailAdress" placeholder="" required/>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Username</label>
          <input type="text" name="name" placeholder="" required/>
        </div>

        {/* <!-- Search Select --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Spécialités </label>
          <Select
            defaultValue={[specialisms[2]]}
            isMulti
            name="colors"
            options={specialisms}
            className="basic-multi-select"
            classNamePrefix="select"
            required
          />
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Type d'emploi</label>
          <select className="chosen-single form-select">
            <option>Select</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Human Resources</option>
            <option>Management</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Salaire</label>
          <select className="chosen-single form-select">
            <option>Selectionner</option>
            <option>$1500</option>
            <option>$2000</option>
            <option>$2500</option>
            <option>$3500</option>
            <option>$4500</option>
            <option>$5000</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Career Level</label>
          <select className="chosen-single form-select">
            <option>Selectionner</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Ressources Humaine</option>
            <option>Management</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Expérience</label>
          <select className="chosen-single form-select">
            <option>Selectionner</option>
            <option>Junior</option>
            <option>Intermédiaire</option>
            <option>Expert</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Genre</label>
          <select className="chosen-single form-select">
            <option>Selectionner</option>
            <option>Homme</option>
            <option>Femme</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Domaine de travail</label>
          <select className="chosen-single form-select">
            <option>Selectionner</option>
            <option>Banking</option>
            <option>Digital & Creative</option>
            <option>Retail</option>
            <option>Ressources Humaine</option>
            <option>Management</option>
          </select>
        </div>

        <div className="form-group col-lg-6 col-md-12">
          <label>Qualification</label>
          <select className="chosen-single form-select">
            <option>Selectionner</option>
            <option>Bac</option>
            <option>Licence</option>
            <option>Master</option>
            <option>Doctorat</option>
            <option>Professionnel</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Date limite de dépôt des candidatures</label>
          <input type="text" name="name" placeholder="06.04.2020" />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Pays</label>
          <select className="chosen-single form-select">
            <option>Mali</option>
            <option>Sénégal</option>
            <option>Algérie</option>
            <option>Burkina Faso</option>
            <option>Cote d'Ivoire</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Ville</label>
          <select className="chosen-single form-select">
            <option>Bamako</option>
            <option>Dakar</option>
            <option>Alger</option>
            <option>Ouagadougou</option>
            <option>Abidjan</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Adresse Complète</label>
          <input
            type="text"
            name="adresseComplete"
            placeholder="Veuiller saisir l'adresse complète."
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Trouver sur la carte</label>
          <input
            type="text"
            name="adresseMap"
            placeholder="Veuiller saisir l'adresse complète."
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
          <button className="theme-btn btn-style-three">Rechercher sur la carte</button>
        </div>

        <div className="form-group col-lg-12 col-md-12">
          <div className="map-outer">
            <div style={{ height: "420px", width: "100%" }}>
              <Map />
            </div>
          </div>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-12 col-md-12 text-right">
          <button className="theme-btn btn-style-one">Suivant</button>
        </div>
      </div>
    </form>
  );
};

export default PostBoxForm;
