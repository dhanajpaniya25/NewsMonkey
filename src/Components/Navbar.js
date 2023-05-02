import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid" style={{ overflowX: "hidden" }}>
                    <Link className="navbar-brand" to="/"><i className="fa fa-newspaper-o" style={{ fontSize: "30px", color: "red" }}></i>News<span className='text-danger'>Monkey!!</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li>
                                <div className="input-group" style={{ marginLeft: "80px", width: "400px" }}>
                                    <input type="text" className="form-control" placeholder="Search Here" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-outline-danger mx-1" type="button" id="button-addon2">Search</button>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business" style={{ marginLeft: "70px" }}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
