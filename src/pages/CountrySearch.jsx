import { useState, useEffect } from 'react';
import { fetchByRegion } from '../service/country-service';
import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

export const CountrySearch = () => {
  const [region, setRegion] = useState("");
  useEffect(() => {
    if (!region) {
      return;
    }
    fetchByRegion(region).then(countries => {
      setRegion(countries);
    });
  }, [region]);

  const getRegion = (newRegion) => {
    setRegion(newRegion);
  };

  return (
    <Section>
      <Container>
        <SearchForm getRegion={getRegion} />
        <CountryList countries={region } />
      </Container>
    </Section>
  );
};
