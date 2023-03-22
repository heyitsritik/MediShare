let card ;
const user= ['ritik@gmail.com','manish@gmail.com','user@gmail.com'];
const pwd = 123;
function login_signUp()
{
    document.getElementById("signUp").addEventListener("submit", function(event){
        card.style.transform = 'rotateY(0deg)';
        event.preventDefault(); 
    });

    card = document.getElementById('card');
}


function flip()
{
    card.style.transform = 'rotateY(180deg)';
}

function openLogin()
{
    window.open('login.html','_self')
}

// var Name= document.getElementById("name");


