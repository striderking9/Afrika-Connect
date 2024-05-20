"use client";

import { useState } from "react";


const EnumTailleEntreprise = {
    SIZE_0_TO_10: "0 to 10 employees",
    SIZE_10_TO_50: "10 to 50 employees",
    SIZE_50_TO_100: "50 to 100 employees",
    SIZE_100_TO_200: "100 to 200 employees",
    SIZE_200_TO_500: "200 to 500 employees"
};

const FormContent3 = () => {
    const [email, setEmail] = useState('');
  const [logoEntreprise, setLogoEntreprise] = useState('');
  const [nomEntreprise, setNomEntreprise] = useState('');
  const [siteWebEntreprise, setSiteWebEntreprise] = useState('');
  const [tailleEntreprise, setTailleEntreprise] = useState('');
  const [apropos, setApropos] = useState('');
  const [latitudeEntreprise, setLatitudeEntreprise] = useState('');
  const [longitudeEntreprise, setLongitudeEntreprise] = useState('');
  const [lienFacebook, setLienFacebook] = useState('');
  const [lienTwitter, setLienTwitter] = useState('');
  const [lienLinkedIn, setLienLinkedIn] = useState('');
  const [pays, setPays] = useState('');
  const [ville, setVille] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
        email,
      logoEntreprise,
      nomEntreprise,
      siteWebEntreprise,
      tailleEntreprise,
      apropos,
      latitudeEntreprise,
      longitudeEntreprise,
      lienFacebook,
      lienTwitter,
      lienLinkedIn,
      pays,
      ville,
    };
    //167.86.125.178

    try {
      const response = await fetch('http://167.86.125.178:8083/afrik-connect/api/v1/users/saveEntreprise',
          {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      // Handle the response data
      if (result.status === 200) {
        console.log('Submission successful:', result);
      } else {
        console.log('Error:', result.message);
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
      <form method="post" onSubmit={handleSubmit}>

          <div className="form-group">
              <label>Adresse Email</label>
              <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          {/* email */}


        <div className="form-group">
          <label>Logo de l'entreprise</label>
          <input
              type="text"
              name="logoEntreprise"
              placeholder="Logo de l'entreprise"
              required
              value={logoEntreprise}
              onChange={(e) => setLogoEntreprise(e.target.value)}
          />
        </div>
        {/* logoEntreprise */}

        <div className="form-group">
          <label>Nom de l'entreprise</label>
          <input
              type="text"
              name="nomEntreprise"
              placeholder="Nom de l'entreprise"
              required
              value={nomEntreprise}
              onChange={(e) => setNomEntreprise(e.target.value)}
          />
        </div>
        {/* nomEntreprise */}

        <div className="form-group">
          <label>Site Web de l'entreprise</label>
          <input
              type="text"
              name="siteWebEntreprise"
              placeholder="Site Web de l'entreprise"
              required
              value={siteWebEntreprise}
              onChange={(e) => setSiteWebEntreprise(e.target.value)}
          />
        </div>
        {/* siteWebEntreprise */}

          <div className="form-group">
              <label>Taille de l'entreprise</label>
              <select
                  name="tailleEntreprise"
                  value={tailleEntreprise}
                  onChange={(e) => setTailleEntreprise(e.target.value)}
                  required
              >
                  {Object.entries(EnumTailleEntreprise).map(([key, value]) => (
                      <option key={key} value={key}>
                          {value}
                      </option>
                  ))}
              </select>
          </div>
          {/* tailleEntreprise */}



        <div className="form-group">
          <label>À propos</label>
          <textarea
              name="apropos"
              placeholder="À propos"
              required
              value={apropos}
              onChange={(e) => setApropos(e.target.value)}
          />
        </div>
        {/* apropos */}

        <div className="form-group">
          <label>Latitude de l'entreprise</label>
          <input
              type="text"
              name="latitudeEntreprise"
              placeholder="Latitude de l'entreprise"
              required
              value={latitudeEntreprise}
              onChange={(e) => setLatitudeEntreprise(e.target.value)}
          />
        </div>
        {/* latitudeEntreprise */}

        <div className="form-group">
          <label>Longitude de l'entreprise</label>
          <input
              type="text"
              name="longitudeEntreprise"
              placeholder="Longitude de l'entreprise"
              required
              value={longitudeEntreprise}
              onChange={(e) => setLongitudeEntreprise(e.target.value)}
          />
        </div>
        {/* longitudeEntreprise */}

        <div className="form-group">
          <label>Lien Facebook</label>
          <input
              type="text"
              name="lienFacebook"
              placeholder="Lien Facebook"
              required
              value={lienFacebook}
              onChange={(e) => setLienFacebook(e.target.value)}
          />
        </div>
        {/* lienFacebook */}

        <div className="form-group">
          <label>Lien Twitter</label>
          <input
              type="text"
              name="lienTwitter"
              placeholder="Lien Twitter"
              required
              value={lienTwitter}
              onChange={(e) => setLienTwitter(e.target.value)}
          />
        </div>
        {/* lienTwitter */}

        <div className="form-group">
          <label>Lien LinkedIn</label>
          <input
              type="text"
              name="lienLinkedIn"
              placeholder="Lien LinkedIn"
              required
              value={lienLinkedIn}
              onChange={(e) => setLienLinkedIn(e.target.value)}
          />
        </div>
        {/* lienLinkedIn */}

        <div className="form-group">
          <label>Pays</label>
          <input
              type="text"
              name="pays"
              placeholder="Pays"
              required
              value={pays}
              onChange={(e) => setPays(e.target.value)}
          />
        </div>
        {/* pays */}

        <div className="form-group">
          <label>Ville</label>
          <input
              type="text"
              name="ville"
              placeholder="Ville"
              required
              value={ville}
              onChange={(e) => setVille(e.target.value)}
          />
        </div>
        {/* ville */}

        {error && <div className="error">{error}</div>}
        {/* error message */}

        <div className="form-group">
          <button className="theme-btn btn-style-one" type="submit">
            Enregistrer
          </button>
        </div>
        {/* submit */}
      </form>
  );
};

export default FormContent3;
