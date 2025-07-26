import { useState } from 'react'
import useFetch from './hooks/useFetch'
import { Outlet, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  const { datas } = useFetch('https://dummyjson.com/products')

  return (
    <>
      <div>
        <div className="products">
          {datas.map((item) => (
            <img key={item.id} onClick={() => navigate(`${item.id}`)} src={item.thumbnail} alt="" />
          ))}
        </div>
        <div className="product-detail">
          <Outlet />
        </div>

      </div>
    </>
  )
}

export default App
