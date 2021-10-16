const colors = require('tailwindcss/colors');

module.exports = {
    theme: {
        // colors: {
        //     black: '#000',
        //     white: '#fff',
        //     red: {
        //         50: '#fff1f2',
        //         100: '#ffe4e6',
        //         200: '#fecdd3',
        //         300: '#fda4af',
        //         400: '#fb7185',
        //         500: '#f43f5e',
        //         600: '#e11d48',
        //         700: '#be123c',
        //         800: '#9f1239',
        //         900: '#881337',
        //     },
        //     green: {
        //         100: '#f0fff4',
        //         200: '#c6f6d5',
        //         300: '#9ae6b4',
        //         400: '#68d391',
        //         500: '#48bb78',
        //         600: '#38a169',
        //         700: '#2f855a',
        //         800: '#276749',
        //         900: '#22543d',
        //     },
        //     ...brand,
        // },
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
