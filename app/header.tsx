export default function Header() {
    return (
        <div className="py-3 background-image-primary">
            <div className="header-container flex-lg-col-6">
                <h1 className="mx-4 my-0" style={{ marginBottom: 0, textAlign: "center", fontSize: "1.5em" }}>
                    <a style={{ textDecoration: "none" }} href="/">Karl Oskar Anderson</a>
                </h1>
                <nav className="d-flex justify-content-center">
                    <ul className="navbar-nav flex-row mr-auto">
                        <li className="nav-item active mx-3 flex-row">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item mx-3 flex-row">
                            <a className="nav-link" href="/">Resume</a>
                        </li>
                        <li className="nav-item mx-3 flex-row">
                            <a className="nav-link" asp-page="Contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}