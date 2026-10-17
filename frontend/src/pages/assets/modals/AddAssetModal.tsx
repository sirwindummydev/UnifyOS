import { IdcardOutlined, SecurityScanOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Form, Input, Modal, Select } from "antd";
import { useTheme } from "../../../context/ThemeContext";

interface CreateAssetModalProps {
  open: boolean;
  onClose: () => void;
}

const STATUS_SELECTION = [
  { value: "in_storage", label: "In Storage" },
  { value: "assigned", label: "Assigned" },
  { value: "under_repair", label: "Under Repair" },
  { value: "retired", label: "Retired" },
  { value: "refurbished", label: "Refurbished" },
];

const ASSET_TYPE_OPTIONS = [
  { value: "1", label: "Rover" },
  { value: "2", label: "Printer" },
  { value: "3", label: "KWH Meter" },
  { value: "4", label: "Transformer" },
];

const CreateAssetModal = ({ open, onClose }: CreateAssetModalProps) => {
  const { theme } = useTheme();
  return (
    <ConfigProvider theme={theme}>
      <Modal title="Add New Asset" open={open} onCancel={onClose} footer={null}>
        <Form>
          <Form.Item
            rules={[{ required: true, message: "Required" }]}
            layout="vertical"
            label={
              <span>
                Tenant User ID.<span style={{ color: "red" }}>*</span>
              </span>
            }
            name="tenant_user_id"
          >
            <Input
              placeholder="User ID"
              suffix={<IdcardOutlined style={{ opacity: 0.5 }} />}
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Required" }]}
            layout="vertical"
            label={
              <span>
                Serial no.<span style={{ color: "red" }}>*</span>
              </span>
            }
            name="serial_number"
          >
            <Input
              placeholder="Serial Number"
              suffix={<SecurityScanOutlined style={{ opacity: 0.5 }} />}
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: "Required" }]}
            layout="vertical"
            label={
              <span>
                Asset Type<span style={{ color: "red" }}>*</span>
              </span>
            }
            name="asset_type_id"
          >
            <Select
              showSearch={{ optionFilterProp: "label" }}
              options={ASSET_TYPE_OPTIONS}
            />
          </Form.Item>

          <Form.Item
            layout="vertical"
            label={
              <span>
                Status<span style={{ color: "red" }}>*</span>
              </span>
            }
            name="item_status"
          >
            <Select options={STATUS_SELECTION} />
          </Form.Item>

          <Button
            style={{
              width: "100%",
              background: "#fa8c16",
              borderColor: "#fa8c16",
            }}
            type="primary"
            htmlType="submit"
          >
            Add New Asset
          </Button>
        </Form>
      </Modal>
    </ConfigProvider>
  );
};

export default CreateAssetModal;
