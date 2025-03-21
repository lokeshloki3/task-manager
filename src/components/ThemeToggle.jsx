import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {

    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

    useEffect(() => {
        document.body.className = darkMode ? "dark-mode" : "";
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
    )
}

export default ThemeToggle;