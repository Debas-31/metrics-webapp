import { Link, useMatch } from 'react-router-dom';
import { BsFillBackspaceFill } from 'react-icons/bs';

const Header = () => {
  const match = useMatch('/country/:name');
  return (
    <nav className="NavBar">
      <div className="NavBarContainer">
        {match && (
          <Link className="NavButton" to="/">
            <BsFillBackspaceFill className="Icon" />
          </Link>
        )}
        <div>
          <h1 className="NorthAmerica">Covid-19 Data for</h1>
          <h2 className="NorthAmericaData">North America Countries</h2>
        </div>
      </div>
    </nav>
  );
};

export default Header;
