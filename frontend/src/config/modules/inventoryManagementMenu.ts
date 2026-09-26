import {
  UserOutlined,
  UnorderedListOutlined,
  WarningOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
  DownloadOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import type { ModuleMenu } from "./types";

export const inventoryManagementMenu: ModuleMenu = {
  moduleKey: "inventory_management",
  groupTitle: "Inventory Management",
  items: [
    {
      key: "inventory-items",
      title: "Inventory Items",
      icon: UnorderedListOutlined,
      path: "/inventory/items",
    },
    {
      key: "inventory-low-stock",
      title: "Low Stock",
      icon: WarningOutlined,
      path: "/inventory/low-stock",
    },
    {
      key: "inventory-suppliers",
      title: "Suppliers",
      icon: TeamOutlined,
      path: "/inventory/suppliers",
    },
    {
      key: "inventory-purchase-order",
      title: "Purchase Order",
      icon: ShoppingCartOutlined,
      path: "/inventory/purchase-order",
    },
    {
      key: "inventory-receiving",
      title: "Receiving",
      icon: DownloadOutlined,
      path: "/inventory/receiving",
    },
    {
      key: "inventory-transactions",
      title: "Transactions",
      icon: SwapOutlined,
      path: "/inventory/transactions",
    },

    {
      type: "divider",
    },
    {
      key: "users",
      title: "Users",
      icon: UserOutlined,
      path: "/users",
    },
  ],
};
