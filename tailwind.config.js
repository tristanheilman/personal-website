module.exports = {
    content: [
        "./src/components/*.{js,jsx,ts,tsx}",
        "./src/views/*.{js,jsx,ts,tsx}",
        "./src/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'foreground': '#222222',
                'lucario': '#263E52',
                'scoopt': '#91B2F9',
                'pad': '#1e1e1e',
            },
            transitionProperty: {
                'height': 'height',
            }
        },
    },
    plugins: [],
}
