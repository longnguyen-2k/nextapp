import React, { Component } from 'react';
import ButtonDonate from '../formDonate/buttonDonate';
import Donate from '../formDonate/donate';
import Image from 'next/image';
class Header extends Component {
  render() {
    return (
      <header className="section page-header">
        {/* RD Navbar*/}
        <nav
          className="navbar navbar-expand-lg navbar-light bg-white m-0 fixed-top"
          data-toggle="collapse"
        >
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href="https://www.passerellesnumeriques.org/"
            >
              <Image
                src="https://www.passerellesnumeriques.org/misc/logo-en.png"
                alt="Logo"
                data-actual-width="538"
                data-actual-height="193"
                style={{ width: '120px' }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
              data-target="#navbarHeader"
              data-toggle="collapse"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarHeader">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="#Home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#our-mission">
                    Ourmission
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#ITNuoiIT">
                    ITNuoiIT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#get-in-touch">
                    Contact us
                  </a>
                </li>
                <li className="nav-item">
                  <ButtonDonate />
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
