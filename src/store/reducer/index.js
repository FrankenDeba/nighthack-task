export const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    user: JSON.parse(localStorage.getItem("user")) || null,
    client_id: "8b603b7245eb0fbd37a9",
    redirect_uri: "http://localhost:3000/login",
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    proxy_url: process.env.REACT_APP_PROXY_URL || "http://localhost:5000/authenticate"
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN": {
        localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
        localStorage.setItem("user", JSON.stringify(action.payload.user))
        return {
          ...state,
          isLoggedIn: action.payload.isLoggedIn,
          user: action.payload.user
        };
      }
      case "LOGOUT": {
        localStorage.clear()
        return {
          ...state,
          isLoggedIn: false,
          user: null
        };
      }
      default:
        return state;
    }
  };