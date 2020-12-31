document.getElementsByClassName('cardContainer___iIzCV justifyHeight___L7iHX')[0].style.boxShadow = "none"

var sidebar = document.getElementsByClassName("container___17zQC pushIconLeft___3aOkV")[0]
if (sidebar){
    sidebar.click()
}

var trigger = 0

var done = 0

var containerA = document.getElementsByClassName('show___8rh3e sectionContainer___17f9Z')
 
var boxclick0 = document.getElementsByClassName('api explanation');

for (b = 0, len = boxclick0.length; b < len; b++) {
    boxclick0[b].click()
}

pshadow = document.querySelectorAll('[data-e2e-test-id="tooltip-container"]')
for (e = 0; pshadow.length > e; e++) {
    pshadow[e].style.filter = "none"
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

        boxclick[0].classList.add("button" + 0 + "container" + h);

        var checkContents = setInterval(function(){
            console.log("beginning of Interval fucntion" + h);
            if (containerA.length !== h){
                p++;
                console.log("yes length of container does not equal h, " + h + " , and I checked " + p + " times in total.");
                if (containerA[h].querySelector('[data-e2e-test-id="tooltip-container"]') && gonethroughonce !== 1 && containerA.length !== h){ 
                    clearInterval(checkContents);
                    containerA[h].querySelector('[data-e2e-test-id="tooltip-container"]').style.filter = "none";
                    console.log("I am inside beginning of if checkContents" + h);
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
                containerA[h].appendChild(newdiv);

                newdiv.classList.add("tooltipboxcontainer" + h);

                buttoncounter++;
                if (buttoncounter < boxclick.length) {
                    boxclick[buttoncounter].classList.add("button" + buttoncounter + "container" + h);
                    
                    boxclick[buttoncounter].click();
                    boxclick[buttoncounter].click();
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

bob = window.setInterval(function(){
    if (buttoncounter < boxclick.length) {
        console.log("Backup"); 
        boxclick[buttoncounter].click();
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
        var cbuttons = containerA[n].getElementsByClassName('api explanation');
        if (cbuttons) {
            for (p = 0; cbuttons.length > p; p++){
                if (cbuttons[p].classList.contains('newclinicalbutton')) {
                    containerA[n].getElementsByClassName('tooltipboxcontainer' + n)[p].classList.add("clinicaltooltip");
                    containerA[n].getElementsByClassName('tooltipboxcontainer' + n)[p].classList.add("alltooltips")
                }
                else {
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


    var welements = document.getElementsByClassName('weakImpactHighlight___13Vgb');
    var selements = document.getElementsByClassName('strongImpactHighlight___EZjnX');
    
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
    console.log('made it here')

    document.querySelector('[data-e2e-test-id="context-navigation"]').style.boxShadow = "none"
    console.log('made it here 2')
    document.getElementsByClassName('focus-3600147890--focusNavIsClosed-4094548731')[0].style.display = "block";
    console.log('made it here 3')
    document.getElementsByClassName('contentContainer-1154699314--topBarOffset-4062678711')[0].style.overflow = "visible";
    console.log('made it here 4')
    document.getElementsByClassName('body-1821082227')[0].style.overflow = "visible";
    console.log('made it here 5')
    document.getElementsByClassName('Page___eFj4O')[0].style.overflow = "visible";
    console.log('made it here 6')
    document.getElementsByClassName('contentContainer-1154699314--topBarOffset-4062678711')[0].style.inset = "0px 0px 0px";
    console.log('made it here 7')
    document.getElementsByClassName('topNavContainer___2fToj')[0].remove()
    document.getElementsByClassName('cardContainer___iIzCV justifyHeight___L7iHX')[0].style.boxShadow = "none"
    shadowbox = document.getElementsByClassName('tooltipContainer-2258669389--filterShadow-3387428294--hidden-661153127')
    for (r = 0; shadowbox.length > r; r++) {
        shadowbox[r].style.filter = "none"
    }
    document.getElementsByClassName('articleToolbarWrapper___jdZIj translateLevel2___3XUnI')[0].remove();
    document.getElementsByClassName('floatingContainer___1azu4')[0].remove()
    
    console.log('made it here THREE')
    
    done = 1

    var notizen = document.getElementsByClassName('center-829413693')
    for (z = 0; notizen.length > z; z++) {
        notizen[z].style.color = "white"
    }

    
}


