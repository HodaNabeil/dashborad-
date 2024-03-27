
import { useEffect, useState } from "react";



function Updateuser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const id = window.location.pathname.split("/").slice(-1)[0];

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/user/showbyid/${id}`)
      .then((res) => res.json())
      .then((date) => {
        setName(date[0].name);
        setEmail(date[0].email);
      });
  }, []);




  return (

      <div className=" page-update-user">
      <h3>Updating data</h3>
          {/* <Form
            button={"Update"}
            name={name}
            email={email}
            endpoint={`user/update/${id}`}
            hasLocalStorge={false}
            navigate="dashbord/users"
            styleUpdate={true}
          ></Form> */}
  
      </div>

  );
}

export default Updateuser;
