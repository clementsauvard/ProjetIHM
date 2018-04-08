function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$("#floorSlider").slider({
    change: function (event, ui) {
        console.log(event);
    }
});


$( function() {
    $( "#floorSlider" ).slider({min: 0, max: 1, value: 0, animate: true, change: switchFloor});
} );

function switchFloor(event, ui) {
    if (ui.value == 0)    
        showRDC();    
    else        
        show1er();
}

var plan = $('#plan');
var planImg = $('#planImg');

/////////////////////////////////////////////////////////////////////RDC
var eleRDC = [];
//Porte garage:
eleRDC.push($("<div id='doorGarage'>").attr({
    'style': "position: absolute; width: 2%; height: 24%; top: 2.8%; left: 61.2%; background-color: grey;"
}).hide());

//Fenêtre garage
eleRDC.push($("<div id='fenGarage'>").attr({
    'style': "position: absolute; width: 1.9%; height: 15%; top: 7%; left: 0%; background-color: grey;"
}).hide());

//Fenêtre pièce a gauche de l'escalier
eleRDC.push($("<div id='fenLeftEsc'>").attr({
    'style': "position: absolute; width: 1.9%; height: 10%; top: 35%; left: 0%; background-color: grey;"
}).hide());

//Fenêtre au milieu à gauche
eleRDC.push($("<div id='fenLeftMid'>").attr({
    'style': "position: absolute; width: 1.9%; height: 15%; top: 57%; left: 0%; background-color: grey;"
}).hide());

//Fenêtre pièce en bas à gauche
eleRDC.push($("<div id='fenBottomLeft'>").attr({
    'style': "position: absolute; width: 1.9%; height: 10%; top: 84%; left: 0%; background-color: grey;"
}).hide());

//Fenêtre pièce en bas à Droite
eleRDC.push($("<div id='fenBotRight'>").attr({
    'style': "position: absolute; width: 1.9%; height: 10%; top: 84%; left: 98%; background-color: grey;"
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
}
loadRDC();
showRDC();
/////////////////////////////////////////////////////////////////////
$('#doorHouse').draggable();
/////////////////////////////////////////////////////////////////////1er étage
var ele1er = [];

//Fenêtre pièce a gauche de l'escalier
ele1er.push($("<div id='fenLeftEsc1er'>").attr({
    'style': "position: absolute; width: 1.9%; height: 10%; top: 33%; left: 0%; background-color: grey;"
}).hide());

//Fenêtre pièce milieu à gauche
ele1er.push($("<div id='fenLeftMid1er'>").attr({
    'style': "position: absolute; width: 1.9%; height: 15%; top: 51%; left: 0%; background-color: grey;"
}).hide());

//Fenêtre pièce milieu à droite
ele1er.push($("<div id='fenRightMid1er'>").attr({
    'style': "position: absolute; width: 1.9%; height: 15%; top: 51%; left: 98%; background-color: grey;"
}).hide());

//Fenêtre pièce en bas à gauche
ele1er.push($("<div id='fenBotLeft1er'>").attr({
    'style': "position: absolute; width: 1.9%; height: 15%; top: 77%; left: 0%; background-color: grey;"
}).hide());

//Fenêtre pièce en bas à Droite
ele1er.push($("<div id='fenBotRight1er'>").attr({
    'style': "position: absolute; width: 1.9%; height: 10%; top: 80%; left: 98%; background-color: grey;"
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
}
load1er();
/////////////////////////////////////////////////////////////////////

$(function(){
    $('#doorGarage').click(function(e) {  
        alert("nique ta mere ouvre la porte du garage");
    });

    $('#doorHouse').click(function(e) {  
        alert("cyril ouvre la porte la putin");
    });
});