import React from 'react'
import BtnSidebar from '../components/BtnSidebar'

const Sidebar = () => {

  const botones = [{
    texto: "Dashboard", link: "/"
  }, {
    texto: "Ventas", link: "/ventas"
  },
  {
    texto: "Gastos", link: "/gastos"
  }, {
    texto: "Stock", link: "/stock"
  }, {
    texto: "Clientes", link: "/clientes"
  }]

  return (
    <div className=' w-60 h-screen bg-gray-50'>
      <h2 className='text-center text-3xl font-bold border-b border-gray-200 py-4 mb-4'>
        iTech
      </h2>
      <div className='flex flex-col px-3 gap-2 pt-6'>
        {botones.map((btn, index) => (
          <BtnSidebar key={index} texto={btn.texto} link={btn.link} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar