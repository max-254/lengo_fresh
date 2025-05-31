/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f0',
          100: '#dcf1dc',
          200: '#bde4bd',
          300: '#93d093',
          400: '#67b667',
          500: '#4CAF50',
          600: '#3e8a3e',
          700: '#336d33',
          800: '#2E7D32',
          900: '#1b411b',
        },
        secondary: {
          50: '#f7f4f2',
          100: '#ece6e1',
          200: '#d9ccc3',
          300: '#c0ac9f',
          400: '#a88d7d',
          500: '#8D6E63',
          600: '#715850',
          700: '#5a4640',
          800: '#473731',
          900: '#332924',
        },
        accent: {
          50: '#fff8e1',
          100: '#ffecb3',
          200: '#ffe082',
          300: '#ffd54f',
          400: '#ffca28',
          500: '#ffc107',
          600: '#ffb300',
          700: '#ffa000',
          800: '#FF8F00',
          900: '#ff6f00',
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Nunito Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        'about-pattern': "url('https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      },
    },
  },
  plugins: [],
};