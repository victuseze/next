'use client'

import {useRouter} from 'next/navigation'

const page = () => {
    const routing = useRouter()
    // console.log(params)

  return (
    <div>
        <h1>useRouter</h1>
        <button onClick={() => routing.push('newapp')}>Click here</button>
    </div>
  )
}

export default page