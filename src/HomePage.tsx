import { FC } from 'react';
import {
  AdvantagesSection,
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
      <AdvantagesSection />
    </>
  );
};

export default HomePage;
