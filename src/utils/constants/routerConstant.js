import { Grid } from "react-feather";

const WRAPPER = {
  COMPONENTS1: {
    label: "Components1",
    key: "COMPONENTS1",
    icon: Grid,
  },

  COMPONENTS2: {
    label: "Components2",
    key: "COMPONENTS2",
    icon: Grid,
  },
};

export const ROUTER = {
  LOGIN: {
    path: "/login",
    label: "Login",
    icon: null,
    sidebarVisible: false,
  },

  DASHBOARD: {
    path: "/",
    label: "Dashboard",
    icon: Grid,
    sidebarVisible: true,
  },

  TYPOGRAPHY: {
    path: "/typography",
    label: "Typography",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "COMPONENTS1",
  },

  TEXTFIELD: {
    path: "/text-field",
    label: "TextField",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "COMPONENTS1",
  },

  BUTTON: {
    path: "/button",
    label: "Button",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "COMPONENTS1",
  },

  DIALOG: {
    path: "/dialog",
    label: "Dialog",
    icon: null,
    sidebarVisible: true,
    isWrapper: true,
    wrapperKey: "COMPONENTS2",
  },
};

export const sidebarRouterArrReturn2 = () => {
  let returnArr = [];
  let routerKeys = Object.keys(ROUTER);

  for (let i = 0; i < routerKeys.length; i++) {
    if (ROUTER[routerKeys[i]].sidebarVisible) {
      if (ROUTER[routerKeys[i]].isWrapper) {
        let isWrapperKeyIncludes = false;
        let kCount = -1;

        for (let k = 0; k < returnArr.length; k++) {
          if (returnArr[k].key === ROUTER[routerKeys[i]].wrapperKey) {
            isWrapperKeyIncludes = true;
            kCount = k;
          }
        }

        if (isWrapperKeyIncludes) {
          returnArr[kCount].routers.push(ROUTER[routerKeys[i]]);
        } else {
          let wrapperObj = WRAPPER[ROUTER[routerKeys[i]].wrapperKey];
          wrapperObj.routers = [ROUTER[routerKeys[i]]];
          returnArr.push(wrapperObj);
        }
      } else {
        returnArr.push(ROUTER[routerKeys[i]]);
      }
    }
  }

  return returnArr;
};
