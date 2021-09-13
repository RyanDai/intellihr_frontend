export const setInitUsers = (value) => {
  return {
    payload: value,
    type: "SET_INIT_USERS",
  };
};

export const addUser = (value) => {
  return {
    payload: value,
    type: "ADD_USER",
  };
};
