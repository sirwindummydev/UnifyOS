import type { ReactNode } from "react";
import { Row, Col, Typography, Space } from "antd";
import { useTheme } from "../../context/ThemeContext";

const { Title, Text } = Typography;

type HeaderSize = "small" | "default" | "large";

// One place to control title sizes for every SectionHeader
const TITLE_LEVEL: Record<HeaderSize, 2 | 3 | 4 | 5> = {
  small: 5,
  default: 4,
  large: 3,
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  extra?: ReactNode;
  titleColor?: string;
  actions?: ReactNode;
  token?: "primary" | "contrast";
  size?: HeaderSize;
}

const SectionHeader = ({
  title,
  subtitle,
  extra,
  titleColor,
  actions,
  token,
  size = "default",
}: SectionHeaderProps) => {
  const { theme } = useTheme();
  const themeColor =
    token === "primary" ? theme.token.colorPrimary : theme.token.colorContrast;

  return (
    <Row align="bottom" justify="space-between" gutter={[16, 16]}>
      <Col>
        <Title
          level={TITLE_LEVEL[size]}
          style={{ color: titleColor || themeColor, margin: 0 }}
        >
          {title}
        </Title>
        {subtitle && <Text type="secondary">{subtitle}</Text>}
        {extra}
      </Col>
      {actions && (
        <Col>
          <Space wrap>{actions}</Space>
        </Col>
      )}
    </Row>
  );
};

export default SectionHeader;
