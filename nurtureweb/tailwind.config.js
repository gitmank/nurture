const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: { default: '#133456' },
        secondary: { default: '#bfd5ef' },
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#133456",

          "secondary": "#bfd5ef",

          "accent": "#67e8f9",

          "neutral": "#6b7280",

          "base-100": "#f3f4f6",

          "info": "#93c5fd",

          "success": "#bef264",

          "warning": "#fde68a",

          "error": "#fda4af",
        },
      },
    ],
  },
}
export default config; 
