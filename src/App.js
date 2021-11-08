import { useState } from 'react'
import axios from 'axios'
import './App.css'



export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value)
  }

  const handleChangePassword = ({ target }) => {
    setPassword(target.value)
  }

  const handlerClick = async (event) => {
    event.preventDefault()
    const user = { email, password }
    const response = await axios.post('http://localhost:9000/login', user)
    console.log(response.data)
    const token = response.data.accessToken
    window.localStorage.setItem('token', token)

    const tokenLocalStorage = localStorage.getItem('token')

    if (tokenLocalStorage) {
      axios.get('http://localhost:9000/page', { headers: { 'Authorization': `Bearer ${tokenLocalStorage}` } })
        .then(res => console.log(res))
    }

  }
  return (
    <div className="login-form">
      <div>
        <label>
          <input onChange={handleChangeEmail} value={email} type="email" placeholder="Email@email.com"></input>
        </label>
        <label>
          <input onChange={handleChangePassword} value={password} type="password" placeholder="Senha"></input>
        </label>
      </div>
      <button onClick={handlerClick}>Iniciar sessão</button>
    </div>
  )
}
