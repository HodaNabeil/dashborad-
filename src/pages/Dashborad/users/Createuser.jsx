import { useContext, useEffect, useState } from "react";
import axios from "axios";


function Createuser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordRepeat, setPsswordRepeat] = useState("");
  const [emailError, setEmailError] = useState("");







  async function sumbit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/api/user/create`,
        {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordRepeat,
        }
      );
       
    } catch (error) {
      setEmailError(error.response.status);
    }
  }

  return (
      <>


      <div className="container-form">
      <form onSubmit={sumbit} >
        <div>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            placeholder="Name"
          />
          {/* {name === "" && accept && (
            <span className="error">Name required</span>
          )} */}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            id="password"
            type="password"
            placeholder="Password"
            required
            autoComplete="new-password"
          />
{/* 
          {password.length < 6 && accept && (
            <span className=" error">
              A minimum of 6 characters is required
            </span>
          )} */}
        </div>

        <div>
          <label htmlFor="PasswordRepeat">Password Repeat</label>
          <input
            value={passwordRepeat}
            onChange={(e) => setPsswordRepeat(e.target.value)}
            id="PasswordRepeat"
            type="password"
            placeholder="Password Repeat"
            required
            autoComplete="new-password"
          />
{/* 
          {passwordRepeat !== password && accept && (
            <span className="error">Password does not match</span>
          )} */}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="E-mail"
            required
            autoComplete="new-Email"
          />

          {/* {accept && emailError === 422 && (
            <span className="error">The email has already been taken</span>
          )} */}
        </div>

        <div>
          <button className="btn ">Create</button>
        </div>
      </form>
    </div>
      </>
  )
}

export default Createuser
