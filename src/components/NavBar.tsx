import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-semibold">
                    <Link to="/home" className="hover:text-gray-400">Home Page</Link>
                </div>
                <div className="space-x-3">
                    <Link to="/products" className="text-white hover:text-gray-400">Products</Link>
                    <Link to="/events" className="text-white hover:text-gray-400">Events</Link>
                    <Link to="/models" className="text-white hover:text-gray-400">Models</Link>
                    <Link to="/sales" className="text-white hover:text-gray-400">Others</Link>
                </div>
                <div className="space-x-4">
                    <Link to="/contact" className="text-white hover:text-gray-400">Contact Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
