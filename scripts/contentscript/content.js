function extractSelectedText(e) {
    //Text selected.
    console.log(e.target);//test
    let selTag=e.target;
    let selString;
    let sel = window.getSelection();
    if (sel) {
        console.log(sel);
        //console.log(sel.toString());//test
         selString=sel.toString();
    }
    highlightMarker(selTag,selString);
    //highlightMarker(sel);
}

/*function highlightMarker(selectionSt){
    let newElement=document.createElement("i",);
    newElement.style.fontStyle='inherit';
    selectionSt.getRangeAt(0).surroundContents(newElement);
    setTimeout(function(){
        console.log(newElement);//test
        newElement.style.backgroundColor="transparent";
    },2000)
}*/

function highlightMarker(selTag, value) {
    let regex;
    let newTag;
    if (selTag.tagName === 'P') {
        $(selTag).html(function (_, html) {
            regex = new RegExp(value, 'g');
            newTag = '<m class="marks">' + value + '</m>';
            return html.replace(regex, newTag);
        });

        setTimeout(function () {
            $(selTag).html(function (_, html) {
                regex = new RegExp(newTag, 'g');
                return html.replace(regex, value);
            });
        }, 2000)
    }
}





document.addEventListener('mouseup', extractSelectedText);


