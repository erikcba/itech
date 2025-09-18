import React from 'react'

const ResumenDia = () => {
    return (
        <div className='bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-4'>
            <div className='flex flex-col gap-2 mb-4'>
                <h2 className='text-md text-zinc-600 font-semibold mb-2'>
                    Resumen del dia
                </h2 >
                <p className='text-sm text-gray-500 font-medium'>
                    Actividad del dia de hoy:
                </p>
            </div>
            <div className='flex flex-col gap-2'>
                <p className='text-sm text-green-600 font-semibold'>
                    Ventas: $1,234
                </p>
                <p className='text-sm text-red-600 font-semibold'>
                    Gastos: $567
                </p>
                <p className='text-sm text-gray-600 font-semibold'>
                    Clientes visitados: 123
                </p>  
            </div>
        </div>
    )
}

export default ResumenDia