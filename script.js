
//Fonction permettant l'ouverture et la fermeture du menue latéral
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
    }
});


//Fonction pour switch l'interface entre les deux étages
function switchFloor(event, ui) {
    if (ui.value == 0)    
        showRDC();    
    else        
        show1er();
}

var plan = $('#plan');
var planImg = $('#planImg');
var currentFloor;
//Génération par programmation des éléments (porte et fenêtre) qui seront sur le schéma de la maison
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
    planImg.attr("src", "images/planrdc.png");

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
    planImg.attr("src", "images/plan1er.png");
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

//Fonction pour ajouté une alarme dans l'interface de l'application (dans la liste des alarmes)
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
//Fonction pour supprimé une alarme dans l'interface de l'application (dans la liste des alarmes)
function removeAlarmToList(id){
    $('#alarmID'+id).remove();
    $('#choseAlarmID'+id).remove();
}
//Fonction pour commencé la création d'une alarme (initialisation des champs et fait apparaitre la première pop up)
function startCreationAlarm(){
    for (var i = 1; i <= 7; i++)
       $('#day' + i).removeClass('selectedCircle');
    
    $('#creationAlarm').show();
    $('#successAlarm').hide();
    $('#timeAlarme')[0].value = '';
    hideAll();
    $('#popupAlarmStep1').fadeIn(200);
}
//Fonction pour édité une alarme (initilisation des champs avec les données de l'alarme a éditer et fait apparaitre la première pop up)
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

//Fonction pour ajouté l'alarme en cours de création/édition au tableau "alarmTab"
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
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////// Gestion Appareils
function addAppa(a) {
    var newAppa;
    newAppa = $("<div id='"+a+"Plan' onclick='"+a+"CreateEvent(\"\")'>").attr({
        'style': "position: absolute;left:0%; top: 5%;background-image: url('images/"+a+".png');background-size: contain;background-repeat: no-repeat; width: 50px; height: 50px;"
    });

    currentFloor.push(newAppa);
    newAppa.draggable({stop : function (e,ui){
        if(Math.abs(ui.originalPosition.top - ui.position.top) < 5 && Math.abs(ui.originalPosition.left - ui.position.left) < 5){
             var newLeft = (ui.originalPosition.left / $('#plan').width())*100;
             var newTop = (ui.originalPosition.top / $('#plan').height())*100;
             $(this).css({'left': newLeft+"%",'top': newTop+"%"});
             window[a + "CreateEvent"]("");
        }else{
            var newLeft = (ui.position.left / $('#plan').width())*100;
            var newTop = (ui.position.top / $('#plan').height())*100;
            $(this).css({'left': newLeft+"%",'top': newTop+"%"});
        }

    }});
    newAppa.appendTo(plan);
    hideAll();
}
var currentEvent = "";
var boolEdit = false;

///////////////////////////////////////////////////////////////////// Création event distributeur nourriture animaux
var listappaDistrib = [];
var currentappaDistrib = [];
var idappaDistri = 0;

//Fonction pour commencé la création/édition d'un évènement du distributeur de nourriture (initialisation des champs et fait apparaitre la première pop up)
function appaDistribCreateEvent(idAppa){
    for (var i = 1; i <= 7; i++) 
        $('#dayEvent' + i).removeClass("selectedCircle")
    if(idAppa == ""){
        boolEdit = false;
        currentappaDistrib = [];
        currentappaDistrib['ID'] = 0;
        currentappaDistrib['IDAlarm'] = -1;
        currentappaDistrib['tabDay'] = [false, false, false, false, false, false, false];
        currentappaDistrib['hour'] = "00:00";
        currentappaDistrib['sdecalage'] = "+";
        currentappaDistrib['hdecalage'] = "00:00";
        currentappaDistrib['sentence'] = "";
        currentappaDistrib['quantiNourri'] = 0;
        $('.quantNourri')[0].value = "";
        $('#plusmoins')[0].value = "+";
        $('#timeAlarmeEvent')[0].value = "00:00";
        $('#decalageHeure')[0].value = "00:00";
    }else{
        boolEdit = true;
        currentappaDistrib = listappaDistrib[idAppa];
        $('.quantNourri')[0].value = currentappaDistrib['quantiNourri'];
        $('#timeAlarmeEvent')[0].value = currentappaDistrib['hour'];
        $('#plusmoins')[0].value = currentappaDistrib['sdecalage'];
        $('#decalageHeure')[0].value = currentappaDistrib['hdecalage'];
        for (var i = 1; i <= 7; i++) {
            if (currentappaDistrib['tabDay'][i-1])
                $('#dayEvent' + i).addClass("selectedCircle")
        }
        
    }
    
     currentEvent = "appaDistrib";
     boolOpenEvent = true;
     hideAll();
     $('#popupDistribStep1').fadeIn(200, function (){ boolOpenEvent = false; });
}


function step2Distrib(){
    currentappaDistrib['quantiNourri'] = parseInt($('.quantNourri')[0].value==""?0:$('.quantNourri')[0].value);
    hideAll();
    startChooseHour();
}

function appaDistribSuccess(){
    currentappaDistrib['sentence'] = "";
    if(currentappaDistrib['IDAlarm'] > -1){
        //Phrase avec alarme
        currentappaDistrib['sentence'] += "Distribuer nourriture<br>Avec l'alarme " + currentappaDistrib['IDAlarm'] + " (" + currentappaDistrib['sdecalage'] + currentappaDistrib['hdecalage'] + ")";
    }else{
        //Phrase avec heure fixée
        currentappaDistrib['sentence'] += "Distribuer nourriture<br>";
        var dayStr = "";
        var nbTrue = 0;
        for(var i=0;i<7;i++){
           if(currentappaDistrib['tabDay'][i]){
               dayStr += day[i] + " ";
               nbTrue++;
           }
        }
        if(nbTrue == 7){
            currentappaDistrib['sentence'] += "Tous les jours à " + currentappaDistrib['hour'];
        }else
            currentappaDistrib['sentence'] += dayStr + " à " + currentappaDistrib['hour'];
    }
    
    $('#sentenceSuccess')[0].innerHTML = currentappaDistrib['sentence'];
    hideAll();
    $('#popUpSuccess').fadeIn(200);
    if(!boolEdit){
        idappaDistri++;
        currentappaDistrib['ID'] = idappaDistri;
        listappaDistrib[idappaDistri] = currentappaDistrib;        
    }
    updateListEvent();
}
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////// Création/édition event cafetière
var listappaCafe = [];
var currentappaCafe = [];
var idappaCafe = 0;

//Fonction pour commencé la création/édition d'un évènement avec la cafetière (initialisation des champs et fait apparaitre la première pop up)
function appaCafeCreateEvent(idAppa){
    for (var i = 1; i <= 7; i++)
        $('#dayEvent' + i).removeClass("selectedCircle")
    if (idAppa == "") {
        boolEdit = false;
        currentappaCafe = [];
        currentappaCafe['ID'] = 0;
        currentappaCafe['IDAlarm'] = -1;
        currentappaCafe['tabDay'] = [false, false, false, false, false, false, false];
        currentappaCafe['hour'] = "00:00";
        currentappaCafe['sdecalage'] = "+";
        currentappaCafe['hdecalage'] = "00:00";
        currentappaCafe['sentence'] = "";
        $('#plusmoins')[0].value = "+";
        $('#timeAlarmeEvent')[0].value = "00:00";
        $('#decalageHeure')[0].value = "00:00";
    } else {
        boolEdit = true;
        currentappaCafe = listappaCafe[idAppa];
        $('#timeAlarmeEvent')[0].value = currentappaCafe['hour'];
        $('#plusmoins')[0].value = currentappaCafe['sdecalage'];
        $('#decalageHeure')[0].value = currentappaCafe['hdecalage'];
        for (var i = 1; i <= 7; i++) {
            if (currentappaCafe['tabDay'][i - 1])
                $('#dayEvent' + i).addClass("selectedCircle")
        }

    }
     currentEvent = "appaCafe";
     boolOpenEvent = true;
    hideAll();
    startChooseHour();
    setTimeout(function (){ boolOpenEvent = false; },200)
}

function appaCafeSuccess(){
    currentappaCafe['sentence'] = "";
    if(currentappaCafe['IDAlarm'] > -1){
        //Phrase avec alarme
        currentappaCafe['sentence'] += "Faire couler café<br>Avec l'alarme " + currentappaCafe['IDAlarm'] + "(" + currentappaCafe['sdecalage'] + currentappaCafe['hdecalage'] + ")";
    }else{
        //Phrase avec heure fixée
        currentappaCafe['sentence'] += "Faire couler café<br>";
        var dayStr = "";
        var nbTrue = 0;
        for(var i=0;i<7;i++){
           if(currentappaCafe['tabDay'][i]){
               dayStr += day[i] + " ";
               nbTrue++;
           }
        }
        if(nbTrue == 7){
            currentappaCafe['sentence'] += "Tous les jours à " + currentappaCafe['hour'];
        }else
            currentappaCafe['sentence'] += dayStr + " à " + currentappaCafe['hour'];
    }
    
    $('#sentenceSuccess')[0].innerHTML = currentappaCafe['sentence'];
    hideAll();
    $('#popUpSuccess').fadeIn(200);   
    if(!boolEdit){
        idappaCafe++;
        currentappaCafe['ID'] = idappaCafe;
        listappaCafe[idappaCafe] = currentappaCafe;        
    }
    updateListEvent();
}

/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////// Création/édition event chauffage
var listappaChauffage = [];
var currentappaChauffage = [];
var idappaChauffage = 0;

//Fonction pour commencé la création/édition d'un évènement le chauffage (initialisation des champs et fait apparaitre la première pop up)
function appaChauffageCreateEvent(idAppa){
    for (var i = 1; i <= 7; i++)
        $('#dayEvent' + i).removeClass("selectedCircle")
    if (idAppa == "") {
        boolEdit = false;
        currentappaChauffage = [];
        currentappaChauffage['ID'] = 0;
        currentappaChauffage['IDAlarm'] = -1;
        currentappaChauffage['tabDay'] = [false, false, false, false, false, false, false];
        currentappaChauffage['hour'] = "00:00";
        currentappaChauffage['sdecalage'] = "+";
        currentappaChauffage['hdecalage'] = "00:00";
        currentappaChauffage['sentence'] = "";
        currentappaChauffage['degree'] = "0";
        $('#plusmoins')[0].value = "+";
        $('#timeAlarmeEvent')[0].value = "00:00";
        $('#decalageHeure')[0].value = "00:00";
        $('.degreeChauffage')[0].value = "";
    } else {
        boolEdit = true;
        currentappaChauffage = listappaChauffage[idAppa];
        $('#timeAlarmeEvent')[0].value = currentappaChauffage['hour'];
        $('#plusmoins')[0].value = currentappaChauffage['sdecalage'];
        $('#decalageHeure')[0].value = currentappaChauffage['hdecalage'];
        $('.degreeChauffage')[0].value = currentappaChauffage['degree'];
        
        for (var i = 1; i <= 7; i++) {
            if (currentappaChauffage['tabDay'][i - 1])
                $('#dayEvent' + i).addClass("selectedCircle")
        }

    }
     currentEvent = "appaChauffage";
     boolOpenEvent = true;
     hideAll();
     $('#popupChauffageStep1').fadeIn(200, function (){ boolOpenEvent = false; });
}

function step2Chauffage(){
    currentappaChauffage['degree'] = parseInt($('.degreeChauffage')[0].value==""?0:$('.degreeChauffage')[0].value);
    hideAll();
    setTimeout(function (){$('#popupChauffageStep2').fadeIn(200)},200); 
}

function step3Chauffage(){
    hideAll();
    startChooseHour();
    setTimeout(function (){ boolOpenEvent = false; },200)
}

function appaChauffageSuccess(){
    currentappaChauffage['sentence'] = "";
    if(currentappaChauffage['IDAlarm'] > -1){
        //Phrase avec alarme
        currentappaChauffage['sentence'] += "Démarrer le chauffage<br>Avec l'alarme " + currentappaChauffage['IDAlarm'] + "(" + currentappaChauffage['sdecalage'] + currentappaChauffage['hdecalage'] + ")";
    }else{
        //Phrase avec heure fixée
        currentappaChauffage['sentence'] += "Démarrer le chauffage<br>";
        var dayStr = "";
        var nbTrue = 0;
        for(var i=0;i<7;i++){
           if(currentappaChauffage['tabDay'][i]){
               dayStr += day[i] + " ";
               nbTrue++;
           }
        }
        if(nbTrue == 7){
            currentappaChauffage['sentence'] += "Tous les jours à " + currentappaChauffage['hour'];
        }else
            currentappaChauffage['sentence'] += dayStr + " à " + currentappaChauffage['hour'];
    }
    
    $('#sentenceSuccess')[0].innerHTML = currentappaChauffage['sentence'];
    hideAll();
    $('#popUpSuccess').fadeIn(200);
    if(!boolEdit){
        idappaChauffage++;
        currentappaChauffage['ID'] = idappaChauffage;
        listappaChauffage[idappaChauffage] = currentappaChauffage;        
    }
    updateListEvent();
}
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////// Création/édition event volet
var listappaVolet = [];
var currentappaVolet = [];
var idappaVolet = 0;

//Fonction pour commencé la création/édition d'un évènement les volets (initialisation des champs et fait apparaitre la première pop up)
function appaVoletCreateEvent(idAppa){
    for (var i = 1; i <= 7; i++)
        $('#dayEvent' + i).removeClass("selectedCircle")
    for (var i = 1; i <= 10; i++) {
        $('#cvolet' + i)[0].checked = false;
    }
    if (idAppa == "") {
        boolEdit = false;
        currentappaVolet = [];
        currentappaVolet['ID'] = 0;
        currentappaVolet['IDAlarm'] = -1;
        currentappaVolet['tabDay'] = [false, false, false, false, false, false, false];
        currentappaVolet['hour'] = "00:00";
        currentappaVolet['sdecalage'] = "+";
        currentappaVolet['hdecalage'] = "00:00";
        currentappaVolet['sentence'] = "";
        currentappaVolet['ouvrirfermer'] = "";
        currentappaVolet['tabVolet'] = [false,false,false,false,false,false,false,false,false];
        $('#plusmoins')[0].value = "+";
        $('#timeAlarmeEvent')[0].value = "00:00";
        $('#decalageHeure')[0].value = "00:00";
    } else {
        boolEdit = true;
        currentappaVolet = listappaVolet[idAppa];
        $('#timeAlarmeEvent')[0].value = currentappaVolet['hour'];
        $('#plusmoins')[0].value = currentappaVolet['sdecalage'];
        $('#decalageHeure')[0].value = currentappaVolet['hdecalage'];
        
        for (var i = 1; i <= 7; i++) {
            if (currentappaVolet['tabDay'][i - 1])
                $('#dayEvent' + i).addClass("selectedCircle")
        }
        
        for (var i = 1; i <= 10; i++) {
            $('#cvolet' + i)[0].checked = currentappaVolet['tabVolet'][i - 1];
        }
    }
     currentEvent = "appaVolet";
     boolOpenEvent = true;
     hideAll();
     $('#popupVoletStep1').fadeIn(200, function (){ boolOpenEvent = false; });
}

function step2Volet(){
    for (var i = 1; i <= 10; i++) {
        currentappaVolet['tabVolet'][i - 1] = $('#cvolet' + i)[0].checked;
    }
    hideAll();
    setTimeout(function (){$('#popupVoletStep2').fadeIn(200)},200); 
}

function step3OuvrirVolet(){
    currentappaVolet['ouvrirfermer'] = "Ouvrir";
    hideAll();
    startChooseHour();
    setTimeout(function (){ boolOpenEvent = false; },200)
}

function step3FermerVolet(){
    currentappaVolet['ouvrirfermer'] = "Fermer";
    hideAll();
    startChooseHour();
    setTimeout(function (){ boolOpenEvent = false; },200)
}

function appaVoletSuccess(){
    currentappaVolet['sentence'] = "";
    if(currentappaVolet['IDAlarm'] > -1){
        //Phrase avec alarme
        currentappaVolet['sentence'] += currentappaVolet['ouvrirfermer'] + " les Volets<br>Avec l'alarme " + currentappaVolet['IDAlarm'] + "(" + currentappaVolet['sdecalage'] + currentappaVolet['hdecalage'] + ")";
    }else{
        //Phrase avec heure fixée
        currentappaVolet['sentence'] += currentappaVolet['ouvrirfermer'] + " les Volets<br>";
        var dayStr = ""
        var nbTrue = 0;
        for(var i=0;i<7;i++){
           if(currentappaVolet['tabDay'][i]){
               dayStr += day[i] + " ";
               nbTrue++
           }
        }
        if(nbTrue == 7){
            currentappaVolet['sentence'] += "Tous les jours à " + currentappaVolet['hour'];
        }else
            currentappaVolet['sentence'] += dayStr + " à " + currentappaVolet['hour'];
    }
    
    $('#sentenceSuccess')[0].innerHTML = currentappaVolet['sentence'];
    hideAll();
    $('#popUpSuccess').fadeIn(200);
    if(!boolEdit){
        idappaVolet++;
        currentappaVolet['ID'] = idappaVolet;
        listappaVolet[idappaVolet] = currentappaVolet;        
    }
    updateListEvent();
}
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////// Choix heure de déclenchement d'un évènement
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
    window["current" + currentEvent]['hour'] = alarmTab[id.replace("choseAlarmID","")][0];
    window["current" + currentEvent]['tabDay'] = alarmTab[id.replace("choseAlarmID","")][1];
    window["current" + currentEvent]['IDAlarm'] = alarmTab[id.replace("choseAlarmID","")][2];    
    $('#choixHeureWithAlarmStep1').fadeOut(200, function (){ $('#choixHeureWithAlarmStep2').fadeIn(200); });
}

function valideDecalage(){    
    window["current" + currentEvent]['hdecalage'] = $('#decalageHeure')[0].value;
    window["current" + currentEvent]['sdecalage'] = $('#plusmoins')[0].value;
    window[currentEvent + "Success"]();
}

function valideAtFixHour(){
     for(var i=1;i<=7;i++)
        window["current" + currentEvent]['tabDay'][i-1] = $('#dayEvent'+i).hasClass('selectedCircle');   
    
    window["current" + currentEvent]['hour'] = $('#timeAlarmeEvent')[0].value;
    window["current" + currentEvent]['IDAlarm'] = -1;
    window[currentEvent + "Success"]();
}
/////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////// Gestion évènements
//Fonction qui génère la liste des évènements créer, dans l'interface (pop up liste évènement)
function updateListEvent(){
    $('#popupEvents').children().remove();
    
    listappaDistrib.forEach(function (e){
         $("<div class='entriesEvent' onclick='appaDistribCreateEvent(\""+ e['ID'] +"\")'>"+e['sentence']+"</div>").appendTo($('#popupEvents'));
    });
    
    listappaCafe.forEach(function (e){
         $("<div class='entriesEvent' onclick='appaCafeCreateEvent(\""+ e['ID'] +"\")'>"+e['sentence']+"</div>").appendTo($('#popupEvents'));
    });    
    
    listappaChauffage.forEach(function (e){
         $("<div class='entriesEvent' onclick='appaChauffageCreateEvent(\""+ e['ID'] +"\")'>"+e['sentence']+"</div>").appendTo($('#popupEvents'));
    }); 
    
    listappaVolet.forEach(function (e){
         $("<div class='entriesEvent' onclick='appaVoletCreateEvent(\""+ e['ID'] +"\")'>"+e['sentence']+"</div>").appendTo($('#popupEvents'));
    }); 
    
}
/////////////////////////////////////////////////////////////////////

//Fonction pour masquer toute les popups et le menu
function hideAll(boolNav) {
    if (boolNav) {
        closeNav();
    } else {
        $('.popup').fadeOut(200);
    }
}

//Fonction jquerry qui s'éxécute une fois le chargement de la page fini
$(function () {
    //Masque toute les pop ups à la fin du chargement de la page
    $('.popup').hide();
    
    //Charge et initialise le slider
    $("#floorSlider").slider({
        min: 0,
        max: 1,
        value: 0,
        animate: true,
        change: switchFloor
    }); 
    
    //Création des évènements des boutons du menu
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
    
    //Création de l'évènement pour sélectionner un jours (appuyé sur un "rond" d'un jours le fait devenir bleu ou blanc) bleu = sélectionné, blanc = désélectionné
    $('.cirlcleDay').click(function (e){
        if($(this).hasClass('selectedCircle'))
             $(this).removeClass("selectedCircle");
        else
            $(this).addClass("selectedCircle");
    });  
    
    //Création de l'évènement pour géré la fermeture du menu ou des pops lors de l'appuie en dehors d'une popup et du menu
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
