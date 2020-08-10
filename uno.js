/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let peso;
	let contM=0;
	let edadprom=0;
	let pesomax=0;
	let nombrepeso;
	let flag=0;
	//let flaged=0;
	
	for(i=0;i<5;i++)
	{
		nombre=prompt("Ingrese su nombre");
	 do{
     edad=parseInt(prompt("Ingrese su edad "));
	 }while(isNaN(edad)||edad<0);
	 do
	 {
      sexo=prompt("Ingrese su sexo")
	 }while(sexo!="f"&&sexo!="m");
	 do{
     peso=parseInt(prompt("Ingrese su peso"));
	 }while(isNaN(peso));
	 
	 edadprom=edadprom+edad;
	 if(sexo=="f")
   {
	   contM=contM+1;
   }
   if((flag==0&&sexo=="m")||(sexo="m"&&pesomax<peso))
   {   nombrepeso=nombre;
	   pesomax=peso;
	   flag=1;
   }
   
	}
   
   document.write("La cantidad de mujeres es: "+contM+"<br>");
   document.write("El promedio de edad es: "+edadprom/5+"<br>");
   document.write("El hombre mas pesado es: "+nombrepeso+"<br>");

}
