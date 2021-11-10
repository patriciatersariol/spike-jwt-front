import axios from "axios"

export const isAuth = async () => {
  const token = localStorage.getItem("token")
  if (token) {
    const response = await axios.get("http://localhost:9000/validacao", {
      headers: { Authorization: `Bearer ${token}` }
    })
    console.log(response)
    return true
  }
  return false
}
