import React from "react";
import { Actions } from "./constants";

export type RootParamList = {
    News: undefined;
    Home: undefined;
  }

 export interface GlobalContent {
  coins: any[]
  nfts: any[]
  news: any[]
  nftsError: null | string
  coinsError: null | string
  newsError: null | string
  loading: boolean
 }
 
 export interface ProviderProp {
  children: React.ReactNode
 }
 
 export interface CoinProp {
  name: string
  symbol: string
  price: number
  percentage: number
  data: any[]
  logo: string
  marketType: boolean
 }

export interface CoinsDataProp {
  coins: any[]
  coinsError: null | string;
}

export interface NftsDataProp {
  nfts: any[]
  nftsError: null | string;
}

export interface NftCardProp {
  name: string
  logo: string
  symbol: string
} 

export interface NewsData {
  news: any[]
  newsError: null | string
}

export interface ActionsProp {
  type: Actions
  payload: any
}
