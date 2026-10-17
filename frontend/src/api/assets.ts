import apiLocal from "./axios-local";

export interface Assets {
  id: number;
  tenant_id: number;
  tenant_user_id: number;
  serial_number: string;
  item_status: string;
  asset_type: {
    id: number;
    name: string;
  };
}

export interface CreateAssetRequest {
  asset_type_id: number;
  tenant_id: number;
  tenant_user_id?: number | null;
  serial_number: string;
  item_status: string;
}

export interface AssetTypes {
  asset_type: {
    id: number;
    name: string;
  };
}

export const getAllAssets = async (): Promise<Assets[]> => {
  const response = await apiLocal.get(`apps/assets/`);
  return response.data;
};

export const getAssetTypes = async (): Promise<[AssetTypes[]]> => {
  const respose = await apiLocal.get(`apps/assettype/`);
  return respose.data;
};

export const createAsset = async (
  data: CreateAssetRequest,
): Promise<Assets> => {
  const response = await apiLocal.post(`apps/assets/`, data);
  return response.data;
};
