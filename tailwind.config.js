const colors = require('tailwindcss/colors');

module.exports = {
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
                        100: '#091528',
                        200: '#0B192F',
                        300: '#152642',
                        400: '#2F4562',
                    },
                },
            },
            opacity: {
                80: '0.8',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
    ],
};
