const initialState = { testQuestions: [] };

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INIT_TESTS":
      //console.log("payload", action.payload);
      return { ...state, testQuestions: action.payload };
    case "EDIT_TEST":
      return state;
    default:
      return state;
  }
};

export default testReducer;
