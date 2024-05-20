import {useState} from "react";

const FormContent2 = () => {

    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [dateNaissance, setDate] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Le mot de passe et la confirmation du mot de passe ne correspondent pas.');
            return;
        }


        const data = {
            lastname,
            firstname,
            email,
            dateNaissance,
            password
        };


        try {
            const response = await fetch('http://167.86.125.178:8083/afrik-connect/api/v1/users/saveCandidat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            // Handle the response data
            if (result.status === 200) {
                // Handle successful registration
                console.log('Registration successful:', result);
                // Redirect or perform any other action
            } else {
                console.log('Error:', result.message);
                // Optionally, show an error message to the user
                alert(result.message);
            }
        } catch (error) {
            console.error('Error:', error);
            // Optionally, show an error message to the user
            alert('An error occurred. Please try again.');
        }
    };

    return (
        <form method="post" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>Nom</label>
                <input
                    type="text"
                    name="lastname"
                    placeholder="Nom de famille"
                    required
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
            </div>
            {/* lastname */}

            <div className="form-group">
                <label>Prénom</label>
                <input
                    type="text"
                    name="firstname"
                    placeholder="Prénom"
                    required
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
            </div>
            {/* firstname */}

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
                <label>Date de Naissance  </label>
                <input
                    id="date-field"
                    type="date"
                    name="dateNaissance"
                    placeholder="Date"
                    required
                    value={dateNaissance}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            {/* date */}

            <div className="form-group">
                <label>Mot de passe</label>
                <input
                    id="password-field"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            {/* confirm password */}

            {error && <div className="error">{error}</div>}
            {/* error message */}

            <div className="form-group">
                <button className="theme-btn btn-style-one" type="submit">
                    S'inscrire
                </button>
            </div>
            {/* register */}
        </form>
    );
};

export default FormContent2;
