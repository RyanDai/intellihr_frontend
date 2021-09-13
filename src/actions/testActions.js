export const setInitTests = (value) => {
  return {
    payload: value,
    type: "SET_INIT_TESTS",
  };
};

export const editTest = (value) => {
  return {
    payload: value,
    type: "EDIT_TEST",
  };
};
