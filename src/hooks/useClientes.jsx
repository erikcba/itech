import { useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'

export function useClientes() {
    const [clientes, setClientes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [clientesTotales, setClientesTotales] = useState(0)
    const [clientesActivos, setClientesActivos] = useState(0)
    const [clientesInactivos, setClientesInactivos] = useState(0)

    useEffect(() => {
        const fetchClientes = async () => {
            const { data, error } = await supabase
                .from('usuarios')
                .select('*')
                .eq('rol', 'cliente')
            if (error) {
                setError(error)
            } else {
                setClientes(data)
                setClientesTotales(data.length)
                setClientesActivos(data.filter(c => c.activo).length)
                setClientesInactivos(data.filter(c => !c.activo).length)
            }
            setLoading(false)
        }

        fetchClientes()
    }, [])

    return { clientes, loading, error, clientesTotales, clientesActivos, clientesInactivos }
}