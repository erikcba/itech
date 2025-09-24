import { useState } from 'react'
import NuevoProductoBtn from '../components/NuevoProductoBtn'
import NuevoProductoModal from '../components/NuevoProductoModal'
import StockCard from '../components/StockCard'
import { useStock } from '../hooks/useStock'
import { useStockFaltante } from '../hooks/useStockFaltante'

const Stock = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const handleModalOpen = () => setModalOpen(true)
    const handleModalClose = () => setModalOpen(false)

    const { productos, stock } = useStock()
    const { productosFaltantes} = useStockFaltante()

    return (
        <div className='p-6 flex flex-col gap-6'>
            <h1 className='text-3xl font-bold mb-4'>
                Control de Productos e Inventario
            </h1>
            <NuevoProductoBtn onClick={handleModalOpen} />
            <NuevoProductoModal isOpen={modalOpen} onClose={handleModalClose} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <StockCard titulo={"Cantidad de productos"} cantidad={productos.length} />
                <StockCard titulo={"Productos sin stock"} cantidad={productosFaltantes.length} />
                <StockCard titulo={"Existencias totales"} cantidad={stock} />
                <StockCard />
            </div>

        </div>
    )
}

export default Stock