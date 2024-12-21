class dispositivoEntrada{
    constructor(tipoEntrada, marca){
      this._tipoEntrada = tipoEntrada; 
      this._marca = marca; 
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        return this._tipoEntrada = tipoEntrada; 
    }
    get marca(){
        return this._marca; 
    }
    set marca(marca){
        return this._marca = marca; 
    }
}

class Raton extends dispositivoEntrada{
  
    static contadorRatones = 0; 

constructor(tipoEntrada, marca){
    super(tipoEntrada, marca)
    this._idRaton = ++Raton.contadorRatones;  
}   
get idRaton(){
    return this._idRaton;
}
toString(){
    return `Raton: $[idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}]`
}
}

let raton1 = new Raton('USB', 'HP'); 
console.log(raton1.toString())
let raton2 = new Raton('Bluetooh', 'Dell');
raton2.marca = 'HP'
console.log(raton2.toString())


class Teclado extends dispositivoEntrada{
  
    static contadorTeclado = 0; 
   
    constructor(tipoEntrada, marca,){
        super(tipoEntrada, marca)
        this._idTeclado = ++Teclado.contadorTeclado; 
    }
    get idTeclado(){
       return  this._idTeclado;
    }
    toString(){
      return `Teclado: [idTeclado: ${this.idTeclado}, tipoEntrada: ${this.tipoEntrada},  marca: ${this.marca} ]`  
    }
}

let teclado1 = new Teclado('Bluetooh', 'MSI'); 
let teclado2 = new Teclado('usb', 'Acer');
console.log(teclado1.toString()) 
console.log(teclado2.toString()) 




class Monitor{

static contadorMonitores = 0; 

    constructor(marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca; 
         this._tamano = tamano; 
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca
    }
    set marca(marca){
        return this._marca = marca; 
    }
    get tamano(){
        return this._tamano;
    }
    set tamano(tamano){
        return this._tamano = tamano; 
    }
    toString() {
        return `Monitor: [idProducto: ${this.idMonitor}, nombre: ${this.marca}, precio: $${this.tamano}]`;
    }
}

let monitor1 = new Monitor('HP', 15)
let monitor2 = new Monitor('DEL', 27)
console.log(monitor1.toString())
console.log(monitor2.toString())



class Computadora{

static contadorComputadoras = 0; 
    
constructor(nombre, monitor,raton, teclado){
    this._idComputadoras = ++Computadora.contadorComputadoras;
    this._nombre = nombre; 
    this._monitor = monitor; 
    this._raton = raton; 
    this._teclado = teclado; 
}
get idComputadoras(){
    return this._idComputadoras; 
}
get nombre(){
    return this._nombre; 
}
set nombre(nombre){
    return this._nombre = nombre; 
}
get monitor(){
    return this._monitor;
}
set monitor(monitor){
    return this._monitor = monitor; 
}
get raton(){
    return this._raton; 
}
set raton(raton){
    return this._raton = raton; 
}
get teclado(){
    return this._teclado
}
set teclado(teclado){
    return this._teclado = teclado; 
}
toString(){
    return `Computadora: [ID: ${this.idComputadoras}, Nombre: ${this.nombre}\nMonitor: ${this.monitor}\nRatón: ${this.raton}\nTeclado: ${this.teclado}]`;
}
}

let computadora1 = new Computadora('HP',monitor1, raton1, teclado1);
console.log(computadora1.toString())

let computadora2 = new Computadora('Armada',monitor2, raton2, teclado2);
console.log(computadora2.toString())



class Orden{
    
    static contadorOrdenes = 0; 
    
    constructor(){
    this._idOrden = ++Orden.contadorOrdenes; 
    this._computadoras = [];      
    }
    get idOrden(){
        return this._idOrden; 
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = ' '; 
        for(let computadora of this._computadoras){
            computadorasOrden += `\n${computadora}`; 
        }
        console.log(`Orden: ${this.idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let orden1 = new Orden(); 
orden1.agregarComputadora(computadora1)
orden1.agregarComputadora(computadora2)
orden1.agregarComputadora(computadora2)
orden1.mostrarOrden();

let orden2 = new Orden(); 
orden2.agregarComputadora(computadora1)
orden2.agregarComputadora(computadora2)
orden2.agregarComputadora(computadora2)
orden2.mostrarOrden();
