export const log_in = (value) => {
  return {
    type: "LOGIN",
    payload: value,
  };
};

//log out when page refresh, use session storage in future.
export const log_out = () => {
  return {
    type: "LOGOUT",
  };
};
