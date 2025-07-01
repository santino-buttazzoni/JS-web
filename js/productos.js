class Producto {
    constructor(nombre, id, imagen, precio, descripcion){
        this.nombre = nombre;
        this.id = id;
        this.imagen = imagen;
        this.precio = precio;
        this.descripcion = descripcion;
        this.seleccionado = false;
    }

    toggleSeleccion() {
        this.seleccionado = !this.seleccionado;
    }
}

let productos = []
let carrito = []

// Referenciamos el DOM y lo asignamos a variables para facilitar su manejo
const contenedorProductos = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const total = document.getElementById("total");
const cartToggle = document.getElementById("cart-toggle");
const closeCart = document.getElementById("close-cart");
const cartSidebar = document.getElementById("cart-sidebar");
const overlay = document.getElementById("overlay");
const mainContent = document.querySelector(".main-content");
const cartCount = document.getElementById("cart-count");

// NUEVAS REFERENCIAS: Modal
const productModal = document.getElementById("product-modal");
const modalProductoContainer = document.getElementById("modal-producto-container");

// Variable para el producto actual en el modal
let currentModalProduct = null;

// Cart sidebar functionality
function toggleCart() {
    cartSidebar.classList.toggle("open");
    overlay.classList.toggle("active");
    mainContent.classList.toggle("cart-open");
}

function closeCartSidebar() {
    cartSidebar.classList.remove("open");
    overlay.classList.remove("active");
    mainContent.classList.remove("cart-open");
}

// NUEVA FUNCIÓN: Mostrar la tarjeta expandida en el modal
function showProductModal(producto) {
    currentModalProduct = producto;
    // Limpiar el contenedor
    modalProductoContainer.innerHTML = '';

    // Crear botón de cierre
    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-modal';
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.addEventListener('click', closeProductModal);
    modalProductoContainer.appendChild(closeBtn);

    // Crear la tarjeta expandida (igual que .producto pero con descripción completa)
    const div = document.createElement('div');
    div.className = 'producto';
    div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="producto-info">
            <div>
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.precio}</p>
            </div>
            <button>Agregar al carrito</button>
        </div>
    `;
    // Botón funcional
    const button = div.querySelector('button');
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!producto.seleccionado) {
            manejarSeleccion(producto);
        }
        closeProductModal();
    });
    modalProductoContainer.appendChild(div);

    // Mostrar el modal
    productModal.classList.add("show");
    overlay.classList.add("active");
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    productModal.classList.remove("show");
    overlay.classList.remove("active");
    currentModalProduct = null;
    document.body.style.overflow = 'auto';
}

// Event listeners for cart
cartToggle.addEventListener("click", toggleCart);
closeCart.addEventListener("click", closeCartSidebar);

// CORRECCIÓN: Manejar overlay para cerrar tanto carrito como modal
overlay.addEventListener("click", () => {
    if (cartSidebar.classList.contains("open")) {
        closeCartSidebar();
    }
    if (productModal.classList.contains("show")) {
        closeProductModal();
    }
});

// Cerrar modal y/o carrito con Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (productModal.classList.contains("show")) {
            closeProductModal();
        }
        if (cartSidebar.classList.contains("open")) {
            closeCartSidebar();
        }
    }
});

function manejarSeleccion(producto) {
    producto.toggleSeleccion();

    if (producto.seleccionado) {
        carrito.push(producto);
    } else {
        carrito = carrito.filter(p => p.id !== producto.id);
    }

    renderizarProductos();
    renderizarCarrito();
    updateCartCount();
}

function renderizarProductos() {
    contenedorProductos.innerHTML = "";

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        if (producto.seleccionado) div.classList.add("seleccionado");
        
        // Descripción truncada a 100 caracteres, añade '...' si es más larga
        let descripcionCorta = producto.descripcion;
        if (producto.descripcion.length > 100) {
            descripcionCorta = producto.descripcion.substring(0, 100) + '...';
        }
        
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="producto-info">
                <div>
                    <h3>${producto.nombre}</h3>
                    <p>${descripcionCorta}</p>
                    <p class="precio">$${producto.precio}</p>
                </div>
                <button> 
                    ${producto.seleccionado ? 'Agregado al carrito' : 'Agregar al carrito'}
                </button>
            </div>
        `;
        
        const button = div.querySelector("button");
        button.addEventListener("click", (e) => {
            e.stopPropagation();
            if (!producto.seleccionado) {
                manejarSeleccion(producto);
            }
        });
        
        // Modal: clic en cualquier parte de la tarjeta
        div.addEventListener('click', (e) => {
            if (e.target !== button && !button.contains(e.target)) {
                showProductModal(producto);
            }
        });
        
        contenedorProductos.appendChild(div);
    })
}

function renderizarCarrito() {
    listaCarrito.innerHTML = "";

    carrito.forEach(producto => {
        // Si no tiene cantidad, inicialízala en 1
        if (!producto.cantidad) producto.cantidad = 1;
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" style="width:32px;height:32px;object-fit:cover;border-radius:4px;margin-right:8px;vertical-align:middle;">
            <span>${producto.nombre}</span>
            <span style="margin: 0 8px; font-weight: bold;">x${producto.cantidad}</span>
            <div class="cart-item-actions">
                <button class="add-btn" data-id="${producto.id}" style="background:#39b54a;"><i class="fas fa-plus"></i></button>
                <span>$${producto.precio * producto.cantidad}</span>
                <button class="remove-btn" data-id="${producto.id}"><i class="fas fa-minus"></i></button>
            </div>
        `;
        listaCarrito.appendChild(li);
    })

    total.textContent = carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0).toFixed(2);
    
    // Botón + para aumentar cantidad
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.getAttribute('data-id'));
            const producto = carrito.find(p => p.id === productId);
            if (producto) {
                producto.cantidad = (producto.cantidad || 1) + 1;
                renderizarCarrito();
            }
        });
    });
    // Botón - para disminuir cantidad o eliminar
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(btn.getAttribute('data-id'));
            const producto = carrito.find(p => p.id === productId);
            if (producto) {
                producto.cantidad = (producto.cantidad || 1) - 1;
                if (producto.cantidad <= 0) {
                    // Quitar del carrito y deseleccionar
                    carrito.splice(carrito.indexOf(producto), 1);
                    const prod = productos.find(p => p.id === productId);
                    if (prod) prod.seleccionado = false;
                }
                renderizarCarrito();
                renderizarProductos();
                updateCartCount();
            }
        });
    });
}

function updateCartCount() {
    cartCount.textContent = carrito.length;
}

// CAMBIO: Usar FakeStore API en lugar de MercadoLibre
// ¿Por qué? MercadoLibre requiere autorización, FakeStore es gratuita y pública

async function buscarProductosAPI(query = '', limit = 20) {
    try {
        // PASO 1: Construir la URL de la API alternativa
        // ¿Por qué? FakeStore API es gratuita y no requiere autenticación
        const url = `https://fakestoreapi.com/products`;
        
        console.log('Buscando productos en FakeStore API:', url);
        
        // PASO 2: Hacer la petición HTTP
        const response = await fetch(url);
        
        // PASO 3: Verificar si la petición fue exitosa
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        // PASO 4: Convertir la respuesta a JSON
        const data = await response.json();
        
        console.log('Datos recibidos de FakeStore API:', data);
        
        // PASO 5: Filtrar productos según la búsqueda
        let productosFiltrados = data;
        
        if (query && query.trim() !== '') {
            const searchTerm = query.toLowerCase().trim();
            productosFiltrados = data.filter(item => {
                // Buscar en título, categoría y descripción
                return item.title.toLowerCase().includes(searchTerm) ||
                       item.category.toLowerCase().includes(searchTerm) ||
                       item.description.toLowerCase().includes(searchTerm);
            });
            
            console.log(`Filtrados ${productosFiltrados.length} productos para: "${query}"`);
        }
        
        // PASO 6: Limitar el número de resultados
        productosFiltrados = productosFiltrados.slice(0, limit);
        
        // PASO 7: Convertir los datos a nuestro formato
        const productosConvertidos = productosFiltrados.map(item => {
            return new Producto(
                item.title,                    // nombre
                item.id,                       // id
                item.image,                    // imagen
                item.price,                    // precio
                `${item.category} - ${item.description}` // descripción completa
            );
        });
        
        // PASO 8: Actualizar nuestro array de productos
        productos = productosConvertidos;
        
        // PASO 9: Renderizar los productos en la página
        renderizarProductos();
        
        console.log('Productos cargados exitosamente:', productos.length);
        
        // PASO 10: Mostrar mensaje si no hay resultados
        if (productos.length === 0 && query) {
            contenedorProductos.innerHTML = `
                <div style="text-align: center; padding: 40px;">
                    <h3>No se encontraron productos para: "${query}"</h3>
                    <p>Intenta con otros términos de búsqueda</p>
                    <button onclick="cargarProductos()" style="margin-top: 20px; padding: 10px 20px; background: #3483fa; color: white; border: none; border-radius: 4px; cursor: pointer;">
                        Ver todos los productos
                    </button>
                </div>
            `;
        }
        
    } catch (error) {
        // PASO 11: Manejar errores
        console.error('Error al buscar productos:', error);
        contenedorProductos.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <p>Error al cargar productos: ${error.message}</p>
                <p>Intentando cargar productos de ejemplo...</p>
            </div>
        `;
        
        // Cargar productos de ejemplo como respaldo
        cargarProductosEjemplo();
    }
}

// FUNCIÓN DE RESPALDO: Cargar productos de ejemplo
// ¿Por qué? Si la API falla, mostramos productos de ejemplo
function cargarProductosEjemplo() {
    const productosEjemplo = [
        {
            id: 1,
            nombre: "Laptop Gaming",
            precio: 1200,
            descripcion: "Laptop de alto rendimiento para gaming",
            imagen: "https://via.placeholder.com/200x200/007bff/ffffff?text=Laptop"
        },
        {
            id: 2,
            nombre: "Smartphone Pro",
            precio: 800,
            descripcion: "Smartphone de última generación",
            imagen: "https://via.placeholder.com/200x200/28a745/ffffff?text=Phone"
        }
    ];
    
    productos = productosEjemplo.map(p => new Producto(p.nombre, p.id, p.imagen, p.precio, p.descripcion));
    renderizarProductos();
}

// FUNCIÓN NUEVA: Cargar productos desde API gratuita
async function cargarProductos() {
    console.log('Iniciando carga de productos desde FakeStore API...');
    
    // Mostrar mensaje de carga
    contenedorProductos.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <p>Cargando productos desde FakeStore API...</p>
            <div style="width: 50px; height: 50px; border: 5px solid #f3f3f3; border-top: 5px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite; margin: 20px auto;"></div>
        </div>
    `;
    
    // Cargar todos los productos inicialmente
    await buscarProductosAPI('', 20);
}

// Estilos CSS para el spinner de carga
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(style);

cargarProductos();

// FUNCIÓN NUEVA: Funcionalidad de búsqueda
// ¿Por qué? Para que el usuario pueda buscar productos específicos

function inicializarBusqueda() {
    const searchInput = document.querySelector('.search-bar input');
    const searchBtn = document.querySelector('.search-btn');
    
    // Buscar al hacer clic en el botón
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            console.log('Buscando:', query);
            buscarProductosAPI(query, 20);
        } else {
            // Si no hay query, cargar todos los productos
            cargarProductos();
        }
    });
    
    // Buscar al presionar Enter
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                console.log('Buscando (Enter):', query);
                buscarProductosAPI(query, 20);
            } else {
                // Si no hay query, cargar todos los productos
                cargarProductos();
            }
        }
    });
    
    // Limpiar búsqueda al hacer clic en el input vacío
    searchInput.addEventListener('click', () => {
        if (searchInput.value === '') {
            cargarProductos();
        }
    });
}

// Inicializar la búsqueda cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    inicializarBusqueda();
});