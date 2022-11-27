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
                    // Zinc
                    // 50: '#fafafa',
                    // 100: '#f4f4f5',
                    // 200: '#e4e4e7',
                    // 300: '#d4d4d8',
                    // 400: '#a1a1aa',
                    // 500: '#71717a',
                    // 600: '#52525b',
                    // 700: '#3f3f46',
                    // 800: '#27272a',
                    // 900: '#18181b',

                    // Zinc modified
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

                    // New colors
                    // 900: '#1B2026',
                    // 800: '#262D36',
                    // 700: '#444B55',
                    // 600: '#58616E',
                    // 500: '#6B7480',
                    // 400: '#9CA3AF',
                    // 300: '#D1D5DB',
                    // 200: '#E5E7EB',
                    // 100: '#F3F4F6',
                    // 50: '#F9FAFB',
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
