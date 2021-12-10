

function togglemode() {
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme"); 
}

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}


function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setTheme('dark-theme');
    } else {
        setTheme('light-theme');
    }
}