import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                inter: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    light: "#4A90E2",
                    DEFAULT: "#276FBF",
                    dark: "#1A5276",
                },
                secondary: {
                    light: "#FFCE7A",
                    DEFAULT: "#FFB84D",
                    dark: "#D48835",
                },
                accent: {
                    light: "#4ADE80",
                    DEFAULT: "#22C55E",
                    dark: "#166534",
                },
                background: {
                    light: "#F8FAFC",
                    DEFAULT: "#E2E8F0",
                    dark: "#CBD5E1",
                },
                text: {
                    primary: "#1E293B",
                    secondary: "#475569",
                },
            },
            borderRadius: {
                DEFAULT: "8px",
                md: "10px",
                lg: "12px",
            },
        },
    },

    plugins: [forms, require("daisyui")],
};
