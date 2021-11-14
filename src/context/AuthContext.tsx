import * as React from "react";
import type { FC, ReactNode } from "react";
import useSWR from "swr";

import { API_URL } from "~/config/config";

import Backdrop from "~/components/block/Backdrop";

const AuthContext = React.createContext({});

export function useAuthContext() {
  return React.useContext(AuthContext);
}

type Props = {
    children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const { data, error } = useSWR(`${API_URL}/api/v1/auth/auth`);

  const loading = !data && !error;

  return (
    <AuthContext.Provider value={data}>
      {loading ? (
        <Backdrop open={loading} />
      ) : error ? (
        <>現在メンテナンス中です</>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}
