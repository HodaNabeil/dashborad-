import Form from "../../../Components/Form/Form"


function Createuser() {
  return (
      <>
      <Form endpoint="user/create" navigate="dashbord/users" button="Create"/>
      </>
  )
}

export default Createuser
