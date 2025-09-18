import React from 'react'

const CardsDashboard = ({ titulo, data, leyenda }) => {
    return (
        <div className='bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-4'>
            <h2 className='text-sm text-zinc-600 font-semibold mb-2'>
                {titulo}
            </h2>
            <p className='text-2xl font-bold'>
                {data}
            </p>
            <p className='text-sm text-gray-500 font-medium'>
                {leyenda}
            </p>
        </div>
    )
}

export default CardsDashboard