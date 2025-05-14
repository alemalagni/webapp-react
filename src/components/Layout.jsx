import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
        <div className="container mt-4">
            <nav className="mb-4">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to="/movies" className="nav-link">Home</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}

export default Layout;