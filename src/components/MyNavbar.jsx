import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MyNavbar = () => {
  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#221f1f' }}>
      <Navbar.Brand href="/">
        <img
          src="assets/logo.png"
          alt="logo"
          style={{ width: '100px', height: '55px' }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to="./Home" className="nav-link fw-bold " href="/">
            Home
          </Link>
          <Link to="/TvShows" className="nav-link fw-semibold " href="/">
            TV Shows
          </Link>
          <Link to="/Movies" className="nav-link fw-semibold " href="/">
            Movies
          </Link>
          <Link to="/srcAdded" className="nav-link fw-semibold " href="/">
            Recently Added
          </Link>
          <Link to="/MyList" className="nav-link fw-semibold " href="/">
            My List
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNavbar
