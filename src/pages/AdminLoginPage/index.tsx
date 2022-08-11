import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AES } from 'crypto-js'
import Button from '../../ui/atoms/Button'
import { Input } from '../../ui/atoms/Input'
import { LoginPost } from '../../libs/http/auth/auth'
import {save} from 'react-cookies'
import './index.scss'

const AdminLoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  const onChangeUsername = (value: string): void => {
    setEmail(value)
  }

  const onChangePassword = (value: string): void => {
    setPassword(value)
  }

  // to handle login
  // email: manager@admin.com  password: 111111
  const onLogin = async () => {
    
    const {data} = await LoginPost({ email: email,
      password: AES.encrypt(password, 'cms').toString(),
      role: 'manager',})

    if(data.data.token) {
      // to save token into cookies and navigate to About Page
      save('token', data.data.token, {path: '/'})
      navigate('/about')
    }
    
    console.log(data.data.token)
     
  }

  return (
    <div className="login">
      <div className="login__items">
        <div className="login__items__title">Blog Content Management</div>
        <Input
          value={email}
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
