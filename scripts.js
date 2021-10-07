let table_3 = document.getElementById("n3");
let table_6 = document.getElementById("n6");
let table_5 = document.getElementById("n5");
var cout = 0;
var sw_cou = 2;
//1-st task
table_3.onclick = function(event){
    Swarp();
}
table_6.onclick = function(event){
    Swarp();
}
function Swarp(){
    sw_cou++;
    let n3_container = document.getElementById("n3");
    let n3_content = document.getElementById("n3").innerHTML;
    let n6_container = document.getElementById("n6");
    let n6_content = document.getElementById("n6").innerHTML;
    let temp_content = n3_content;
    n3_container.innerHTML=n6_content;
    n6_container.innerHTML=temp_content;

    if(sw_cou%2==1)
    {
        n3_container.style.overflow = "auto";
        let nones = document.getElementById("n3").childNodes[3];
        nones.style.fontSize="14px";
    }
    else{
        n3_container.style.overflow = "hidden";
        let nones = document.getElementById("n6").childNodes[3];
        console.log(nones);
        nones.style.fontSize="16px";
    }    
}
//2-nd task
table_5.childNodes[1].onclick = function(event){
    if(cout<5)
    {
        FindArea();
    }
    else{
        alert("enough! (╯‵□′)╯︵┴─┴");
    }
}
function FindArea() {
    cout++;
	let a = 4;
    let b = 6;
	let h = 5;
	let result = (a+b) * h / 2;
    var tag = document.createElement("li");
    var local_text ="a="+a+" b="+b+", h="+h+"; S = "+ result.toString();
    var text = document.createTextNode(local_text);
    tag.appendChild(text);
    var element = document.getElementById("n5").childNodes[1];
    element.appendChild(tag);    
}

//3-rd task
window.onload = CookiesReload();
function CookiesReload()
{
    if(document.cookie='')
    {
        return;
    }
    let de_way = confirm("Coowkies UwU: "+document.cookie+"\nSawe_it?")
    if(de_way)  
	{
		let de_way2 = confirm("This site uses coowkies.\nWanna restawt UwU?");
		if(de_way2)
		{
			window.location.reload();
		}
        else{
            deleteCookie("dividers");
            FunkyGeneration();
        }
	}
    else{
        deleteCookie("dividers");
        FunkyGeneration();
    }
}

function FunkyGeneration(){    
    var tag1 = document.createElement("form");
    tag1.name = "dividers";
    tag1.action="";    

    var tag2 = document.createElement("lable");
    var text = document.createTextNode("Enter here: ");
    tag2.appendChild(text);

    var tag3 = document.createElement("input");
    tag3.type = "text";
    tag3.id = "enterarea";

    var tag4 = document.createElement("input");
    tag4.type = "button";
    tag4.id = "enterbutton";
    tag4.value = "enter";

    tag1.appendChild(tag2);
    tag1.appendChild(tag3);
    tag1.appendChild(tag4);
    table_5.appendChild(tag1);
}

let butt = document.getElementById("enterbutton");
let entarea = document.getElementById("enterarea");
butt.onclick = function(event){
    var arr=[];
    for (var i = 0, length = entarea.value; i <= length; i++)
    {
        if(entarea.value%i==0)
        {
            arr.push(i);
        }
    }
    var k = "";
    arr.forEach(element => {
        k+=" "+element;
    });
    alert(k);
    setCookie("dividers",k);
    entarea.value="";
}

function setCookie(name, value, options = {}) {
  
    /*options = { 
        path: '/',
        domain: '127.0.0.1'
    };*/
	if (options.expires instanceof Date) 
	{
	  options.expires = options.expires.toUTCString();
	}
  
	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
  
	for (let optionKey in options) 
	{
	  updatedCookie += "; " + optionKey;
	  let optionValue = options[optionKey];
		if (optionValue !== true) 
		{
			updatedCookie += "=" + optionValue;
		}
	}
  
	document.cookie = updatedCookie;
}

function deleteCookie(name) {
    setCookie(name, "", {
        'max-age': 0
    });
}

//4-th task
const input = document.querySelector('input');
let table_4_cont = document.getElementById("n4").childNodes[1];

const selectElement = document.querySelector('.caseschange');

selectElement.addEventListener('change', (event) => {
    if(event.target.value == '1')
    {
        table_4_cont.textContent = decapitalize(table_4_cont.textContent);
    }
    else{
        table_4_cont.textContent = capitalize(table_4_cont.textContent);
    }
});

var radio_key = 0;
function capitalize(str) {
    radio_key=1;
    Save();
    return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
function decapitalize(str) {
    radio_key=0;
    Save();    
    return str.replace(/(^|\s)\S/g, function(a) {return a.toLowerCase()})
}

function Save()
{
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            if(radios[i].value=='1')
            {
                localStorage.setItem('test', radio_key.toString());
            }
            else if(radios[i].value=='0'){
                delete localStorage.test;
            }
            else{return;}
        }
    }
}
var radios = document.getElementsByName('savetheoption');

function Startcase()
{
    if(localStorage.test == '1'){
        table_4_cont.textContent = capitalize(table_4_cont.textContent);
    }
    else if(localStorage.test == '0'){
        table_4_cont.textContent = decapitalize(table_4_cont.textContent);
    }
    else{
        return;
    }
}
Startcase();

//5-th task
let x_conteiner = document.getElementById("x");
var lol_dont_press_pls = 0;
x_conteiner.onclick = function(event){
    if(lol_dont_press_pls==0)
    {
        ImgFormGen();
    }
    lol_dont_press_pls++;
}

function ImgFormGen(){
    var tag1 = document.createElement("form");
    tag1.name = "imgforms";
    tag1.action="";

    var tag2 = document.createElement("input");
    tag2.type = "button";
    tag2.id = "buttonadd";
    tag2.value = "Show";

    var tag3 = document.createElement("input");
    tag3.type = "button";
    tag3.id = "buttonsave";
    tag3.value = "Save";

    var tag4 = document.createElement("input");
    tag4.type = "text";
    tag4.id = "pictureurl";

    tag1.appendChild(tag2);
    tag1.appendChild(tag3);
    tag1.appendChild(tag4);
    table_5.appendChild(tag1);
    var div1 = document.createElement("div");
    div1.style="display: flex; flex-direction: column;";    
    document.getElementById("n4").appendChild(div1);

    tag3.onclick = function(event){
        var div2 = document.createElement("div");
        div2.style="display: flex; flex-direction: column;";   

        var img1 = document.createElement("img");
        img1.src = tag4.value;
        img1.alt = "imgnotfound(";
        img1.style = "height: 100px; width: 100px;"
        div2.appendChild(img1);
        tag4.value="";
        var urimg = localStorage.getItem("img")+"@"+img1.src;
        localStorage.setItem("img", urimg);

        var img2 = document.createElement("button");
        img2.name="delbut";
        img2.textContent="delete?"
        img2.style="width:100px; height:25px;"
        img2.id=img1.src;
        div2.appendChild(img2);
        div1.appendChild(div2);

        img2.onclick = function(event){
            img2.parentNode.remove();
            localStorage.setItem("img", localStorage.getItem("img").replace('@'+img2.id,''));
        }
    }

    tag2.onclick = function(event){
        div1.innerHTML='';
        var arr = localStorage.getItem("img").split('@');
        arr.forEach(element => {
            if(element!='null'){            
            
                var div2 = document.createElement("div");
                div2.style="display: flex; flex-direction: column;";   

                var img1 = document.createElement("img");
                img1.src = element;
                img1.alt = "imgnotfound(";
                img1.style = "height: 100px; width: 100px;"
                div2.appendChild(img1);

                var img2 = document.createElement("button");
                img2.textContent="delete?"
                img2.name="delbut";
                img2.style="width:100px; height:25px;"
                img2.id=img1.src;
                div2.appendChild(img2);
                div1.appendChild(div2);

                img2.onclick = function(event){
                    img2.parentNode.remove();
                    localStorage.setItem("img", localStorage.getItem("img").replace('@'+img2.id,''));
                }
            }
        });
    }
}