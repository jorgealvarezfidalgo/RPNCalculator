"use strict";
class CalculadoraRPNBasica {
	
 constructor (){ 
			this.pila = new Array();
			this.display1 = "0";
			this.display2 = "";
			this.calculado = 0;
		}
		
		apilar(valor){
			this.pila.push(valor);
		}
		
		desapilar(){
			return (this.pila.pop());
		}
		
		mostrar(){
			document.getElementById('display1').value = this.display1;
			document.getElementById('display2').value = this.display2;
		}
			
	introducir(){
		this.display2 = this.display1;
		this.pila.push(this.display1);
		this.display1 = "0";
		this.mostrar();
	}

	
	setDisplay(display1){
		this.display1= display1;
	}
	
	getDisplay(){
		return this.display1;
	}
	
    introducirDigito(x){
		if(this.getDisplay()!="0"){
				this.setDisplay(""+this.display1 + x);
			}
			else{
				this.setDisplay(x);
			}
		this.mostrar();
    }
	
	sumar() {
		if(this.display2 != "") {
			this.introducir();
			var b = this.desapilar();
			var a = this.desapilar();
			if(this.pila.length > 0) {
				var c = this.desapilar();
				this.display2 = c;
				this.apilar(c);
			}
			else {
				this.display2 = "";
			}
			var res = (Number(a) + Number(b));
			this.display1 = res;
			this.mostrar();
		}
	}
	
	restar() {
		if(this.display2 != "") {
			this.introducir();
			var b = this.desapilar();
			var a = this.desapilar();
			if(this.pila.length > 0) {
				var c = this.desapilar();
				this.display2 = c;
				this.apilar(c);
			}
			else {
				this.display2 = "";
			}
			var res = (Number(a) - Number(b));
			this.display1 = res;
			this.mostrar();
		}
	}
	
	multiplicar() {
		if(this.display2 != "") {
			this.introducir();
			var b = this.desapilar();
			var a = this.desapilar();
			if(this.pila.length > 0) {
				var c = this.desapilar();
				this.display2 = c;
				this.apilar(c);
			}
			else {
				this.display2 = "";
			}
			var res = (Number(a) * Number(b));
			this.display1 = res;
			this.mostrar();
		}
	}
	
	dividir() {
		if(this.display2 != "") {
			this.introducir();
			var b = this.desapilar();
			var a = this.desapilar();
			if(this.pila.length > 0) {
				var c = this.desapilar();
				this.display2 = c;
				this.apilar(c);
			}
			else {
				this.display2 = "";
			}
			var res = (Number(a) / Number(b));
			this.display1 = res;
			this.mostrar();
		}
	}
	
	modulo() {
		if(this.display2 != "") {
			this.introducir();
			var b = this.desapilar();
			var a = this.desapilar();
			if(this.pila.length > 0) {
				var c = this.desapilar();
				this.display2 = c;
				this.apilar(c);
			}
			else {
				this.display2 = "";
			}
			var res = (Number(a) % Number(b));
			this.display1 = res;
			this.mostrar();
		}
	}
	
	limpiar() {
		this.setDisplay("0");
		this.display2 = "";
		this.pila = [];
		this.mostrar();
	}
	
	esDigito(x){
		return(x=="0" || x=="1" || x=="2" || x=="3" || x=="4" || x=="5" ||
				x=="6" || x=="7" || x=="8" || x=="9");
	}
	
}

class CalculadoraRPNCientifica extends CalculadoraRPNBasica{
    constructor (){
        super();
		this.base = true;
    }
	
	calcularPi(){
		this.setDisplay("");
		super.introducirDigito(Math.PI);
	}
	
	calcularSeno(){
		var x = super.getDisplay();
		this.setDisplay("");
		if(this.base){
			super.introducirDigito(Math.sin(Number(x)));
		}
		else {
			super.introducirDigito(Math.asin(Number(x)));
		}
	}
	
	calcularCoseno(){
		var x = super.getDisplay();
		this.setDisplay("");
		if(this.base){
			super.introducirDigito(Math.cos(Number(x)));
		}
		else {
			super.introducirDigito(Math.acos(Number(x)));
		}
	}
	
	calcularTangente(){
		var x = super.getDisplay();
		this.setDisplay("");
		if(this.base){
			super.introducirDigito(Math.tan(Number(x)));
		}
		else {
			super.introducirDigito(Math.atan(Number(x)));
		}
	}
	
	calcularRaiz(){
		var x = super.getDisplay();
		this.setDisplay("");
		super.introducirDigito(Math.sqrt(Number(x)));
	}
	
	potencia(x){
		var y = super.getDisplay();
		this.setDisplay("");
		super.introducirDigito(Math.pow(Number(y), x));
	}
	
	calcularPotenciaBase10(){
		var x = super.getDisplay();
		this.setDisplay("");
		super.introducirDigito(Math.pow(10, Number(x)));
	}
	
	calcularLogaritmo(){
		var x = super.getDisplay();
		this.setDisplay("");
		super.introducirDigito(Math.log(Number(x)));
	}
	
	calcularLogaritmoBase10(){
		var x = super.getDisplay();
		this.setDisplay("");
		super.introducirDigito(Math.log(Number(x))/Math.log(10));
	}
	
	calcularExp(){
		var x = super.getDisplay();
		this.setDisplay("");
		super.introducirDigito(Math.exp(Number(x)));
	}
	
	calcularFactorial(){
		var x = super.getDisplay();
		this.setDisplay("");
		super.introducirDigito(this.factorial(Number(x)));

	}
	
	multiplicarBase10(){
		if(this.display2 != "") {
			this.introducir();
			var b = this.desapilar();
			var a = this.desapilar();
			if(this.pila.length > 0) {
				var c = this.desapilar();
				this.display2 = c;
				this.apilar(c);
			}
			else {
				this.display2 = "";
			}
			var res = (Number(a) * Math.pow(10,Number(b)));
			this.display1 = res;
			this.mostrar();
		}

	}
	
	factorial (n) {
	if (Math.round(n)== 0 || Math.round(n) == 1)
		return 1;
	return this.factorial(n-1) * n;
	}
	
	calcularPotencia(){
		if(this.display2 != "") {
			this.introducir();
			var b = this.desapilar();
			var a = this.desapilar();
			if(this.pila.length > 0) {
				var c = this.desapilar();
				this.display2 = c;
				this.apilar(c);
			}
			else {
				this.display2 = "";
			}
			var res = Math.pow(Number(a),Number(b));
			this.display1 = res;
			this.mostrar();
		}
	}
	
	calcularRaizY(){
		if(this.display2 != "") {
			this.introducir();
			var b = this.desapilar();
			var a = this.desapilar();
			if(this.pila.length > 0) {
				var c = this.desapilar();
				this.display2 = c;
				this.apilar(c);
			}
			else {
				this.display2 = "";
			}
			var res = Math.pow(Number(b),Number(1/a));
			this.display1 = res;
			this.mostrar();
		}
	}
	
	cambiarSigno() {
		var x = super.getDisplay();
		this.setDisplay("");
		super.introducirDigito(Number(x/-1));	
	}
	
	borrar(){
		super.setDisplay(super.getDisplay().substring(0,super.getDisplay().length-1));
		super.mostrar();
	}
	
	eliminarUltimoValor() {
		super.setDisplay("");
		super.mostrar();
	}
	
	cambiarBotones(){
		if(this.base==true) {
			this.base = false;
			document.getElementById('sin').value = "sin⁻¹";
			document.getElementById('cos').value = "cos⁻¹";
			document.getElementById('tan').value = "tan⁻¹";
			document.getElementById('iniciofila2').value = "x³";
			document.getElementById("iniciofila2").onclick = function () { cal.potencia(3); };
			document.getElementById('poty').value = "ʸ√x";
			document.getElementById("poty").onclick = function () { cal.calcularRaizY(); };
			document.getElementById('iniciofila3').value = "1/x";
			document.getElementById("iniciofila3").onclick = function () { cal.potencia(-1); };
			document.getElementById('10x').value = "eˣ";
			document.getElementById('10x').onclick = function () { cal.calcularExp(); };
			document.getElementById('log').value = "ln";
			document.getElementById("log").onclick = function () { cal.calcularLogaritmo(); };
		}
		else {
			this.base = true;
			document.getElementById('sin').value = "sin";
			document.getElementById('cos').value = "cos";
			document.getElementById('tan').value = "tan";
			document.getElementById('iniciofila2').value = "x²";
			document.getElementById("iniciofila2").onclick = function () { cal.potencia(2); };
			document.getElementById('poty').value = "xʸ";
			document.getElementById("poty").onclick = function () { cal.calcularPotencia(); };
			document.getElementById('iniciofila3').value = "√";
			document.getElementById("iniciofila3").onclick = function () { cal.calcularRaiz(); };
			document.getElementById('10x').value = "10ˣ";
			document.getElementById("10x").onclick = function () { cal.calcularPotenciaBase10(); };
			document.getElementById('log').value = "log";
			document.getElementById("log").onclick = function () { cal.calcularLogaritmoBase10(); };
		}
	}
	
}
var cal = new CalculadoraRPNCientifica();