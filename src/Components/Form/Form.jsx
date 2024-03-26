// import { useContext, useEffect, useState } from "react";
// import axios from "axios";

// import "./form.css";
// import { User} from "../../context/context";

// function Form(props) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setpassword] = useState("");
//   const [passwordRepeat, setPsswordRepeat] = useState("");
//   const [emailError, setEmailError] = useState("");

//   const  usernew = useContext(User);



//   console.log(usernew)

//   useEffect(() => {
//     setName(props.name);
//     setEmail(props.email);
//   }, [props.name, props.email]);

//   async function sumbit(e) {
//     e.preventDefault();
//     let send = false;

//     if (name === "" || password.length < 6 || passwordRepeat !== password) {
//       send = false;
//     } else send = true;

//     try {
//       if (send) {
//         const res = await axios.post(
//           `http://127.0.0.1:8000/api/${props.endpoint}`,
//           {
//             name: name,
//             email: email,
//             password: password,
//             password_confirmation: passwordRepeat,
//           }
//         );

//         const token = res.data.data.token;
//         const dateDetails = res.data.data.user ;
//         usernew.setauth({token , dateDetails })

  
//       }
//     } catch (error) {
//       setEmailError(error.response.status);
//     }
//   }

//   const styleUpdate = {
//     width: "100%",
//     margin: "0",
//     boxShadow :"none"
//   };

//   return (
//     <div className="container-form">
//       <form onSubmit={sumbit} style={props.styleUpdate && styleUpdate }>
//         <div>
//           <label htmlFor="name">Name</label>
//           <input
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             id="name"
//             type="text"
//             placeholder="Name"
//           />
//           {/* {name === "" && accept && (
//             <span className="error">Name required</span>
//           )} */}
//         </div>

//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             value={password}
//             onChange={(e) => setpassword(e.target.value)}
//             id="password"
//             type="password"
//             placeholder="Password"
//             required
//             autoComplete="new-password"
//           />
// {/* 
//           {password.length < 6 && accept && (
//             <span className=" error">
//               A minimum of 6 characters is required
//             </span>
//           )} */}
//         </div>

//         <div>
//           <label htmlFor="PasswordRepeat">Password Repeat</label>
//           <input
//             value={passwordRepeat}
//             onChange={(e) => setPsswordRepeat(e.target.value)}
//             id="PasswordRepeat"
//             type="password"
//             placeholder="Password Repeat"
//             required
//             autoComplete="new-password"
//           />
// {/* 
//           {passwordRepeat !== password && accept && (
//             <span className="error">Password does not match</span>
//           )} */}
//         </div>

//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             id="email"
//             type="email"
//             placeholder="E-mail"
//             required
//             autoComplete="new-Email"
//           />

//           {/* {accept && emailError === 422 && (
//             <span className="error">The email has already been taken</span>
//           )} */}
//         </div>

//         <div>
//           <button className="btn ">{props.button}</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Form;
