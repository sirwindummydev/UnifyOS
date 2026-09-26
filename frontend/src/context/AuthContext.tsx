import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  login as loginApi,
  verifyToken,
  logout as logoutApi,
} from "../api/auth";
import type { LoginRequest, AuthUser, LogoutResponse } from "../api/auth";
import { Login } from "../pages/Login";

interface AuthContextType {
  user: AuthUser | null;
  token: string | null;
  isLoggedIn: boolean;
  login: (data: LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem("token");
        if (token) {
          // call the verify-token
          const token_response = await verifyToken(token);
          setUser(token_response.user);
          setToken(token);
        }
      } catch (err: any) {
        setError(err.response?.data?.detail ?? err.message);
        localStorage.removeItem("token");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const login = async (data: LoginRequest) => {
    try {
      const userLogin = await loginApi(data);
      setUser(userLogin.user);
      setToken(userLogin.token);
      localStorage.setItem("token", userLogin.token);
    } catch (err: any) {
      setError(err.response?.data?.detail ?? err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      if (token) {
        await logoutApi(token);
      }
    } catch (err: any) {
      setError(err.response?.data?.detail ?? err.message);
    } finally {
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
      setLoading(false);
    }
  };

  const isUserLoggedIn = user !== null;

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoggedIn: isUserLoggedIn,
        loading,
        error,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within the AuthProvider");
  return context;
};
