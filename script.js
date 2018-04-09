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

var day = ['L','Ma','Me','J','V','S','D'];

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
        
    $("<div class='entries' id='choseAlarmID"+alarmID+"' onclick='selectAlarm(this.id)'><span class='hour'>"+heure+"</span>&nbsp;&nbsp;&nbsp; " + line + "</div>").appendTo($('#choixHeureWithAlarmStep1'));
    
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
    
    var id = alarmInEdit;
    if(id == -1){
        id = ++idAlarmI; 
        var newAlarm = [$('#timeAlarme')[0].value,[false,false,false,false,false,false,false],id];
        alarmTab[id] = newAlarm;        
    }
    else{       
        removeAlarmToList(id);
    }     
    
    for(var i=1;i<=7;i++)
        alarmTab[id][1][i-1] = $('#day'+i).hasClass('selectedCircle');
    
    addAlarmToList(alarmTab[id]);
    $('#creationAlarm').hide();
    $('#successAlarm').show();
    alarmInEdit = -1;
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
        if(Math.abs(ui.originalPosition.top - ui.position.top) < 5 && Math.abs(ui.originalPosition.left - ui.position.left) < 5){
             var newLeft = (ui.originalPosition.left / $('#plan').width())*100;
             var newTop = (ui.originalPosition.top / $('#plan').height())*100;
             $(this).css({'left': newLeft+"%",'top': newTop+"%"});
             window[a + "CreateEvent"]();
        }else{
            var newLeft = (ui.position.left / $('#plan').width())*100;
            var newTop = (ui.position.top / $('#plan').height())*100;
            $(this).css({'left': newLeft+"%",'top': newTop+"%"});
        }

    }});
    newAppa.appendTo(plan);
}
var currentEvent = "";
///////////////////////////////////////////////////////////////////// Création event distributeur nourriture animaux
var quantiNourri = 0;
var IDAlarmappaDistrib = -1;
var tabDayappaDistrib = [false,false,false,false,false,false,false];
var hourappaDistrib = "00:00";
var decalageappaDistrib = "+00:00";
var sentenceappaDistrib = "";
function appaDistribCreateEvent(){
     currentEvent = "appaDistrib";
     boolOpenEvent = true;
     hideAll();
     $('#popupDistribStep1').fadeIn(200, function (){ boolOpenEvent = false; });
}

function step2Distrib(){
    quantiNourri = parseInt($('.quantNourri')[0].value==""?0:$('.quantNourri')[0].value);
    hideAll();
    startChooseHour();
}
function appaDistribSuccess(){
    sentenceappaDistrib = "";
    if(IDAlarmappaDistrib > -1){
        //Phrase avec alarme
        sentenceappaDistrib += "Distribuer nourriture<br>Avec l'alarme " + IDAlarmappaDistrib + " (" + decalageappaDistrib + ")";
    }else{
        //Phrase avec heure fixée
        sentenceappaDistrib += "Distribuer nourriture<br>";
        var dayStr = ""
        var nbTrue = 0;
        for(var i=0;i<7;i++){
           if(tabDayappaDistrib[i]){
               dayStr += day[i] + " ";
               nbTrue++
           }
        }
        if(nbTrue == 7){
            sentenceappaDistrib += "Tous les jours à " + hourappaDistrib;
        }else
            sentenceappaDistrib += dayStr + " à " + hourappaDistrib;
    }
    
    $('#sentenceSuccess')[0].innerHTML = sentenceappaDistrib;
    hideAll();
    $('#popUpSuccess').fadeIn(200);
    updateListEvent();
}
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////// Création event cafetière
var IDAlarmappaCafe = -1;
var tabDayappaCafe = [false,false,false,false,false,false,false];
var hourappappaCafe = "00:00";
var decalageappappaCafe = "+00:00";
var sentenceappaCafe = "";

function appaCafeCreateEvent(){
     currentEvent = "appaCafe";
     boolOpenEvent = true;
    hideAll();
    startChooseHour();
    setTimeout(function (){ boolOpenEvent = false; },200)
}

function appaCafeSuccess(){
    sentenceappaCafe = "";
    if(IDAlarmappaCafe > -1){
        //Phrase avec alarme
        sentenceappaCafe += "Faire couler café<br>Avec l'alarme " + IDAlarmappaCafe + " (" + decalageappaCafe + ")";
    }else{
        //Phrase avec heure fixée
        sentenceappaCafe += "Faire couler café<br>";
        var dayStr = ""
        var nbTrue = 0;
        for(var i=0;i<7;i++){
           if(tabDayappaCafe[i]){
               dayStr += day[i] + " ";
               nbTrue++
           }
        }
        if(nbTrue == 7){
            sentenceappaCafe += "Tous les jours à " + hourappaCafe;
        }else
            sentenceappaCafe += dayStr + " à " + hourappaCafe;
    }
    
    $('#sentenceSuccess')[0].innerHTML = sentenceappaCafe;
    hideAll();
    $('#popUpSuccess').fadeIn(200);
    updateListEvent();
}

/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////// Création event chauffage
var degreeChauffage = 20;
var IDAlarmappaChauffage = -1;
var tabDayappaChauffage = [false,false,false,false,false,false,false];
var hourappaChauffage = "00:00";
var decalageappaChauffage = "+00:00";
var sentenceappaChauffage = "";

function appaChauffageCreateEvent(){
     currentEvent = "appaChauffage";
     boolOpenEvent = true;
     hideAll();
     $('#popupChauffageStep1').fadeIn(200, function (){ boolOpenEvent = false; });
}

function step2Chauffage(){
    degreeChauffage = parseInt($('.degreeChauffage')[0].value==""?0:$('.degreeChauffage')[0].value);
    hideAll();
    setTimeout(function (){$('#popupChauffageStep2').fadeIn(200)},200); 
}

function step3Chauffage(){
    hideAll();
    startChooseHour();
    setTimeout(function (){ boolOpenEvent = false; },200)
}

function appaChauffageSuccess(){
    sentenceappaChauffage = "";
    if(IDAlarmappaChauffage > -1){
        //Phrase avec alarme
        sentenceappaChauffage += "Démarrer le chauffage<br>Avec l'alarme " + IDAlarmappaChauffage + " (" + decalageappaChauffage + ")";
    }else{
        //Phrase avec heure fixée
        sentenceappaChauffage += "Démarrer le chauffage<br>";
        var dayStr = ""
        var nbTrue = 0;
        for(var i=0;i<7;i++){
           if(tabDayappaChauffage[i]){
               dayStr += day[i] + " ";
               nbTrue++
           }
        }
        if(nbTrue == 7){
            sentenceappaChauffage += "Tous les jours à " + hourappaChauffage;
        }else
            sentenceappaChauffage += dayStr + " à " + hourappaChauffage;
    }
    
    $('#sentenceSuccess')[0].innerHTML = sentenceappaChauffage;
    hideAll();
    $('#popUpSuccess').fadeIn(200);
    updateListEvent();
}
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////// Création event volet
var degreeVolet = 20;
var IDAlarmappaVolet = -1;
var tabDayappaVolet = [false,false,false,false,false,false,false];
var hourappaVolet = "00:00";
var decalageappaVolet = "+00:00";
var sentenceappaVolet = "";
var ouvrirfermer = "Fermer";
function appaVoletCreateEvent(){
     currentEvent = "appaVolet";
     boolOpenEvent = true;
     hideAll();
     $('#popupVoletStep1').fadeIn(200, function (){ boolOpenEvent = false; });
}

function step2Volet(){
    hideAll();
    setTimeout(function (){$('#popupVoletStep2').fadeIn(200)},200); 
}

function step3OuvrirVolet(){
    ouvrirfermer = "Ouvrir";
    hideAll();
    startChooseHour();
    setTimeout(function (){ boolOpenEvent = false; },200)
}

function step3FermerVolet(){
    ouvrirfermer = "Fermer";
    hideAll();
    startChooseHour();
    setTimeout(function (){ boolOpenEvent = false; },200)
}

function appaVoletSuccess(){
    sentenceappaVolet = "";
    if(IDAlarmappaVolet > -1){
        //Phrase avec alarme
        sentenceappaVolet += ouvrirfermer + " les Volets<br>Avec l'alarme " + IDAlarmappaVolet + " (" + decalageappaVolet + ")";
    }else{
        //Phrase avec heure fixée
        sentenceappaVolet += ouvrirfermer + " les Volets<br>";
        var dayStr = ""
        var nbTrue = 0;
        for(var i=0;i<7;i++){
           if(tabDayappaVolet[i]){
               dayStr += day[i] + " ";
               nbTrue++
           }
        }
        if(nbTrue == 7){
            sentenceappaVolet += "Tous les jours à " + hourappaVolet;
        }else
            sentenceappaVolet += dayStr + " à " + hourappaVolet;
    }
    
    $('#sentenceSuccess')[0].innerHTML = sentenceappaVolet;
    hideAll();
    $('#popUpSuccess').fadeIn(200);
    updateListEvent();
}
/////////////////////////////////////////////////////////////////////

function startChooseHour(){    
    $('#choixHeurestep1').siblings().hide();
    $('#choixHeurestep1').show();
    $('#popupChoixHeure').fadeIn(200);
}

function withAlarm(){
    $('#choixHeurestep1').fadeOut(200, function (){ $('#choixHeureWithAlarmStep1').fadeIn(200); });    
}

function atFixHour(){
    $('#choixHeurestep1').fadeOut(200, function (){ $('#choixHeurestepAtFixHour').fadeIn(200); });    
}
function selectAlarm(id){
    window["hour" + currentEvent] = alarmTab[id.replace("choseAlarmID","")][0];
    window["tabDay" + currentEvent] = alarmTab[id.replace("choseAlarmID","")][1];
    window["IDAlarm" + currentEvent] = alarmTab[id.replace("choseAlarmID","")][2];    
    $('#choixHeureWithAlarmStep1').fadeOut(200, function (){ $('#choixHeureWithAlarmStep2').fadeIn(200); });
}
function valideDecalage(){    
    window["decalage" + currentEvent] = $('#plusmoins')[0].value + $('#decalageHeure')[0].value;
    window[currentEvent + "Success"]();
}
function valideAtFixHour(){
     for(var i=1;i<=7;i++)
        window["tabDay" + currentEvent][i-1] = $('#dayEvent'+i).hasClass('selectedCircle');   
    
    window["hour" + currentEvent] = $('#timeAlarmeEvent')[0].value;
    window["IDAlarm" + currentEvent] = -1;
    window[currentEvent + "Success"]();
}
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////// Gestion évènements
function updateListEvent(){
    $('#popupEvents').children().remove();
    
    if(sentenceappaDistrib != "")
        $("<div class='entriesEvent'>"+sentenceappaDistrib+"</div>").appendTo($('#popupEvents'));
    
    if(sentenceappaCafe != "")
        $("<div class='entriesEvent'>"+sentenceappaCafe+"</div>").appendTo($('#popupEvents')); 
    
    if(sentenceappaChauffage != "")
        $("<div class='entriesEvent'>"+sentenceappaChauffage+"</div>").appendTo($('#popupEvents'));
    
    if(sentenceappaVolet != "")
        $("<div class='entriesEvent'>"+sentenceappaVolet+"</div>").appendTo($('#popupEvents'));
    
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
