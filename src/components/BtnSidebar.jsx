import React from 'react'
import { Link } from 'react-router-dom'

const BtnSidebar = ({ texto, icono, link }) => {
    return (
        <Link to={link} className='group bg-transparent hover:bg-blue-600/60 transition-all ease-in-out duration-300 cursor-pointer text-gray-700 font-semibold py-2 leading-none px-4 rounded mx-4 my-2 text-center'>
            {icono}
            <p className='text-md text-left text-gray-800 font-medium transition-all ease-in-out duration-300 group-hover:text-gray-100'>
                {texto}
            </p>
        </Link>
    )
}

export default BtnSidebar