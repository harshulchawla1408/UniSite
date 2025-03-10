import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import './style.css';

function Register() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [cpass, setCpass] = useState();
  const [terms, setTerms] = useState();
  const [msg, setmsg] = useState();
  const [dob, setDob] = useState();
  const [gender, setGender] = useState();
  const [batch, setBatch] = useState();
  const [rollno, setRollno] = useState();
  const [degree, setDegree] = useState();
  
  async function onRegister(e) {
    e.preventDefault();
    if (terms === true) {
      if (pass === cpass) {
        const regdata = { name, phone, email, pass, dob, gender, batch, rollno, degree };
        try {
          const resp = await axios.post(
            "http://localhost:9000/api/register",
            regdata
          );
          setmsg(resp.data.msg);
          toast.success("Registration successfull");
        } catch (err) {
          setmsg(err.message);
          console.log(err);
          toast.error("Registration failed");
        }
      } else {
        toast.warn("Password and Confirm Password does not match");
      }
    } 
    else {
      toast.warn("Please accept terms & conditions");
    }
    }

  return (
    <div className="register-container">
      <h2>Student Registration</h2>
      
      <form className="register-form" onSubmit={onRegister}>
        <div className="registration-section">
          <h3 className="section-title">Personal Details</h3>
          <div className="form-grid">
            <div className="form-section">
              <label>Full Name</label>
              <input type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Full Name" required="" />
            </div><br/>
            <div className="form-section">
              <label>Date of Birth</label>
              <input type="date" name="dob" onChange={(e) => setDob(e.target.value)} placeholder="Date of Birth" required="" />
            </div>
            <div className="form-section">
              <label>Gender</label>
              <select name="gender" onChange={(e) => setGender(e.target.value)} placeholder="Gender" required="">
                <option value="">-- Select Gender --</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
              </select>
            </div>
          </div>
        </div>

        <div className="registration-section">
          <h3 className="section-title">Contact Details</h3>
          <div className="form-grid">
            <div className="form-section">
              <label>Email Address</label>
              <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required="" />
            </div>
            <div className="form-section">
              <label>Mobile Number</label>
              <input type="tel" name="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Mobile No." required="" />
            </div>
            <div className="form-section form-full-width">
              <label>Current Address</label>
              <textarea rows="3" required></textarea>
            </div>
            <div className="form-section">
              <label>City</label>
              <input type="text" required />
            </div>
            <div className="form-section">
              <label>State</label>
              <input type="text" required />
            </div>
          </div>
        </div>

        <div className="registration-section">
          <h3 className="section-title">Academic Details</h3>
          <div className="form-grid">
            <div className="form-section">
              <label>Course</label>
              <select name="degree" onChange={(e) => setDegree(e.target.value)} placeholder="Degree" required="">
                <option value="">-- Select Course --</option>
                <option value="1">B.Tech in Computer Engineering</option>
                <option value="2">B.Tech in Electronics and Computer Engineering</option>
                <option value="3">B.Tech in Electonics and Communication Engineering</option>
                <option value="4">B.Tech Lateral entry in Computer Engineering</option>
                <option value="5">B.Tech 6-year Integrated Programme</option>
              </select>
            </div>
            <div className="form-section">
              <label>Batch year</label>
              <input type="number" name="batch" onChange={(e) => setBatch(e.target.value)} placeholder="Batch year" required="" />
            </div>
            <div className="form-section">
              <label>Roll No.</label>
              <input type="number" name="rollno" onChange={(e) => setRollno(e.target.value)} placeholder="Roll No." required=""/>
            </div>
          </div>
        </div>
        <div className="registration-section">
        <h3 className="section-title">Password and Confirmation</h3>
        <div className="form-grid">
        <div className="form-section">
          <label>Password:</label>
          <input type="password" name="pass" onChange={(e) => setPass(e.target.value)} placeholder="Password" required="" />
        </div>
        <div className="form-section">
          <label>Confirm Password:</label>
          <input type="password" name="cpass" onChange={(e) => setCpass(e.target.value)} placeholder="Confirm Password" required="" />
        </div>
        <div className="" style={{ textAlign: "left" }}>
          <label>Confirmation:</label>
          <div>
          <span style={{ marginLeft: "0px" }}>
          <label className="checkbox">
            <input type="checkbox" name="cbox" onChange={(e) => setTerms(e.target.checked)} />
            Make sure that all the details are correct and true. After Registration, Email and Mobile number can't be edited, so re-check all details and then click on confirmation check box.
            </label>
            </span>
          </div>
        </div>
        </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="register-button" value="Register">Register</button>
          <button type="reset" className="register-button" style={{background: '#6c757d'}}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default Register;