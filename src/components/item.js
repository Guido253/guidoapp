import './item.css'

function item ({producto , descripcion}){
    return (
      <div className="caja"> 
     <h4>{producto}</h4>
     <p>{descripcion}</p>
      </div>
    );
  }
  
  export default item;