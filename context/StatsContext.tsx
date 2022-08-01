import { createContext, useEffect, useReducer, useState } from "react";
import { fetchCoins, fetchNfts, fetchNews } from "../api";
import { Actions } from "../constants";
import { GlobalContent, ProviderProp } from "../types";
import { reducer } from "./reducer";

export const StatsContext = createContext<GlobalContent>({} as GlobalContent);

export const StatsProvider = ({ children }: ProviderProp) => {
  const [data, dispatch] = useReducer(reducer, {
    coins: [],
    nfts: [],
    news: [],
    newsError: null,
    nftsError: null,
    coinsError: null,
    loading: false,
  });

  useEffect(() => {
    async function getCoins() {
      try {
        dispatch({ type: Actions.LOADING, payload: true });
        const { coins } = await fetchCoins();
        dispatch({ type: Actions.COINS, payload: coins });
        dispatch({ type: Actions.LOADING, payload: false });
      } catch (error) {
        dispatch({ type: Actions.ERRORCOINS, payload: "No Coins found!" });
      }
    }
    getCoins();
  }, []);

  useEffect(() => {
    async function getNfts() {
      try {
        dispatch({ type: Actions.LOADING, payload: true });
        const { nfts } = await fetchNfts();
        dispatch({ type: Actions.NFTS, payload: nfts });
        dispatch({ type: Actions.LOADING, payload: false });
      } catch (error) {
        dispatch({ type: Actions.ERRORNFTS, payload: "No nfts found!" });
      }
    }
    getNfts();
  }, []);

  useEffect(() => {
    async function getNews() {
      try {
        dispatch({ type: Actions.LOADING, payload: true });
        const { news } = await fetchNews();
        dispatch({ type: Actions.NEWS, payload: news });
        dispatch({ type: Actions.LOADING, payload: false });
      } catch (error) {
        dispatch({ type: Actions.ERRORNEWS, payload: "No articles found!" });
      }
    }
    getNews();
  }, []);

  return <StatsContext.Provider value={data}>{children}</StatsContext.Provider>;
};
