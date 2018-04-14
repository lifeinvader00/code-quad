export default (state = [], { type, payload } = {}) => {
  switch (type) {
    case "ADD_ARTICLE":
      return state.concat(payload.article);

    case "EDIT_ARTICLE":
      let unchangedArticles = state.filter(el => el.id !== payload.id);
      return [...unchangedArticles, payload.updatedArticle];

    case "REMOVE_ARTICLE":
      return state.filter(el => el.id !== payload.id);

    case "SET_ARTICLES":
      return [...payload.articles];

    default:
      return state;
  }
};
