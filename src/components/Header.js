import { Link, useMatch } from 'react-router-dom';
import { BsFillBackspaceFill } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { BiMicrophone } from 'react-icons/bi'

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
        <div className="NorthSetting">
          <h2 className="NorthData">North America Countries</h2>
          <BiMicrophone className="Microphone" size="1.5rem" />
          <FiSettings className="Setting" size="1.5rem" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
