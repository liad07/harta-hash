function encode() {
    var str1=document.getElementById("encode").value
    var newstr1=""
    var color=""
    for (let i = 0; i < str1.length; i++) {
        let ascii = str1.charAt(i).charCodeAt(0);
        newstr1+=String.fromCharCode(ascii-1)+""+String.fromCharCode(ascii+1)
    }
    if (newstr1.length==0)
    {
        color="dark"

    }
    if (newstr1.length<16&&newstr1.length!=0)
        color="danger"
    if (newstr1.length<16&&newstr1.length>8)
        color="warning"
    if (newstr1.length>=16){
        color="success"
    }
    document.getElementById("en").className="btn btn-"+color
    document.getElementById("en").textContent=newstr1
    if (document.getElementById("en").textContent!="encode"){
        f(newstr1)
    }
}
function f(text) {
    navigator.clipboard.writeText(text);
    document.getElementById("v").style.marginRight="185px"
    document.getElementById("v").textContent="copied to clipboard"
}
//מחרוזת קטנה מ16
//אין צורך לבדוק שהמספר זוגי הרי כל מספר אי זוגי או זוגי כפול 2 הוא זוגי

function decode() {
    var str=document.getElementById("decode").value
    var newstr=""
    var color1=""
    var charm=0
    var charp=0
    for (let i = 0; i < str.length; i++) {
        if(i%2==0){
            charm=parseInt(str.charAt(i).charCodeAt(0))
        }
        else{
            charp=parseInt(str.charAt(i).charCodeAt(0))
        }
        if (charm+1==charp-1){
            newstr+=String.fromCharCode((charm+1))
        }
    }
    if (newstr.length==0)
    {
        color1="dark"

    }
    if (newstr.length<16&&newstr.length!=0)
        color1="danger"
    if (newstr.length<16&&newstr.length>8)
        color1="warning"
    if (newstr.length>=16){
        color1="success"
    }
    document.getElementById("de").className="btn btn-"+color1
    document.getElementById("de").textContent=newstr
    if (document.getElementById("de").textContent!="decode"){
        f(newstr)
    }
}
