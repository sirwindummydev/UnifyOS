import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { getTenantBySubdomain } from "../api/tenants";
import type { Tenant } from "../api/tenants";
import { getTenantSubdomainFromHost } from "../utils/getSubdomain";

interface TenantContextType {
  tenant: Tenant | null;
  loading: boolean;
  error: string | null;
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

const DEV_FALLBACK_SUBDOMAIN = "ambas";

export const TenantProvider = ({ children }: { children: ReactNode }) => {
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const subdomain = getTenantSubdomainFromHost() ?? DEV_FALLBACK_SUBDOMAIN;

    getTenantBySubdomain(subdomain)
      .then((data) => setTenant(data))
      .catch((err) => setError(err.response?.data?.detail ?? err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <TenantContext.Provider value={{ tenant, loading, error }}>
      {children}
    </TenantContext.Provider>
  );
};

export const useTenant = () => {
  const context = useContext(TenantContext);
  if (!context) throw new Error("useTenant must be used within TenantProvider");
  return context;
};