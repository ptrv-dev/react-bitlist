export interface IToken {
  id: string;
  icon: string;
  name: string;
  symbol: string;
  rank: number;
  price: number;
  priceBtc: number;
  volume: number;
  marketCap: number;
  availableSupply: number;
  totalSupply: number;
  priceChange1h: number;
  priceChange1d: number;
  priceChange1w: number;
  websiteUrl: string;
  twitterUrl: string;
  exp: string[];
}

export async function fetchTokens(currency = 'USDT', limit = 6, skip = 0) {
  try {
    const data = await fetch(
      `https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=${limit}&currency=${currency}`
    ).then((res) => res.json());
    return data.coins as IToken[];
  } catch (error) {
    console.error(error);
    return null;
  }
}
