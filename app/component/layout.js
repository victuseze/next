import React from 'react'
import Link from 'next/link'

const layout = ({children}) => {
  return (
    <div>
        <navbar>
            <h2>Hello</h2>
            <nav>
                <Link href='/component/user'>user</Link>
            </nav>
            <nav>
                <Link href='/component/admin'>admin</Link>
            </nav>
        </navbar>
        {children}
    </div>
  )
}

export default layout