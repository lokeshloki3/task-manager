import React, { useEffect, useState } from 'react'
import "../App.css";

const ThemeToggle = () => {

    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

    useEffect(() => {
        document.body.className = darkMode ? "dark-mode" : "";
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <div className='text-center'>
            <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
        </div>
    )
}

export default ThemeToggle;