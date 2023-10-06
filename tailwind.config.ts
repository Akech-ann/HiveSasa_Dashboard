import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        'custom-orange': '#F59B22',
        'custom-color': '#422503',
        'custom-brown': '#422503',
        'custom-grey': '#603A16',
        'custom-oranges': '#F59B22',
        'custom-colorss': '#422503',
        'custom-blue': '#E60505',
        'custom-navyblue':'#078322',
        'custom-green':'#F48219'
      },
      backgroundColor: {
        'optimal': '#00FF00', // Green for Optimal
        'above': '#0000FF',   // Blue for Above
        'below': '#FF0000',   // Red for Below
      },
      fontFamily: {
        poppins: ['Poppins', 'sans'],
      },
    },
  },
  plugins: [],
}
export default config





