import { FC, useEffect, useState } from 'react';
import cn from 'classnames';

import { Button } from './ui';
import { IToken, fetchTokens } from '../api/fetchTokens';

const AssetsSection: FC = () => {
  const [loading, setLoading] = useState(true);
  const [tokens, setTokens] = useState<IToken[]>([]);

  useEffect(() => {
    let interval: number | null = null;
    async function getTokens() {
      const tokens = await fetchTokens();
      if (!tokens) {
        if (interval) clearInterval(interval);
        return alert('Произошла ошибка при запросе криптовалютных пар!');
      }
      setTokens(tokens);
      setLoading(false);
    }
    getTokens();
    interval = setInterval(getTokens, 30000);
  }, []);

  return (
    <section className="py-[100px]">
      <div className="container">
        <div className="border border-white border-opacity-10 rounded-2xl overflow-hidden mb-4">
          <table className="w-full bg-gradient-table">
            <thead className="text-[#6D799C] text-base font-normal">
              <tr className="border-b border-white border-opacity-10">
                <th className="text-left p-6">Asset</th>
                <th className="w-40 p-6">Price</th>
                <th className="w-40 p-6">Change</th>
                <th className="w-40 p-6">Volume</th>
                <th className="w-40 p-6"></th>
              </tr>
            </thead>
            <tbody>
              {loading
                ? [...Array(5)].map((_, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-white border-opacity-10 last-of-type:border-none"
                    >
                      <td className="p-6">
                        <div className="flex items-center">
                          <div className="w-9 h-9 rounded-full bg-white bg-opacity-10 animate-pulse mr-5" />
                          <div className="h-6 w-48 rounded bg-white bg-opacity-10 animate-pulse" />
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="text-center">
                          <div className="h-6 w-24 mx-auto rounded bg-white bg-opacity-10 animate-pulse" />
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="text-center">
                          <div className="h-6 w-12 mx-auto rounded bg-white bg-opacity-10 animate-pulse" />
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="text-center">
                          <div className="h-6 w-24 mx-auto rounded bg-white bg-opacity-10 animate-pulse" />
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="text-center">
                          <div className="h-6 w-24 mx-auto rounded bg-white bg-opacity-10 animate-pulse" />
                        </div>
                      </td>
                    </tr>
                  ))
                : tokens.map((token) => (
                    <tr
                      key={token.symbol}
                      className="border-b border-white border-opacity-10 last-of-type:border-none"
                    >
                      <td className="p-6">
                        <div className="flex items-center">
                          <img
                            src={token.icon}
                            alt=""
                            width={36}
                            height={36}
                            className="object-cover mr-5"
                          />
                          <h5 className="mr-2 text-xl">{token.name}</h5>
                          <span className="text-[#525A71]">{token.symbol}</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="text-center">
                          {token.price.toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                          })}
                        </div>
                      </td>
                      <td className="p-6">
                        <div
                          className={cn('text-center', {
                            'text-[#F94B55]': token.priceChange1d < 0,
                            'text-[#58F0A7]': token.priceChange1d >= 0,
                          })}
                        >
                          {Math.abs(token.priceChange1d)}%
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="text-center">
                          {Number(token.volume / 1_000_000).toLocaleString(
                            'en-US',
                            {
                              minimumFractionDigits: 3,
                            }
                          )}{' '}
                          M
                        </div>
                      </td>
                      <td className="p-6">
                        <div>
                          <Button variant="outlined">Trade</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        <a
          href="#"
          className="text-lg bg-gradient-dark py-[10px] px-6 block w-full text-center rounded-lg leading-none"
        >
          All assets
        </a>
      </div>
    </section>
  );
};

export default AssetsSection;
