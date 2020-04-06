import React from "react";
import catalogStore from "./catalog";

const storeContext = React.createContext({
  catalogStore,
});

const useStores = () => React.useContext(storeContext);

export default useStores;
