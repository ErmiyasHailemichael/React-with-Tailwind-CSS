import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex  justify-between  bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <button className="font-semibold  tracking-tight">Home</button>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex px-3 py-2 border rounded text-teal-200 hover:text-white hover:border-white"
          type="button"
        >
            <title>Menu</title>
        </button>
      </div>
      <div className="w-full block lg:flex lg:items-center lg:w-auto">
        <div className="text-sm  flex justify-between">
         
          <Link
            to="/write"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            Write
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
