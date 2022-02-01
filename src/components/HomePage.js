import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from './Header';

const HomePage = () => {
  const northAmericaCountries = useSelector((state) => state.continentReducer);
  return (
    <>
      <Header />
      <div className="MainContainer">
        <section className="CountryContainer">
          {northAmericaCountries.map((item) => (
            <Link
              key={item.id}
              to={`/country/${item.country}`}
              className="Container"
            >
              <h2>{item.country}</h2>
              <img src={item.countryFlag} alt="country flag" />
              <h2>{item.id}</h2>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export default HomePage;
