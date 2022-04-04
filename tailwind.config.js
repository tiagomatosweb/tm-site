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
                    'light-blue': '#009EE2',
                    'dark-blue': '#1A3761',
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
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
};
