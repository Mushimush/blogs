//Link matches routes in App.js, instead of requesting form server.
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Stanley Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;