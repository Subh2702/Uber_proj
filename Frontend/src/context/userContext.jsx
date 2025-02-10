import React, { createContext } from 'react'
export const UserDataContext=createContext();
const userContext = ({children}) => {
  const [user, setuser] = useState({
    email:'',
    fullName:{
      firstName:'',
      lastName:'',
    }
  })
  return (
    <div>
      <UserDataContext.Provider>
        {children}
      </UserDataContext.Provider>
    </div>
  )
}

export default userContext