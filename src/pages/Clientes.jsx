import React from 'react'
import { useClientes } from '../hooks/useClientes'
import StockCard from '../components/StockCard'

const Clientes = () => {
    const { clientes, loading, error, clientesTotales, clientesActivos, clientesInactivos } = useClientes()
    console.log("Clientes: ", clientes)
    console.log("clientes Totales: ", clientesTotales)
    console.log("clientesActivos: ", clientesActivos)
    console.log("clientesInactivos: ", clientesInactivos)

    const CLienteFila = ({ cliente }) => {
        return (
            <tr className={`border-b border-b-gray-200 leading-8 `} key={cliente.id}>
                <td className='text-left'>{cliente.nombre} {cliente.apellido}</td>
                <td className='text-right'>
                    {cliente.local_id === null ? 'N/A' : cliente.local_id}
                </td>
                <td className={`text-right ${!cliente.activo ? 'text-red-500 font-semibold' : ''}`}>
                    {cliente.activo ? 'Activo' : 'Inactivo'}
                </td>
            </tr>
        );
    };


    return (
        <div className='p-6 flex flex-col gap-6'>
            <h1 className='text-3xl font-bold mb-4'>
                Informacion de clientes
            </h1>
            {
                loading ? <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
                </div> :
                    <div className='flex flex-col gap-6'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                            <StockCard titulo={"Clientes visitados"} cantidad={clientesInactivos} />
                            <StockCard titulo={"Clientes por visitar"} cantidad={clientesInactivos} />
                            <StockCard titulo={"Cantidad de clientes"} cantidad={clientesTotales} />
                            <StockCard titulo={"Clientes activos"} cantidad={clientesActivos} />
                        </div>
                    </div>
            }

            <div className='bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-4'>
                <h2 className='text-md text-zinc-600 font-semibold mb-2'>
                    Listado de clientes
                </h2>
                <table className='min-w-full'>
                    <thead>
                        <tr>
                            <th className='text-left'>Nombre y apellido</th>
                            <th className='text-right'>Nombre de negocio</th>
                            <th className='text-right'>Estado</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            loading ? <div className="flex justify-center mx-auto items-center h-64">
                                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
                            </div> :
                                clientes.map(cliente => <CLienteFila key={cliente.id} cliente={cliente} />)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default Clientes