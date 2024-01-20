'use client'

const page = ({params}) => {

    console.log(params)
  return (
    <div>page {params.dynamicid}</div>
  )
}

export default page