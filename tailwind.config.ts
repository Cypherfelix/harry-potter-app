import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 0.3s linear",
        "wiggle-opposite": "wiggleOpposite 0.3s linear",
      },
      colors: {
        "app-pure-white": "hsl(0, 0%, 100%)", // #FFFFFF
        "app-red": "hsl(0, 97%, 63%)", // #FC4747
        "app-dark-blue": "hsl(223, 30%, 9%)", // #10141E
        "app-semi-dark-blue": "hsl(223, 36%, 14%)", // #161D2F
        "app-greyish-blue": "hsl(223, 23%, 46%)", // #5A698F
        "app-grey": "hsl(225, 3%, 77%)", // #C3C4C7
        "app-placeholder": "hsl(223, 3%, 54%)", // #87898E
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "skewY(0deg)" },
          "50%": { transform: "skewY(-3deg)" },
        },
        wiggleOpposite: {
          "0%, 100%": { transform: "skewY(0deg)" },
          "50%": { transform: "skewY(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config
