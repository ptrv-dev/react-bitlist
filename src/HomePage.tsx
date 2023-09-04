import { FC } from 'react';
import {
  AssetsSection,
  Header,
  HeroSection,
  PartnersSection,
} from './components';

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AssetsSection />
      <PartnersSection />
    </>
  );
};

export default HomePage;
