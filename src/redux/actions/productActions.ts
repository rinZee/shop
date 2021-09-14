import { ActionTypes } from "../constants/actionsTypes";

export const setProducts = (products: any) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
