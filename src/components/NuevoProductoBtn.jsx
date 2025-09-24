import React from 'react'

const NuevoProductoBtn = ({ onClick }) => {
  return (
    <div onClick={onClick} className='bg-blue-600 px-4 py-3 self-end leading-none rounded-lg text-white font-medium w-fit hover:bg-blue-700 cursor-pointer transition-colors text-center'>
        + Nuevo Producto
    </div>
  )
}

export default NuevoProductoBtn