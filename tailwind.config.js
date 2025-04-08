/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: "#023a51", // Replace with your desired color
        secondary: "#023a51",
        min: "#2cbc64",
        primarybg: "#023a5110", // Replace with your desired color
        darkLvl1: "#121212", // For Dark Mode Body Background
        darkLvl2: "#282828", // For Dark Mode Cards Background
        darkLvl3: "#3f3f3f", // For chips buttons, dropdowns background color
        darkLvl4: "#575757", // For sidebars, navbar background color
        darkLvl5: "#717171",
        darkLvl6: "#8b8b8b",
        darkLvl7: "#D0D0D0",
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}
