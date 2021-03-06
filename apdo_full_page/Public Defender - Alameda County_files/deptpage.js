
//Custom API for cross-browser compatible updates of webpages
//Written by Michael Rock, ITD

//****************************************************
//Function runs Search Query to use keywords without user having to input proper formatting
//****************************************************
function RunSearchQuery() {
/*if (is_nav4) {
    if (document.queryForm.queryText.value == "") {
		alert("Please enter one or more keywords on which to search.")
		}
	else {
		query = escape('keywords <contains> ' + document.queryForm.queryText.value);	
		newURL = "http://www.co.alameda.ca.us/search?NS-search-page=results&NS-collection=Site_Search&NS-query=" + query;
				window.location = newURL;
		}
	}	
else {*/
	if (document.queryForm.queryText.value == "") {
		alert("Please enter one or more keywords.")
		}
	else {
		query = escape('keywords <contains> ' + document.queryForm.queryText.value);	
		newURL = "http://www.co.alameda.ca.us/search?NS-search-page=results&NS-collection=Site_Search&NS-query=" + query;
				window.location = newURL;
		}
	//}
 }
//****************************************************
//This function opens a new window with the menubar enabled.
//****************************************************
function NewWindowDoc(mypage,myname,w,h,scroll,pos){
if(pos=="random"){LeftPosition=(screen.width)?Math.floor(Math.random()*(screen.width-w)):100;TopPosition=(screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;}
if(pos=="center"){LeftPosition=(screen.width)?(screen.width-w)/2:100;TopPosition=(screen.height)?(screen.height-h)/2:100;}
else if((pos!="center" && pos!="random") || pos==null){LeftPosition=0;TopPosition=20}
settings='width='+w+',height='+h+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',location=no,directories=no,status=no,menubar=yes,toolbar=no,resizable=yes'; 
win=window.open(mypage,myname,settings);
//win.focus();
}
//****************************************************
//This function opens a new window with the menubar disabled.
//****************************************************
function NewWindowDocNoMenuBar(mypage,myname,w,h,scroll,pos){
if(pos=="random"){LeftPosition=(screen.width)?Math.floor(Math.random()*(screen.width-w)):100;TopPosition=(screen.height)?Math.floor(Math.random()*((screen.height-h)-75)):100;}
if(pos=="center"){LeftPosition=(screen.width)?(screen.width-w)/2:100;TopPosition=(screen.height)?(screen.height-h)/2:100;}
else if((pos!="center" && pos!="random") || pos==null){LeftPosition=0;TopPosition=20}
settings='width='+w+',height='+h+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',location=no,directories=no,status=no,menubar=no,toolbar=no,resizable=yes'; 
win=window.open(mypage,myname,settings);
//win.focus();
}
//****************************************************
//This function opens the new window with the menubar enabled and the height and width set depending upon the parent window size..
//****************************************************
function NewWindowStnd(mypage,myname,pos)  {
	var screenW = screen.availWidth;
	var screenH = screen.availHeight;
	var windowW = screenW * .80;
	var windowH = screenH * .60;
	if	(pos=="center")  {
		LeftPosition=(screenW)?(screenW-windowW)/2:100;
		TopPosition=(screenH)?(screenH-windowH)/2:100;
	}	
	else if ((pos!="center" && pos!="random") || pos==null)  {
		LeftPosition=0;TopPosition=20
	}
	settings='width='+windowW+',height='+windowH+',top='+TopPosition+',left='+LeftPosition+',scrollbars=yes,location=yes,directories=no,status=no,menubar=yes,toolbar=yes,resizable=yes'; 
	var win=window.open(mypage,myname,settings);
	//win.focus();
} 

function NewWindowFull(mypage,myname,pos)  {
	var screenW = screen.availWidth;
	var screenH = screen.availHeight;
	var windowW = screenW;
	var windowH = screenH;
	LeftPosition=0;
	TopPosition=0;
	settings='width='+windowW+',height='+windowH+',top='+TopPosition+',left='+LeftPosition+',scrollbars=yes,location=yes,directories=no,status=no,menubar=yes,toolbar=yes,resizable=yes'; 
	var win=window.open(mypage,myname,settings);
	//win.focus();
} 

//****************************************************
// JavaScript Browser Sniffer
//****************************************************
// convert all characters to lowercase to simplify testing
    var agt=navigator.userAgent.toLowerCase();
    var appVer = navigator.appVersion.toLowerCase();

    // *** BROWSER VERSION ***

    var is_minor = parseFloat(appVer);
    var is_major = parseInt(is_minor);

    var is_opera = (agt.indexOf("opera") != -1);
    var is_opera2 = (agt.indexOf("opera 2") != -1 || agt.indexOf("opera/2") != -1);
    var is_opera3 = (agt.indexOf("opera 3") != -1 || agt.indexOf("opera/3") != -1);
    var is_opera4 = (agt.indexOf("opera 4") != -1 || agt.indexOf("opera/4") != -1);
    var is_opera5 = (agt.indexOf("opera 5") != -1 || agt.indexOf("opera/5") != -1);
    var is_opera6 = (agt.indexOf("opera 6") != -1 || agt.indexOf("opera/6") != -1); // new 020128- abk
    var is_opera7 = (agt.indexOf("opera 7") != -1 || agt.indexOf("opera/7") != -1); // new 021205- dmr
    var is_opera5up = (is_opera && !is_opera2 && !is_opera3 && !is_opera4);
    var is_opera6up = (is_opera && !is_opera2 && !is_opera3 && !is_opera4 && !is_opera5); // new020128
    var is_opera7up = (is_opera && !is_opera2 && !is_opera3 && !is_opera4 && !is_opera5 && !is_opera6); // new021205 -- dmr

    // Note: On IE, start of appVersion return 3 or 4
    // which supposedly is the version of Netscape it is compatible with.
    // So we look for the real version further on in the string
    // And on Mac IE5+, we look for is_minor in the ua; since 
    // it appears to be more accurate than appVersion - 06/17/2004

    var is_mac = (agt.indexOf("mac")!=-1);
    var iePos  = appVer.indexOf('msie');
    if (iePos !=-1) {
       if(is_mac) {
           var iePos = agt.indexOf('msie');
           is_minor = parseFloat(agt.substring(iePos+5,agt.indexOf(';',iePos)));
       }
       else is_minor = parseFloat(appVer.substring(iePos+5,appVer.indexOf(';',iePos)));
       is_major = parseInt(is_minor);
    }

    // ditto Konqueror
                                      
    var is_konq = false;
    var kqPos   = agt.indexOf('konqueror');
    if (kqPos !=-1) {                 
       is_konq  = true;
       is_minor = parseFloat(agt.substring(kqPos+10,agt.indexOf(';',kqPos)));
       is_major = parseInt(is_minor);
    }                                 

    var is_getElementById   = (document.getElementById) ? "true" : "false"; // 001121-abk
    var is_getElementsByTagName = (document.getElementsByTagName) ? "true" : "false"; // 001127-abk
    var is_documentElement = (document.documentElement) ? "true" : "false"; // 001121-abk

    var is_safari = ((agt.indexOf('safari')!=-1)&&(agt.indexOf('mac')!=-1))?true:false;
    var is_khtml  = (is_safari || is_konq);

    var is_gecko = ((!is_khtml)&&(navigator.product)&&(navigator.product.toLowerCase()=="gecko"))?true:false;
    var is_gver  = 0;
    if (is_gecko) is_gver=navigator.productSub;

    var is_fb = ((agt.indexOf('mozilla/5')!=-1) && (agt.indexOf('spoofer')==-1) &&
                 (agt.indexOf('compatible')==-1) && (agt.indexOf('opera')==-1)  &&
                 (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)     &&
                 (is_gecko) && (navigator.vendor=="Firebird"));
    var is_fx = ((agt.indexOf('mozilla/5')!=-1) && (agt.indexOf('spoofer')==-1) &&
                 (agt.indexOf('compatible')==-1) && (agt.indexOf('opera')==-1)  &&
                 (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)     &&
                 (is_gecko) && ((navigator.vendor=="Firefox")||(agt.indexOf('firefox')!=-1)));
    var is_moz   = ((agt.indexOf('mozilla/5')!=-1) && (agt.indexOf('spoofer')==-1) &&
                    (agt.indexOf('compatible')==-1) && (agt.indexOf('opera')==-1)  &&
                    (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)     &&
                    (is_gecko) && (!is_fb) && (!is_fx) &&
                    ((navigator.vendor=="")||(navigator.vendor=="Mozilla")||(navigator.vendor=="Debian")));
    if ((is_moz)||(is_fb)||(is_fx)) {  // 032504 - dmr
       var is_moz_ver = (navigator.vendorSub)?navigator.vendorSub:0;
       if(is_fx&&!is_moz_ver) {
           is_moz_ver = agt.indexOf('firefox/');
           is_moz_ver = agt.substring(is_moz_ver+8);
           is_moz_ver = parseFloat(is_moz_ver);
       }
       if(!(is_moz_ver)) {
           is_moz_ver = agt.indexOf('rv:');
           is_moz_ver = agt.substring(is_moz_ver+3);
           is_paren   = is_moz_ver.indexOf(')');
           is_moz_ver = is_moz_ver.substring(0,is_paren);
       }
       is_minor = is_moz_ver;
       is_major = parseInt(is_moz_ver);
    }
   var is_fb_ver = is_moz_ver;
   var is_fx_ver = is_moz_ver;

    var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
                && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
                && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)
                && (!is_khtml) && (!(is_moz)) && (!is_fb) && (!is_fx));

    // Netscape6 is mozilla/5 + Netscape6/6.0!!!
    // Mozilla/5.0 (Windows; U; Win98; en-US; m18) Gecko/20001108 Netscape6/6.0
    // Changed this to use navigator.vendor/vendorSub - dmr 060502   
    // var nav6Pos = agt.indexOf('netscape6');
    // if (nav6Pos !=-1) {
    if ((navigator.vendor)&&
        ((navigator.vendor=="Netscape6")||(navigator.vendor=="Netscape"))&&
        (is_nav)) {
       is_major = parseInt(navigator.vendorSub);
       // here we need is_minor as a valid float for testing. We'll
       // revert to the actual content before printing the result. 
       is_minor = parseFloat(navigator.vendorSub);
    }

    var is_nav2 = (is_nav && (is_major == 2));
    var is_nav3 = (is_nav && (is_major == 3));
    var is_nav4 = (is_nav && (is_major == 4));
    var is_nav4up = (is_nav && is_minor >= 4);  // changed to is_minor for
                                                // consistency - dmr, 011001
    var is_navonly      = (is_nav && ((agt.indexOf(";nav") != -1) ||
                          (agt.indexOf("; nav") != -1)) );

    var is_nav6   = (is_nav && is_major==6);    // new 010118 mhp
    var is_nav6up = (is_nav && is_minor >= 6); // new 010118 mhp

    var is_nav5   = (is_nav && is_major == 5 && !is_nav6); // checked for ns6
    var is_nav5up = (is_nav && is_minor >= 5);

    var is_nav7   = (is_nav && is_major == 7);
    var is_nav7up = (is_nav && is_minor >= 7);

    var is_nav8   = (is_nav && is_major == 8);
    var is_nav8up = (is_nav && is_minor >= 8);

    var is_ie   = ((iePos!=-1) && (!is_opera) && (!is_khtml));
    var is_ie3  = (is_ie && (is_major < 4));

    var is_ie4   = (is_ie && is_major == 4);
    var is_ie4up = (is_ie && is_minor >= 4);
    var is_ie5   = (is_ie && is_major == 5);
    var is_ie5up = (is_ie && is_minor >= 5);
    
    var is_ie5_5  = (is_ie && (agt.indexOf("msie 5.5") !=-1)); // 020128 new - abk
    var is_ie5_5up =(is_ie && is_minor >= 5.5);                // 020128 new - abk
	
    var is_ie6   = (is_ie && is_major == 6);
    var is_ie6up = (is_ie && is_minor >= 6);
	
	var is_ie7   = (is_ie && is_major == 7);
    var is_ie7up = (is_ie && is_minor >= 7);

// KNOWN BUG: On AOL4, returns false if IE3 is embedded browser
    // or if this is the first browser window opened.  Thus the
    // variables is_aol, is_aol3, and is_aol4 aren't 100% reliable.

    var is_aol   = (agt.indexOf("aol") != -1);
    var is_aol3  = (is_aol && is_ie3);
    var is_aol4  = (is_aol && is_ie4);
    var is_aol5  = (agt.indexOf("aol 5") != -1);
    var is_aol6  = (agt.indexOf("aol 6") != -1);
    var is_aol7  = ((agt.indexOf("aol 7")!=-1) || (agt.indexOf("aol7")!=-1));
    var is_aol8  = ((agt.indexOf("aol 8")!=-1) || (agt.indexOf("aol8")!=-1));

    var is_webtv = (agt.indexOf("webtv") != -1);
    
    // new 020128 - abk
    
    var is_TVNavigator = ((agt.indexOf("navio") != -1) || (agt.indexOf("navio_aoltv") != -1)); 
    var is_AOLTV = is_TVNavigator;

    var is_hotjava = (agt.indexOf("hotjava") != -1);
    var is_hotjava3 = (is_hotjava && (is_major == 3));
    var is_hotjava3up = (is_hotjava && (is_major >= 3));

    // end new
	

