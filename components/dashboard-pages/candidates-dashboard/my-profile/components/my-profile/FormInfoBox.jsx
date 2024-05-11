
'use client'

import Select from "react-select";

const FormInfoBox = () => {
  const catOptions = [
    { value : "Banque", label : "Banque" },
    { value : "Digital & Creative", label : "Digital & Creative" },
    { value : "Commerce de détail", label : "Commerce de détail" },
    { value : "Ressources humaines", label : "Ressources humaines" },
    { value : "Managemnet", label : "Managemnet" },
    { value : "Accounting & Finance", label : "Accounting & Finance" },
    { value : "Digital", label : "Digital" },
    { value : "Art créatif", label : "Art créatif" },
  ];

  return (
    <form action="#" className="default-form">
      <div className="row">
        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Nom complet</label>
          <input type="text" name="fullname" placeholder="Ecrivez-ici" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Titre</label>
          <input type="text" name="job_title" placeholder="Titre" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Numéro de téléphone</label>
          <input
            type="text"
            name="phone_number"
            placeholder="+ 223 00 00 00 00"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Adresse Email</label>
          <input
            type="text"
            name="email"
            placeholder="azerty@gmail.com"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Site Web</label>
          <input
            type="text"
            name="website"
            placeholder="www.website.com"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Salaire actuel(Fcfa)</label>
          <select className="chosen-single form-select" required>
            <option>0 - 50 000</option>
            <option>50 000 - 100 000</option>
            <option>100 000 - 200 000</option>
            <option>200 000 - 500 000</option>
            <option>500+</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-3 col-md-12">
          <label>Salaire attendu($)</label>
          <select className="chosen-single form-select" required>
            <option>0 - 50 000</option>
            <option>50 000 - 100 000</option>
            <option>100 000 - 200 000</option>
            <option>200 000 - 500 000</option>
            <option>500+</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Experience</label>
          <input type="text" name="name" placeholder="Ecrivez-ici" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Age</label>
          <select className="chosen-single form-select" required>
            <option>23 - 27 Ans</option>
            <option>24 - 28 Ans</option>
            <option>25 - 29 Ans</option>
            <option>26 - 30 Ans</option>
          </select>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Niveau d'étude</label>
          <input type="text" name="name" placeholder="Ecrivez-ici" required />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Langue(s) parlée(s)</label>
          <input
            type="text"
            name="name"
            placeholder="Ecrivez-ici"
            required
          />
        </div>

        {/* <!-- Search Select --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Categories </label>
          <Select
            defaultValue={[catOptions[1]]}
            isMulti
            name="colors"
            options={catOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            required
          />
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <label>Autoriser dans la recherche et la liste des candidats</label>
          <select className="chosen-single form-select" required>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>

        {/* <!-- About Company --> */}
        <div className="form-group col-lg-12 col-md-12">
          <label>Description</label>
          <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
        </div>

        {/* <!-- Input --> */}
        <div className="form-group col-lg-6 col-md-12">
          <button type="submit" className="theme-btn btn-style-one">
            Enregistrer
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormInfoBox;
