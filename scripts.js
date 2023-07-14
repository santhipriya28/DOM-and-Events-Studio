// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const land = document.getElementById("landing");

    takeoff.addEventListener("click",function(event){
         let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
         if(response){
            flightStatus.innerHTML ="Shuttle in flight";
            document.getElementById("shuttleBackground").style.backgroundColor ="blue";
            shuttleHeight.innerHTML = "10,000";
        }
    });
    land.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
    });
});