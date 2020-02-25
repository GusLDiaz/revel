//header circles work
import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

//const Header = () => (
//   <div>
//     <Link href="/">
//       <a style={linkStyle}>Home</a>
//     </Link>
//     <Link href="/uptownfunk">
//       <a style={linkStyle}>About</a>
//     </Link>
//   </div>
// );



import Hamburger from './Hamburger';
// import routes from '../../data/routes';

const Header = () => (
  <header id="header">
    //logo first, sticky, force height
    <h1 className="index-link">
      {routes.filter((l) => l.index).map((l) => (
        <Link key={l.label} to={l.path}>{l.label}</Link>
      ))}
    </h1>

    //menu level
    //desktop -> "eats and drinks", "venue", "about","contact" on desktop force beneath
    //desktop-force width? logos for businesses with names beneath
    //on mobile call menuMobile component (full view)
    <nav className="links">
      <ul>
        {routes.filter((l) => !l.index).map((l) => (
          <li key={l.label}>
            <Link to={l.path}>{l.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
    <Hamburger />//set up logic to disappear one out of view
  </header>
  //section of circles, for mobile in line with logo section,
);

export default Header;
