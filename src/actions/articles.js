import { db } from "../firebase/firebase";

export const addArticle = (article = {}) => ({
  type: "ADD_ARTICLE",
  payload: {
    article
  }
});

export const editArticle = (id = "", updatedArticle = {}) => ({
  type: "EDIT_ARTICLE",
  payload: {
    id,
    updatedArticle
  }
});

export const removeArticle = (id = "") => ({
  type: "REMOVE_ARTICLE",
  payload: {
    id
  }
});

export const setArticles = (articles = []) => ({
  type: "SET_ARTICLES",
  payload: {
    articles
  }
});

// Thunks

export const start__addArticle = (article = {}) => {
  return dispatch => {
    return dispatch(addArticle(article));
  };
};

export const start__editArticle = (id = "", updatedArticle = {}) => {
  return dispatch => {
    return dispatch(editArticle(id, updatedArticle));
  };
};

export const start__removeArticle = (id = "") => {
  return dispatch => {
    return dispatch(removeArticle(id));
  };
};

export const start__setArticles = () => {
  return (dispatch, getState) => {
    let uid = getState().auth.user.uid;
    let articles = [];
    db.once("value").then(snapshot => {
      snapshot.forEach(child => {
        let id = child.key;
        let data = child.val();
        let article = {
          id,
          ...data
        };
        articles.push(article);
      });
    });
    return dispatch(setArticles(articles));
  };
};
