import { FC } from 'react';
import { AssetsSection, Header, HeroSection } from './components';

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AssetsSection />
    </>
  );
};

export default HomePage;
