
function getBuy() {
    var start = "[buy-button sku=";
    var end = "[/buy-button]";
    var text = document.getElementById('getTextButton2').value;
    var skus = document.getElementById('getTextButton').value;
    var buyButton = start+skus+']'+text+end;
    document.getElementById('getText2').value = buyButton;
}

function getText() {
    var theText = document.getElementById('inputText').value;
    var font = document.getElementById('textinp1').value;
    var fontsize = document.getElementById('textinp2').value;
    var fontstyle = document.getElementById('textinp3').value;
    var fontcolor = document.getElementById('textinp4').value;
    var textalign = document.getElementById('textinp5').value;
    var contwidth = document.getElementById('textinp6').value;
    var start = "<div style=\"font-size:";
    var colorvar = "; color:";
    var textalignvar = "; text-align:";
    var widthvar = "; width:";
    var endvar = ";\">";
    var startformat = "<"+fontstyle+">";
    var endformat = "</"+fontstyle+">";
    var theFinish = start+fontsize+'px'+colorvar+fontcolor+'; font-family: Open Sans, Helvetica Neue, Helvetica,Arial,sans-serif'+textalignvar+textalign+widthvar+contwidth+endvar+startformat+theText+endformat+'</div>';
   // alert(theFinish);
    document.getElementById('getText').value = theFinish;
}

function getList() {
    var togstart = "[toggle-container]";
    var togend = "[/toggle-container]";
    
}

function getShortcode(){
    var instmems = document.getElementById('shortinp').value;
    var promems  = document.getElementById('shortinp2').value;
    var commmems= document.getElementById('shortinp3').value;
    var nonmems  = document.getElementById('shortinp4').value;
    var paymems  = document.getElementById('shortinp5').value;
    var nonpaymems  = document.getElementById('shortinp6').value;
    if(instmems != '') {
        document.getElementById('instmember').value = '[show-to-institutional-member]' + instmems + '[/show-to-institutional-member]';
    }
    if(promems != ''){
        document.getElementById('promember').value = '[show-to-professional-member]'+promems+'[/show-to-professional-member]';
    }
    if(commmems != '') {
        document.getElementById('commember').value = '[show-to-community-member]' + commmems + '[/show-to-community-member]';
    }
    if(nonmems != '') {
        document.getElementById('nonmember').value = '[show-to-non-member]' + nonmems + '[/show-to-non-member]';
    }
    if(paymems != '') {
        document.getElementById('paymember').value = '[show-to-paying]' + paymems + '[/show-to-paying]';
    }
    if(nonpaymems != '') {
        document.getElementById('nopaymember').value = '[show-to-non-paying]' + nonpaymems + '[/show-to-non-paying]';
    }
    }

function getCustomButton() {

    var butcol = document.getElementById('customButtonColor').value;
    var borcol  = document.getElementById('customBorderColor').value;
    var fontcol = document.getElementById('customFontColor').value;
    var butlink  = document.getElementById('customButtonLink').value;
    var buttext  = document.getElementById('customButtonText').value;

    var start = "<button style=\"background-color:";
    var colorvar = "; color: 1px solid";
    var bordcol = "; bortder-color :";
    var aftercolors =";\"> ";

    var endvar = ";\">";
    var startformat = "<"+fontstyle+">";
    var endformat = "</"+fontstyle+">";
    // var theFinish = start+butcol+colorvar+fontcol+borcol+bordcol+aftercolors;
    var theFinish = butlink;
    alert(butlink);
    document.getElementById('outThis').value = butlink;
    
}

function getOlcButton(){
var start = "<a class=\"btn btn-primary\" href=\"";
var links =  document.getElementById('theOlcButLink').value;
var afterlink = "\">";
var thetext = document.getElementById('theOlcButText').value;
var aftertext = "</a>";
    var theOutput2 = start+links+afterlink+thetext+aftertext;
   
    document.getElementById('theOutputText').value = theOutput2;
}
function getAdvertisement() {
    var backCol = document.getElementById('theBackColor').value;
    var fontCol  = document.getElementById('theFontColor').value;
    var theImage = document.getElementById('theImgSource').value;
    var imagePos  = document.getElementById('theImagePosition').value;
    var theHeader  = document.getElementById('theAdHeader').value;
    var theText  = document.getElementById('theAdText').value;
    var theLink = document.getElementById('theAdLink').value;

    var startStyle = "<div style='background-color:";
    var midStyle = "; color:";
        var endStyle = ";'> ";
    if (theImage == '') {
        var theProd = startStyle + backCol + midStyle + fontCol + "; width: 100%; height: auto;'>"+theHeader+"<br />"+theText+"</div>";
    }

    document.getElementById('theOuts').value = theProd;
}