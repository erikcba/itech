import { useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'

export function useStock() {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [stock, setStock] = useState([])

    useEffect(() => {
        const fetchProductos = async () => {
            const { data, error } = await supabase
                .from('productos')
                .select('stock')
                .gte('stock', 0)
            if (error) {
                setError(error)
            } else {
                setProductos(data)
                setStock(data.map(p => p.stock).reduce((a, b) => a + b, 0))
            }
            setLoading(false)
        }

        fetchProductos()
    }, [])

    return { productos, loading, error, stock }
}