import { Link } from "react-router-dom";

const Navbar = () =>{
    return (
        <div className="navbar">
            <h2>The React Demo</h2>
            <div className="links">
                <Link to='/hello'>Hello</Link>
                <Link to='/sdc'>State Demo</Link>
                <Link to = "/getposts">Posts</Link>
                <Link to = "/todoList">TO DO List</Link>
               
            </div>
        </div>
    )
}

export default Navbar;