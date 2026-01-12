export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#0F172A',
          secondary: '#1E293B'
        },
        primary: {
          main: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB'
        },
        text: {
          primary: '#F9FAFB',
          secondary: '#E5E7EB'
        }
      },
      borderRadius: {
        'sm': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem'
      }
    }
  },
  plugins: [],
}