export const ROUTER = {
  LOGIN: {
    path: "/login",
    label: "Login",
    sidebarVisible: false,
    icon: null,
  },
  DASHBOARD: {
    path: "/",
    label: "Dashboard",
    sidebarVisible: true,
    icon: null,
  },
};

export const routerArrReturn = () => {
  let routerKeys = Object.keys(ROUTER);
  let returnArr = [];

  for (let i = 0; i < routerKeys.length; i++) {
    returnArr.push(ROUTER[routerKeys[i]]);
  }

  return returnArr;
};
