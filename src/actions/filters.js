export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  payload: {
    text
  }
});

export const setSortBy = (sortBy = "desc") => ({
  type: "SET_SORT_BY",
  payload: {
    sortBy
  }
});

export const setCategory = (category = "") => ({
  type: "SET_CATEGORY",
  payload: {
    category
  }
});
