import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        gray: "#D9D9D9",
        white: "#FFFFFF",
        black: "#000000",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        "secondary-semi": "rgba(37,49,67, 0.9)",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundImage: {
        pattern:
          "url(\"data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='34.129' height='45' patternTransform='scale(3) rotate(25)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(18, 0%, 100%, 1)'/><path d='M2.51 1.597A23.682 23.682 0 000 1.72v32.65c2.18-2 4.176-4.072 5.844-5.915 3.188-3.523 9.14-2.133 10.242 2.488a5.048 5.048 0 01-.467 3.649c-1.5 2.829-3.843 2.848-5.616 2.316-1.343-.403-2.579.882-2.085 2.193.878 2.334 3.46 4.9 10.724 4.18 5.05-.5 10.712-4.53 15.487-8.911V1.72c-7.355.728-16.01 8.948-21.33 14.827-3.188 3.522-9.14 2.133-10.242-2.489a5.05 5.05 0 01.466-3.648C4.525 7.58 6.867 7.56 8.64 8.092c1.342.403 2.578-.88 2.085-2.192-.77-2.042-2.842-4.262-8.214-4.303z'  stroke-width='1' stroke='none' fill='hsla(211, 34%, 65%, 1)'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>\")",
      },
      boxShadow: {
        diagonal: "6px 6px 5px 2px var(--shadow)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      ripple: (theme: any) => ({
        colors: theme("colors"),
      }),
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
