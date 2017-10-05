//Un objeto es una instancia de una clase.
//JavaScript tiene 4 formas de invocar funciones
//Mandar mensaje: llamar al método de un objeto
//Duck typing
//Microsoft hizo el lneguaje typeScript que es javascript con tipos.
var a = "Hola Mundo!";

console.log(a);

function elnombredelafuncion(){
	console.log("Bla!");
}
elnombredelafuncion();

function print(text){
	console.log(text);
}

print("Bleee");

//Esta variable es una funcion:
var otraFunc = function(){
	return 1 + 1;
}

var dos = otraFunc();

console.log(dos);


//Funciones que reciben como parametros otra funcion
//invoca y retorna el valor de la función que recibe como parámetro.
//Es un ejecutor de funciones.
//Paso el nombre de la función como parámetro pero sin
//invocarla, es decir al principio no lleva parentesis
var superFuncion = function(func){
	return func();
}




var arr = [1,2,3];

var arr2 = arr.map(function(el){
	return el+1;
}); //map es una función de alto orden que itera por cada uno y hace algo. 

console.log(arr2);


//forEach es una función de alto orden
arr2.forEach(function(el){
	console.log(el);
});


//m es un método del objeto, también llamado mensaje.
var obj = {
	m: function(){
		console.log("Hola mundo!");
	},
	m2: function(p){
		console.log(p);
	}
};
console.log(obj);
obj.m();
obj.m2(34);



//Las funciones en javascript son objetos

Person.prototype.edad = function(){
	return 100;
}

var pepe = new Person("Pepe");
console.log(pepe);
console.log(pepe.edad);
var bla = new Person("Bla");
console.log(bla);
console.log(bla.name);












