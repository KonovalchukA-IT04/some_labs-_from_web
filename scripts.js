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
  
     options = { 
        path: '/' 
    };
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