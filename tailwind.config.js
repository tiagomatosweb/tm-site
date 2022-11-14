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
                    900: '#1B2026',
                    800: '#262D36',
                    700: '#444B55',
                    600: '#58616E',
                    500: '#6B7480',
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
