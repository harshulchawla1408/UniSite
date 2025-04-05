import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Dashboard() {
    const [user, setUser] = useState({});
    const [jobs, setJobs] = useState([]);
    const navigate = useNavigate();

    // Fetch user details
    useEffect(() => {
        async function fetchUser() {
            try {
                const token = localStorage.getItem("token"); // Get token from local storage
                const resp = await axios.get("http://localhost:9000/api/user", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(resp.data);
            } catch (err) {
                toast.error("Session Expired! Please login again.");
                navigate("/login");
            }
        }
        fetchUser();
    }, []);

    // // Fetch eligible jobs
    // useEffect(() => {
    //     async function fetchJobs() {
    //         try {
    //             const resp = await axios.get("http://localhost:9000/api/jobs");
    //             setJobs(resp.data);
    //         } catch (err) {
    //             toast.error("Error fetching jobs");
    //         }
    //     }
    //     fetchJobs();
    // }, []);

    return (
        <div className="dashboard-container">
            <h2>Welcome, {user.firstname}!</h2>

            <div className="dashboard-section">
                <h3>📚 Your Details</h3>
                <p><strong>Roll No:</strong> {user.rollno}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Batch:</strong> {user.batch}</p>
                <p><strong>CGPA:</strong> {user.cgpa}</p>
            </div>

            {/* <div className="dashboard-section">
                <h3>🏢 Eligible Companies</h3>
                {jobs.length > 0 ? (
                    <ul>
                        {jobs.map((job) => (
                            <li key={job.id}>
                                <strong>{job.company}</strong> - {job.role}
                                <button onClick={() => applyForJob(job.id)}>Apply</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No eligible jobs yet.</p>
                )}
            </div> */}

            <div className="dashboard-section">
                <h3>📄 Resume Upload</h3>
                <input type="file" accept=".pdf" />
                <button>Upload</button>
            </div>
        </div>
    );
}

export default Dashboard;
