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
                    900: '#1A2026',
                    800: '#242D38',
                    700: '#404A59',
                    600: '#556071',
                    500: '#677384',

                    400: '#9CA3AF',
                    300: '#D1D5DB',
                    200: '#E5E7EB',
                    100: '#F3F4F6',
                    50: '#F9FAFB',
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
