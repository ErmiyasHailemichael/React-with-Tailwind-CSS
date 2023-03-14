import {Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <nav className=' flex items-center justify-between flex-wrap bg-teal-500 p-6'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <Link to="/">
            <button className='font-semibold text-xl tracking-tight'>Home</button>
        </Link>
        </div>

        <div className='block lg:hidden'>
            <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'
                type="button"
                >
        <Link to="/about">
            <button>About</button>
        </Link>
        <Link to="/contact">
            <button>Contact</button>
        </Link>
        <Link to="/write">
            <button>Write</button>
        </Link>
        </nav>
        
        </>
    )
}

export default Navbar;