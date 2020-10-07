//Logout
const logout = document.querySelector('#logout-form')
logout.addEventListener('click', (e) => {
    e.preventDefault();
    authent.signOut().then(() => {
        window.alert('User has signed out');
        console.log("User has signed Out");
        window.location = 'introPage.html';
    });
});
