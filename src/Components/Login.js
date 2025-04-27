import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userContext } from "../App";

function Login() {
    const [applicationId, setApplicationId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setudata } = useContext(userContext);

    async function onLogin(e) {
        e.preventDefault();
        const logindata = { applicationId, password };
        try {
            const resp = await axios.post("http://localhost:9000/api/login", logindata);
            toast.success("Login Successful");
            // Save user data to sessionStorage and context
            const userData = {
                applicationId: resp.data.user.applicationId,
                usertype: resp.data.user.usertype // 'student' or 'admin'
            };
            sessionStorage.setItem("userdata", JSON.stringify(userData));
            setudata(userData);
            if (userData.usertype === 'student') {
                navigate("/home");
            } else if (userData.usertype === 'admin') {
                navigate("/home");
            }
        } catch (err) {
            toast.error("Invalid Credentials");
        }
    }

    return (
        <div className="login-container">
            <h2>Student Login</h2>
            <form onSubmit={onLogin} className="login-form">
                <div className="form-section">
                    <label>Application ID</label>
                    <input type="text" value={applicationId} onChange={(e) => setApplicationId(e.target.value)} placeholder="Application ID" required />
                </div>

                <div className="form-section">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                </div>

                <button type="submit" className="login-button">Login</button>

                <a href="#" className="forgot-password">Forgot Password?</a>
            </form>
        </div>
    );
}

export default Login;
