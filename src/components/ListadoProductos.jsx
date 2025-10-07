import React, { useMemo } from 'react'
import { useStock } from '../hooks/useStock'

const currencyFormatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
});

const ProductoFila = ({ producto }) => {
    const sinStock = producto.stock === 0;

    return (
        <tr className={`border-b border-b-gray-200 leading-8 ${sinStock ? 'bg-red-100' : ''}`} key={producto.id}>
            <td className='text-left'>{producto.nombre}</td>
            <td className='text-right'>
                {producto.costo === null ? 'N/A' : currencyFormatter.format(producto.costo)}
            </td>
            <td className='text-right'>{currencyFormatter.format(producto.precio)}</td>
            <td className={`text-right ${sinStock ? 'text-red-500 font-semibold' : ''}`}>
                {producto.stock}
            </td>
        </tr>
    );
};

const ListadoProductos = () => {

    const { productosConStock, productosSinStock } = useStock()

    const todosLosProductos = useMemo(() => {
        // Ordenamos para que los productos sin stock aparezcan al final
        const conStockOrdenados = [...productosConStock].sort((a, b) => a.nombre.localeCompare(b.nombre));
        const sinStockOrdenados = [...productosSinStock].sort((a, b) => a.nombre.localeCompare(b.nombre));
        return [...conStockOrdenados, ...sinStockOrdenados];
    }, [productosConStock, productosSinStock]);

    return (
        <div className='bg-gray-50 p-4 rounded-lg shadow flex flex-col gap-4'>
            <h2 className='text-md text-zinc-600 font-semibold mb-2'>
                Listado de productos
            </h2>
            <table className='min-w-full'>
                <thead>
                    <tr>
                        <th className='text-left'>Nombre</th>
                        <th className='text-right'>Costo</th>
                        <th className='text-right'>Precio</th>
                        <th className='text-right'>Stock</th>
                    </tr>
                </thead>
                <tbody >
                    {todosLosProductos.map(producto => <ProductoFila key={producto.id} producto={producto} />)}
                </tbody>
            </table>
        </div>
    )
}

export default ListadoProductos