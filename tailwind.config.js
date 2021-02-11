const brand = {
    primary: {
        50: '#3CA1FF',
        100: '#007AEA',
        200: '#004C92',
        300: '#1F264E',
    },
    gray: {
        50: '#E2E7EC',
        100: '#C2CBD4',
        200: '#7C8894',
        300: '#444D57',
        400: '#1D262F',
    },
    'blue-gray': {
        50: '#CCCEDE',
        100: '#8488A1',
        200: '#4C5169',
        300: '#2A2F4D',
        400: '#12152F',
    },
    laravel: {
        1: '#EA2D3F',
        2: '#EA583A',
    },
};

module.exports = {
    theme: {
        colors: {
            black: '#000',
            white: '#fff',
            red: {
                50: '#fff1f2',
                100: '#ffe4e6',
                200: '#fecdd3',
                300: '#fda4af',
                400: '#fb7185',
                500: '#f43f5e',
                600: '#e11d48',
                700: '#be123c',
                800: '#9f1239',
                900: '#881337',
            },
            green: {
                100: '#f0fff4',
                200: '#c6f6d5',
                300: '#9ae6b4',
                400: '#68d391',
                500: '#48bb78',
                600: '#38a169',
                700: '#2f855a',
                800: '#276749',
                900: '#22543d',
            },
            ...brand,
        },
        fontFamily: {
            sans: ['Inter'],
        },
        extend: {
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
