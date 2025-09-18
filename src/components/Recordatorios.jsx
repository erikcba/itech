import React from 'react'

const Recordatorios = () => {
    return (
        <div className='bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-4'>
            <div className='flex flex-col gap-2 mb-4'>
                <h2 className='text-md text-zinc-600 font-semibold mb-2'>
                    Recordatorios
                </h2 >
                <p className='text-sm text-gray-500 font-medium'>
                    Actividades pendientes:
                </p>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-1'>
                    <p className='text-sm text-red-600 font-semibold'>
                        Stock bajo
                    </p>
                    <p>
                        4 productos por debajo del stock mínimo
                    </p>
                </div>
                <div className='flex flex-col gap-1'>
                    <p className='text-sm text-red-600 font-semibold'>
                        Pagos pendientes
                    </p>
                    <p>
                        3 facturas sin pagar
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Recordatorios