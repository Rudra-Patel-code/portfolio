import type { Config } from "tailwindcss";
// import defaultTheme from "tailwindcss/defaultTheme"
// import colors from "tailwindcss/colors"
// @ts-expect-error this is declaration file error
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette"
// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");
 

const config: Config = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            keyframes: {
                wave: {
                    "0%, 100%": { transform: "rotate(0deg)" },
                    "10%": { transform: "rotate(14deg)" },
                    "20%": { transform: "rotate(-8deg)" },
                    "30%": { transform: "rotate(14deg)" },
                    "40%": { transform: "rotate(-4deg)" },
                    "50%": { transform: "rotate(10deg)" },
                    "60%": { transform: "rotate(0deg)" },
                },
            },
            animation: {
                wave: "wave 3s infinite",
            },
        },
    },
    plugins: [
        // rest of the code
        addVariablesForColors,
      ],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
    const allColors = flattenColorPalette(theme("colors"));
    const newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
   
    addBase({
      ":root": newVars,
    });
  }
export default config;
