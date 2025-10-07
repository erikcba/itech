import { useState } from 'react'
import NuevoProductoBtn from '../components/NuevoProductoBtn'
import NuevoProductoModal from '../components/NuevoProductoModal'
import StockCard from '../components/StockCard'
import { useStock } from '../hooks/useStock'
import ListadoProductos from '../components/ListadoProductos'

const Stock = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => setModalOpen(true)
    const handleModalClose = () => {
        setModalOpen(false)
        window.location.reload()
    }

    const { productosTotales, stockTotal, loading, productosSinStock } = useStock()

    return (
        <div className='p-6 flex flex-col gap-6'>
            <h1 className='text-3xl font-bold mb-4'>
                Control de Productos e Inventario
            </h1>
            {
                loading ? <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
                </div> :
                    <div className='flex flex-col gap-6'>
                        <NuevoProductoBtn onClick={handleModalOpen} />
                        <NuevoProductoModal isOpen={modalOpen} onClose={handleModalClose} />
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            <StockCard titulo={"Cantidad de productos"} cantidad={productosTotales} />
                            <StockCard titulo={"Productos sin stock"} cantidad={productosSinStock.length} />
                            <StockCard titulo={"Existencias totales"} cantidad={stockTotal} />
                        </div>
                        <ListadoProductos />
                    </div>
            }

        </div>
    )
}

export default Stock