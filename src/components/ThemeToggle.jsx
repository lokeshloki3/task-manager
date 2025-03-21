import React, { useEffect, useState } from 'react';
import "../App.css";

const ThemeToggle = ({ filter, setFilter }) => {
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    return (
        <div className="theme-filter-container text-center flex justify-center gap-10">
            <button className="theme-toggle-btn" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>

            <select 
                className="filter-dropdown bg-white rounded-xl" 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="All">All (Draggable)</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
            </select>
        </div>
    );
};

export default ThemeToggle;
