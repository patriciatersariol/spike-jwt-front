import axios from "axios"

export const ProtectedInfo = () => {
  const getProtectedPage = async (token) => {
    const response = await axios.get("http://localhost:9000/page", {
      headers: { Authorization: `Bearer ${token}` }
    })
    console.log(response)
  }

  return (
    <div>
      <h1>Informações secretas! FILHO INFO</h1>
      {/* {getProtectedPage} */}
    </div>
  )
}
