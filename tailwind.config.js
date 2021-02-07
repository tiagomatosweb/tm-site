const brand = {
    primary: {
        50: '#004C92',
        100: '#007AEA',
        200: '#3CA1FF',
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
        // require('@tailwindcss/forms'),
        // require('@tailwindcss/aspect-ratio'),
        // require('@tailwindcss/typography'),
    ],
};
