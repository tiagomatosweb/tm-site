const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Inter'],
        },
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
                },
                brand: {
                    'light-blue': '#009EE2',
                    'dark-blue': '#1A3761',
                },
                teal: colors.teal,
            },
        },
    },
    variants: {
        extend: {
            display: ['hover', 'focus', 'dark'],
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
};
