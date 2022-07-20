function remover(){
    const remove = document.getElementsByClassName('additional')[0]
    if (remove){
        remove.remove()
        remover()
    }
}

var hoverer = new MouseEvent('mouseover', {
    'view': window,
    'bubbles': true,
    'cancelable': true
});

remover()

var boxclick0 = document.getElementsByClassName('api explanation');
var childaddedremovedcounter=0
var ccontainern = 0
var ctbuttonclickn = 0
var previoustooltipshowerofcontainer = []
var tooltipshowerofcontainer = []
var newdiv = []

var containerA = document.getElementsByClassName('show--nVz6U sectionContainer--aQ_aq')

for (b = 0, len = boxclick0.length; b < len; b++) {
    boxclick0[b].dispatchEvent(hoverer)
}

for (b = 0; b < containerA.length; b++) {
    containerA[b].getElementsByClassName('api explanation');
    if (containerA[b].getElementsByClassName('api explanation')[0]){
        containerA[b].getElementsByClassName('api explanation')[0].dispatchEvent(hoverer)
    }
}

addtoolboxsection()

function addtoolboxsection() {
    for (n = 0; containerA.length > n; n++){
        newdivsection = document.createElement('div');
        containerA[n].appendChild(newdivsection);
        newdivsection.classList.add("toolboxsection");
        newdivsection.classList.add("toolboxsection"+n);
    }
}



//Alltoolboxsection.forEach(targetNode => {
//    const observer2 = new MutationObserver(callback2);
//    observer2.observe(targetNode, config2);
//});

//currentcontainernumber

function Hoveroverallcontainer(){
    for (b = 0; b < containerA.length; b++) {
        containerA[b].getElementsByClassName('content--kLKAu');
        if (containerA[b].getElementsByClassName('content--kLKAu')[0]){
            containerA[b].getElementsByClassName('content--kLKAu')[0].dispatchEvent(hoverer)
        }
    }
}


countern = 0
function myTimerFunction2(){
    if (countern == 0){
        console.log('countern: '+countern)
        countern++
    }
    else if (countern == 1){
        console.log('countern: '+countern)
        Hoveroverallcontainer()
        countern++
    }
    else if (countern > 1){
        Initiator();
        clearInterval(TimertoStart);
        countern = 0
    }
}
var TimertoStart = setInterval(myTimerFunction2,1000);
var TimertoEnd

counterx = 0
function myTimerFunction3(){
    if (counterx == 0){
        console.log('counterx: '+counterx)
        counterx++
    }
    else if (counterx == 1){
        console.log('counterx: '+counterx)
        //window.print()
        counterx++
        window.onload = function() {
            //window.print()
            counterx++
        }
    }
    else if (counterx > 1){
        clearInterval(TimertoEnd);
    }
}

document.onkeydown = function(event){
    var x = event.key;
    if (x == "q") {
        Hoveroverallcontainer();
        Initiator();
    }
}

function Initiator(){

// Options for the observer (which mutations to observe)
const config2 = { attributes: true, childList: true, subtree: true };
// Callback function to execute when mutations are observed
const callback2 = function(mutationList, observer2) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
            Alltooltipboxcontainer = document.getElementsByClassName('tooltipboxcontainer')
            Alltooltipboxcontainer[Alltooltipboxcontainer.length-1]
            if (Alltooltipboxcontainer[Alltooltipboxcontainer.length-2]) {
                console.log('There are at least two tooltipboxcontainer')
                if (Alltooltipboxcontainer[Alltooltipboxcontainer.length-2] != Alltooltipboxcontainer[Alltooltipboxcontainer.length-1]) {
                    console.log('newest and previous tooltipboxcontainer are different, '+(Alltooltipboxcontainer.length-1))
                    //clearInterval(Drivefornextbuttonclick);
                    //Drivefornextbuttonclick = setInterval(myTimerFunction, 8000);
                    //nextbuttonclick()
                }
            }
        }
    }
};
// Create an observer instance linked to the callback function
const observer2 = new MutationObserver(callback2);
targetNodes= document.getElementsByClassName('toolboxsection')
// Start observing the target node for configured mutations
for (b = 0, len = targetNodes.length; b < len; b++) {
    observer2.observe(targetNodes[b], config2);
}



function nextbuttonclick() {
    if (ccontainern === containerA.length) {
        console.log("ccontainern " + ccontainern + " is higher than containerA.length" + containerA.length)
        // run donefunction
        donefunction()
    }
    else if (containerA[ccontainern].getElementsByClassName('api explanation')[ctbuttonclickn]) {
        if (ctbuttonclickn === 0){
            previoustooltipshowerofcontainer = newdiv
            Starttheobserverinthiscontainer()
        }
        else {
            previoustooltipshowerofcontainer = newdiv;
        }
        console.log('clicking on button '+ctbuttonclickn+' in container '+ccontainern)

        if (containerA[ccontainern].getElementsByClassName("tooltipboxcontainer" + ccontainern)[0]){
            list = containerA[ccontainern].getElementsByClassName("tooltipboxcontainer" + ccontainern)
            if (list[list.length-1]){
                console.log('adding class to printedbox, class: printedbox'+(ctbuttonclickn-1))
                list[list.length-1].classList.add("printedbox" + (ctbuttonclickn-1));
                list[list.length-1].classList.add("printedbox");
                list[list.length-1].classList.add("printedboxincontainer" + ccontainern);
            }
        }

        containerA[ccontainern].getElementsByClassName('api explanation')[ctbuttonclickn].dispatchEvent(hoverer)

        //remove this later !!! since mutationboserver will increase ctbuttonclickn if successful
        ctbuttonclickn ++
        //window.scroll(0,findPos(containerA[ccontainern].getElementsByClassName('api explanation')[ctbuttonclickn])-(window.screen.height/2));
        //nextbuttonclick()
        //until here




    }
    else {
        console.log('Button '+ctbuttonclickn+' doesnt exist in container '+ccontainern)
        ccontainern ++
        ctbuttonclickn = 0
        nextbuttonclick()
    }
}

function donefunction() {
    console.log("done, modifying things")
    observer.disconnect()
    observer2.disconnect()
    fixprintedtoolboxes()
    removeduplicateprintedboxes()
    addlabelstobuttonandbox()
    ImagePrinter()
    Hoveroverallcontainer()
    TimertoEnd = setInterval(myTimerFunction3,3000);
    //window.print()
}

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };
// Callback function to execute when mutations are observed
var callback = function(mutationList, observer) {
    // Use traditional 'for loops' for IE 11
    console.log('I was called, with ctbuttonclickn: ' + ctbuttonclickn)
    
    //innerhtml of current tooltip-container
    //console.log('target'+mutation.target);
    childaddedremovedcounter ++
    console.log('childaddedremovedcounter: '+childaddedremovedcounter)
    tooltipshowerofcontainer = containerA[ccontainern].querySelector('[data-e2e-test-id="tooltip-container"]');
    if (tooltipshowerofcontainer) {
        if (tooltipshowerofcontainer.innerHTML != previoustooltipshowerofcontainer.innerHTML) {
            console.log('creating element')
            newdiv = document.createElement('div');
            newdiv.innerHTML = tooltipshowerofcontainer.innerHTML;
            //ctbuttonclickn ++
            newdiv.classList.add("tooltipboxcontainer" + ccontainern);
            newdiv.classList.add("tooltipboxcontainer");
            if (containerA[ccontainern].getElementsByClassName('toolboxsection')[0]){
                containerA[ccontainern].getElementsByClassName('toolboxsection')[0].appendChild(newdiv);
            }
            else {
                containerA[ccontainern].appendChild(newdiv);
            }
            
            //console.log('callback: ctbuttonclickn: '+ctbuttonclickn)
            //220717 !!! this ctbuttonclickn don't work, don't know why; they don't do anything curently
            //var ctbuttonclickn = ctbuttonclickn + 1
            //console.log('callback: ctbuttonclickn: '+ctbuttonclickn)
            
            previoustooltipshowerofcontainer = newdiv
        }
        else {
            console.log('still showing content of previous tooltip-container')
        }
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

function Starttheobserverinthiscontainer(){
    const targetNode = containerA[ccontainern].querySelector('[data-e2e-test-id="tooltip-container"]')
    if (targetNode) {
        console.log('Adding observer in container '+ccontainern)
        observer.observe(targetNode, config);
    }
    else {
        console.log('not good, no tooltip-container in this container ...')
    }
    // Start observing the target node for configured mutations
    
}

function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}

function myTimerFunction(){
    if (containerA.length > ccontainern){
        console.log('hi')
        nextbuttonclick()
    }
    else {
        console.log("Yes all containers done; I cleared Interval " + ccontainern);
        clearInterval(Drivefornextbuttonclick);
    }
}

var Drivefornextbuttonclick = setInterval(myTimerFunction,500);

//Drivefornextbuttonclick()

nextbuttonclick()

function fixprintedtoolboxes(){
    for (b = 0; b < containerA.length; b++) {    
        list = containerA[b].getElementsByClassName('printedbox')
        number = list.length
        list = containerA[b].getElementsByClassName('tooltipboxcontainer')
        if (list[list.length-1]){
            list[list.length-1].classList.add("printedbox" + number);
            list[list.length-1].classList.add("printedbox");
            list[list.length-1].classList.add("printedboxincontainer" + b);
        }
    }
}

function removeduplicateprintedboxes(){
    Alltooltipboxcontainer = document.getElementsByClassName('tooltipboxcontainer')
    for (b = 0; b < Alltooltipboxcontainer.length; b++) {    
        x = Alltooltipboxcontainer[b]
        if (x.classList.contains('printedbox')){
            console.log('tooltipboxcontainer '+b+' includes printedbox')
        }
        else {
            console.log('deleting tooltipboxcontainer '+b+' because no printedbox-class')
            x.remove()
        }
    }
}

function addlabelstobuttonandbox() {
    //style
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
    //cycle through buttons, and go to tooltipboxcontainer (those that are left after removal)

    for (n = 0; containerA.length > n; n++) {
        var bandtcounter = 1
        var cbuttons = containerA[n].getElementsByClassName('api explanation');
        if (cbuttons) {
            for (p = 0; cbuttons.length > p; p++){
                // add number to button
                var newnumberdiv = document.createElement('label');
                newnumberdiv.innerHTML = bandtcounter
                newnumberdiv.classList.add("numberforbutton");
                cbuttons[p].parentNode.insertBefore(newnumberdiv, cbuttons[p].nextSibling);
                // cbuttons[p].parentNode.appendChild(newnumberdiv);
                
                // add number to newbox 
                var newnumberdiv2 = document.createElement('label');
                newnumberdiv2.innerHTML = bandtcounter+" "
                newnumberdiv2.classList.add("numberfortool");
                var vtool = containerA[n].getElementsByClassName('tooltipboxcontainer' + n)[p]
                vtool.getElementsByClassName('content--kLKAu')[0].prepend(newnumberdiv2);
                
                //counter +1
                bandtcounter++
            }
        }
    }
}

function ImagePrinter() {
    imgcol = document.getElementsByClassName('thumbnail__image')
    if (imgcol) {
        for (e = 0; imgcol.length > e; e++) {                
            imgsrc = imgcol[e].dataset.source
            var img = document.createElement("img");
            var elementimgtit = document.createElement("p");
            img.src = imgsrc
            
            imgtit = imgcol[e].firstChild.title
            elementimgtit.innerHTML = imgtit
            imgcol[e].parentElement.appendChild(elementimgtit)
            elementimgtit.className += "container-3780172049--blue-840034873"
            elementimgtit.style.color = 'black'
            elementimgtit.style.backgroundColor = '#f1f3f4'
    
    
            imgcol[e].parentElement.appendChild(img)
        
            img.style.width = '100%'
            img.style.maxWidth = '500px'
            img.style.maxHeight = '800px'
            imgcol[e].style.width = '10px'
            imgcol[e].style.height = '10px'
        }
    }
    // adding thius 220603 ntested
    impactnumber = document.getElementsByClassName('strongImpactHighlight--qLdOc').length * 2 + document.getElementsByClassName('weakImpactHighlight--nsKSQ').length
    impactheight = document.getElementsByClassName('css-1b3oxfy')[0].offsetHeight
    impactdensity = impactnumber * 1000 / (impactheight - 1500)
    document.title = String(Math.round(impactnumber)).padStart(3, '0') + " " + document.title
}






























}
