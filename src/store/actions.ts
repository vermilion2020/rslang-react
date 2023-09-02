import { Action, Dispatch } from "@reduxjs/toolkit";
import { CREATE_POST, REQUEST_POSTS, HIDE_LOADER, SHOW_LOADER, SHOW_ERROR, HIDE_ERROR } from "./types";

export function hideLoader() {
  return {
    type: HIDE_LOADER
  };
}

export function showError(errorMessage: string) {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: SHOW_ERROR,
      payload: errorMessage
    });

    setTimeout(() => {
      dispatch(hideError())}, 3000);
  }
}

export function hideError() {
  return {
    type: HIDE_ERROR
  };
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  };
}


export function createPost(post: string) {
  return {
    type: CREATE_POST,
    payload: post
  };
}

export function fetchPosts() {
  return {
    type: REQUEST_POSTS
  };
}