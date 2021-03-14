// web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBMikO2FXTXWP7RpfLD1NkNl2ec9Vuj-aw",
  authDomain: "dbms-d4807.firebaseapp.com",
  projectId: "dbms-d4807",
  storageBucket: "dbms-d4807.appspot.com",
  messagingSenderId: "834703711955",
  appId: "1:834703711955:web:97ee7fda76832544b77e26"
};
 // Initialize Firebase 
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const signupWithEmailAndPassword = () => {
  console.log("click")
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  const promise = auth.createUserWithEmailAndPassword(email,password)
  .then(()=> {
    alert ("Succefully Signup");
    if(email=="rifa@gmail.com"){
      console.log("Admin")
      location.replace("../branch.html")
    }
    else{
      console.log("buyer")
      location.replace("../online-shop.html")
    }
    // location.replace("../online-shop.html")
  })
  promise.catch(e => alert(e.message))

  // alert("signed up")
  e.preventdefault();
}
const signinWithEmailAndPassword = () => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  console.log(email, password)

  const promise = auth.signInWithEmailAndPassword(email, password)
  .then(()=> {
    alert ("Succefully Signin");
    if(email="rifa@gmail.com"){
      location.replace("../branch.html")
    }
    else{
      location.replace("../our_product.html")
    }
  })
  promise.catch(e => alert(e.message));

  // alert("signed in")
  e.preventdefault();
}

const singinWithEmail = () => {

}
