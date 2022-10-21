import { Config } from "tailwindcss";

export default <Config & any>{
  darkMode: "class",
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#10b981",
          secondary: "#0d9488",
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#10b981",
          secondary: "#0d9488",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
};
