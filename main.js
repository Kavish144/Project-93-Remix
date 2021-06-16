function add_user() {
    username=document.getElementById("username").value;
    localStorage.setItem("username",username);
    console.log(username);
    window.location="kwitter_room.html";
}