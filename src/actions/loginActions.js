export const log_in = () => {
  return {
    type: "LOGIN",
  };
};

//log out when page refresh, use session storage in future.
export const log_out = () => {
  return {
    type: "LOGOUT",
  };
};
