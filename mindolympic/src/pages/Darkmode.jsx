import { useState, useEffect } from "react";

export default function Darkmode() {
    const [dark, setDark] = useState(
        () =>
            localStorage.getItem("theme") === "dark" ||
            (window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
    );

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [dark]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 transition-colors duration-300">
            <button
                onClick={() => setDark((d) => !d)}
                className="mb-8 px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow"
            >
                Toggle {dark ? "Light" : "Dark"} Mode
            </button>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {dark ? "Dark Mode" : "Light Mode"}
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
                This is a simple dark mode example using React, Vite, and Tailwind CSS.
            </p>
        </div>
    );
}