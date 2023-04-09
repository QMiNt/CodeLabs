import React from 'react'
import logo from "../../images/logo-no-background.png"
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand me-2" href="https://mdbgo.com/">
                        <img src={logo} height={"40px"} />
                    </a>
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse"
                        data-mdb-target="#navbarButtonsExample" aria-controls="navbarButtonsExample" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarButtonsExample">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div className="d-flex align-items-center" id="navbarButtonsExample">
                        
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/build">Build</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/visualize">Visualize</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/explain">Explain</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/collab">Collab</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contests">Contest</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/analyze">Analyze</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header