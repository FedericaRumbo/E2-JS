let pizzas = [
    {
      id: 1,
      nombre: 'Napolitana',
      ingredientes: ['harina', 'sal', 'levadura', 'agua', 'tomate', 'perejil', 'aceite de oliva', 'ajo', 'mozzarella'],
      precio: 500,
    },
    {
    id: 2,
    nombre: 'Fugazzetta',
    ingredientes: ['masa', 'cebolla', 'oregano', 'sal', 'pimienta', 'aceite de oliva', 'mozzarella'],
    precio: 590,
    },
    {
      id: 3,
      nombre: 'Margarita',
      ingredientes: ['masa', 'mozzarella', 'albahaca', 'salsa de tomate', 'sal', 'pimienta negra', 'aceite de oliva'],
      precio: 680,
    },
    {
      id: 4,
      nombre: 'Sfincione',
      ingredientes: ['masa', 'tomate', 'cebolla', 'aceite de oliva', 'queso pecorino rallado', 'pan rallado', 'boquerones en aceite', 'oregano'],
      precio: 800,
    },
    {
      id: 5,
      nombre: 'Chicago Style',
      ingredientes: ['masa', 'muzzarella', 'queso provolone', 'chistorra', 'salsa de tomate', 'albahaca', 'aceite de oliva'],
      precio: 1000,
    },
    {
      id: 6,
      nombre: 'Mexicana',
      ingredientes: ['masa', 'ajo', 'carne picada', 'pimenton', 'pure de tomate', 'cebolla', 'aguacate', 'limon'],
      precio: 950,
    },
  ];

//Traer elementos del HTML

const buttonAlert = document.querySelector('#boton');
const input = document.querySelector('#numero');
const infoPizza = document.querySelector('.caracteristicas');

 //Buscar id

const encontrarPizza = () => {
   const valor = input.value.trim();
   const menuPizza = pizzas.find(pizza => pizza.id == valor)
   return menuPizza;
}

//Crear la condición

const renderizarPizza = () => {
    if (encontrarPizza(pizzas) == undefined) {
       alert("Ingresar número del 1 al 6");
       return
   }
    else {
       infoPizza.innerHTML = 
       `<h2 class="h2-edit">Pizza: ${encontrarPizza(pizzas).nombre}</h2>
       <h3 class="h3-edit">Precio: $${encontrarPizza(pizzas).precio}<h4/>`
   }
   number.value= ' ';
}

//Cancelación de evento

const eventoP = e => {
   e.preventDefault(e);
}

//Inicialización

const init = () => {
   buttonAlert.addEventListener('click', renderizarPizza);
}
init ();
