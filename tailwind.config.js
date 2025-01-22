/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        layout: "300px 1fr",
        "form-layout": "40% 1fr"
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
          height: "100%",
          top: 0,
          left: 0,
          borderRadius: "50%",
          transform: "scale(1.5)",
          border: "1px solid #6366f1"

          // backgroundColor: "red"
        },
        ".after-element-tick": {
          content: "'✔'",
          display: "block",
          position: "absolute",
          width: "100%",
          height: "100%",
          fontSize: "12px",
          top: 0,
          left: 0,
          fontWeight: "bold",
          color: "white"
        },
        ".after-incomplete": {
          content: "''",
          display: "block",
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          borderRadius: "50%",
          transform: "scale(1.2)",
          border: "1px solid #6b7280"
        }
      };

      addUtilities(newUtilities, ["after"]);
    }
  ]
};

// after:scale-150 after:border after:border-blue-500

