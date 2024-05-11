const FormContent2 = () => {
  return (
    <form method="post" action="add-parcel.html">
      <div className="form-group">
        <label>Nom</label>
        <input type="text" name="lastname" placeholder="Nom de famille" required />
      </div>
      {/* lastname */} 

      <div className="form-group">
        <label>Prénom</label>
        <input type="text" name="firstname" placeholder="Prénom" required />
      </div>
      {/* firstname */}

      <div className="form-group">
        <label>Adresse Email</label>
        <input type="email" name="email" placeholder="Email" required />
      </div>
      {/* email */}

      <div className="form-group">
        <label>Mot de passe</label>
        <input
          id="password-field"
          type="password"
          name="password"
          placeholder="Password"
        />
      </div>
      {/* password */}

      <div className="form-group">
        <label>Confirmer votre mot de passe</label>
        <input
          id="confirm-password-field"
          type="password"
          name="confirmpassword"
          placeholder="Confirmer le mot de passe"
        />
      </div>
      {/* confirm password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
          S'inscrire
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent2;
