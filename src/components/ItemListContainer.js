import Caja from './item';
import './ItemListContainer.css';


function ItemListContainer (){
    return (
    <section className="cuerpo"> 
     <Caja producto='Hamburguesa' descripcion= 'Completa'/>
     <Caja producto ='Cerveza Hopson' descripcion='American Amber Ale' />
     <Caja producto='Hamburguesa' descripcion= 'Completa'/>
     <Caja producto ='Cerveza Hopson' descripcion='American Amber Ale' />
     </section>
    );
  }
  
  export default ItemListContainer;


