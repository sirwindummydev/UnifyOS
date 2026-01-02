import React, { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Theme = "orange" | "blue" | "green" | "yellowOrange";

const themes = {
  orange: {
    token: {
      colorPrimary: "#ffa940",
      borderRadius: 6,
    },
    components: {
      Menu: {
        itemSelectedBg: "#fff7e6",
        itemSelectedColor: "#ffa940",
        itemHoverBg: "#fff7e6",
        itemHoverColor: "#ff8c00",
        itemBg: "transparent",
        subMenuItemBg: "transparent",
        itemActiveBg: "#fff7e6",
        motionDurationSlow: "0.1s",
        motionDurationMid: "0.1s",
      },
    },
  },
  blue: {
    token: {
      colorPrimary: "#1890ff",
      borderRadius: 6,
    },
    components: {
      Menu: {
        itemSelectedBg: "#e6f7ff",
        itemSelectedColor: "#1890ff",
        itemHoverBg: "#e6f7ff",
        itemHoverColor: "#0050b3",
        itemBg: "transparent",
        subMenuItemBg: "transparent",
        itemActiveBg: "#e6f7ff",
        motionDurationSlow: "0.1s",
        motionDurationMid: "0.1s",
      },
    },
  },
  green: {
    token: {
      colorPrimary: "#389e0d",
      borderRadius: 6,
    },
    components: {
      Menu: {
        itemSelectedBg: "#f0f9e8",
        itemSelectedColor: "#389e0d",
        itemHoverBg: "#f0f9e8",
        itemHoverColor: "#237804",
        itemBg: "transparent",
        subMenuItemBg: "transparent",
        itemActiveBg: "#f0f9e8",
        motionDurationSlow: "0.1s",
        motionDurationMid: "0.1s",
      },
    },
  },
  yellowOrange: {
    token: {
      colorPrimary: "#fa8c16",
      borderRadius: 6,
    },
    components: {
      Menu: {
        itemSelectedBg: "#fff2e8",
        itemSelectedColor: "#fa8c16",
        itemHoverBg: "#fff2e8",
        itemHoverColor: "#d46b08",
        itemBg: "transparent",
        subMenuItemBg: "transparent",
        itemActiveBg: "#fff2e8",
        motionDurationSlow: "0.1s",
        motionDurationMid: "0.1s",
      },
    },
  },
};

interface ThemeContextType {
  themeName: Theme;
  theme: any;
  setThemeName: (name: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<Theme>("orange");
  const theme = themes[themeName];

  return (
    <ThemeContext.Provider value={{ themeName, theme, setThemeName }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
