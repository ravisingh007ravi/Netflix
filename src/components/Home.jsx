import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <Link to ='/SignUp'>
      <button>Sing in</button>
        </Link>
    </div>
  )
}

export default Home
