
var firebaseConfig = {
  apiKey: "AIzaSyC_ZeTH2ayMdKKcIXK0RT66q6q6aeZusho",
  authDomain: "testsmy-403bd.firebaseapp.com",
  projectId: "testsmy-403bd",
  storageBucket: "testsmy-403bd.appspot.com",
  messagingSenderId: "702930310080",
  appId: "1:702930310080:web:858c1681019f50a0616e25",
  measurementId: "G-MLSBWHS2PW"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();



let contactInfo = firebase.database().ref("infos");


document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();


  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}


function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
