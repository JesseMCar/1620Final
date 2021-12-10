

function togglemode() {
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme"); 
}



const toggle = document.getElementById('toggle')

toggle.addEventListener("click", togglemode)
