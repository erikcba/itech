import { useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'

export function useStockFaltante() {
    const [productosFaltantes, setProductosFaltantes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProductos = async () => {
            const { data, error } = await supabase
                .from('productos')
                .select('stock')
                .eq('stock', 0)
            if (error) {
                setError(error)
            } else {
                setProductosFaltantes(data)
            }
            setLoading(false)
        }

        fetchProductos()
    }, [])

    return { productosFaltantes, loading, error }
}