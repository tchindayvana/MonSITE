
/*var x=1;
var reponse ="";

var y=8;
var z=x+y;
var e= y/5;
var f=y %x;
var n=1;
var datey = Date();
var datel = Date.now();
alert(datel +'\n');
alert(datey +'\n');
//alert("les correspondances ");
/*
*if(y<y)
{
    alert("vrai")

}
else{
   alert("faux")
}*/
/*
*while(n<=10)
  alert("nous a avons" + n==n+1);

*/
 /*
 *while( x<5 )
 {
    alert("comptons:" +x);
    x++;
 }
reponse = (x<=6 ) ? "bonjour" : "bonsoir";
semaine= 7;
switch(semaine)
{
    case 1: alert("lundi");
break;
   case 2 : alert("mardi");
   break;
   default:
    alert("c'est fini");

}*/
/** 
multiplication(n,s,x) 
{var n=0;
    var x=5;
     var s;
   
  for(n=0;n++;n<5)
  {
    s= n*x;
    alert("le nombre est : "+s);
  }
}*/
/*var moi ={
    prenom : "yvana",
    nom : "cabrelle",
    age : "19",
    identite : function(){
       return  "prenom \t:" +this.prenom +
              "\nnom\t:" +this.nom+ "\nage\t:" + this.age;
    }
}
alert(moi.identite());
var presntation = {
    ainé : "divane",
    cadet : "arthur",
    benjamin: "Eden", 
    identity :function(){
        return "aine \t:" +this.ainé 
        t+ "\n cadet:" +this.cadet 
        + "\n benjamin:" +this.benjamin;


    }
}
alert (presntation.identity())
alert ("le nombre est : "+s);

alert(reponse);*/
/*var semaine = ['lundi', 'mardi' ,'mercredi','jeudi', 'vendredi'] , p='';

   // alert(semaine[0]);
   /* for(i=0;i<semaine.length;i++)
    {

        alert (semaine[i]);
    }*/
   /* for( var i=0;i<semaine.length;i++)

    {
      p+= 'prenon numero  ' +(i+1) +'\t'+  semaine[i] +'\n';
    
    }
    alert (p);

alert("afficher les reponse ci dessous :" +z
+"\nafficher les reponse ci dessous: " +e  + "\n "+f  +"\n " +e);
alert ("\n ordre de priorité en mathematique tout d'abord nous avons ,la ârenthese , la puissancela multiplication,la division , le modulo, l'addion ou soustration ")
*/
/*var p = document.querySelector('.yvana');
var  div = p.parentNode;//propriente de la methode element
div.style.color='pink';
var y = document.body;
var div = y.childNodes[1];
div.style.color = 'orange';
var text = y.childNodes[0].nodeValue;
alert (text);
text.style.color ='blue';

*/

/*var  h= document.querySelector('h1');

h.onclick = function()
{
    this.innerHTML ='<strong>je suis une travailleuse ! et je suis intelligente!</strong>';
    this.style.color='pink';
   
}*/


/*var h = document.querySelector('h1')
h.addEventListener('click',changeletext);
function changeletext(){
    this.innerHtml='<strong> je suis  tres intelligente et je serai major de premiere en 4 eme anné !  </strong>'
this.style.color='pink';
}
*/
/*var h = document.querySelector('h1')
h.addEventListener('click',function ()
{
    this.innerHtml='<strong> je suis  tres intelligente et je serai major de premiere en 4 eme anné !  </strong>'
this.style.color='pink';
}
);*/
/*var h = document.querySelector('h1')
h.addEventListener('click' ,message);
h.addEventListener('click', Message)
function message(){
    alert('je suis une fille tres intelligentge');

}
function Message(){
    alert('je me donne en 200mille pour etre majors');
    
}*/
/*var h = document.querySelector('h1')
h.addEventListener('click',function ()
{
    alert('je me donne en 200mille pour etre majors');
    alert('je ne blague pas avec mon travail ');
}
);*/
/*var h = document.querySelector('h1')
h.addEventListener('click',changeletext);
h.addEventListener('click', message)

function changeletext(){
   alert('je suis vaillente');
}
function message(){
    alert ('avoir un grand centre de beauté dans 4 ans');
}*/
/*var h = document.querySelector('h1')
h.addEventListener('mouseover' ,message);
h.addEventListener('mouseout' ,determination);
h.addEventListener('mousedown', Message);
h.addEventListener('mouseup', concentration);
function message(){
    this.innerHTML = 'je me met a font a partir d aujourd hui';
      
    this.style.color= 'pink';
    this.style.fontWeight='bold';
    this.style.fontSize='35px';
}
function determination (){
    this.innerHTML = 'Apprendre le js';
      
    this.style.color= '';
   
}
function Message(){
    alert('je me donne en 200mille pour etre majors');
  

}
*/
/*var acharnement = document.getElementById('acharnement');
 var observation = document.getElementById('observation');
 
observation.addEventListener('click', Message);
 function Message(event)
{
    this.innerHTML= 'je  fais tout pour atteindre mes objectifs : ' +event.target 
    +'<br> Element portent l\'evenement:' + event.currentTarget ;
}
*/
/*var acharnement = document.getElementById('acharnement');
 var observation = document.getElementById('observation');
 
observation.addEventListener('click', Message);
 function Message(event)
{
    this.innerHTML= 'je  fais tout pour atteindre mes objectifs : ' +event.type
   
}*/
/*var acharnement = document.getElementById('acharnement');
 var observation = document.getElementById('observation');
 acharnement.addEventListener('click', Message1,true);
observation.addEventListener('click', Message,true);
 function Message1(event)
{
    alert('je fini aujourd \'hui');
    event.stopPropagation();
}
function Message()
{
    alert('je vais tout donné');
   
}*/
/*var acharnement = document.getElementById('acharnement');
 var observation = document.getElementById('observation');
 acharnement.addEventListener('click', Message1,true);
observation.addEventListener('click', Message,true);
 function Message1(event)
{
   /// alert('je fini aujourd \'hui');
    event.preventDefault();
}
function Message()
{
    alert('je vais tout donné');
   
}
*/
 /*var p1= document.getElementById('p');
 p1.addEventListener('click', Message1);

 function Message1()
{
  window.open('http://pierre-giraud.' , '_blanc ', 'width =500 , height =300');
}
*/
/*var boutton= document.getElementById('ouvrir');
var boutton1= document.getElementById('fermer');
var fenetre= '';
boutton.addEventListener('click', Message1);
boutton.addEventListener('click', Message3)
boutton.addEventListener('click', Message2);


 function Message1()
{
  fenetre = window.open('http://pierre-giraud.com' , '_blanc ', 'width =500 , height =300');
}
function Message3()
{
    fenetre.resizeTo(300,300)
}


function Message2()
{
 fenetre.close();
}-*/
/*var hauteur = screen.height;
var hauteurdispo = screen.availHeight;
var resolution = screen.pixelDepth;
var p = document.querySelector('p');
p.innerHTML = 'hauteur de l\'ecran est : ' + hauteur +'celui disponible est : ' +hauteurdispo + 'reso : '+resolution +'bits';
*/
/*var langue= navigator.language;
var navigation = navigator.appName;
var version = navigator.appVersion;
var moteur = navigator.product;
var cokie= navigator.cookieEnabled;
var p = document.querySelector('p');
p.innerHTML = 'hauteur de l\'ecran est : ' + langue +'celui disponible est : ' +navigation+ 'reso : '+version +'bits'+ moteur+ 'cc' + cokie +'nn';

*/

/*var p = document.querySelector('p');

var geo= document.querySelector;
(
    function (){
        if(geo){
            geo.getCurrentPosion(coordonnees);
        }
        else{
            p.innerHTML = 'loclisation : ' 

        }
    }
)();
function coordonnees (x)
{
    p.innerHTML = 'latitude ' + x.coordonnees.latitude + '<br> longititude:' +x.coords.longitude;
}
*/
/*var expr = document.querySelector('p');
var r1= /terminer/i;
var r2= /terminer/ig;

var res1= expr.textContent.match(r1);
var res2 = expr.textContent.match(r2);
var resultat = document.getElementById('reg')
resultat.innerHTML = 'le resultat du premier est match() : ' +res1 + '<br>pour le deuxieme est match() :'
+ res2 ;*/
/*var expr = document.querySelector('p');
var r1= /terminer/i;
var r2= /terminer/;

var res1= expr.textContent.search(r1);
var res2 = expr.textContent.search(r2);
var resultat = document.getElementById('reg')
resultat.innerHTML = 'le resultat du premier est : ' +res1 + '<br>pour le deuxieme est  :'
+ res2 ;*/

/*var expr = document.querySelector('p');
var r1= /ou/;
var r2= /ou/g;

var res1= expr.textContent.replace(r1 , 'au');
var res2 = expr.textContent.replace(r2 ,'au');
var resultat = document.getElementById('reg')
resultat.innerHTML = 'le resultat du premier est : ' +res1 + '<br>pour le deuxieme est  :'
+ res2 ;
*/

/*var expr = document.querySelector('p').textContent;
var r1= /TERMINER/;
var r2= /terminer/i;

var res1= r1.test(expr);
var res2 = r2.test(expr);
var resultat = document.getElementById('reg')
resultat.innerHTML = 'le resultat du premier est : ' +res1 + '<br>pour le deuxieme est  :'
+ res2 ;
*/

/*var expr = document.querySelector('p').textContent;
var r1= /TERMINER/;
var r2= /terminer/i;

var res1= r1.test(expr);
var res2 = r2.test(expr);
var resultat = document.getElementById('reg')
resultat.innerHTML = 'le resultat du premier est : ' +res1 + '<br>pour le deuxieme est  :'
+ res2 ;*/

/*var expr = document.querySelector('p').textContent;
//var r1= /e,i,o,u,a/g;
var r1= /o,u,e,i/g
var r2= /[e,a,i,o,u]/g;

var res1=expr.match(r1);
var res2 = expr.match(r2);
var resultat = document.getElementById('reg')
resultat.innerHTML = 'le resultat du premier est : ' +res1 + '<br>pour le deuxieme est  :'
+ res2 
*/
/*var validation = document.getElementById('button_envoi');
var prenom = document.getElementById('prenom');
var prenom_mar = document.getElementById('prenom_manquante');
var prenom_val= /^[a-zA-zéèiîE]/;
validation.addEventListener('click',f_valid)
function f_valid(e){
    if(prenom.validity.valueMissing)
    {
        e.preventDefault();
        prenom_mar.textContent = 'prenom est marquante';
        prenom_mar.style.color= 'red';
    }
    elseif(prenom_val.test(prenom.value) == false)
    {
        e.preventDefault();
        prenom_mar.textContent = 'format est incorrect';
        prenom_mar.style.color='orange';
    }


}*/
/*var canvas= document.getElementById('canvas1');
var contexte = canvas.getContext('2d');
contexte.fillStyle='#36B';
contexte.fillRect(100,50,200,100);

contexte.fillStyle =' RGBa(50,200,100,0.5)';
contexte.fillRect(50,25,100,50);

contexte.lineWidth='15';
contexte.strokeStyle = '#A3A';
contexte.strokeRect(250,120,100,50);

*/
/*var canvas= document.getElementById('canvas1');
var contexte = canvas.getContext('2d');
var lineaire= contexte.createLinearGradient(100,50,300,150);
lineaire.addColorStop(0,'#4C8');
lineaire.addColorStop(0.5,'#48C');
lineaire.addColorStop(1,'#A4A');
contexte.fillStyle = lineaire;
contexte.fillRect(100,50,100,100);
*/
var  canvas = document.getElementById('canvas1');
var contexte= canvas.getContext('2d');
var radial=contexte.createRadialGradient(200,100,20,200,100,75)
radial.addColorStop(0,'#4C8');
radial.addColorStop(0,'#4BC');
radial.addColorStop(0,'#A4A');
contexte.beginPath();
contexte.fillStyle =radial;
contexte.arc(200,100,75,0,2*Math.PI);
contexte.fill();