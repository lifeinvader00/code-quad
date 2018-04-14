export default (
  state = {
    text: "",
    sortBy: "desc",
    category: ""
  },
  { type, payload }
) => {
  switch (type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: payload.text
      };

    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: payload.sortBy
      };

    case "SET_CATEGORY":
      return {
        ...state,
        category: payload.category
      };

    default:
      return state;
  }
};
