import React, { useState } from 'react'
import Button from '../../ui/atoms/Button'
import { Input } from '../../ui/atoms/Input'
import './index.scss'

const AdminLoginPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const onChangeUsername = (value: string): void => {
    setUsername(value)
  }

  const onChangePassword = (value: string): void => {
    setPassword(value)
  }

  const onLogin =()=>{
    console.log('login')
  }

  return (
    <div className="login">
      <div className="login__items">
        <div className="login__items__title">Blog Content Management</div>
        <Input
          value={username}
          placeholder="username"
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
        <Button text="Login" onClick={onLogin} className={'login__items__btn'} />
      </div>
    </div>
  )
}

export default AdminLoginPage
