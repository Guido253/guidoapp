import React , {useState} from 'react';
import { Card, Button} from 'react-bootstrap';
import CartWidget from './CartWidget';
import './CartView.css'


const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function CartView () {
const [cart, setCart] = useState ([]);
const [page, setPage] = useState(PAGE_PRODUCTS)
const [products] = useState ([

    {
        title: "Berenjenas",
        stock: 80,
        precio: 600,
        descuento: 400,
        definicion: "Berenjenas en escabeche. Marinadas previamente con Romero, Laurel, Ajo, Vinagre y Aceite",
        id: 1,
        img: "beren.jpg"
    },
    { 
        title: "Hamburguesa",
        stock: 10,
        precio: 900,
        descuento: 0,
        definicion: "Marinada con Salsa de Soja, ajo y Laurel. Viene con Cebolla caramelizada y Tomate.",
        id: 22,
        img: "burga.jpg"
     },

     { 
        title: "Burrito",
        stock: 8,
        precio: 750,
        descuento: 550,
        definicion: "Con una mezcla de carne de Vaca y Cerdo desmenuzada y adobada con salsa de ostras.",
        id: 6,
        img: "burrito.jpg"
     },

     { 
        title: "Cerveza Tirada",
        stock: 20,
        precio: 1200,
        descuento: 900,
        definicion: "Cerveza Tirada Hopson. American Amber Ale. Suave, Roja, dulce y de lúpulos americanos.",
        id: 2,
        img: "cerveti.jpg" 
     },

     { 
        title: "Whiskey",
        stock: 5,
        precio: 1900,
        descuento: 950,
        definicion: "Jack Daniels etiqueta Negra, Roja o Dorada. Diferentes medidas a disposición.",
        id: 4,
        img: "jaky.jpg"
       }, 
     
  
     { 
      title: "Cerveza Patagonia", 
      stock: 27, 
      precio: 1100, 
      descuento: 800, 
      definicion: "Cerveza Patagonia Lamber. Indie Ale. Suave, Rubica, con un bajo toque de amargor.",
      id: 3, 
      img: "hopson.png" 
    }

]);



    const addToCarrito = (product) => {
        console.log ("Estamos dentro del Carrito")
        setCart ([...cart, {...product}])
    };



    const RemoveFromCarrito = (productToRemove) => {
        const newCart = [...cart].filter((product) => product !== productToRemove)
        setCart(newCart);
    };



    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const renderProducts = () => ( 
        <>
            <div className='carritoBody'>
             {products.map ((product, idx) =>
                <Card className='products' key={idx} style={{ width: '18rem' }}>
                     <Card.Img variant="top" src= {require (`../assets/img/${product.img}`)} alt={product.name} />
                     <Card.Body className='bodyCard' variant= "mx-auto">
                     <Card.Title>{product.title}: $ {product.precio}</Card.Title>
                     <Card.Text>
                        <h4>ID: {product.id} </h4> {product.definicion} <h5>stock: {product.stock}</h5>
                     </Card.Text>
                             <Button variant="btn btn-lg btn-block btn-warning d-block mx-auto" onClick={() => addToCarrito (product)}> Ingresar Producto    
                         </Button>
                         </Card.Body>
                    </Card>
                )}
         </div>
         </>
            );

    const renderCart = () => (
        <>
        <div>
        <header>
                <h2 className='tituloCarro'>Carrito</h2>
            </header>
        </div>
        <div className='carritoBody'>
         {cart.map ((product, idx) =>
            <Card className='products' key={idx} style={{ width: '18rem' }}>
                 <Card.Img variant="top" src ={require (`../assets/img/${product.img}`)} alt={product.name} />
                 <Card.Body className='bodyCard' variant= "mx-auto">
                 <Card.Title>{product.title}: $ {product.precio}</Card.Title>
                 <Card.Text>
                    <h4>ID: {product.id} </h4> {product.definicion} <h5>stock: {product.stock}</h5>
                 </Card.Text>
                         <Button variant="btn btn-lg btn-block btn-warning d-block mx-auto" onClick={() => RemoveFromCarrito (product)}> Quitar Producto    
                     </Button>
                     </Card.Body>
                </Card>
            )}
     </div>
     </>
        );
    

  return (
    <div class="card-columns" >
        <header className='divButton'> 
        <Button variant="btn-block btn-warning m-2" onClick={() => navigateTo(PAGE_CART)}>
            <CartWidget />Ir al Carrito ({cart.length})</Button>
            <Button variant="btn-block btn-dark " className='buttonIcon' onClick={() => navigateTo(PAGE_PRODUCTS)}>
            <CartWidget /> Ir a los Productos </Button>
        
        </header>
       {page === PAGE_PRODUCTS && renderProducts () }
       {page === PAGE_CART && renderCart ()}
    </div>
  );
}
  
  export default CartView;