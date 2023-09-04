import { FC } from 'react';

const PartnersSection: FC = () => {
  return (
    <section className="py-16 lg:py-20">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">
        <div className="md:w-1/2 lg:w-auto flex-grow xl:max-w-[680px]">
          <h2 className="text-center md:text-left text-3xl md:text-4xl xl:text-5xl mb-4 leading-snug">
            Bitles is your reliable guide in the world of digital assets
          </h2>
          <p className="text-[#464E62] text-lg max-w-[640px] leading-relaxed">
            The Bitles app is a comprehensive solution for trading digital
            assets. Buy and sell cryptocurrencies quickly and openly,
            comfortably and safely from anywhere in the world.
          </p>
        </div>
        <div className="md:w-1/2 lg:w-auto xl:flex-shrink 2xl:flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-16 md:gap-10 lg:gap-y-20 lg:gap-x-[100px] relative">
          <div className="partners-light absolute" />
          <img src="/assets/img/binance.svg" alt="binance" />
          <img src="/assets/img/bybit.svg" alt="bybit" />
          <img src="/assets/img/bitfinex.svg" alt="bitfinex" />
          <img src="/assets/img/cryptocom.svg" alt="crypto.com" />
          <img src="/assets/img/kraken.svg" alt="kraken" />
          <img src="/assets/img/coinbase.svg" alt="coinbase" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
