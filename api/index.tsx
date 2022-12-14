import { CoinsDataProp, NewsData, NftsDataProp } from "../types"
import { API_KEY } from "@env"

const options = {
  method: "get",
  headers: {
    accept: "application/json",
  },
};

//Fetch coins
export async function fetchCoins(): Promise<CoinsDataProp> {
  
  const url = "https://coins-nfts-stats.herokuapp.com/coins";

      try {
        const { result } = await (await fetch(url, options)).json();
        return { coins: result, coinsError: null };
      } catch (error) {
        console.log(error);
        return { coins: [], coinsError: "No Coins found!" } 
      }
}

//Fetch Nfts
export async function fetchNfts(): Promise<NftsDataProp> {
  
  const url = "https://coins-nfts-stats.herokuapp.com/coinMarketNfts";

      try {
        const { result } = await (await fetch(url, options)).json();
        
        return { nfts: result, nftsError: null };
      } catch (error) {
        console.log(error);
        return { nfts: [], nftsError: "No Nfts Found!" };
      }
    };

//Fetch News
export async function fetchNews(): Promise<NewsData> {
  
  const newsoptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${API_KEY}`,
      "X-RapidAPI-Host": "google-news1.p.rapidapi.com",
    },
  };

  const url =
    "https://google-news1.p.rapidapi.com/search?q=Cryptocurrency&country=US%2CGB%2CAR&lang=en&limit=50&when=7d";

    try {
        const { articles } = await (await fetch(url, newsoptions)).json();
    
        return { news: articles, newsError: null };
      } catch (error) {
        return { news: [], newsError: "No artcles found!" }
      }
}
