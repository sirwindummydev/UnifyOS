import api from "./axios"

export interface Tenant {
    id: number;
    tenant_name: string;
    tenant_subdomain: string;
    account_url: string;
}

export const getTenantBySubdomain  = async(subdomain: string):Promise<Tenant>=>{
    const response = await api.get(`apps/tenants/by-subdomain/${subdomain}/`);
    return response.data;
}


