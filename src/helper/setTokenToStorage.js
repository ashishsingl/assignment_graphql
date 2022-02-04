const setTokenToStorage = (authToken) => {
  if (localStorage.getItem("token") === null) {
    localStorage.setItem("token", JSON.stringify(authToken));
  } else {
    console.log("Token available in storage");
  }
};

export default setTokenToStorage;
