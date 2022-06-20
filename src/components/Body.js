import Caja from '../Caja';
import './Body.css';


function Body (){
    return (
    <section className="cuerpo"> 
     <Caja producto='Hamburguesa' descripcion= 'Completa'/>
     <Caja producto ='Cerveza Hopson' descripcion='American Amber Ale' />
     <Caja producto='Hamburguesa' descripcion= 'Completa'/>
     <Caja producto ='Cerveza Hopson' descripcion='American Amber Ale' />
     </section>
    );
  }
  
  export default Body;


