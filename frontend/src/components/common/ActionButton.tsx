import React from "react";
import type { ReactNode } from "react";
import { Button } from "antd";
import { useTheme } from "../../context/ThemeContext";

interface ActionButtonProps {
  icon?: ReactNode;
  label: string;
  color?: string; // background color
  textColor?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  fontSize?: number;
  disabled?: boolean;
  token?: string;
}

const ActionButton = (props: ActionButtonProps) => {
  const { theme } = useTheme();
  const colorPrimary = theme.token.colorPrimary;
  const colorContrast = theme.token.colorContrast;
  const themeColor = props.token === "primary" ? colorPrimary : colorContrast;
  const {
    icon,
    label,
    color = props.color,
    textColor = "#fff",
    onClick,
    style,
    fontSize = 14,
    disabled = false,
  } = props;
  return (
    <Button
      type="primary"
      icon={icon}
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: color || themeColor,
        color: textColor,
        borderColor: color,
        fontSize: fontSize,
        marginRight: 5,
        padding: "16px 16px",
        // marginTop: 120,
        // display: "flex",
        // alignItems: "center",
        gap: icon ? 6 : 0,
        ...style,
      }}
    >
      {label}
    </Button>
  );
};

export default ActionButton;
