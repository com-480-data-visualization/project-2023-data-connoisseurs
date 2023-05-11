const {blackA, mauve, violet} = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                ...blackA,
                ...mauve,
                ...violet,
            },
        },
    },
    plugins: [],
};
