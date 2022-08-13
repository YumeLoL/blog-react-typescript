/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react'

export interface UserContextType {
  isUserLogged: boolean
  setIsUserLogged: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultValue = {
  isUserLogged: false,
  setIsUserLogged: () => {},
}

export const UserContext = createContext<UserContextType>(defaultValue)

export const UserProvider = ({
  children,
}: {
  children: React.ReactElement
}): React.ReactElement => {
  const [isUserLogged, setIsUserLogged] = useState(
    defaultValue.isUserLogged
  )

  return (
    <UserContext.Provider value={{ isUserLogged, setIsUserLogged }}>
      {children}
    </UserContext.Provider>
  )
}
