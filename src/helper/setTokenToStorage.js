const setTokenToStorage = (authToken = "") => {
  localStorage.setItem("token", authToken);
};

export default setTokenToStorage;
