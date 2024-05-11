
'use client'

import Select from "react-select";

const FormInfoBox = () => {
    const catOptions = [
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
                <div className="form-group col-lg-6 col-md-12">
                    <label>Nom de l'entreprise (optionnel)</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Veuiller saisir le nom de l'entreprise"
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Adresse email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Veuiller saisir l'adresse email"
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Telephone</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Format: indicatif + XX XX XX XX"
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Site web</label>
                    <input
                        type="text"
                        name="website"
                        placeholder="Veuiller saisir le site web"
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Date de création</label>
                    <input
                        type="text"
                        name="creationDate"
                        placeholder="Format JJ/MM/AAAA"
                        required
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Taille de l'équipe</label>
                    <select className="chosen-single form-select" required>
                        <option>0 - 10</option>
                        <option>10 - 50</option>
                        <option>50 - 100</option>
                        <option>100 - 500</option>
                        <option>500+</option>
                    </select>
                </div>

                {/* <!-- Search Select --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Secteur concerné </label>
                    <Select
                        defaultValue={[catOptions[2]]}
                        isMulti
                        name="colors"
                        options={catOptions}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <label>Autoriser dans la liste de recherche</label>
                    <select className="chosen-single form-select">
                        <option>Oui</option>
                        <option>Non</option>
                    </select>
                </div>

                {/* <!-- About Company --> */}
                <div className="form-group col-lg-12 col-md-12">
                    <label>A propos de l'entreprise</label>
                    <textarea placeholder="Spent several years working on sheep on Wall Street. Had moderate success investing in Yugo's on Wall Street. Managed a small team buying and selling Pogo sticks for farmers. Spent several years licensing licorice in West Palm Beach, FL. Developed several new methods for working it banjos in the aftermarket. Spent a weekend importing banjos in West Palm Beach, FL.In this position, the Software Engineer collaborates with Evention's Development team to continuously enhance our current software solutions as well as create new solutions to eliminate the back-office operations and management challenges present"></textarea>
                </div>

                {/* <!-- Input --> */}
                <div className="form-group col-lg-6 col-md-12">
                    <button className="theme-btn btn-style-one">Enregister</button>
                </div>
            </div>
        </form>
    );
};

export default FormInfoBox;
