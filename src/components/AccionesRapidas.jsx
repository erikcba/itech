import React from 'react'

const AccionesRapidas = () => {
    return (
        <div className='bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-4'>
            <div className='flex flex-col gap-2 mb-4'>
                <h2 className='text-md text-zinc-600 font-semibold mb-2'>
                    Acciones rápidas
                </h2>
            </div>
            <div className='flex flex-col gap-2'>
                <button className='bg-transparent border border-gray-200  text-gray-600 text-sm font-semibold px-4 py-2 rounded-md hover:cursor-pointer hover:bg-gray-200 text-start  transition w-full'>
                    Nueva venta
                </button>
                <button className='bg-transparent border border-gray-200 text-gray-600 text-sm font-semibold px-4 py-2 rounded-md hover:cursor-pointer hover:bg-gray-200 text-start transition w-full'>
                    Registrar gasto
                </button>
                <button className='bg-transparent border border-gray-200 text-gray-600 text-sm font-semibold px-4 py-2 rounded-md hover:cursor-pointer hover:bg-gray-200 text-start  transition w-full'>
                    Agregar cliente
                </button>
            </div>
        </div>
    )
}

export default AccionesRapidas