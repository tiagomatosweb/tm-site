const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
    ],
    theme: {
        extend: {
            colors: {
                gray: {
                    50: '#FAFAFA',
                    100: '#F4F4F5',
                    200: '#E3E5E8',
                    300: '#D2D5DA',
                    400: '#9DA3AE',
                    500: '#6C727F',
                    600: '#4F545E',
                    700: '#3D4148',
                    800: '#25272C',
                    900: '#17191C',
                    1000: '#111213',
                },
                brand: {
                    'light-blue': '#009EE2',
                    'dark-blue': '#1A3761',
                    'teal': '#00cabe',
                },
            },
        },
    },
    variants: {
        extend: {
            display: ['hover', 'focus', 'dark'],
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
