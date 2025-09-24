import React from 'react'

const StockCard = ({ cantidad, nombre, titulo }) => {
    return (
        <div className='bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-4'>
            <div className='flex flex-col gap-2 mb-4'>
                <h2 className='text-md text-zinc-600 font-semibold mb-2'>
                    {titulo}
                </h2>
            </div>
            <div className='flex flex-col gap-2'>
                <h3>
                    {cantidad}
                </h3>
            </div>
        </div>
    )
}

export default StockCard