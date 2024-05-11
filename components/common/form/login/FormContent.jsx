import Link from "next/link";
import LoginWithSocial from "./LoginWithSocial";

const FormContent = () => {
  return (
    <div className="form-inner">
      <h3>Se connecter</h3>

      {/* <!--Login Form--> */}
      <form method="post">
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        {/* password */}

        <div className="form-group">
          <div className="field-outer">
            <div className="input-group checkboxes square">
              <input type="checkbox" name="remember-me" id="remember" />
              <label htmlFor="remember" className="remember">
                <span className="custom-checkbox"></span> Se souvenir de moi 
              </label>
            </div>
            <a href="#" className="pwd">
              Mot de passe oublié?
            </a>
          </div>
        </div>
        {/* forgot password */}

        <div className="form-group">
          <button
            className="theme-btn btn-style-one"
            type="submit"
            name="log-in"
          >
            Se connecter
          </button>
        </div>
        {/* login */}
      </form>
      {/* End form */}

      <div className="bottom-box">
        <div className="text">
          Vous ne disposez pas de compte?{" "}
          <Link
            href="/register"
            className="call-modal signup"
            data-bs-toggle="modal"
            data-bs-target="#registerModal"
          >
            S'inscrire
          </Link>
        </div>

        <div className="divider">
          <span>ou</span>
        </div>

        <LoginWithSocial />
      </div>
      {/* End bottom-box LoginWithSocial */}
    </div>
  );
};

export default FormContent;
