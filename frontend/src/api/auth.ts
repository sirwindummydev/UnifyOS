import api from "./axios";

export interface AuthUser {
  id: number;
  username: string;
}

export interface LoginRequest {
  username: string;
  password: string;
  tenant_subdomain: string;
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
  tenant: {
    id: number;
    tenant_name: string;
  };
}

export interface VerifyTokenResponse {
  user: AuthUser;
  tenant: {
    id: number;
    tenant_name: string;
  };
}

export interface LogoutResponse {
  details: string;
}

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post(`apps/tenant_users/login/`, data);
  return response.data;
};

export const verifyToken = async (
  data: string,
): Promise<VerifyTokenResponse> => {
  const respose = await api.get(`apps/tenant_users/verify-token/`, {
    headers: { Authorization: `Token ${data}` },
  });
  return respose.data;
};

export const logout = async (data: string): Promise<LogoutResponse> => {
  const response = await api.post(
    `apps/tenant_users/logout/`,
    {},
    {
      headers: { Authorization: `Token ${data}` },
    },
  );
  return response.data;
};
