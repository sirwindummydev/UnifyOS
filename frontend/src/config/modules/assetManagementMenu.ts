import {
  InboxOutlined,
  PlusOutlined,
  ImportOutlined,
  TrademarkOutlined,
  AppstoreAddOutlined,
  SettingOutlined,
  ApartmentOutlined,
  AimOutlined,
  ClusterOutlined,
  HddOutlined,
} from "@ant-design/icons";

import type { ModuleMenu } from "./types";

export const assetManagementMenu: ModuleMenu = {
  moduleKey: "asset_management",
  groupTitle: "Asset Management",
  items: [
    {
      key: "assets-all",
      title: "All Assets",
      icon: InboxOutlined,
      path: "/assets/all-assets",
    },
    {
      key: "assets-add",
      title: "Add New",
      icon: PlusOutlined,
      path: "/assets/add-assets",
    },
    {
      key: "assets-import",
      title: "Import Assets",
      icon: ImportOutlined,
      path: "/assets/import-assets",
    },
    {
      key: "asset-settings",
      title: "Settings",
      icon: SettingOutlined,
      children: [
        {
          key: "assets-asset-settings-asset-domain",
          title: "Asset Domain",
          icon: HddOutlined,
          path: "/assets/asset-settings/asset-domain",
        },
        {
          key: "assets-asset-settings-asset-major-class",
          title: "Major Class",
          icon: ClusterOutlined,
          path: "/assets/asset-settings/asset-major-class",
        },
        {
          key: "assets-asset-settings-categories",
          title: "Category",
          icon: ApartmentOutlined,
          path: "/assets/asset-settings/categories",
        },
        {
          key: "assets-asset-settings-specific-type",
          title: "Specific Type",
          icon: AimOutlined,
          path: "/assets/asset-settings/specific-type",
        },
        {
          key: "assets-asset-settings-brands",
          title: "Brands",
          icon: TrademarkOutlined,
          path: "/assets/asset-settings/brands",
        },
        {
          key: "assets-asset-settings-units",
          title: "Units",
          icon: AppstoreAddOutlined,
          path: "/assets/asset-settings/units",
        },
      ],
    },
  ],
};
