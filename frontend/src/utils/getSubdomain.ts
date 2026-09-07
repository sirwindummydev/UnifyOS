

export const getTenantSubdomainFromHost = ():string | null =>{
    const hostname = window.location.hostname;
    const parts = hostname.split(".");
    if(hostname === "localhost" || hostname==="127.0.0.1" || parts.length < 2){
        return null;
    }
    return parts[0];

}