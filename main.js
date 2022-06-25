let productos = [
    {
        "id":"001",
        "nombre":"Connor McLeod sword ",
        "precio":5000,
        "img":"./multimedia/sword00.jpg",
        "desc": "" 
    },
    {
        "id":"002",
        "nombre":"Duncan McLeod sword ",
        "precio":5500,
        "img":"./multimedia/sword01.jpg",
        "desc": "" 
    },
    {
        "id":"003",
        "nombre":"Handmade swords",
        "precio":6000,
        "img":"./multimedia/sword02.jpg",
        "desc": "" 
    },
    {
        "id":"004",
        "nombre":"HE-MAN sword",
        "precio":6500,
        "img":"./multimedia/sword03.jpg",
        "desc": "" 
    },
    {
        "id":"005",
        "nombre":"Chinese sword",
        "precio":7000,
        "img":"./multimedia/sword04.jpg",
        "desc": "" 
    },
    {
        "id":"006",
        "nombre":"Artesanal sword",
        "precio":7500,
        "img":"./multimedia/sword05.jpg",
        "desc": "" 
    },
    {
        "id":"007",
        "nombre":"LOTR sword Frodo",
        "precio":8000,
        "img":"./multimedia/sword06.jpg",
        "desc": "" 
    },
    {
        "id":"008",
        "nombre":"LOTR sword elves",
        "precio":8500,
        "img":"./multimedia/sword07.jpg",
        "desc": "" 
    },
    {
        "id":"009",
        "nombre":"LOTR sword Aragorn",
        "precio":9000,
        "img":"./multimedia/sword08.jpg",
        "desc": "" 
    },
    {
        "id":"010",
        "nombre":"Viking sword Ragnar Lothbrok",
        "precio":9500,
        "img":"./multimedia/sword09.jpg",
        "desc": "" 
    }
];

let carrito;

if(JSON.parse(localStorage.getItem('carrito')))  {
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

function desplegarProductos() {

    for (let i = 0; i < productos.length; i++) {
        const element = productos[i];
        const { id, nombre, precio, img } = element
        const card = `
        <div class='card'>
            <p>${nombre}</p>
            <div>
                <img class='imgProducto' src=${img} alt=''/>
            </div>
            <div>
                <p>$${precio.toLocaleString()}</p>
            </div>
            <div class="btn-container">
                <button id=${id} class='btnAgregar'>AGRGEGAR AL CARRITO</button>
            </div>
        </div>
        `
        const container = document.getElementById('container')
        container.innerHTML += card
    }
}

desplegarProductos()

const btnAgregar = document.getElementsByClassName('btnAgregar')

for (let i = 0; i < btnAgregar.length; i++) {
    const element = btnAgregar[i];
    element.addEventListener('click', agregarAlCarrito)
}


function agregarAlCarrito(e) {
    const btn = e.target;
    const idBoton = btn.getAttribute('id')
    const prodEncontrado = productos.find(prod => prod.id == idBoton)
    const enCarrito = carrito.find(prod => prod.id == prodEncontrado.id)
    if(!enCarrito) {
        carrito.push({...prodEncontrado, cantidad: 1})
    } else {
        let carritoFiltrado = carrito.filter(prod => prod.id != enCarrito.id)
        carrito = [...carritoFiltrado, {...enCarrito, cantidad: enCarrito.cantidad + 1}]
    }
    console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const contador = document.getElementById('cartCounter')
contador.innerHTML = carrito.length
