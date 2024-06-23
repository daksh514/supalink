// import { Sidebar } from 'lucide-react'
import { getUserByKindeId } from '@/actions/userActions'
import Sidebar from '@/components/Pages/dashboard/SideBar'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { KindeUser } from '@kinde-oss/kinde-auth-nextjs/types'
import React from 'react'

async function layout({children}:{children: React.ReactNode}) {
  const {getUser} = getKindeServerSession()
  const kindeUser = await getUser()  as KindeUser

  const user = await getUserByKindeId(kindeUser.id)
  return (
    <div>
      <div className="flex">
      <Sidebar  user={user}/>
      <div>
        {children}

      </div>
      </div>
    </div>
  )
}

export default layout