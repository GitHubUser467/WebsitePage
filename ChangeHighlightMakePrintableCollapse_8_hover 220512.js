// 220513 changed time to 500 from 800, check if updated in github

var Shadowofcard = document.getElementsByClassName('cardContainer___iIzCV justifyHeight___L7iHX')[0]
if (Shadowofcard){
    Shadowofcard.style.boxShadow = "none"   
}

var sidebar = document.getElementsByClassName("container___17zQC pushIconLeft___3aOkV")[0]
if (sidebar){
    sidebar.click()
}

//220512 new hover instead of click of boxclick0 and boxclick, added hoverer to all .click()

var hoverer = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });
  
//boxclick0.dispatchEvent(hoverer);

var trigger = 0

var done = 0

var containerA = document.getElementsByClassName('show--nVz6U sectionContainer--aQ_aq')
 
var boxclick0 = document.getElementsByClassName('api explanation');

for (b = 0, len = boxclick0.length; b < len; b++) {
    boxclick0[b].click()
    boxclick0[b].dispatchEvent(hoverer)
}

pshadow = document.querySelectorAll('[data-e2e-test-id="tooltip-container"]')
for (e = 0; pshadow.length > e; e++) {
    pshadow[e].style.filter = "none"
    //220516 adding -3 so it doesn't cover screen
    pshadow[e].style.zIndex = -3
}

var h = 0;

var p = 0;

function whichContainer() {
    boxclick = containerA[h].getElementsByClassName('api explanation');
    gonethroughonce = 0
    console.log("the beginning of whichContainer" + h);
    if (boxclick.length !== 0) {
        console.log("boxclick.length is not 0" + h);
        boxclick[0].click();
        boxclick[0].click();
        boxclick[0].dispatchEvent(hoverer)
        boxclick[0].dispatchEvent(hoverer);

        boxclick[0].classList.add("button" + 0 + "container" + h);

        console.log('I added class to boxclick button zero in container ' + h)

        var checkContents = setInterval(function(){
            console.log("beginning of Interval fucntion" + h);
            if (containerA.length !== h){
                p++;
                console.log("yes length of container does not equal h, " + h + " , and I checked " + p + " times in total.");
                if (containerA[h].querySelector('[data-e2e-test-id="tooltip-container"]') && gonethroughonce !== 1 && containerA.length !== h){ 
                    console.log("I am inside beginning1 of if checkContents " + h);
                    clearInterval(checkContents);
                    containerA[h].querySelector('[data-e2e-test-id="tooltip-container"]').style.filter = "none";
                    console.log("I am inside beginning2 of if checkContents " + h);
                    // Check if element has been found
                    // There is a <p> element in here!!
                    targetNode = containerA[h].querySelector('[data-e2e-test-id="tooltip-container"]');
                    gonethroughonce = 1;
                    console.log("Yes" + h);
                    Start();
                }
                //else if (boxclick.length = 1) {
                //    Start();
                //}
            
            }
            console.log("outside of in checkContents" + h);
            if (containerA.length == h) {
                console.log("Yes all containers done; I cleared Interval" + h);
                clearInterval(checkContents);
            }
        },500);
    }
    else {
        console.log("boxclick is empty" + h);
        //boxclick.length == 0
        h++;
        if (h < containerA.length){
            console.log("No buttons in this container, on to next" + h);
            whichContainer();
        }
        else {
            console.log("I am returning" + h);
            observer.disconnect();
            fCSS();
            return
        }
    }  
}

console.log("I should happen only once");
whichContainer()


var config = { attributes: true, childList: true, subtree: true };

var callback = function(mutationsList, observer) {
    console.log("beginning of callback" + h);
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.' + h);
            var toolbox = containerA[h].querySelector('[data-e2e-test-id="tooltip-container"]');
            

            if (toolbox) {
                var newdiv = document.createElement('div');
                console.log("inside of callback if statement" + h);
                toolbox.style.filter = "none";
                newdiv.innerHTML = toolbox.innerHTML;
                toolbox.classList.add("hovercontainer");
                containerA[h].appendChild(newdiv);

                newdiv.classList.add("tooltipboxcontainer" + h);

                buttoncounter++;
                if (buttoncounter < boxclick.length) {
                    boxclick[buttoncounter].classList.add("button" + buttoncounter + "container" + h);
                    
                    boxclick[buttoncounter].click();
                    boxclick[buttoncounter].click();
                    boxclick[buttoncounter].dispatchEvent(hoverer);
                    boxclick[buttoncounter].dispatchEvent(hoverer);
                    console.log("Another One");
                }
                else {
                    h++;
                    if (h < containerA.length){
                        console.log("Many buttons done, on to next Container" + h);
                        whichContainer();
                    }
                    else {
                        console.log("Done with many buttons in container, and done completely");
                        observer.disconnect();
                    }

                }
            }
            console.log("Hello" + h);
        console.log("Hi" + h);
        }
    console.log("I am nr" + h);
    }
console.log("bonj" + h);
trigger++
 
};

// This I changed 201231

var bobcounter = 0
bob = window.setInterval(function(){
    if (buttoncounter < boxclick.length) {
        console.log("Backup"); 
        boxclick[buttoncounter].click();
        boxclick[buttoncounter].dispatchEvent(hoverer);
        bobcounter++
        if (bobcounter == 2) {
            var buttonbefore = buttoncounter - 1
            boxclick0[0].click();
            boxclick0[0].dispatchEvent(hoverer);
            bobcounter = 0
        }
    }
    if (done == 1){
        clearInterval(bob);
    }   
  }, 10000);

var observer = new MutationObserver(callback);

function Start(){

    console.log("Beginning of start function" + h);
    var newdiv = document.createElement('div');
    
    if (targetNode) {
        console.log("start function in first if" + h);
        newdiv.innerHTML = targetNode.innerHTML;
        containerA[h].appendChild(newdiv);
        buttoncounter = 1;

        newdiv.classList.add("tooltipboxcontainer" + h);

        if (boxclick.length > 1) {
            console.log("start function first if of first if" + h);
            observer.observe(targetNode, config);

            boxclick[1].classList.add("button" + 1 + "container" + h);    

            boxclick[1].click();
            boxclick[1].click();
            boxclick[1].dispatchEvent(hoverer);
            boxclick[1].dispatchEvent(hoverer);
            console.log("Bye" + h);
            observer.observe(targetNode, config);
        }
        else if (boxclick.length == 1) {
            console.log("start function second if of first if" + h);
            h++;
            if (h < containerA.length){
                console.log("Only one, next Container" + h);
                whichContainer();
            }
        
            

        }
    }  
}

function fCSS() {
    var tooltips = document.getElementsByClassName('children-2286806230--childrenDefault-4239998497')
    if (tooltips){
        for (n = 0; n < tooltips.length; n++) {
            var t = tooltips[n].style
            t.padding = '4px';
            t.paddingLeft = '8px';
            t.background = '#f1f3f4';
            t.border = '1px solid #e3e6e8';
            t.marginBottom = "4px";
            t.marginTop = "4px"
    
        }
    }


    var classAdditional = document.getElementsByClassName('additional')

    if (classAdditional){
        for (u=0; classAdditional.length > u; u++) {
            var clinicalboxes = classAdditional[u].getElementsByClassName('api explanation')
            for (o=0; clinicalboxes.length > o; o++) {
                clinicalboxes[o].classList.add("newclinicalbutton");
            }
        }
    }



    for (n = 0; containerA.length > n; n++) {
        var bandtcounter = 1
        var cbuttons = containerA[n].getElementsByClassName('api explanation');
        if (cbuttons) {
            for (p = 0; cbuttons.length > p; p++){
                if (cbuttons[p].classList.contains('newclinicalbutton')) {
                    containerA[n].getElementsByClassName('tooltipboxcontainer' + n)[p].classList.add("clinicaltooltip");
                    containerA[n].getElementsByClassName('tooltipboxcontainer' + n)[p].classList.add("alltooltips")
                }
                else {
                    // if here it means it's a nonclinical button/tooltip
                    // add number to button
                    var newnumberdiv = document.createElement('label');
                    newnumberdiv.innerHTML = bandtcounter
                    newnumberdiv.classList.add("numberforbutton");
                    cbuttons[p].parentNode.insertBefore(newnumberdiv, cbuttons[p].nextSibling);
                    // cbuttons[p].parentNode.appendChild(newnumberdiv);
                    
                    // add number to newbox 
                    var newnumberdiv2 = document.createElement('label');
                    newnumberdiv2.innerHTML = bandtcounter
                    newnumberdiv2.classList.add("numberfortool");
                    var vtool = containerA[n].getElementsByClassName('tooltipboxcontainer' + n)[p]
                    vtool.getElementsByClassName('content--_F_rK')[0].prepend(newnumberdiv2);
                    
                    //counter +1
                    bandtcounter++

                    containerA[n].getElementsByClassName('tooltipboxcontainer' + n)[p].classList.add("nonclinicaltooltip");
                    
                    containerA[n].getElementsByClassName('tooltipboxcontainer' + n)[p].classList.add("alltooltips")
                }
            }
        }

    }

    var allclinicaltooltips = document.getElementsByClassName('clinicaltooltip')
    if (allclinicaltooltips) {
        for (t = 0; allclinicaltooltips.length > t; t++) {
            var s = allclinicaltooltips[t].getElementsByClassName('children-2286806230--childrenDefault-4239998497')[0].style
            s.color = "grey";
            s.background = 'white';
            s.margin = "0px"
        }
    }


    var welements = document.getElementsByClassName('weakImpactHighlight--nsKSQ');
    var selements = document.getElementsByClassName('strongImpactHighlight--qLdOc');
    var xelements = document.getElementsByClassName('radarHighlight--lVkMF');

    
    if (selements){
        for (i = 0, len = selements.length; i < len; i++) {
            selements[i].style.textDecoration = 'underline';
            selements[i].style.textDecorationColor = '#B70014';
            selements[i].style.textDecorationStyle = 'wavy';
        };        
    }

    if (welements){
        for (a = 0, len = welements.length; a < len; a++) {
            welements[a].style.textDecoration = 'underline';
            welements[a].style.textDecorationColor = '#0070C0';
            welements[a].style.textDecorationStyle = 'wavy';
        } 
    }

    if (xelements){
        for (i = 0, len = xelements.length; i < len; i++) {
            xelements[i].style.textDecoration = 'underline';
            xelements[i].style.textDecorationColor = '#B70014';
            xelements[i].style.textDecorationStyle = 'wavy';
        };        
    }    


    console.log('made it here')

    document.querySelector('[data-e2e-test-id="context-navigation"]').style.boxShadow = "none"
    console.log('made it here 2')
    //220520 currently only working until here
    document.getElementsByClassName('focus-3600147890--focusNavIsClosed-4094548731')[0].style.display = "block";
    console.log('made it here 3')
    document.getElementsByClassName('contentContainer-1154699314--topBarOffset-4062678711')[0].style.overflow = "visible";
    console.log('made it here 4')
    document.getElementsByClassName('body-1821082227')[0].style.overflow = "visible";
    console.log('made it here 5')
    document.getElementsByClassName('Page--yI_75')[0].style.overflow = "visible";
    console.log('made it here 6')
    document.getElementsByClassName('contentContainer-1154699314--topBarOffset-4062678711')[0].style.inset = "0px 0px 0px";
    console.log('made it here 7')
    document.getElementsByClassName('topNavContainer--__2jX')[0].remove()
    document.getElementsByClassName('cardContainer--yeUIo justifyHeight--t6OkG')[0].style.boxShadow = "none"
    shadowbox = document.getElementsByClassName('tooltipContainer-2258669389--filterShadow-3387428294--hidden-661153127')
    for (r = 0; shadowbox.length > r; r++) {
        shadowbox[r].style.filter = "none"
    }

    var theremover = document.getElementsByClassName('articleToolbarWrapper___jdZIj translateLevel2___3XUnI')[0]
    if (theremover) {
        theremover.remove()
    }

    var theremover = document.getElementsByClassName('floatingContainer___1azu4')[0]
    if (theremover) {
        theremover.remove()
    }
   
    console.log('made it here THREE')

    var topshadow = document.getElementsByClassName('breadcrumbsContainer___xSZ_o')[0]
    if (topshadow) {
        topshadow.remove()
    }
    
    done = 1

    var notizen = document.getElementsByClassName('center-829413693')
    for (z = 0; notizen.length > z; z++) {
        notizen[z].style.color = "white"
    }

    
}

/*
// cycle through containers

for (e = 0; containerA.length > e; e++) {
    // for each container cycle through buttons "nonclinicaltooltip" and add 
    onecontainerallnonclin = containerA[e].getElementsByClassName("nonclinicaltooltip")
    for (z = 0; onecontainerallnonclin.length > z; z++) {

    }
}

padding-right: 8px;
color: #9298a2;
font-weight: bold;


padding: 1px;
margin-left: 1px;
color: #b3bec6;
font-size: 90%;
*/
