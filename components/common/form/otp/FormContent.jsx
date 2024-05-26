"use client";

import Link from "next/link";
import { useState } from "react";
import LoginWithSocial from "./LoginWithSocial";
import { useRouter } from 'next/navigation'


const FormContent = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const router = useRouter()

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email,
      otp,
    };

    try {
      const response = await fetch('http://167.86.125.178:8083/afrik-connect/api/v1/auth/validate_authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      // Handle the response data
      console.log('Success:', result);

      // Handle the response data
      if (result.status === 200) {
        // Redirect to the OTP page with email and OTP fields
        console.log('OtpConfirm')
        router.push('/')

      } else {
        console.log('Error:', result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form-inner">
      <h3>Entrer votre otp</h3>

      {/* <!--Login Form--> */}
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* name */}

        <div className="form-group">
          <label>Otp</label>
          <input
              type="number"
              name="otp"
              placeholder="Entrer votre otp"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
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
            Confirmer
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
