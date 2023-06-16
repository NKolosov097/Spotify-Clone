"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface IUserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: IUserProviderProps): JSX.Element => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
