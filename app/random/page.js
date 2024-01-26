import React from 'react'

const page = () => {

    console.log(process.env.MONGO_URI)
    console.log(process.env.JWT_SECRET)
    console.log(process.env.NODE_ENV)

  return (
    <div>
        {
            process.env.MONGO_URI? (
                <h1>DB Successful</h1>
            ): (
                <h1>DB Failed</h1>
            )
        }
    </div>
  )
}

export default page