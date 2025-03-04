import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const navigate = useNavigate();

    async function onLogin(e) {
        e.preventDefault();
        const logindata = { email, pass };
        try {
            const resp = await axios.post("http://localhost:9000/api/login", logindata);
            toast.success("Login Successful");
            console.log(resp.data);
            navigate ("/home");

        } catch (err) {
            toast.error("Invalid Credentials");
        }
    }

    return (
        <div className="login-container">
            <h2>Student Login</h2>
            <form onSubmit={onLogin} className="login-form">
                <div className="form-section">
                    <label>Email:</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required="" />
                </div>

                <div className="form-section">
                    <label>Password:</label>
                    <input type="password" onChange={(e) => setPass(e.target.value)} placeholder="Password" required="" />
                </div>

                <button type="submit" className="login-button">Login</button>

                <a href="#" className="forgot-password">Forgot Password?</a>
            </form>
        </div>
    );
}

export default Login;
