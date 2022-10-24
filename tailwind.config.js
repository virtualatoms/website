/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "content/**/*.md", "layouts/**/*.html"],
  theme: {
    extend: {
      colors: {
        "dark": "#1A1929",
        "light": "#70727D"
      },
    },
    fontFamily: {
        'sans': ['"Work Sans"', 'Roboto', '"Open Sans"', 'sans-serif'],
        "serif": ['Eczar']
    },
  },
  plugins: [
      // require('@tailwindcss/typography'),
  ],
}
