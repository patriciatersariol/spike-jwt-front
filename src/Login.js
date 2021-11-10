import { useState } from "react"
import axios from "axios"
import "./App.css"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value)
  }

  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  }

  const validandoOtoken = async (token) => {
    try {
      const response = await axios.get("http://localhost:9000/validacao", {
        headers: { Authorization: `Bearer ${token}` }
      })
      console.log(response)
      if (response.status(401)) throw new Error("Token inválido")
    } catch (error) {
      console.log(error)
    }
  }

  // const getProtectedPage = async (token) => {
  //   const response = await axios.get("http://localhost:9000/page", {
  //     headers: { Authorization: `Bearer ${token}` }
  //   })
  //   console.log(response)
  // }

  const handlerClick = async (event) => {
    event.preventDefault()
    const user = { email, password }
    const response = await axios.post("http://localhost:9000/login", user)
    console.log(response.data)
    const token = response.data.accessToken
    window.localStorage.setItem("token", token)

    validandoOtoken(token)
    navigate("/auth")
    // getProtectedPage(token)

    // const autorized = isAuth()

    // if (autorized) {
    //   alert("autorizado")
    // }
  }

  return (
    <>
      <div className="login-form">
        <div>
          <label>
            <input
              onChange={handleChangeEmail}
              value={email}
              type="email"
              placeholder="Email@email.com"
            ></input>
          </label>
          <label>
            <input
              onChange={handleChangePassword}
              value={password}
              type="password"
              placeholder="Senha"
            ></input>
          </label>
        </div>
        <button onClick={handlerClick}>Iniciar sessão</button>
      </div>
    </>
  )
}
