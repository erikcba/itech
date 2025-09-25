import { useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'

export function useMarcas() {
    const [marcas, setMarcas] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchProductos = async () => {
            const { data, error } = await supabase
                .from('marcas')
                .select('nombre')
                .order('nombre', { ascending: true })
            if (error) {
                setError(error)
            } else {
                setMarcas(data)
            }
            setLoading(false)
            
        }

        fetchProductos()
    }, [])

    return { marcas, loading, error }
}