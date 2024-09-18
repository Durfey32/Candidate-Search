import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  const currentPage = useLocation().pathname;

  return (
    <nav>
      <h1>
        <Link to="/" id='logo'>Candidate Search</Link>
      </h1>
      <ul className='nav nav-tab'>
        <li className="nav-item">
            <Link to='/' className={currentPage === '/' ? 'nav-link active' : 'nav-link'}> HOME </Link>
        </li>
        <li>
            <Link to='/SavedCandidates' className={currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'}>Saved Candidates</Link>
        </li>
      </ul>
    </nav>
  )
};

export default Nav;
