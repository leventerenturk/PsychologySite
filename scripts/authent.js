
function googleLogin(){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    //Pop up Window
    firebase.auth().signInWithPopup(provider).then(function() {
        //After Login page opens
        console.log("Signed in with Google");
    }).catch(function (error){
        var errorMessage = error.message;
        alert(errorMessage);
    })
}


  
//listen fo authentication status change
authent.onAuthStateChanged(user => {
    if(user){
        console.log("user logged in:",user);
        //window.location = 'userPage.html';
    }
    else{
        console.log("User has logged out");
    }
    
})

//signup
const signupform = document.querySelector('#signup-form');
signupform.addEventListener('submit',(e) => {
    e.preventDefault();

    //Get User Info
    const email = signupform['signup-email'].value;
    const password = signupform['signup-password'].value;

    console.log(email, password);
    //sign up user
    authent.createUserWithEmailAndPassword(email,password).then(cred => {
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupform.reset();
    })

});


//Logout
const logout = document.querySelector('#logout')
logout.addEventListener('click', (e) => {
    e.preventDefault();
    authent.signOut().then(() => {
        window.alert('User has signed out');
        console.log("User has signed Out");
        //window.location = 'introPage.html';
    });
});


//Login
const loginForm = document.querySelector('#login-form')
loginForm.addEventListener('submit',(e)=> {
    e.preventDefault();
    //get user data
    const email = loginForm['login-email'].value;
    const passw = loginForm['login-password'].value;
    
    authent.signInWithEmailAndPassword(email,passw).then(cred =>{
        //console.log(cred.user)
        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close();
        loginForm.reset();
    })
});
