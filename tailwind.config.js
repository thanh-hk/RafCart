/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    screen: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
   
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#fd3d57",
        white:"#fff",
        gray:"#1F2937",
      },
    },
  },
  plugins: [],
}