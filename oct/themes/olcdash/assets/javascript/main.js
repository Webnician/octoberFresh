
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
    console.log(butcol);

   // var start = "<button style=\"background-color:";
    //var colorvar = "; color: 1px solid";
   // var bordcol = "; bortder-color :";
    //var aftercolors =";\"> ";

    //var endvar = ";\">";
    //var startformat = "<"+fontstyle+">";
   // var endformat = "</"+fontstyle+">";
    // var theFinish = start+butcol+colorvar+fontcol+borcol+bordcol+aftercolors;
   // var theFinish = butlink;
   // alert(butlink);
    var theNewBut = "<a style='padding: 3px; border: solid 1px "+borcol+";text-transform: uppercase; font-family: Open Sans, Helvetica Neue, Helvetica,Arial,sans-serif; font-weight: bold; letter-spacing: 0.2em; line-height: 30px; color: "+fontcol+"; background-color: "+butcol+";'  href='"+butlink+"'\>"+buttext+"\<\/a\>";
    document.getElementById('outThis').value = theNewBut;
    
}

function getOlcButton(){
var start = "<a style='border: solid 3px #fff;text-transform: uppercase; font-family: Open Sans, Helvetica Neue, Helvetica,Arial,sans-serif; font-weight: bold; letter-spacing: 0.2em; line-height: 30px; color: #fff; background-color: #ffa800;' class=\"btn btn-primary\" href=\"";
var links =  document.getElementById('theOlcButLink').value;
var afterlink = "\">";
var thetext = document.getElementById('theOlcButText').value;
var aftertext = "</a>";
    var theOutput2 = start+links+afterlink+thetext+aftertext;
   
    document.getElementById('theOutputText').value = theOutput2;
}
function getAdvertisement() {
    var backCol = document.getElementById('theBackColor').value;
    var rounded  = document.getElementById('getRounded').value;
    var theImage = document.getElementById('theImgSource').value;
    var imagePos  = document.getElementById('theImagePosition').value;
    var theHeader  = document.getElementById('theAdHeader').value;
    var theText  = document.getElementById('theAdText').value;
    var theLink = document.getElementById('theAdLink').value;

    var roundedOut = '';

    if(rounded == 'yes'){
        roundedOut = "; -moz-border-radius: 15px; -webkit-border-radius: 15px";
    }

    var startStyle = "<div style='padding: 1%; margin: 1%; background-color:";
    var midStyle = "; color:";
        var endStyle = ";'> ";
    var butStyle =  "style='text-align:center; display: block; margin-left: auto; margin-right: auto;'";
    var theImageOut = "<div style='display: block; margin-left: auto; margin-right:auto; width:100%; height: auto;'><img style='display: block; margin-top: 3%; margin-bottom: 3%; margin-left: auto; margin-right:auto; width:100%; height: auto "+roundedOut+" ;' src='"+theImage+"' /></div>";
    if (theImage == '') {
        var theProd = startStyle + backCol + roundedOut + "; width: 100%; height: auto;'>"+theHeader+"<br />"+theText+"<br /><span style='text-align: center; display: block; margin-bottom: 3%; margin-left: auto; margin-right: auto;'>"+theLink+"</span></div>";
    }
    if(theImage != '')
    {
        if(imagePos == 'top')
        {

            var theProd = startStyle + backCol + roundedOut + "; width: 100%; height: auto;'>"+theImageOut+theHeader+"<br />"+theText+"<br /><span style='text-align: center; display: block; margin-left: auto; margin-right: auto;'>"+theLink+"</span></div>";
        }
        if(imagePos == 'bottom')
        {
            var theProd =  startStyle+backCol + roundedOut + "; width: 100%; height: auto;'>"+theHeader+"<br />"+theText+"<br /><span style='text-align: center; display: block; margin-left: auto; margin-right: auto;'>"+theLink+theImageOut+"</span></div>";
        }
    }

    document.getElementById('theOuts').value = theProd;
    document.getElementById('theAdOut').innerHTML = theProd;

}

function putTogetherD6SearchString(){
    var user_start_href = 'http://olc.onlinelearningconsortium.org/search/user';
    var content_start_href = 'http://olc.onlinelearningconsortium.org/search/node';
    var cms_start_href = 'http://conference.onlinelearningconsortium.org/users/';
    var sfa_start_href = 'https://na24.salesforce.com/_ui/search/ui/UnifiedSearchResults?searchType=2&str=';
    var userInput = document.getElementById('userInput').value;
   //change the d6 redonly string
    document.getElementById('d6info').value = userInput;

   //do operations to the email address for the cms
    var parsedString = userInput;
    var aBlank = '';
     parsedString = parsedString.split('.').join(aBlank);
    parsedString = parsedString.split('@').join(aBlank);
    parsedString = parsedString.split('_').join(aBlank);
   document.getElementById('cmsinfo').value = parsedString;

   //sfa display output
    document.getElementById('sfainfo').value = userInput;

   //adjust the href of the buttons
   $('#d6usersearch').attr('href', user_start_href+'/'+userInput);
   $('#d6contentsearch').attr('href', content_start_href+'/'+userInput);
    $('#cmsusersearch').attr('href', cms_start_href+parsedString);
    $('#sfausersearch').attr('href', sfa_start_href+userInput)
}