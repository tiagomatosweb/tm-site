const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'media',
    theme: {
        fontFamily: {
            sans: ['Inter'],
        },
        extend: {
            colors: {
                gray: colors.coolGray,
                brand: {
                    blue: {
                        900: '#1A3761',
                    },
                    dark: {
                        100: '#152642',
                        200: '#091528',
                        300: '#030C1B',
                    },
                },
            },
            opacity: {
                80: '0.8',
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
