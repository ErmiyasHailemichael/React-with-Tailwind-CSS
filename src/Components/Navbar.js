import {Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <Link to="/">
            <button>Home</button>
        </Link>
        <Link to="/about">
            <button>About</button>
        </Link>
        <Link to="/contact">
            <button>Contact</button>
        </Link>
        <Link to="/write">
            <button>Write</button>
        </Link>
        </>
    )
}

export default Navbar;