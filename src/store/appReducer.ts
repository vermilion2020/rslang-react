import { Action } from "@reduxjs/toolkit";
import { HIDE_LOADER, SHOW_LOADER, HIDE_ERROR, SHOW_ERROR } from "./types";

const initialState = {
  loading: false,
  error: null
};

export const appReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case HIDE_LOADER:
      return {...state, loading: false};
    case SHOW_LOADER:
      return {...state, loading: true};
    case HIDE_ERROR:
      return {...state, error: null};
    case SHOW_ERROR:
      return {...state, error: 'error'};
    default: return state;
  }
}