 // adding firebase data
 var firebaseConfig = {
  apiKey: "AIzaSyCOLRoN2n7Q7XERQE-f7QTEFh6KmboRAQc",
  authDomain: "kwitter-bccb5.firebaseapp.com",
  databaseURL: "https://kwitter-bccb5-default-rtdb.firebaseio.com",
  projectId: "kwitter-bccb5",
  storageBucket: "kwitter-bccb5.appspot.com",
  messagingSenderId: "614666782468",
  appId: "1:614666782468:web:dc9936a3a212b61145f251",
  measurementId: "G-05SGX8CKX5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  var messagesRef = firebase.database().ref('Checking');
  document.getElementById('contactForm').addEventListener('submit',submitForm);
 //uploading file in storage
  function uploadimage(){
  var type = getInputVal('types');
  var storage = firebase.storage();
  var file=document.getElementById("files").files[0];
  var storageref=storage.ref();
  var thisref=storageref.child(type).child(file.name).put(file);
  thisref.on('state_changed',function(snapshot) {
 
 
  }, function(error) {
  
 }, function() {
  // Uploaded completed successfully, now we can get the download URL
  thisref.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    //getting url of image
    document.getElementById("url").value=downloadURL;
    alert('uploaded successfully');
    saveMessage(downloadURL);
   });
  });
 
  // Get values
  var url = getInputVal('url');
  // Save message
  // saveMessage(url);
}
function getInputVal(id){
    document.getElementById('contactForm').reset();
 
}
 
 
// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}
 
// Save message to firebase database
function saveMessage(url){
  newMessageRef = messagesRef.push();
  messagesRef.set({
    imageurl:url,
   }); 
}
function a() {
  var valt = document.getElementById("url").value;
  document.getElementById("go").href=valt;
}
function wl() {
    window.location="kwitter_page.html";
}