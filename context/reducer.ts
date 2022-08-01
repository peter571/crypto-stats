import { Actions } from "../constants";
import { ActionsProp, GlobalContent } from "../types";

export const reducer = (state: GlobalContent, action: ActionsProp) => {
  switch (action.type) {
    case Actions.COINS:
      return { ...state, coins: action.payload };
    case Actions.NFTS:
      return { ...state, nfts: action.payload };
    case Actions.NEWS:
      return { ...state, news: action.payload };
    case Actions.LOADING:
      return { ...state, loading: action.payload };
    case Actions.ERRORNEWS:
      return { ...state, errornews: action.payload };
    case Actions.ERRORNFTS:
      return { ...state, errornfts: action.payload };
    case Actions.ERRORCOINS:
      return { ...state, errorcoins: action.payload };
    default:
      return state;
  }
};
