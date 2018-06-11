handleGoogleLogin() {
    loginWithGoogle()
        .catch(function (error) {
            alert(error); // or show toast
            localStorage.removeItem(firebaseAuthKey);
        });
    localStorage.setItem(firebaseAuthKey, "1");
}