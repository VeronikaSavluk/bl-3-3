import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from '../service/country-service';
import { Section, Container, CountryInfo, Loader } from 'components';

export const Country = () => {
  const [country, setCountry] = useState([]);
  const { countryId } = useParams();
  useEffect(() => {
    fetchCountry(countryId).then(data => setCountry(data));
  });
  const {
    flag,
    capital,
    countryName,
    id,
    languages = [],
    population,
  } = country;
  return (
    <Section>
      <Container>
        <CountryInfo
          flag={flag}
          capital={capital}
          country={countryName}
          id={id}
          languages={languages}
          population={population}
        />
      </Container>
    </Section>
  );
};
