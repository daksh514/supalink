import { LoginLink, LogoutLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import React from 'react'

async function page() {
  const {getUser} = getKindeServerSession()
  const user = await getUser()

  return (
    <div>
      {
        user? (
          <div>
            <h1>Hello {user.given_name}</h1>
            <LogoutLink>Log Out</LogoutLink>
          </div>
        ) : (
          <div>
            <h1>Hello Guest</h1>
            <LoginLink>Log In</LoginLink>
          </div>
        )
      }
    </div>
  )
}

export default page