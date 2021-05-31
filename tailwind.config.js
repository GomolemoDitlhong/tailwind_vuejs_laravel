module.exports = {
    purge: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
            },

            fontFamily: {
                sans: ['Lato', 'sans-serif'],
                serif: ['Lato', 'serif'],
              },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
