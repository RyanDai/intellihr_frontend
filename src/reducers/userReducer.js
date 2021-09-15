const initialState = { users: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INIT_USERS":
      return { ...state, users: action.payload };
    case "ADD_USER":
      return state;
    default:
      return state;
  }
};

export default userReducer;
