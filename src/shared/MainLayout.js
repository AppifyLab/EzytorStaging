import React, { createContext, useState } from "react";
import * as theme1 from '../themes/theme3'
// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
export const MainLayout = createContext(undefined);
export const MainDispatchLayout = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function MainLayoutProvider({ children }) {
  const [mainJson, setMainJson] = useState(theme1.theme1Data);

  return (
    <MainLayout.Provider value={mainJson}>
      <MainDispatchLayout.Provider value={setMainJson}>
        {children}
      </MainDispatchLayout.Provider>
    </MainLayout.Provider>
  );
}

// export { CustomStyleProvider, CustomStyle, CustomDispatchStyle };
export default MainLayoutProvider