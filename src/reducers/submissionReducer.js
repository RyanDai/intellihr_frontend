const initialState = { submissions: [] };

const submissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INIT_SUBMISSIONS":
      return { ...state, submissions: action.payload };
    default:
      return state;
  }
};

export default submissionReducer;
