import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchCovidDataByCountry } from '../redux/Api';
import Header from './Header';

const DetailsPage = () => {
  const { name } = useParams();
  const [state, setState] = useState(null);
  useEffect(() => {
    const getDetails = async () => {
      const countryDetails = await fetchCovidDataByCountry(name);
      setState(countryDetails);
    };
    getDetails();
  }, []);
  return (
    <>
      {state ? (
        <div className="DetailContainer">
          <Header />
          <div className="CountryDetail">
            <div className="NameImg">
              <h2 className="Country">{state.country}</h2>
              <img src={state.countryInfo.flag} alt="country flag" />
            </div>
            <h2 className="Name">
              <span>Population : </span>
              {state.population.toLocaleString()}
            </h2>
            <h2 className="Name">
              <span>Cases : </span>
              {state.cases.toLocaleString()}
            </h2>
            <h2 className="Name">
              <span>Active : </span>
              {state.active.toLocaleString()}
            </h2>
            <h2 className="Name">
              <span>Tests : </span>
              {state.tests.toLocaleString()}
            </h2>
            <h2>{}</h2>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default DetailsPage;
