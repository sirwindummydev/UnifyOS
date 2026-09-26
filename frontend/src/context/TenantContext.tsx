import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { getTenantBySubdomain, getTenantEntitlements } from "../api/tenants";
import type { Tenant, Entitlements } from "../api/tenants";
import { getTenantSubdomainFromHost } from "../utils/getSubdomain";

interface TenantContextType {
  tenant: Tenant | null;
  entitlements: Entitlements[];
  loading: boolean;
  error: string | null;
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

const DEV_FALLBACK_SUBDOMAIN = "ambas";

export const TenantProvider = ({ children }: { children: ReactNode }) => {
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [entitlements, setEntitlements] = useState<Entitlements[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // updated way of processing the promise using async/await
  useEffect(() => {
    const fetchTenantData = async () => {
      try {
        const subdumain =
          getTenantSubdomainFromHost() ?? DEV_FALLBACK_SUBDOMAIN;

        const tenant = await getTenantBySubdomain(subdumain);
        setTenant(tenant);

        const entitlements = await getTenantEntitlements(tenant.id);
        setEntitlements(entitlements);
      } catch (err: any) {
        setError(err.response?.data?.detail ?? err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTenantData();
  }, []);

  return (
    <TenantContext.Provider value={{ tenant, entitlements, loading, error }}>
      {children}
    </TenantContext.Provider>
  );
};

export const useTenant = () => {
  const context = useContext(TenantContext);
  if (!context) throw new Error("useTenant must be used within TenantProvider");
  return context;
};
