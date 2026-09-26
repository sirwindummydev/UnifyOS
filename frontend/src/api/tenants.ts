import api from "./axios";

export interface Tenant {
  id: number;
  tenant_name: string;
  tenant_subdomain: string;
  account_url: string;
}

export interface Entitlements {
  module: {
    key: string;
    name: string;
  };
  enabled: boolean;
  config: any;
}

export const getTenantBySubdomain = async (
  subdomain: string,
): Promise<Tenant> => {
  const response = await api.get(`apps/tenants/by-subdomain/${subdomain}/`);
  return response.data;
};

export const getTenantEntitlements = async (
  id: number,
): Promise<Entitlements[]> => {
  const response = await api.get(`apps/tenants/${id}/entitlements/`);
  return response.data;
};
