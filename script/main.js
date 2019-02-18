//for will go to firebase superfood data

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBAGfC8QX8qHKbXVElVBLEsxwImWwGtDfY",
    authDomain: "organifi-3superfood.firebaseapp.com",
    databaseURL: "https://organifi-3superfood.firebaseio.com",
    projectId: "organifi-3superfood",
    storageBucket: "organifi-3superfood.appspot.com",
    messagingSenderId: "534221748480"
  };
  firebase.initializeApp(config);


 // refernce messages collection
 var messagesRef = firebase.database().ref('contact-superfood');

// listen for Form submit
document.getElementById('form').addEventListener("submit", submitForm);

// subit form
function submitForm(e) {
    e.preventDefault();

    // get values
    var first = getInputVal('first');
    var last = getInputVal('last');
    var email = getInputVal('email');

    //save message
    saveMessage(first, last, email);

    //show alert   with button to OG link
    // hide alert after 60 sec
    document.querySelector('.alert').style.display = 'block';
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    },60000);


    // when submit is clicked it will disappear and show alert box for 60 sec
    document.querySelector('#submit').style.display = 'none';
    setTimeout(function() {
        document.querySelector('#submit').style.display = 'block';
    },60000);



    // could not reset..  found other way /  code above /\
    // clear form .  reset
    // document.getElementById('form').reset();


}

// function to get form values  ID's
function getInputVal(id) {
    return document.getElementById(id).value;
}


// save message to firebase
function saveMessage(first, last, email) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        first: first,
        last: last,
        email: email
    })
}