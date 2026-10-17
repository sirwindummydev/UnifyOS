import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";
import SectionHeader from "../../components/common/SectionHeader";
import ActionButton from "../../components/common/ActionButton";
import type { ColumnsType } from "antd/es/table";
import { ConfigProvider, Space, Tag } from "antd";
import { ImportOutlined } from "@ant-design/icons";
import SectionTable from "../../components/common/SectionTable";
import { getAllAssets, getAssetTypes, type Assets } from "../../api/assets";
import { useTheme } from "../../context/ThemeContext";
import CreateAssetModal from "./modals/AddAssetModal";

interface AllAssetsProps {
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  assetId?: string;
  name?: string;
  category?: string;
  status?: string;
  branch?: string;
  department?: string;
  team?: string;
  assignedTo?: string;
  purchaseDate?: string;
  tableComponent?: ReactNode;
  token?: string;
}

const AllAssets = (props: AllAssetsProps) => {
  const { theme } = useTheme();
  const [assets, setAssets] = useState<Assets[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const asset_data = await getAllAssets();
      const asset_types = await getAssetTypes();
      console.log(asset_data);
      console.log(asset_types);
      //after fetching the asset type data, save it to local storage

      setAssets(asset_data);
    };
    fetchData();
  }, []);

  // const handleCreateNewAsset = async (data: CreateAssetRequest) => {
  //   const response = await createAsset(data);
  //   return response.data;
  // };
  const { title = "All Assets", subtitle = "List of all assets" } = props;

  const STATUS_COLORS: Record<string, string> = {
    assigned: "green",
    in_storage: "orange",
    retired: "red",
    refurbished: "gray",
    under_repair: "black",
  };

  const columns: ColumnsType<Assets[]> = [
    {
      title: "Asset ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Tenant ID",
      dataIndex: "tenant_id",
      key: "tenant_id",
    },
    {
      title: "Tenant User ID",
      dataIndex: "tenant_user_id",
      key: "tenant_user_id",
    },

    {
      title: "Serial Number",
      dataIndex: "serial_number",
      key: "serial_number",
    },

    {
      title: "Status",
      dataIndex: "item_status",
      key: "item_status",

      render: (item_status: string) => (
        <Tag color={STATUS_COLORS[item_status] ?? "blue"}>
          {item_status.toUpperCase()}
        </Tag>
      ),
    },

    {
      title: "Asset Type",
      dataIndex: "asset_type",
      key: "asset_type",
      render: (asset_type: Assets["asset_type"]) => {
        return asset_type.name;
      },
    },
  ];

  return (
    <ConfigProvider theme={theme}>
      <div>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <SectionHeader
            title={title}
            subtitle={subtitle}
            actions={[
              <ActionButton
                key="add"
                label="Add New Asset"
                icon="+"
                token="primary"
                onClick={() => setIsModalOpen(true)}
              />,
              <ActionButton
                key="export"
                label="Import Assets"
                icon={<ImportOutlined />}
                token="contrast"
              />,
            ]}
          />
          <SectionTable columns={columns} dataSource={assets} />
        </Space>
        <CreateAssetModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </ConfigProvider>
  );
};

export default AllAssets;
