import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        const divStyleHidden = {opacity:'0'};
        return (
            <React.Fragment>
                <div id="navbar" className="navbar-area fixed-top">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <div className="container">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src="/images/white-logo.png" alt="logo" />
                                </a>
                            </Link>

                            <button 
                                onClick={this.toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto">
                                    <li className="nav-item">
                                        <Link href="/">
                                            <a className="nav-link">
                                                Acasă <i className='bx bx-wifi-0 hidden' style={divStyleHidden}></i>
                                            </a>
                                        </Link>

                                    
                                       
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link">
                                                Informații <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/about-page" activeClassName="active">
                                                    <a className="nav-link">Despre Noi</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/tutorials" activeClassName="active">
                                                    <a className="nav-link">Tutoriale</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link">
                                                Servicii <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/services" activeClassName="active">
                                                    <a className="nav-link">Sevicii Oferite</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/lista_preturi" activeClassName="active">
                                                    <a className="nav-link">Listă prețuri</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                            <a href="#" className="nav-link">
                                                Cont Utilizator<i className='bx bx-chevron-down'></i>
                                            </a>

                                            <ul className="dropdown-menu">
                                                <li className="nav-item">
                                                    <Link href="/login" activeClassName="active">
                                                        <a className="nav-link">Login</a>
                                                    </Link>
                                                </li>

                                                <li className="nav-item">
                                                    <Link href="/sign-up" activeClassName="active">
                                                        <a className="nav-link">Sign Up</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li>
                                            
                                        </ul>
                                    </li>

                                   

                                    <li className="nav-item">
                                        <Link href="/news-grid">
                                            <a className="nav-link">
                                                Blog <i className='bx bx-wifi-0 hidden' style={divStyleHidden}></i>
                                            </a>
                                        </Link>

                                    </li>

                                    <li className="nav-item">
                                        <Link href="/contact">
                                            <a className="nav-link">
                                                Contact <i className='bx bx-chevron-down' style={divStyleHidden}></i>
                                            </a>
                                        </Link>

                                     
                                    </li>
                                </ul>

                                <div className="others-options">
                                    <Link href="/login">
                                        <a className="default-btn">
                                            Log In
                                            <i className="bx bx-log-in-circle"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}

export default Navbar;