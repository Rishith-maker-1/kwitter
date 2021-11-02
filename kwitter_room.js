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
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + " !";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> # " + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";     
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}