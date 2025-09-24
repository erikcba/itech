import React, { useState } from 'react'
import { supabase } from '../services/supabaseClient'

const NuevoProductoModal = ({ isOpen, onClose }) => {
    const [form, setForm] = useState({
        nombreProd: '',
        codigo: '',
        categoria: '',
        proveedor: '',
        costo: '',
        precio: '',
        stock_inicial: '',
        stock_minimo: '',
        descripcion: ''
    })
    const [loading, setLoading] = useState(false)

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setLoading(true)
        const { error } = await supabase.from('productos').insert([{
            nombre: form.nombreProd,
            proveedor: form.proveedor,
            costo: Number(form.costo),
            precio: Number(form.precio),
            stock: Number(form.stock_inicial),
            stock_minimo: Number(form.stock_minimo),
            descripcion: form.descripcion
        }])
        setLoading(false)
        if (error) {
            alert('Error al guardar: ' + error.message)
        } else {
            alert('Producto guardado correctamente')
            onClose()
        }await supabase.from('categorias').insert([{
            categoria_nombre: form.categoria
        }])
        setLoading(false)
        if (error) {
            alert('Error al guardar: ' + error.message)
        } else {
            alert('Producto guardado correctamente')
            onClose()
        }
    }
    return (
        <div className={` ${isOpen ? 'flex' : 'hidden'} bg-zinc-900/50 fixed inset-0 items-center justify-center`}>
            <div className='bg-white flex flex-col gap-8 p-6 rounded-lg shadow-lg '>
                <h2 className='text-2xl font-bold'>
                    Registrar Nuevo Producto
                </h2>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="nombreProd" className="font-semibold text-gray-800 text-md">
                                Nombre del producto
                            </label>
                            <input required name='nombreProd' id='nombreProd' type="text" placeholder='Nombre del Producto'
                                className='shadow-sm p-2 rounded focus:outline-blue-600/40 focus:outline-3 focus:shadow-blue-400 focus:shadow-md '
                                value={form.nombreProd} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className="font-semibold text-gray-800 text-md" htmlFor="codigo">
                                Marca
                            </label>
                            <input name="marca" id="marca" type="text" placeholder='Marca del Producto'
                                className='shadow-sm p-2 rounded focus:outline-blue-600/40 focus:outline-3 focus:shadow-blue-400 focus:shadow-md'
                                value={form.marca} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className="font-semibold text-gray-800 text-md" htmlFor="categoria">
                                Categoria
                            </label>
                            <select required name="categoria" id="categoria"
                                className='shadow-sm p-2 rounded focus:outline-blue-600/40 focus:outline-3 focus:shadow-blue-400 focus:shadow-md'
                                value={form.categoria} onChange={handleChange}>
                                <option value="">Seleccionar...</option>
                                <option value="cargadores">Cargadores</option>
                                <option value="auriculares">Auriculares</option>
                                <option value="cables">Cables</option>
                                <option value="powerbank">Powerbank</option>
                                <option value="fundas">Fundas</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className="font-semibold text-gray-800 text-md" htmlFor="proveedor">
                                Proveedor
                            </label>
                            <select required name="proveedor" id="proveedor"
                                className='shadow-sm p-2 rounded focus:outline-blue-600/40 focus:outline-3 focus:shadow-blue-400 focus:shadow-md'
                                value={form.proveedor} onChange={handleChange}>
                                <option value="">Seleccionar...</option>
                                <option value="proveedorA">Proveedor A</option>
                                <option value="proveedorB">Proveedor B</option>
                                <option value="proveedorC">Proveedor C</option>
                                <option value="proveedorD">Proveedor D</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label className="font-semibold text-gray-800 text-md" htmlFor="costo">
                                Costo
                            </label>
                            <input name="costo" id="costo" type="number" placeholder='Costo del Producto'
                                className='shadow-sm p-2 rounded focus:outline-blue-600/40 focus:outline-3 focus:shadow-blue-400 focus:shadow-md'
                                value={form.costo} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className="font-semibold text-gray-800 text-md" htmlFor="precio">
                                Precio de venta
                            </label>
                            <input name="precio" id="precio" type="number" placeholder='Precio al publico'
                                className='shadow-sm p-2 rounded focus:outline-blue-600/40 focus:outline-3 focus:shadow-blue-400 focus:shadow-md'
                                value={form.precio} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-col gap-2'>
                            <label className="font-semibold text-gray-800 text-md" htmlFor="stock_inicial">
                                Stock inicial
                            </label>
                            <input name="stock_inicial" id="stock_inicial" type="number" placeholder='Stock inicial'
                                className=' shadow-sm p-2 rounded focus:outline-blue-600/40 focus:outline-3 focus:shadow-blue-400 focus:shadow-md'
                                value={form.stock_inicial} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className="font-semibold text-gray-800 text-md" htmlFor="stock_minimo">
                                Stock minimo
                            </label>
                            <input name="stock_minimo" id="stock_minimo" type="number" placeholder='Stock minimo'
                                className='shadow-sm p-2 rounded focus:outline-blue-600/40 focus:outline-3 focus:shadow-blue-400 focus:shadow-md'
                                value={form.stock_minimo} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className="font-semibold text-gray-800 text-md" htmlFor="descripcion">
                            Descripcion
                        </label>
                        <textarea name="descripcion" id="descripcion" placeholder='Descripcion (opcional)'
                            className='shadow-sm p-2 rounded focus:outline-blue-600/40 focus:outline-3 focus:shadow-blue-400 focus:shadow-md'
                            value={form.descripcion} onChange={handleChange}></textarea>
                    </div>
                    <div className='flex flex-row gap-2 self-end'>
                        <button onClick={onClose} type="button" className=' text-gray-800 border border-gray-400 px-4 py-2 rounded hover:text-white hover:cursor-pointer hover:bg-gray-600 transition-colors'>
                            Cancelar
                        </button>
                        <button type='submit' disabled={loading} className='bg-blue-600 border border-blue-600 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-blue-700 transition-colors'>
                            {loading ? 'Guardando...' : 'Guardar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default NuevoProductoModal