import React from 'react'
import { useStock } from '../hooks/useStock'

const ListadoProductos = () => {

    const { productosConStock, productosSinStock } = useStock()
    const todosLosProductos = [...productosConStock, ...productosSinStock]

    return (
        <div className='bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-4'>
            <h2 className='text-md text-zinc-600 font-semibold mb-2'>
                Listado de productos
            </h2>
            <table className='min-w-full'>
                <thead>
                    <tr>
                        <th className='text-left'>Nombre</th>
                        <th className='text-right'>Costo</th>
                        <th className='text-right'>Precio</th>
                        <th className='text-right'>Stock</th>
                    </tr>
                </thead>
                <tbody >
                    {todosLosProductos.map(producto => (
                        <tr className={`border-b border-b-gray-200 leading-8 ${producto.stock === 0 ? 'bg-red-100' : '' }`} key={producto.id}>
                            <td className='text-left'>{producto.nombre}</td>
                            <td className='text-right'> {producto.costo === null ? 'N/A' : '$ '+ producto.costo}</td>
                            <td className='text-right'>$ {producto.precio}</td>
                            <td className={`text-right ${producto.stock === 0 ? 'text-red-500 font-semibold' : ''} `}>{producto.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ListadoProductos