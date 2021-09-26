interface CoinDetail {
  additional_notices: [];
  asset_platform_id: string;
  block_time_in_minutes: number;
  categories: string[];
  coingecko_rank: number;
  coingecko_score: number;
  community_data: object;
  community_score: number;
  country_origin: string;
  description: {
    en: string;
  };
}

interface MainViewKVPairs {
  [key: string]: string | number | null;
}

interface MainViewCoin extends MainViewKVPairs {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
}

interface TablePaginProps {
  coinList: MainViewCoin[];
  currentPage: number;
  onClick: Function;
}

interface CryptoTableRowProps {
  coin: MainViewCoin;
}
