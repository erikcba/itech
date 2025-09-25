import React from 'react'
import { generarVenta } from '../services/generarVenta'

const AccionesRapidas = () => {

    const handleNuevaVenta = async () => {
        const userId = "uuid-del-cliente";
        const items = [
            { product_id: "25d21af5-669a-4b21-b219-a04feaf2b8f3", quantity: 2, price: 1500 },
            { product_id: "uuid-producto-2", quantity: 1, price: 3000 },
        ];

        const { success, saleId, error } = await generarVenta(userId, items);

        if (success) {
            alert(`✅ Venta generada con ID: ${saleId}`);
        } else {
            alert(`❌ Error: ${error.message}`);
        }
    };


    return (
        <div className='bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-4'>
            <div className='flex flex-col gap-2 mb-4'>
                <h2 className='text-md text-zinc-600 font-semibold mb-2'>
                    Acciones rápidas
                </h2>
            </div>
            <div className='flex flex-col gap-2'>
                <button onClick={handleNuevaVenta} className='bg-transparent border border-gray-200  text-gray-600 text-sm font-semibold px-4 py-2 rounded-md hover:cursor-pointer hover:bg-gray-200 text-start  transition w-full'>
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