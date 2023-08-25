import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue: "#345FF6",
      gunmetal: "#253347",
      darkElectricBlue: "#5E6E85",
      borders: "#D8E2E7",
      white: "#FFFFFF",
    },
    fontSize: {
      headingXL: ["64px", "110%"],
      headingL: ["48px", "110%"],
      headingM: ["24px", "110%"],
      headingS: ["20px", "110%"],
      bodyM: ["16px", "150%"],
      bodyS: ["14px", "150%"],
    },
    extend: {},
  },
  plugins: [],
}
export default config
