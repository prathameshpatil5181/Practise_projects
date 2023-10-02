const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dashboard
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
            <button type="button" className="btn btn-dark">10</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar
