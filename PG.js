var guardadoa = "";
var guardadob = "";
var guardadoc = "";
var guardadod = "";
var guardadoe = "";
var guardadof = "";
var a;
var b = "hola";
var c = "hola";
var d = "hola";
var e = "hola";
var f = "hola";	

function Enviar() {
	var Archivo = document.getElementById('Archivo').value;

	if (Archivo == false) {
		alert("Tiene que poner algo"); 
	} else if(a == undefined) {
		guardadoa = Archivo;
		a = "hola";
		alert("Se gurado correctamente ahora espere 3 segundos");
		i = setInterval(function() {
			b = undefined;
			alert("listo ya puede escribir");
		} ,3000);

		o = setInterval(function() {
			clearInterval(i)
		} ,4000);
	}

	if (b == undefined) {
		guardadob = Archivo;
		b = "hola";
		alert("Se gurado correctamente ahora espere 3 segundos");
		r = setInterval(function() {
			c = undefined;
			alert("listo ya puede escribir");
		} ,3000);

		t = setInterval(function() {
			clearInterval(r)
		} ,4000);
	}

	if (c == undefined) {
		guardadoc = Archivo;
		c = "hola";
		alert("Se gurado correctamente ahora espere 3 segundos");
		y = setInterval(function() {
			d = undefined;
			alert("listo ya puede escribir");
		} ,3000);

		w = setInterval(function() {
			clearInterval(y)
		} ,4000);
	}

	if (d == undefined) {
		guardadod = Archivo;
		d = "hola";
		alert("Se gurado correctamente ahora espere 3 segundos");
		m = setInterval(function() {
			e = undefined;
			alert("listo ya puede escribir");
		} ,3000);

		l = setInterval(function() {
			clearInterval(m)
		} ,4000);
	}

	if (e == undefined) {
		guardadoe = Archivo;
		e = "hola";
		alert("Se gurado correctamente ahora espere 3 segundos");
		x = setInterval(function() {
			f = undefined;
			alert("listo ya puede escribir");
		} ,3000);

		z = setInterval(function() {
			clearInterval(x)
		} ,4000);
	}

	if (f == undefined) {
		guardadof = Archivo;
		f = "hola";
		alert("Se gurado correctamente");
		alert("Ya estan full las ranuras si escribe mas no se guardara")
		a = undefined;
	}
}
function Ver() {
	alert("Ranura 1:" +guardadoa);
	alert("Ranura 2:" +guardadob);
	alert("Ranura 3:" +guardadoc);
	alert("Ranura 4:" +guardadod);
	alert("Ranura 5:" +guardadoe);
	alert("Ranura 6:" +guardadof);
}
function Borrar() {
	guardadoa = "";
	guardadob = "";
	guardadoc = "";
	guardadod = "";
	guardadoe = "";
	guardadof = "";
	alert("Ha borrado tods las ranuras")
}