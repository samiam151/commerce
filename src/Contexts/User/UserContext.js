import React, { useState } from "react";

export const UserContext = React.createContext();

const Users = [
  {
    username: "admin",
    email: "admin@yourcompany.com",
    password: "store",
    addresses: {
      shipping: [
        {
          firstName: "Test",
          lastName: "Admin",
          address1: "14399 Penrose Place",
          address2: "Suite 450",
          city: "Chantilly",
          state: "Va",
          zip: "22553",
          default: true
        }
      ],
      billing: [
        {
          firstName: "Test",
          lastName: "Admin",
          address1: "14399 Penrose Place",
          address2: "Suite 450",
          city: "Chantilly",
          state: "Va",
          zip: "22553",
          default: true
        }
      ]
    }
  }
];

export function UserContextProvider({ children, ...props }) {
  const [activeUser, setActiveUser] = useState(null);

  function authenticateUser(email, password) {
    let user = Users.find(user => {
      return user.email === email && user.password === password;
    });
    if (user !== undefined) {
      setActiveUser(user);
      return true;
    }
    return false;
  }

  function logOut() {
    setActiveUser(null);
  }

  const initialState = {
    activeUser: activeUser,
    authenticateUser: authenticateUser,
    logOutUser: logOut
  };
  return (
    <UserContext.Provider value={initialState}>{children}</UserContext.Provider>
  );
}
