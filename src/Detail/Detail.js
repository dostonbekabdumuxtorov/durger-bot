import React from 'react'
import { useNavigate } from 'react-router-dom'

const Detail = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>Detail</h1>
        <button onClick={()=>navigate('/')}>okay</button>
    </div>
  )
}

export default Detail