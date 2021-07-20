import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Routes from './Routers/Router';
class ShowAdmin extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className="dashboard-main-wrapper">
            <div className="dashboard-header">
              <nav className="navbar navbar-expand-lg bg-white fixed-top">
                <a
                  className="navbar-brand"
                  href="index.html"
                  style={{ color: 'black' }}
                >
                  Admin
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse "
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto navbar-right-top">
                    <li className="nav-item">
                      <div id="custom-search" className="top-search-bar">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Search.."
                        />
                      </div>
                    </li>
                    <li className="nav-item dropdown notification">
                      <a
                        className="nav-link nav-icons"
                        href="#"
                        id="navbarDropdownMenuLink1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-fw fa-bell" />{' '}
                        <span className="indicator" />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
                        <li>
                          <div className="notification-title">
                            {' '}
                            Notification
                          </div>
                          <div className="notification-list">
                            <div className="list-group">
                              <a
                                href="#"
                                className="list-group-item list-group-item-action active"
                              >
                                <div className="notification-info">
                                  <div className="notification-list-user-img">
                                    <img
                                      src="images/logo.png"
                                      alt=""
                                      className="user-avatar-md rounded-circle"
                                    />
                                  </div>
                                  <div className="notification-list-user-block">
                                    <span className="notification-list-user-name">
                                      Jeremy Rakestraw
                                    </span>
                                    accepted your invitation to join the team.
                                    <div className="notification-date">
                                      2 min ago
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="list-group-item list-group-item-action"
                              >
                                <div className="notification-info">
                                  <div className="notification-list-user-img">
                                    <img
                                      src="images/logo.png"
                                      alt=""
                                      className="user-avatar-md rounded-circle"
                                    />
                                  </div>
                                  <div className="notification-list-user-block">
                                    <span className="notification-list-user-name">
                                      John Abraham{' '}
                                    </span>
                                    is now following you
                                    <div className="notification-date">
                                      2 days ago
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="list-group-item list-group-item-action"
                              >
                                <div className="notification-info">
                                  <div className="notification-list-user-img">
                                    <img
                                      src="images/logo.png"
                                      alt=""
                                      className="user-avatar-md rounded-circle"
                                    />
                                  </div>
                                  <div className="notification-list-user-block">
                                    <span className="notification-list-user-name">
                                      Monaan Pechi
                                    </span>{' '}
                                    is watching your main repository
                                    <div className="notification-date">
                                      2 min ago
                                    </div>
                                  </div>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="list-group-item list-group-item-action"
                              >
                                <div className="notification-info">
                                  <div className="notification-list-user-img">
                                    <img
                                      src="images/logo.png"
                                      alt=""
                                      className="user-avatar-md rounded-circle"
                                    />
                                  </div>
                                  <div className="notification-list-user-block">
                                    <span className="notification-list-user-name">
                                      Jessica Caruso
                                    </span>
                                    accepted your invitation to join the team.
                                    <div className="notification-date">
                                      2 min ago
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="list-footer">
                            {' '}
                            <a href="#">View all notifications</a>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown nav-user">
                      <a
                        className="nav-link nav-user-img"
                        href="#"
                        id="navbarDropdownMenuLink2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          src="images/logo.png"
                          alt=""
                          className="user-avatar-md rounded-circle"
                        />
                      </a>
                      <div
                        className="dropdown-menu dropdown-menu-right nav-user-dropdown"
                        aria-labelledby="navbarDropdownMenuLink2"
                      >
                        <div className="nav-user-info">
                          <h5 className="mb-0 text-white nav-user-name">
                            Magic{' '}
                          </h5>
                          {/* <span class="status"></span><span class="ml-2">Available</span> */}
                        </div>
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-user mr-2" />
                          Account
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-cog mr-2" />
                          Setting
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-power-off mr-2" />
                          Logout
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="nav-left-sidebar sidebar-dark">
              <div className="menu-list">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="d-xl-none d-lg-none" href="#">
                    Dashboard
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav flex-column">
                      <li className="nav-divider">Menu</li>
                      <li className="nav-item ">
                        <a
                          className="nav-link active"
                          href="#"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#submenu-1"
                          aria-controls="submenu-1"
                        >
                          <i className="fa fa-fw fa-user-circle" />{' '}
                          <li>
                            <Link to="/news" style={{ color: 'black' }}>
                              {' '}
                              Recent News{' '}
                            </Link>
                          </li>{' '}
                          <span className="badge badge-success">6</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#submenu-2"
                          aria-controls="submenu-2"
                        >
                          <i className="fa fa-fw fa-rocket" />{' '}
                          <li>
                            <Link to="/milestone"> Milestone </Link>
                          </li>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#submenu-3"
                          aria-controls="submenu-3"
                        >
                          <i className="fas fa-fw fa-chart-pie" />{' '}
                          <li>
                            <Link to="/partner"> Partner</Link>
                          </li>
                        </a>
                      </li>
                      <li className="nav-item ">
                        <a
                          className="nav-link"
                          href="#"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#submenu-4"
                          aria-controls="submenu-4"
                        >
                          <i className="fab fa-fw fa-wpforms" />{' '}
                          <li>
                            <Link to="/donate"> Donate</Link>
                          </li>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#"
                          data-toggle="collapse"
                          aria-expanded="false"
                          data-target="#submenu-5"
                          aria-controls="submenu-5"
                        >
                          <i className="fas fa-fw fa-table" />{' '}
                          <li>
                            <Link to="/contact"> Contact </Link>
                          </li>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="dashboard-wrapper">
              <div className="dashboard-ecommerce">
                <div className="container-fluid dashboard-content ">
                  <Switch>{this.showContentMenu(Routes)}</Switch>
                  <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" />
                  </div>
                  <div className="row" />
                </div>
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }

  showContentMenu = (Routes) => {
    var result = null;
    if (Routes.length > 0) {
      result = Routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return result;
  };
}

export default ShowAdmin;
