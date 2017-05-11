
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
    var butpad = document.getElementById('customPaddingSize').value;
    var roundCorners = document.getElementById('customRounded').value;
    var textTransform = document.getElementById('customTextSize').value;

    var customRounded = '';

    if(roundCorners == 'yes'){
        customRounded = "; -moz-border-radius: 15px; -webkit-border-radius: 15px";
    }

    var textSize = 'uppercase';
    if(textTransform == 'lower')
    {
    textSize = 'lowercase';
    }

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
    var theNewBut = "<a style='padding: "+butpad+"px; border: solid 1px "+borcol+";text-transform: "+textSize+"; font-family: Open Sans, Helvetica Neue, Helvetica,Arial,sans-serif; font-weight: bold; letter-spacing: 0.2em; line-height: 30px; color: "+fontcol+"; background-color: "+butcol+"; "+customRounded+"'  href='"+butlink+"'\>"+buttext+"\<\/a\>";
    document.getElementById('outThis').value = theNewBut;
    document.getElementById('customButtonOutput').innerHTML = theNewBut;
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

function getNumBoxes()
{
    var numBoxes  = document.getElementById('getNumberBoxes').value;
    //document.getElementById('optionBoxesProg').innerHTML  = numBoxes;
     for(var i = 3; i <= numBoxes; i++)
     {
         $("#sel-"+i).removeClass("hidden2");
     }
     for (var x = 6; x > numBoxes; x--)
     {
         $("#sel-"+x).addClass("hidden2");
     }

}

function showThePrograOut()
{
    document.getElementById('theProgOut').innerHTML = "<div class='program-line-up' id='program-line-up'></div>";
    var numBoxes  = document.getElementById('getNumberBoxes').value;
    console.log('num boxes : ' + numBoxes );
    //div classes
    var forSix = "col-lg-2 col-md-2 col-sm-2 col-xs-12";
    var forFiveFirst = "col-lg-2 col-lg-offset-1 col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-1 col-xs-12";
    var forFive = "col-lg-2 col-md-2 col-sm-2 col-xs-12";
    var forFour = "col-lg-3 col-md-3 col-sm-3 col-xs-12";
    var forThreeFirst = "col-lg-3 col-lg-offset-1 col-md-3  col-md-offset-1 col-sm-3 col-sm-offset-1 col-xs-12";
    var forThree = "col-lg-3 col-md-3 col-sm-3 col-xs-12";
    var forTwo = "col-lg-6 col-md-6 col-sm-6 col-xs-12";
    var odd = 0;
    var first = '';
    var regular = '';
    var rounded = document.getElementById('getProgRounded').value;
    var height = document.getElementById('getProgHeight').value;
    var fontSize = document.getElementById('getProgFontSize').value;

    var roundedOutTop = '';
    var roundedOutBottom = '';
    if(rounded == 'yes'){
        roundedOutTop = "; border: 2px solid; border-top-right-radius: 2em; border-top-left-radius: 2em;";
        roundedOutBottom = "; border: 2px solid; border-bottom-right-radius: 2em; border-bottom-left-radius: 2em;"
    }

    console.log('good b4 num check');
    if (numBoxes == 3 )
    {
        odd = 1;
        first = forThreeFirst;
    }
    if (numBoxes == 5 )
    {
        odd = 1;
        first = forFiveFirst;
    }
    console.log('good b4 switch');
    switch (numBoxes)
    {

        case '2':
            regular = forTwo;
            break;
        case '3':
            regular = forThree;
            break;
        case '4':
            regular = forFour;
            break;
        case '5':
            regular = forFive;
            break;
        case '6':
            regular = forSix;
            break;
        default:
            console.log('num in switch' + numBoxes);
            regular = forTwo;

            // console.log('num in switch' + numBoxes);
    }
    console.log('good b4 loop');
    console.log('class' + regular);
    for(var i = 1; i <= numBoxes; i++)
    {
         // console.log(i);
         // console.log("boxes in loop " + numBoxes);
        var topcol = document.getElementById("sel-"+i+"-color").value;
        var botcol = document.getElementById("sel-"+i+"-bot-color").value;
        var icon = document.getElementById("sel-"+i+"-icon").value;
        var link = document.getElementById("sel-"+i+"-link").value;
        var fontcol = document.getElementById("sel-"+i+"-font-color").value;
        var botfontcol = document.getElementById("sel-"+i+"-bot-font-color").value;
        var toptex = document.getElementById("sel-"+i+"-top-text").value;
        var bottex = document.getElementById("sel-"+i+"-bottom-text").value;
         if((odd == 1) && (i == 1))
         {
             $("#program-line-up").append("<div class='" + first + "'> <div class='lineup-box2' style=''><a style='color: " + fontcol + roundedOutTop + "; background-image: url(" + icon + "); background-color: " + topcol +"' href='#" + link + "' data-anchor='" + link + "'>" + toptex + " </a> <a style=' color: " + fontcol + "; background-color: " + botcol + roundedOutBottom + "' href='#" + link + "' data-anchor='" + link + "'> <em style='color : " + botfontcol + ";'>" + bottex + "</em></a></div>   </div>");
         }
         else {
            $("#program-line-up").append("<div class='" + regular + "'> <div class='lineup-box2' style='height: " + height +";'><a style='font-size: "+ fontSize + ";color: " + fontcol + roundedOutTop + "; background-image: url(" + icon + "); background-color: " + topcol +"' href='#" + link + "' data-anchor='" + link + "'>" + toptex + " </a> <a style=' color: " + fontcol + "; background-color: " + botcol + roundedOutBottom + "' href='#" + link + "' data-anchor='" + link + "'> <em style='font-size: "+ fontSize + "; color : " + botfontcol + ";'>" + bottex + "</em></a></div>   </div>");
         }
    }

    console.log('good after loop');
    // var outputs = document.getElementById('theProgOut').innerHTML;
    document.getElementById('theProgOuts').value = document.getElementById('theProgOut').innerHTML;


    // document.getElementById('theProgOut').innerHTML = "<div>Hello </div>";
}