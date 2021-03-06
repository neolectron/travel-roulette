import type { NextPage } from 'next';
import type { Country, Continent } from '../graphql/types';
import type { CountryEx, ContinentEx } from '../graphql/extended-types';

import client from '../graphql/apollo-client';
import query from '../graphql/queries/queryCountriesAndContinent';

import Searchbar from '../components/SearchBar/SearchBar';

interface DiscoverPageProps {
  countries: CountryEx[];
  continents: ContinentEx[];
}

const DiscoverPage: NextPage<DiscoverPageProps> = ({
  countries,
  continents,
}) => {
  return (
    <div className="p-2">
      <Searchbar
        suggestions={[...countries, ...continents]}
        onSelection={(value) => {
          console.log(value);
        }}
      />
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({ query });

  return {
    props: {
      countries: data.countries.map((country: Country) => ({
        ...country,
        kind: 'country',
      })),
      continents: data.continents.map((continent: Continent) => ({
        ...continent,
        kind: 'continent',
      })),
    },
  };
}

export default DiscoverPage;
