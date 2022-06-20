import './Caja.css'

function Caja ({producto , descripcion}){
    return (
      <div className="caja"> 
     <h4>{producto}</h4>
     <p>{descripcion}</p>
      </div>
    );
  }
  
  export default Caja;