import { FC } from 'react';
import {
  AdvantagesSection,
  AssetsSection,
  Header,
  HeroSection,
  PartnersSection,
  SignInSection,
} from './components';

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AssetsSection />
      <PartnersSection />
      <AdvantagesSection />
      <SignInSection />
    </>
  );
};

export default HomePage;
