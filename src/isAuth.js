import axios from "axios"

export const isAuth = async () => {
  const token = localStorage.getItem("token")
  try {
    const response = await axios.get("http://localhost:9000/authenticate", {
      headers: { Authorization: `Bearer ${token}` }
    })
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
console.log(isAuth())
