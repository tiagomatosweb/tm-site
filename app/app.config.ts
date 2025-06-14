export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'gray',
    },
    button: {
      variants: {
        color: {
          cta: 'text-gray-900 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-500/50 transition ease-in-out duration-1000 hover:duration-300',
        },
        size: {
          '2xl': {
            base: 'px-6 py-3 text-xl gap-3 rounded-lg font-bold',
          },
          '3xl': {
            base: 'px-8 py-4 text-2xl gap-3 rounded-xl font-bold',
          },
        },
      },
      slots: {},
    },
  },
});
