import type { NextPage } from 'next';
import type { Continent } from '../graphql/types';
import Link from 'next/link';
import { gql } from '@apollo/client';

import client from '../graphql/apollo-client';
import Button from '../components/Button/Button';
import RotatingText from '../components/RotatingText/RotatingText';

interface HomePageProps {
  continents: Continent[];
}

const HomePage: NextPage<HomePageProps> = ({ continents }) => {
  return (
    <main className="bg-image-primary flex flex-col min-h-screen bg-cover">
      <h1 className="text-quartenary mt-32 text-4xl font-bold text-center">
        Have you ever been to{' '}
        <RotatingText text={continents.map((continent) => continent.name)} /> ?
      </h1>
      <div className="flex justify-center mt-12">
        <Link href="/discover">
          <a>
            <Button text="Discover the world !" />
          </a>
        </Link>
      </div>
    </main>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query CountriesAndContinents {
        continents {
          name
        }
      }
    `,
  });

  return {
    props: {
      continents: data.continents,
    },
  };
}

export default HomePage;
