/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      backgroundImage: {
        'home-mobile1': 'url(/images/headerBgMobile.webp)',
        'home-desktop1': 'url(/images/headerBgDesktop.webp)',
        'category-banner-left': 'url(/images/cat/category-left.jpg)',
        'category-banner-right': 'url(/images/cat/category-right.jpg)',
        'blog-header': 'url(/images/Flavor_Wheel_600dpi_White.webp)',
        'shop-header': 'url(/images/shop-baner.jpg)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '0.25rem',
        },
      },
      maxWidth: {
        'custom': '80%', // افزودن کلاس جدید با عرض 80%
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      letterSpacing: {
        tightest: '-.065em'
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
        },
        '.scrollbar-auto': {
          scrollbarWidth: 'auto',
        },
        '.scrollbar-thumb': {
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '10px',
          },
        },
        '.scrollbar-track': {
          '::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
          },
        },
        '.scrollbar': {
          '::-webkit-scrollbar': {
            width: '12px',
          },
        },
      });
    },
  ],
};