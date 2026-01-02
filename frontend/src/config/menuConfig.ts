import {
  AppstoreOutlined,
  LockOutlined,
  UserOutlined,
  InboxOutlined,
  PlusOutlined,
  ImportOutlined,
  FolderOutlined,
  UnorderedListOutlined,
  WarningOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
  DownloadOutlined,
  SwapOutlined,
  TrademarkOutlined,
  AppstoreAddOutlined,
  SettingOutlined,
  BlockOutlined,
  ApiOutlined,
  SolutionOutlined,
  ApartmentOutlined,
  AimOutlined,
  ClusterOutlined,
  HddOutlined,
  BellOutlined,
  DropboxOutlined,
  BuildOutlined,
  BranchesOutlined,
  SafetyOutlined,
  UserAddOutlined,
  KeyOutlined,
} from "@ant-design/icons";

export const menuConfig = [
  {
    type: "divider",
  },
  {
    type: "group",
    key: "admin-group",
    title: "Admin",
  },
  {
    key: "dashboard",
    title: "Dashboard",
    icon: AppstoreOutlined,
    children: [
      {
        key: "dashboard-overview",
        title: "Overview",
        path: "/dashboard/overview",
      },
      {
        key: "dashboard-analytics",
        title: "Analytics",
        path: "/dashboard/analytics",
      },
      {
        key: "dashboard-reports",
        title: "Reports",
        path: "/dashboard/reports",
      },
    ],
  },
  {
    key: "superadmin",
    title: "Super Admin",
    icon: LockOutlined,
    children: [
      {
        key: "subscription",
        title: "Subscription",
        icon: BellOutlined,
        path: "/superadmin/subscription",
      },
      {
        key: "packages",
        title: "Packages",
        icon: DropboxOutlined,
        path: "/superadmin/packages",
      },
      {
        key: "superadmin-settings",
        title: "Settings",
        icon: SettingOutlined,
        children: [
          {
            key: "companies",
            title: "Companies",
            icon: BuildOutlined,
            path: "/superadmin/superadmin-settings/companies",
          },
          {
            key: "superadmin-branch",
            title: "Branch",
            icon: BranchesOutlined,
            path: "/superadmin/settings/branch",
          },
          {
            key: "superadmin-department",
            title: "Department",
            icon: ApartmentOutlined,
            path: "/superadmin/settings/department",
          },
          {
            key: "superadmin-team",
            title: "Team",
            icon: TeamOutlined,
            path: "/superadmin/settings/team",
          },
        ],
      },

      {
        key: "roles-management",
        title: "Roles & Permissions",
        icon: SafetyOutlined, // or UserOutlined, SecurityScanOutlined
        children: [
          {
            key: "users",
            title: "Users",
            icon: UserOutlined,
            path: "/superadmin/roles-management/users",
          },
          {
            key: "roles",
            title: "Role Setup",
            icon: SettingOutlined,
            path: "/superadmin/roles-management/roles",
          },
          {
            key: "assign-roles",
            title: "Assign Roles",
            icon: UserAddOutlined,
            path: "/superadmin/roles-management/assign-roles",
          },
          {
            key: "permissions",
            title: "Permissions",
            icon: KeyOutlined,
            path: "/superadmin/roles-management/permissions",
          },
        ],
      },
    ],
  },
  {
    type: "divider",
  },
  {
    type: "group",
    key: "asset-group",
    title: "Asset Management",
  },
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

  {
    type: "divider",
  },
  {
    type: "group",
    key: "inventory-group",
    title: "Inventory Management",
  },
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
];

export const routeToKeyMap: Record<string, { selected: string; open: string }> =
  {
    "/dashboard/overview": {
      selected: "dashboard-overview",
      open: "dashboard",
    },
    "/dashboard/analytics": {
      selected: "dashboard-analytics",
      open: "dashboard",
    },
    "/dashboard/reports": { selected: "dashboard-reports", open: "dashboard" },
    "/superadmin/companies": { selected: "companies", open: "superadmin" },
    "/superadmin/subscription": {
      selected: "subscription",
      open: "superadmin",
    },
    "/superadmin/packages": { selected: "packages", open: "superadmin" },

    "/superadmin/roles-management/roles": {
      selected: "superadmin-roles-management-roles",
      open: "superadmin",
    },
    "/assets/all-assets": { selected: "assets-all", open: "" },
    "/assets/add-assets": { selected: "assets-add", open: "" },
    "/assets/import-assets": { selected: "assets-import", open: "" },
    "/assets/categories": { selected: "assets-categories", open: "" },
    "/inventory/items": { selected: "inventory-items", open: "" },
    "/inventory/low-stock": { selected: "inventory-low-stock", open: "" },
    "/inventory/suppliers": { selected: "inventory-suppliers", open: "" },
    "/inventory/purchase-order": {
      selected: "inventory-purchase-order",
      open: "",
    },
    "/inventory/receiving": { selected: "inventory-receiving", open: "" },
    "/inventory/transactions": { selected: "inventory-transactions", open: "" },
    "/users": { selected: "users", open: "" },
    "/assets/brands": { selected: "assets-brands", open: "" },
    "/assets/units": { selected: "assets-units", open: "" },

    "/assets/asset-settings/asset-domain": {
      selected: "assets-asset-settings-asset-domain",
      open: "asset-settings",
    },
    "/assets/asset-settings/major-class": {
      selected: "assets-asset-settings-major-class",
      open: "asset-settings",
    },
    "/assets/asset-settings/categories": {
      selected: "assets-asset-settings-categories",
      open: "asset-settings",
    },
    "/assets/asset-settings/specific-type": {
      selected: "assets-asset-settings-specific-type",
      open: "asset-settings",
    },
    "/assets/asset-settings/brands": {
      selected: "assets-asset-settings-brands",
      open: "asset-settings",
    },
    "/assets/asset-settings/units": {
      selected: "assets-asset-settings-units",
      open: "asset-settings",
    },
  };
