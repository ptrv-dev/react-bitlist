import { FC } from 'react';
import {
  AdvantagesSection,
  AssetsSection,
  Footer,
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
      {/* <AdvantagesSection /> */}
      {/* <SignInSection /> */}
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
