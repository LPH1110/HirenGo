/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                scrollIn: {
                    from: { transform: 'translate(0, -100%)', opacity: 0 },
                    to: { transform: 'translate(0, 0)', opacity: 1 },
                },
                slideLeftIn: {
                    from: { transform: 'translate(-120%, 0)', opacity: 0 },
                    to: { transform: 'translate(0, 0)', opacity: 1 },
                },
            },
            animation: {
                'scroll-in': 'scrollIn 1.5s ease',
                'slide-l-in': 'slideLeftIn 1.5s ease',
            },
        },
    },
    plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' }), require('daisyui')],
};
