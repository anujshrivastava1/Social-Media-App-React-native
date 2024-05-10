// createContext: Creates a context object for sharing data across components.

//useState : Manages state within functional components.

//UserType: Context object template created with createContext().

//UserContext: Functional component providing context with UserType.Provider wrapping children.

//children: Special prop representing nested components within UserContext.

//export { UserType, UserContext }: Exports UserType context and UserContext component for external use.

import { createContext, useState } from "react";

const UserType = createContext();

const UserContext = ({ children }) => {
  const [userId, setUserId] = useState("");
  return (
    <UserType.Provider value={{ userId, setUserId }}>
      {children}
    </UserType.Provider>
  );
};

export { UserType, UserContext };
