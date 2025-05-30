import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3270DD',
        stroke: '#f0f4f9',
        grey: '#686c72',
        black: '#030B17',
        white: '#ffffff',
      },
      fontFamily: {
        golos: ['var(--font-golos)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
