import { findDataBySlug } from '@/actions/slug-actions'
import React from 'react'

async function page({params}:{params:{domain:string}}) {
  const slug = params.domain
  const sluData = await findDataBySlug(slug)
  if(!sluData) return <h1>Sorry, this page doesn't exist.</h1>
  return (
    <div>
      <div className='widthContainer'>

      <p>{sluData.firstName}</p>
      </div>
      </div>
  )
}

export default page