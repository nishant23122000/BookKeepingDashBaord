import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAsrFBvxi8WMq6dQn2jkiLL_J0YRyHOJ2A",
    authDomain: "bookkeeping-login.firebaseapp.com",
    projectId: "bookkeeping-login",
    storageBucket: "bookkeeping-login.appspot.com",
    messagingSenderId: "116311955661",
    appId: "1:116311955661:web:4bda6e3fbd4ae311463184"
};

firebase.initializeApp(firebaseConfig);
export const generateOtp = async (num, captchaRef, cb, showOTP) => {
    try {
        cb(true, false, "");
        const recaptch = new firebase.auth.RecaptchaVerifier(captchaRef.current);
        const number = num;
        let response = await firebase.auth().signInWithPhoneNumber(number, recaptch);

        showOTP(response)

        // cb(false, true, data);
    } catch (error) {
        cb(false, false, "");
        console.log(error)
    }



}