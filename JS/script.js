

function togglemode() {
        document.body.classList.toggle("light-theme");
        document.body.classList.toggle("dark-theme"); 
}



const toggle = document.getElementById('toggle')

toggle.addEventListener("click", togglemode)


var SaveButton = document.getElementById("frm-btn")
SaveButton.addEventListener("click", (evt) => {
    namecontact = document.getElementById('name')[0].value
    email = document.getElementById('email')[0].value
    message = document.getElementById('msg')[0].value

    NewContact = {
        name: namecontact,
        email: email,
        message: address, 
    }
    console.log(NewContact)
})