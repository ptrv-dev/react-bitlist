import { FC } from 'react';

const PartnersSection: FC = () => {
  return (
    <section className="py-20">
      <div className="container flex items-center justify-between">
        <div className="max-w-[680px]">
          <h2 className="text-5xl mb-4 leading-snug">
            Bitles is your reliable guide in the world of digital assets
          </h2>
          <p className="text-[#464E62] text-lg max-w-[640px] leading-relaxed">
            The Bitles app is a comprehensive solution for trading digital
            assets. Buy and sell cryptocurrencies quickly and openly,
            comfortably and safely from anywhere in the world.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-20 gap-x-[100px] relative">
          <div className="partners-light absolute" />
          <img src="/assets/img/binance.svg" alt="" />
          <img src="/assets/img/bybit.svg" alt="" />
          <img src="/assets/img/bitfinex.svg" alt="" />
          <img src="/assets/img/cryptocom.svg" alt="" />
          <img src="/assets/img/kraken.svg" alt="" />
          <img src="/assets/img/coinbase.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
