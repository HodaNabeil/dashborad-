import Header from "../../../Components/Header/Header";

import "../../../Components/Form/form.css"
import { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const [emailError,setEmailError] =useState("")
  const [accept,setAccept] =useState(false)
    async function sumbit(e) {
      e.preventDefault();
      setAccept(true)
      let send = false;

        if( password.length < 6 ) {
          send = false
        }else send = true

      try{
        if(send) {
          const res = await axios.post("http://127.0.0.1:8000/api/login",{
            email: email,
            password: password,
          })
          console.log(res)
          if(res.status === 200) {
            window.localStorage.setItem("email",email);
            window.location.pathname="/"
          }

        }
      }catch (error) {
          setEmailError(error.response.status)
      }


    
    }
  return (
    <>
      <Header />
      <div className="container-form">
        <form onSubmit={sumbit}>
          
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

            {
              password.length < 6  && accept &&  <span className=" error">A minimum of 6 characters is required</span> 
            }

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
            {
              accept && emailError === 422 && <span className="error">The email has already been taken</span>
            }
          </div>

          <div>
            <button  className="btn"  >Send</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login
