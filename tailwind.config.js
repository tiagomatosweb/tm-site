const colors = require('tailwindcss/colors');

module.exports = {
    darkMode: 'class',
    theme: {
        fontFamily: {
            sans: ['Inter'],
        },
        extend: {
            colors: {
                gray: colors.blueGray,
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
