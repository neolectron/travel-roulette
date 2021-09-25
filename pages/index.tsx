import type { NextPage } from 'next';
import Link from 'next/link';

import Button from '../components/Button/Button';

interface HomePageProps {}

const HomePage: NextPage<HomePageProps> = () => {
  return (
    <main className="bg-image-primary flex flex-col min-h-screen bg-cover">
      <h1 className="text-quartenary mt-32 text-4xl font-bold text-center">
        Have you ever been to Africa ?
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

export default HomePage;
