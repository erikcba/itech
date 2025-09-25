import { useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'

export function useStock() {
    const [productosConStock, setProductosConStock] = useState([])
    const [productosSinStock, setProductosSinStock] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [stockTotal, setStockTotal] = useState(0)
    const productosTotales = productosConStock.length + productosSinStock.length

    useEffect(() => {
        const fetchProductos = async () => {
            // Productos con stock > 0
            const { data: conStock, error: errorConStock } = await supabase
                .from('productos')
                .select('*')
                .gt('stock', 0)
            // Productos con stock == 0
            const { data: sinStock, error: errorSinStock } = await supabase
                .from('productos')
                .select('*')
                .eq('stock', 0)

            if (errorConStock || errorSinStock) {
                setError(errorConStock || errorSinStock)
            } else {
                setProductosConStock(conStock)
                setProductosSinStock(sinStock)
                setStockTotal(conStock.map(p => p.stock).reduce((a, b) => a + b, 0))
            }
            setLoading(false)
        }

        fetchProductos()
    }, [])

    return { productosConStock, productosSinStock, loading, error, stockTotal, productosTotales }
}