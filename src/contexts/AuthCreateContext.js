import { createContext, useReducer, useEffect } from "react";
import { setSession, isValidToken } from "../service/jwt";
import { postData } from "../service/network";
import { HTTP_TYPE, PATH } from "../utils/constants/apiConstant";

const INITIALIZE = "INITIALIZE";
const SIGN_IN = "SIGN_IN";

const initialState = {
  email: null,
  userName: null,
  userToken: null,
  isAuthenticated: false,
  isInitialized: false,
  isAdmin: false,
};

const JWTReducer = (state, action) => {
  switch (action.type) {
    case INITIALIZE:
      return {
        ...state,
        email: action.payload.email,
        userName: action.payload.name,
        userToken: action.payload.token,
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
      };
    case SIGN_IN:
      return {
        ...state,
        email: action.payload.email,
        userName: action.payload.name,
        userToken: action.payload.token,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(JWTReducer, initialState);

  useEffect(() => {
    const initialize = async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          //! Bu aşamada backendden bu kullanıcının bilgileri istenebilir.
          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: true,
              email: "Hazır değil",
              name: "Hazır değil",
              token: accessToken,
            },
          });
        } else {
          dispatch({
            type: INITIALIZE,
            payload: {
              isAuthenticated: false,
              email: null,
              name: null,
              token: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: INITIALIZE,
          payload: {
            isAuthenticated: false,
            email: null,
            name: null,
            token: null,
          },
        });
      }
    };

    initialize();
  }, []);

  const signIn = async (emailAdress, password, callback) => {
    try {
      const data = {
        email: emailAdress,
        password: password,
      };
      const response = await postData(HTTP_TYPE.POST, PATH.LOGIN, data);

      const resData = response.data.data;
      setSession(resData.token);
      dispatch({
        type: SIGN_IN,
        payload: {
          ...resData,
          isAuthenticated: true,
        },
      });
      return callback();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
