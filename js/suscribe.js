let password = 123456; 

function pass() {
    if(password.length < 8) { 

    console.log("Au moins un symbole, un chiffre, ainsi que 6 caractères minimum - faible"); 

    } else if(password.search(/[a-z]/) < 0) { 

    console.log("Au moins un symbole, un chiffre, ainsi que 6 caractères minimum - moyen"); 

    } else if(password.search(/[A-Z]/) < 0) { 

    console.log("Au moins un symbole, un chiffre, ainsi que 6 caractères minimum - fort"); 

    } else { 

    console.log("Success!"); 

    } 
}