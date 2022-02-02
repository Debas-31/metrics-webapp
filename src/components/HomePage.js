import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const northAmericaCountries = useSelector((state) => state.continentReducer);
  const filteredCountries = northAmericaCountries.filter((country) => {
    const newSearch = country.country.toLowerCase().includes(search);
    return newSearch;
  });
  return (
    <>
      <Header />
      <div className="MainContainer">
        <input className="Search" placeholder="Search Country ..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <section className="CountryContainer">
          {filteredCountries.map((item) => (
            <Link
              key={item.id}
              to={`/country/${item.country}`}
              className="Container"
            >
              <h2 className="Name">{item.country}</h2>
              <h2 className="Critical">{item.critical}</h2>
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
