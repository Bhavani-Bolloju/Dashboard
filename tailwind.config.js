/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "300px 1fr"
      },
      gridTemplateRows: {
        layout: "80px 1fr"
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".after-element": {
          content: '""',
          display: "block",
          position: "absolute",
          width: "100%",
          height: "100%"

          // backgroundColor: "red"
        }
      };

      addUtilities(newUtilities, ["after"]);
    }
  ]
};

