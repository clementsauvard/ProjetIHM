var boolNav = false;
var boolOpenEvent = false;
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    $('#floorSlider').hide();
    boolNav = true;
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $('#floorSlider').show();
    boolNav = false;
}

$("#floorSlider").slider({
    change: function (event, ui) {
        console.log(event);
    }
});



function switchFloor(event, ui) {
    if (ui.value == 0)    
        showRDC();    
    else        
        show1er();
}

var plan = $('#plan');
var planImg = $('#planImg');
var currentFloor;
/////////////////////////////////////////////////////////////////////RDC
var eleRDC = [];
//Porte garage:
eleRDC.push($("<div id='doorGarage'>").attr({
    'style': "position: absolute; width: 2%; height: 24%; top: 2.8%; left: 61.2%; background-color: grey;"
}).hide());

//Fenêtre garage
eleRDC.push($("<div id='fenGarage'>").attr({
    'style': "position: absolute; width: 1.9%; height: 15%; top: 7%; left: 0%; background-color: dodgerblue;"
}).hide());

//Fenêtre pièce a gauche de l'escalier
eleRDC.push($("<div id='fenLeftEsc'>").attr({
    'style': "position: absolute; width: 1.9%; height: 10%; top: 35%; left: 0%; background-color: dodgerblue;"
}).hide());

//Fenêtre au milieu à gauche
eleRDC.push($("<div id='fenLeftMid'>").attr({
    'style': "position: absolute; width: 1.9%; height: 15%; top: 57%; left: 0%; background-color: dodgerblue;"
}).hide());

//Fenêtre pièce en bas à gauche
eleRDC.push($("<div id='fenBottomLeft'>").attr({
    'style': "position: absolute; width: 1.9%; height: 10%; top: 84%; left: 0%; background-color: dodgerblue;"
}).hide());

//Fenêtre pièce en bas à Droite
eleRDC.push($("<div id='fenBotRight'>").attr({
    'style': "position: absolute; width: 1.9%; height: 10%; top: 84%; left: 98%; background-color: dodgerblue;"
}).hide());

//Porte pièce en haut à gauche
eleRDC.push($("<div id='doorUpLeft'>").attr({
    'style': "position: absolute; width: 1.9%; height: 7%; top: 37%; left: 54%; background-color: grey;"
}).hide());

//Porte pièce en bas à gauche
eleRDC.push($("<div id='doorBotLeft'>").attr({
    'style': "position: absolute; width: 1.9%; height: 7%; top: 85%; left: 54%; background-color: grey;"
}).hide());

//Porte pièce en bas à droite
eleRDC.push($("<div id='doorBotRight'>").attr({
    'style': "position: absolute; width: 1.9%; height: 7%; top: 85%; left: 69%; background-color: grey;"
}).hide());


//Porte entrée maison
eleRDC.push($("<div id='doorHouse'>").attr({
    'style': "position: absolute; width: 1.9%; height: 8%; top: 57%; left: 98%; background-color: grey;"
}).hide());


function loadRDC() {
    eleRDC.forEach(function (e) {
        e.appendTo(plan);
    });
}

function hideRDC() {
    eleRDC.forEach(function (e) {
        e.hide();
    });
}

function showRDC() {
    planImg.siblings().hide();
    planImg.attr("src", "planrdc.png");

    eleRDC.forEach(function (e) {
        e.show();
    });
     $('#floorLabel').html("Rez-de-chaussée");
    currentFloor = eleRDC;
}
loadRDC();
showRDC();
/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////1er étage
var ele1er = [];

//Fenêtre pièce a gauche de l'escalier
ele1er.push($("<div id='fenLeftEsc1er'>").attr({
    'style': "position: absolute; width: 1.9%; height: 10%; top: 33%; left: 0%; background-color: dodgerblue;"
}).hide());

//Fenêtre pièce milieu à gauche
ele1er.push($("<div id='fenLeftMid1er'>").attr({
    'style': "position: absolute; width: 1.9%; height: 15%; top: 51%; left: 0%; background-color: dodgerblue;"
}).hide());

//Fenêtre pièce milieu à droite
ele1er.push($("<div id='fenRightMid1er'>").attr({
    'style': "position: absolute; width: 1.9%; height: 15%; top: 51%; left: 98%; background-color: dodgerblue;"
}).hide());

//Fenêtre pièce en bas à gauche
ele1er.push($("<div id='fenBotLeft1er'>").attr({
    'style': "position: absolute; width: 1.9%; height: 15%; top: 77%; left: 0%; background-color: dodgerblue;"
}).hide());

//Fenêtre pièce en bas à Droite
ele1er.push($("<div id='fenBotRight1er'>").attr({
    'style': "position: absolute; width: 1.9%; height: 10%; top: 80%; left: 98%; background-color: dodgerblue;"
}).hide());

//Porte pièce milieu en bas
ele1er.push($("<div id='doorBottomMid1er'>").attr({
    'style': "position: absolute; width: 8%; height: 1.3%; top: 70%; left: 41%; background-color: grey;"
}).hide());

//Porte pièce milieu à droite
ele1er.push($("<div id='doorMidRight1er'>").attr({
    'style': "position: absolute; width: 1.9%; height: 7%; top: 55%; left: 55%; background-color: grey;"
}).hide());

//Porte pièce milieu à gauche
ele1er.push($("<div id='doorMidLeft1er'>").attr({
    'style': "position: absolute; width: 1.9%; height: 7%; top: 55%; left: 34%; background-color: grey;"
}).hide());

//Porte pièce en bas à droite
ele1er.push($("<div id='doorBotRight1er'>").attr({
    'style': "position: absolute; width: 1.9%; height: 7%; top: 81%; left: 55%; background-color: grey;"
}).hide());

function load1er() {
    ele1er.forEach(function (e) {
        e.appendTo(plan);
    });
}

function hide1er() {
    ele1er.forEach(function (e) {
        e.hide();
    });
}

function show1er() {
    planImg.siblings().hide();
    planImg.attr("src", "plan1er.png");
    ele1er.forEach(function (e) {
        e.show();
    });
     $('#floorLabel').html("1er étage");
    currentFloor = ele1er;
}
load1er();
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////// Gestion Alarmes
var alarmTab = [];
var idAlarmI = 0;
var alarmInEdit = -1;

var day = ['L','M','M','J','V','S','D'];

function addAlarmToList(alarm){
    var heure = alarm[0];
    var tableDay = alarm[1];
    var alarmID = alarm[2];
    var line = "";
    for(var i=0;i<tableDay.length;i++){
        if(tableDay[i]){
            line += "<span class='dayS'>"+ day[i] +"</span> ";
        } else{
            line += "<span class='dayN'>"+ day[i] +"</span> ";
        }
    }
        
    $("<div class='entries' id='choseAlarmID"+alarmID+"' onclick='selectAlarm(this.id)'><span class='hour'>"+heure+"</span>&nbsp;&nbsp;&nbsp; " + line + "</div>").appendTo($('#choixHeurestepWithAlarm'));
    
    $("<div class='entries' id='alarmID"+alarmID+"' onclick='editAlarm(this.id)'><span class='hour'>"+heure+"</span>&nbsp;&nbsp;&nbsp; " + line + "</div>").appendTo($('#popupAlarmes'));

}

function removeAlarmToList(id){
    $('#alarmID'+id).remove();
    $('#choseAlarmID'+id).remove();
}

function startCreationAlarm(){
    for (var i = 1; i <= 7; i++)
       $('#day' + i).removeClass('selectedCircle');
    
    $('#creationAlarm').show();
    $('#successAlarm').hide();
    $('#timeAlarme')[0].value = '';
    hideAll();
    $('#popupAlarmStep1').fadeIn(200);
}

function editAlarm(e){
    var id = parseInt(e.replace("alarmID",""))
    alarmInEdit = id;
    for (var i = 1; i <= 7; i++)
       $('#day' + i).removeClass('selectedCircle');
    
    for (var i = 1; i <= 7; i++){
        if(alarmTab[id][1][i-1])
            $('#day' + i).addClass('selectedCircle');
    }
     
    $('#creationAlarm').show();
    $('#successAlarm').hide();
    $('#timeAlarme')[0].value = alarmTab[id][0];
    hideAll();
    $('#popupAlarmStep1').fadeIn(200);
}

function addAlarm(){
    if( $('#timeAlarme')[0].value == '')
        return;
    
    var days = [false,false,false,false,false,false,false];
    for(var i=1;i<=7;i++)
        days[i-1] = $('#day'+i).hasClass('selectedCircle');        
    
    var hour = $('#timeAlarme')[0].value;
    
    var id = alarmInEdit
    
    if(id == -1)
        id = ++idAlarmI; 
    else
        removeAlarmToList(id);
    
    var newAlarm = [hour,days,id];
    alarmTab[id] = newAlarm;
    addAlarmToList(newAlarm);
    $('#creationAlarm').hide();
    $('#successAlarm').show();
    
}

function hideAll(boolNav) {
    if (boolNav) {
        closeNav();
    } else {
        $('.popup').fadeOut(200);
    }
}
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////// Gestion Appareils
function addAppa(a) {
    var newAppa;
    newAppa = $("<div id='"+a+"Plan' onclick='"+a+"CreateEvent()'>").attr({
        'style': "position: absolute;left:0%; top: 5%;background-image: url('images/"+a+".png');background-size: contain;background-repeat: no-repeat; width: 50px; height: 50px;"
    });

    currentFloor.push(newAppa);
    newAppa.draggable({stop : function (e,ui){
        var newLeft = (ui.position.left / $('#plan').width())*100;
        var newTop = (ui.position.top / $('#plan').height())*100;
        $(this).css({'left': newLeft+"%",'top': newTop+"%"});
    }});
    newAppa.appendTo(plan);
}
function appaDistribCreateEvent(){
     boolOpenEvent = true;
     hideAll();
     $('#popupDistribStep1').fadeIn(200, function (){ boolOpenEvent = false; });
}

function step2Distrib(){
    hideAll();
    startChooseHour();
}

function appaCafeCreateEvent(){
    boolOpenEvent = true;
    alert("test");
}

function startChooseHour(){    
    $('#choixHeurestep1').siblings().hide();
    $('#choixHeurestep1').show();
    $('#popupChoixHeure').fadeIn(200);
}

function withAlarm(){
    $('#choixHeurestep1').fadeOut(200, function (){ $('#choixHeurestepWithAlarm').fadeIn(200); });    
}

function atFixHour(){
    $('#choixHeurestep1').fadeOut(200, function (){ $('#choixHeurestepAtFixHour').fadeIn(200); });    
}

/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////// Gestion évènements
function addEventToList(){
    
}
/////////////////////////////////////////////////////////////////////
$(function () {
    $('.popup').hide();
    $("#floorSlider").slider({
        min: 0,
        max: 1,
        value: 0,
        animate: true,
        change: switchFloor
    }); 
    $("#btnAlarme").click(function(e){
        closeNav();
        $('.popup').fadeOut(200);
        $('#popupAlarmes').fadeIn(200);
    });
    
    $("#btnEven").click(function(e) {
        closeNav();
        $('.popup').fadeOut(200);
        $('#popupEvents').fadeIn(200);
    });
    
    $("#btnAppa").click(function(e) {
        closeNav();
        $('.popup').fadeOut(200);
        $('#popupAppas').fadeIn(200);
    });
    
    $("#btnAbout").click(function(e) {
        closeNav();
        $('.popup').fadeOut(200);
        $('#popupAbout').fadeIn(200);
    });
    
    $('.cirlcleDay').click(function (e){
        if($(this).hasClass('selectedCircle'))
             $(this).removeClass("selectedCircle");
        else
            $(this).addClass("selectedCircle");
    });  
    
    $(".content").click(function(e) {
        if(!boolOpenEvent)
            hideAll(boolNav);
    });
    
    $(".popup").click(function(e) {
        if (boolNav && !boolOpenEvent){
            hideAll(boolNav);
        }
    });

});