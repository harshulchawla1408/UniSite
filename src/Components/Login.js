// // // // import axios from "axios";
// // // // import { useState, useContext } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import { toast } from "react-toastify";
// // // // import { userContext } from "../App";

// // // // function Login() {
// // // //     const [applicationId, setApplicationId] = useState("");
// // // //     const [password, setPassword] = useState("");
// // // //     const navigate = useNavigate();
// // // //     const { setudata } = useContext(userContext);

// // // //     async function onLogin(e) {
// // // //         e.preventDefault();
// // // //         const logindata = { applicationId, password };
// // // //         try {
// // // //             const resp = await axios.post("http://localhost:9000/api/login", logindata);
// // // //             toast.success("Login Successful");
// // // //             // Save user data to sessionStorage and context
// // // //             const userData = {
// // // //                 applicationId: resp.data.user.applicationId,
// // // //                 usertype: resp.data.user.usertype // 'student' or 'admin'
// // // //             };
// // // //             sessionStorage.setItem("userdata", JSON.stringify(userData));
// // // //             setudata(userData);
// // // //             if (userData.usertype === 'student') {
// // // //                 navigate("/home");
// // // //             } else if (userData.usertype === 'admin') {
// // // //                 navigate("/home");
// // // //             }
// // // //         } catch (err) {
// // // //             toast.error("Invalid Credentials");
// // // //         }
// // // //     }

// // // //     return (
// // // //         <div className="login-container">
// // // //             <h2>Student Login</h2>
// // // //             <form onSubmit={onLogin} className="login-form">
// // // //                 <div className="form-section">
// // // //                     <label>Application ID</label>
// // // //                     <input type="text" value={applicationId} onChange={(e) => setApplicationId(e.target.value)} placeholder="Application ID" required />
// // // //                 </div>

// // // //                 <div className="form-section">
// // // //                     <label>Password:</label>
// // // //                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
// // // //                 </div>

// // // //                 <button type="submit" className="login-button">Login</button>

// // // //                 <a href="#" className="forgot-password">Forgot Password?</a>
// // // //             </form>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default Login;
// // // import axios from "axios";
// // // import { useState, useContext } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { toast } from "react-toastify";
// // // import { userContext } from "../App";

// // // function Login() {
// // //     const [applicationId, setApplicationId] = useState("");
// // //     const [password, setPassword] = useState("");
// // //     const navigate = useNavigate();
// // //     const { setudata } = useContext(userContext);

// // //     async function onLogin(e) {
// // //         e.preventDefault();
// // //         const logindata = { applicationId, password };
// // //         try {
// // //             const resp = await axios.post("http://localhost:9000/api/login", logindata);
// // //             toast.success("Login Successful");
// // //             // Save user data to sessionStorage and context
// // //             const userData = {
// // //                 applicationId: resp.data.user.applicationId,
// // //                 usertype: resp.data.user.usertype // 'student' or 'admin'
// // //             };
// // //             sessionStorage.setItem("userdata", JSON.stringify(userData));
// // //             setudata(userData);
// // //             if (userData.usertype === 'student') {
// // //                 navigate("/home");
// // //             } else if (userData.usertype === 'admin') {
// // //                 navigate("/home");
// // //             }
// // //         } catch (err) {
// // //             toast.error("Invalid Credentials");
// // //         }
// // //     }

// // //     // Inline Styles
// // //     const styles = {
// // //         container: {
// // //             display: 'flex',
// // //             justifyContent: 'center',
// // //             alignItems: 'center',
// // //             height: '100vh',
// // //             backgroundColor: '#f7f8fa',
// // //             fontFamily: "'Roboto', sans-serif"
// // //         },
// // //         form: {
// // //             backgroundColor: '#fff',
// // //             padding: '40px',
// // //             borderRadius: '10px',
// // //             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
// // //             width: '100%',
// // //             maxWidth: '400px',
// // //             display: 'flex',
// // //             flexDirection: 'column',
// // //             gap: '20px',
// // //         },
// // //         heading: {
// // //             fontSize: '24px',
// // //             fontWeight: '500',
// // //             color: '#333',
// // //             textAlign: 'center',
// // //             marginBottom: '20px',
// // //         },
// // //         label: {
// // //             fontSize: '14px',
// // //             color: '#555',
// // //             marginBottom: '5px',
// // //         },
// // //         input: {
// // //             padding: '12px',
// // //             borderRadius: '8px',
// // //             border: '1px solid #ddd',
// // //             fontSize: '16px',
// // //             outline: 'none',
// // //             transition: 'border-color 0.3s ease',
// // //         },
// // //         inputFocus: {
// // //             borderColor: '#4CAF50', // Green color on focus
// // //         },
// // //         button: {
// // //             padding: '12px',
// // //             backgroundColor: '#4CAF50',
// // //             color: 'white',
// // //             border: 'none',
// // //             borderRadius: '8px',
// // //             cursor: 'pointer',
// // //             fontSize: '16px',
// // //             transition: 'background-color 0.3s ease',
// // //         },
// // //         buttonHover: {
// // //             backgroundColor: '#45a049', // Darker green when hovered
// // //         },
// // //         forgotPassword: {
// // //             fontSize: '14px',
// // //             color: '#007BFF',
// // //             textAlign: 'center',
// // //             cursor: 'pointer',
// // //             textDecoration: 'none',
// // //         },
// // //         forgotPasswordHover: {
// // //             textDecoration: 'underline',
// // //         }
// // //     };

// // //     return (
// // //         <div style={styles.container}>
// // //             <form onSubmit={onLogin} style={styles.form}>
// // //                 <h2 style={styles.heading}>Student Login</h2>

// // //                 <div>
// // //                     <label style={styles.label}>Application ID</label>
// // //                     <input
// // //                         type="text"
// // //                         value={applicationId}
// // //                         onChange={(e) => setApplicationId(e.target.value)}
// // //                         placeholder="Application ID"
// // //                         required
// // //                         style={styles.input}
// // //                         onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
// // //                         onBlur={(e) => e.target.style.borderColor = '#ddd'}
// // //                     />
// // //                 </div>

// // //                 <div>
// // //                     <label style={styles.label}>Password</label>
// // //                     <input
// // //                         type="password"
// // //                         value={password}
// // //                         onChange={(e) => setPassword(e.target.value)}
// // //                         placeholder="Password"
// // //                         required
// // //                         style={styles.input}
// // //                         onFocus={(e) => e.target.style.borderColor = styles.inputFocus.borderColor}
// // //                         onBlur={(e) => e.target.style.borderColor = '#ddd'}
// // //                     />
// // //                 </div>

// // //                 <button
// // //                     type="submit"
// // //                     style={styles.button}
// // //                     onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
// // //                     onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
// // //                 >
// // //                     Login
// // //                 </button>

// // //                 <a
// // //                     href="#"
// // //                     style={styles.forgotPassword}
// // //                     onMouseEnter={(e) => e.target.style.textDecoration = styles.forgotPasswordHover.textDecoration}
// // //                     onMouseLeave={(e) => e.target.style.textDecoration = 'none'}
// // //                 >
// // //                     Forgot Password?
// // //                 </a>
// // //             </form>
// // //         </div>
// // //     );
// // // }

// // // export default Login;
// // import axios from "axios";
// // import { useState, useContext } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// // import { userContext } from "../App";

// // function Login() {
// //     const [applicationId, setApplicationId] = useState("");
// //     const [password, setPassword] = useState("");
// //     const navigate = useNavigate();
// //     const { setudata } = useContext(userContext);

// //     async function onLogin(e) {
// //         e.preventDefault();
// //         const logindata = { applicationId, password };
// //         try {
// //             const resp = await axios.post("http://localhost:9000/api/login", logindata);
// //             toast.success("Login Successful");
// //             const userData = {
// //                 applicationId: resp.data.user.applicationId,
// //                 usertype: resp.data.user.usertype, // 'student' or 'admin'
// //             };
// //             sessionStorage.setItem("userdata", JSON.stringify(userData));
// //             setudata(userData);
// //             if (userData.usertype === "student") {
// //                 navigate("/home");
// //             } else if (userData.usertype === "admin") {
// //                 navigate("/home");
// //             }
// //         } catch (err) {
// //             toast.error("Invalid Credentials");
// //         }
// //     }

// //     // Inline Styles
// //     const styles = {
// //         container: {
// //             display: "flex",
// //             justifyContent: "center",
// //             alignItems: "center",
// //             height: "100vh",
// //             background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
// //             fontFamily: "'Roboto', sans-serif",
// //         },
// //         form: {
// //             backgroundColor: "#fff",
// //             padding: "40px",
// //             borderRadius: "12px",
// //             boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
// //             width: "100%",
// //             maxWidth: "400px",
// //             display: "flex",
// //             flexDirection: "column",
// //             gap: "20px",
// //         },
// //         heading: {
// //             fontSize: "28px",
// //             fontWeight: "600",
// //             color: "#1d4ed8",
// //             textAlign: "center",
// //             marginBottom: "20px",
// //         },
// //         label: {
// //             fontSize: "14px",
// //             color: "#374151",
// //             marginBottom: "5px",
// //         },
// //         input: {
// //             padding: "12px",
// //             borderRadius: "8px",
// //             border: "1px solid #d1d5db",
// //             fontSize: "16px",
// //             outline: "none",
// //             transition: "border-color 0.3s ease",
// //         },
// //         inputFocus: {
// //             borderColor: "#2563eb", // Blue color on focus
// //         },
// //         button: {
// //             padding: "12px",
// //             backgroundColor: "#2563eb",
// //             color: "white",
// //             border: "none",
// //             borderRadius: "8px",
// //             cursor: "pointer",
// //             fontSize: "16px",
// //             fontWeight: "600",
// //             transition: "background-color 0.3s ease",
// //         },
// //         buttonHover: {
// //             backgroundColor: "#1e40af", // Darker blue when hovered
// //         },
// //         forgotPassword: {
// //             fontSize: "14px",
// //             color: "#2563eb",
// //             textAlign: "center",
// //             cursor: "pointer",
// //             textDecoration: "none",
// //         },
// //         forgotPasswordHover: {
// //             textDecoration: "underline",
// //         },
// //     };

// //     return (
// //         <div style={styles.container}>
// //             <form onSubmit={onLogin} style={styles.form}>
// //                 <h2 style={styles.heading}>Login to Your Account</h2>

// //                 <div>
// //                     <label style={styles.label}>Application ID</label>
// //                     <input
// //                         type="text"
// //                         value={applicationId}
// //                         onChange={(e) => setApplicationId(e.target.value)}
// //                         placeholder="Enter your Application ID"
// //                         required
// //                         style={styles.input}
// //                         onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
// //                         onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
// //                     />
// //                 </div>

// //                 <div>
// //                     <label style={styles.label}>Password</label>
// //                     <input
// //                         type="password"
// //                         value={password}
// //                         onChange={(e) => setPassword(e.target.value)}
// //                         placeholder="Enter your Password"
// //                         required
// //                         style={styles.input}
// //                         onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
// //                         onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
// //                     />
// //                 </div>

// //                 <button
// //                     type="submit"
// //                     style={styles.button}
// //                     onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
// //                     onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
// //                 >
// //                     Login
// //                 </button>

// //                 <a
// //                     href="#"
// //                     style={styles.forgotPassword}
// //                     onMouseEnter={(e) => (e.target.style.textDecoration = styles.forgotPasswordHover.textDecoration)}
// //                     onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
// //                 >
// //                     Forgot Password?
// //                 </a>
// //             </form>
// //         </div>
// //     );
// // }

// // export default Login;
// import axios from "axios";
// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { userContext } from "../App";

// function Login() {
//     const [applicationId, setApplicationId] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     const { setudata } = useContext(userContext);

//     async function onLogin(e) {
//         e.preventDefault();
//         const logindata = { applicationId, password };
//         try {
//             const resp = await axios.post("http://localhost:9000/api/login", logindata);
//             toast.success("Login Successful");
//             const userData = {
//                 applicationId: resp.data.user.applicationId,
//                 usertype: resp.data.user.usertype, // 'student' or 'admin'
//             };
//             sessionStorage.setItem("userdata", JSON.stringify(userData));
//             setudata(userData);
//             if (userData.usertype === "student") {
//                 navigate("/home");
//             } else if (userData.usertype === "admin") {
//                 navigate("/home");
//             }
//         } catch (err) {
//             toast.error("Invalid Credentials");
//         }
//     }

//     // Inline Styles
//     const styles = {
//         container: {
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//             background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
//             fontFamily: "'Roboto', sans-serif",
//         },
//         form: {
//             backgroundColor: "#fff",
//             padding: "40px",
//             borderRadius: "12px",
//             boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
//             width: "100%",
//             maxWidth: "400px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "20px",
//         },
//         heading: {
//             fontSize: "28px",
//             fontWeight: "600",
//             color: "#1d4ed8",
//             textAlign: "center",
//             marginBottom: "20px",
//         },
//         label: {
//             fontSize: "14px",
//             color: "#374151",
//             marginBottom: "5px",
//         },
//         input: {
//             padding: "12px",
//             borderRadius: "8px",
//             border: "1px solid #d1d5db",
//             fontSize: "16px",
//             outline: "none",
//             transition: "border-color 0.3s ease",
//         },
//         inputFocus: {
//             borderColor: "#2563eb", // Blue color on focus
//         },
//         button: {
//             padding: "12px",
//             backgroundColor: "#2563eb",
//             color: "white",
//             border: "none",
//             borderRadius: "8px",
//             cursor: "pointer",
//             fontSize: "16px",
//             fontWeight: "600",
//             transition: "background-color 0.3s ease",
//             marginTop: "20px", // Added consistent spacing
//         },
//         buttonHover: {
//             backgroundColor: "#1e40af", // Darker blue when hovered
//         },
//         forgotPassword: {
//             fontSize: "14px",
//             color: "#2563eb",
//             textAlign: "center",
//             cursor: "pointer",
//             textDecoration: "none",
//         },
//         forgotPasswordHover: {
//             textDecoration: "underline",
//         },
//     };

//     return (
//         <div style={styles.container}>
//             <form onSubmit={onLogin} style={styles.form}>
//                 <h2 style={styles.heading}>Login to Your Account</h2>

//                 <div>
//                     <label style={styles.label}>Application ID</label>
//                     <input
//                         type="text"
//                         value={applicationId}
//                         onChange={(e) => setApplicationId(e.target.value)}
//                         placeholder="Enter your Application ID"
//                         required
//                         style={styles.input}
//                         onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
//                         onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
//                     />
//                 </div>

//                 <div>
//                     <label style={styles.label}>Password</label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Enter your Password"
//                         required
//                         style={styles.input}
//                         onFocus={(e) => (e.target.style.borderColor = styles.inputFocus.borderColor)}
//                         onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     style={styles.button}
//                     onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
//                     onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
//                 >
//                     Login
//                 </button>

//                 <a
//                     href="#"
//                     style={styles.forgotPassword}
//                     onMouseEnter={(e) => (e.target.style.textDecoration = styles.forgotPasswordHover.textDecoration)}
//                     onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
//                 >
//                     Forgot Password?
//                 </a>
//             </form>
//         </div>
//     );
// }

// export default Login;
import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userContext } from "../App";
import { FaUser, FaLock } from "react-icons/fa"; // Install react-icons if not already

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
            const userData = {
                applicationId: resp.data.user.applicationId,
                usertype: resp.data.user.usertype,
            };
            sessionStorage.setItem("userdata", JSON.stringify(userData));
            setudata(userData);
            navigate("/home");
        } catch (err) {
            toast.error("Invalid Credentials");
        }
    }

    // Styles
    const styles = {
        page: {
            minHeight: "80vh",
            background: "white"
,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        header: {
            width: "100%",
            padding: "24px 0",
            background: "linear-gradient(90deg, #003366 0%, #0055aa 100%)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "2rem",
            letterSpacing: "1px",
            textAlign: "center",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        },
        card: {
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            padding: "40px 32px",
            maxWidth: "370px",
            width: "100%",
            margin: "40px 0",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
        },
        heading: {
            color: "#003366",
            fontWeight: 700,
            fontSize: "1.7rem",
            textAlign: "center",
            marginBottom: "8px",
        },
        inputGroup: {
            display: "flex",
            alignItems: "center",
            background: "#f3f6fa",
            borderRadius: "10px",
            padding: "0 12px",
            border: "1.5px solid #e3e8ef",
            marginBottom: "10px",
        },
        inputIcon: {
            color: "#0055aa",
            fontSize: "1.1rem",
            marginRight: "8px",
        },
        input: {
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            padding: "14px 0",
            fontSize: "1rem",
            color: "#003366",
        },
        button: {
            background: "linear-gradient(90deg, #0055aa 0%, #003366 100%)",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "14px 0",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "1px",
            cursor: "pointer",
            transition: "box-shadow 0.2s, transform 0.2s",
            boxShadow: "0 2px 8px rgba(0,85,170,0.08)",
        },
        buttonHover: {
            boxShadow: "0 4px 16px rgba(0,85,170,0.18)",
            transform: "translateY(-2px)",
        },
        forgot: {
            color: "#0055aa",
            fontSize: "0.95rem",
            textAlign: "center",
            textDecoration: "none",
            marginTop: "10px",
            cursor: "pointer",
            transition: "text-decoration 0.2s",
        },
        footer: {
            width: "100%",
            padding: "18px 0",
            background: "linear-gradient(90deg, #003366 0%, #0055aa 100%)",
            color: "#fff",
            textAlign: "center",
            fontSize: "1rem",
            letterSpacing: "0.5px",
            marginTop: "auto",
        },
    };

    // Button hover state
    const [btnHover, setBtnHover] = useState(false);

    return (
        <div style={styles.page}>
            {/* <div style={styles.header}>MyApp Portal</div> */}
            <form onSubmit={onLogin} style={styles.card} autoComplete="off">
                <div style={styles.heading}>Login to Your Account</div>
                <div style={styles.inputGroup}>
                    <FaUser style={styles.inputIcon} />
                    <input
                        type="text"
                        value={applicationId}
                        onChange={(e) => setApplicationId(e.target.value)}
                        placeholder="Application ID"
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.inputGroup}>
                    <FaLock style={styles.inputIcon} />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        style={styles.input}
                    />
                </div>
                <button
                    type="submit"
                    style={btnHover ? { ...styles.button, ...styles.buttonHover } : styles.button}
                    onMouseEnter={() => setBtnHover(true)}
                    onMouseLeave={() => setBtnHover(false)}
                >
                    Login
                </button>
                <a
                    href="#"
                    style={styles.forgot}
                    onMouseEnter={e => (e.target.style.textDecoration = "underline")}
                    onMouseLeave={e => (e.target.style.textDecoration = "none")}
                >
                    Forgot Password?
                </a>
            </form>
            {/* <div style={styles.footer}>
                &copy; {new Date().getFullYear()} MyApp Portal. All rights reserved.
            </div> */}
        </div>
    );
}

export default Login;
