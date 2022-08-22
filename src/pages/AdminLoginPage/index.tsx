import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserId } from '../../contexts/UserContext'
import { Login } from '../../libs/http/httpService'
// import bcrypt from 'bcrypt'
import Button from '../../ui/atoms/Button'
import { Input } from '../../ui/atoms/Input'
import './index.scss'



const AdminLoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const {setUserId} = useContext(UserId)
  const navigate = useNavigate();

  const onChangeUsername = (value: string): void => {
    setUsername(value)
  }

  const onChangePassword = (value: string): void => {
    setPassword(value)
  }

  // to handle login
  // email: admin@admin.com  password: 111111
  const onLogin = async () => {
    
    const res = await Login({ username: username, password:password})
    console.log(res.data)

    // if(data.data.token) {
    //   // to save token into cookies 
    //   // set IsUserLogged to be true
    //   // navigate to About Page
    //   save('token', data.data.token, {path: '/'})
    // }
    setUserId(res.data.user._id)
    navigate('/about')
  }

  return (
    <div className="login">
      <div className="login__items">
        <div className="login__items__title">Blog Content Management</div>
        <Input
          value={username}
          placeholder="email"
          onChange={onChangeUsername}
          className="login__items__input"
        />
        <Input
          value={password}
          placeholder="password"
          type="password"
          onChange={onChangePassword}
          className="login__items__input"
        />
        <Button
          text="Login"
          onClick={onLogin}
          className={'login__items__btn'}
        />
      </div>
    </div>
  )
}

export default AdminLoginPage
