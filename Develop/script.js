    var save = document.getElementsByClassName("saveBtn")
    var cleanState = document.getElementById ("clear")
   

    var input1 = $("#box1");
    var input2 = $("#box2");
    var input3 = $("#box3");
    var input4 = $("#box4");
    var input5 = $("#box5");
    var input6 = $("#box6");
    var input7 = $("#box7");
    var input8 = $("#box8");
    var input9 = $("#box9");
    
    
    
   
  
var time = moment().format('HH');
//function for background color on the time blocks based on time of day. Will need more efficent alternative. 

console.log(time)

    if (time > 9) {
   document.getElementById("nine").style.backgroundColor= "#77dd77";
    } 
    if (time < 9) {
        document.getElementById("nine").style.backgroundColor= "#ff6961";
    } 
    if (time == 9){
        document.getElementById("nine").style.backgroundColor= "#f3ff4d" ;
    }

    if (time > 10) {
        document.getElementById("ten").style.backgroundColor= "#77dd77";
    } 
    if (time < 10) {
        document.getElementById("ten").style.backgroundColor= "#ff6961";
    } 
    if (time == 10){
        document.getElementById("ten").style.backgroundColor= "#f3ff4d" ;
    }
    if (time > 11) {
        document.getElementById("eleven").style.backgroundColor= "#77dd77";
    } 
    if (time < 11) {
        document.getElementById("eleven").style.backgroundColor= "#ff6961";
    } 
    if (time == 11){
        document.getElementById("eleven").style.backgroundColor= "#f3ff4d" ;  
    }
    if (time > 12) {
        document.getElementById("twelve").style.backgroundColor= "#77dd77";
    } 
    if (time < 12) {
        document.getElementById("twelve").style.backgroundColor= "#ff6961";
    } 
    if (time == 12){
        document.getElementById("twelve").style.backgroundColor= "#f3ff4d" ;
    }            
    if (time > 1) {
        document.getElementById("one").style.backgroundColor= "#77dd77";
    } 
    if (time < 1) {
        document.getElementById("one").style.backgroundColor= "#ff6961";
    } 
    if (time == 1){
        document.getElementById("one").style.backgroundColor= "#f3ff4d" ;
    }       
    if (time > 2) {
        document.getElementById("two").style.backgroundColor= "#77dd77";
    } 
    if (time < 2) {
        document.getElementById("two").style.backgroundColor= "#ff6961";
    } 
    if (time == 2){
        document.getElementById("two").style.backgroundColor= "#f3ff4d" ;
    }                
    if (time > 3) {
        document.getElementById("three").style.backgroundColor= "#77dd77";
    } 
    if (time < 3) {
        document.getElementById("three").style.backgroundColor= "#ff6961";
    } 
    if (time == 3){
        document.getElementById("three").style.backgroundColor= "#f3ff4d" ;
    }   
    if (time > 4) {
        document.getElementById("four").style.backgroundColor= "#77dd77";
    } 
    if (time < 4) {
        document.getElementById("four").style.backgroundColor= "#ff6961";
    } 
    if (time == 4){
    document.getElementById("four").style.backgroundColor= "#f3ff4d" ;
    } 
    if (time > 5) {
    document.getElementById("five").style.backgroundColor= "#77dd77";
    } 
    if (time < 5) {
    document.getElementById("five").style.backgroundColor= "#ff6961";
    } 
    if (time == 5){
    document.getElementById("five").style.backgroundColor= "#f3ff4d" ;
    }     
//save function for buttons
$(save).click(function () {

        localStorage.setItem("9AM", (input1.val()))
        localStorage.setItem("10AM", (input2.val()))
        localStorage.setItem("11AM", (input3.val()))
        localStorage.setItem("12PM", (input4.val()))
        localStorage.setItem("1PM", (input5.val()))
        localStorage.setItem("2PM", (input6.val()))
        localStorage.setItem("3PM", (input7.val()))
        localStorage.setItem("4PM", (input8.val()))
        localStorage.setItem("5PM", (input9.val()))

});
//retreives input
    $("#box1").append(localStorage.getItem("9AM"));
    $("#box2").append(localStorage.getItem("10AM"));
    $("#box3").append(localStorage.getItem("11AM"));
    $("#box4").append(localStorage.getItem("12PM"));
    $("#box5").append(localStorage.getItem("1PM"));
    $("#box6").append(localStorage.getItem("2PM"));
    $("#box7").append(localStorage.getItem("3PM"));
    $("#box8").append(localStorage.getItem("4PM"));
    $("#box9").append(localStorage.getItem("5PM"));

//function for clear button
    $(cleanState).click(function() {
        window.localStorage.clear();
        
        location.reload()
    });