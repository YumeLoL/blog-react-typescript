/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useState } from 'react'

export interface UserIdType {
  userId: string
  setUserId: React.Dispatch<React.SetStateAction<string>>
}

const userIdDefault = {
  userId: '',
  setUserId: () => {},
}

export const UserId = createContext<UserIdType>(userIdDefault)

export const UserIdProvider = ({
  children,
}: {
  children: React.ReactElement
}): React.ReactElement => {
  const [userId, setUserId] = useState(
    userIdDefault.userId
  )

  return (
    <UserId.Provider value={{ userId, setUserId }}>
      {children}
    </UserId.Provider>
  )
}

