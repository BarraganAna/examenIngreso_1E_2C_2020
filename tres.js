/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
let sexo;
let sexmax=0;
let lugar;
let temp;
let cantpersonas;
let cantmax=0;
let contbari=0;
let contcata=0;
let contsalta=0;
let flag=0;
let prominv;
let cantinvierno=0;
let respuesta="s";
while(respuesta=="s")
{
	do{
    sexo=prompt("Ingrese el sexo del titular");
	}while(sexo!="m"&&sexo!="f");
	do{
     lugar=prompt("Ingrese un destino");
	}while(lugar!="bariloche"&&lugar!="cataratas"&&lugar!="salta");
    do{
     temp=prompt("Ingrese la temporada ");
	}while(temp!="otoño"&&temp!="verano"&&temp!="invierno");
	do{
    cantpersonas=parseInt(prompt("Ingrese la cantidad de personas que viajan"));
	}while(cantpersonas<0&&isNaN(cantpersonas));
    
 respuesta=prompt("Desea registrar otro viaje? s/n");
 switch(lugar)
 {
	 case"bariloche":
	 contbari++;
	 break;
	 case"salta":
	 contsalta++;
	 break;
	 case"cataratas":
	 contcata++;
	 break;

 }
 if(flag==0||cantmax<cantidad)
 {
	 cantmax=cantidad;
	 sexmax=sexo;
	 flag=1;

 }
 if()
 {

 }
}	
document.write("");
document.write("El sexo del titular que lleva más pasajeros: " +sexmax+"<br>");
document.write("");
}
