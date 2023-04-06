/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./layouts/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            xs: "448px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
            colors: {
                primary: "rgb(var(--primary) / <alpha-value>)",
                secondary: "rgb(var(--secondary) / <alpha-value>)",
                accent: "rgb(var(--accent) / <alpha-value>)",
                content: "rgb(var(--content) / <alpha-value>)",
                background: "rgb(var(--background) / <alpha-value>)",
                edge: "rgb(var(--edge) / <alpha-value>)",
            },
        },
    },
    plugins: [],
};
