import { Config } from "tailwindcss";
export default <Config>{
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {},
  },
};
