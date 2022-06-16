import './caja.css'

function Caja (props){
    return (
      <div className="caja"> 
      <p>
          Buenas Noches {props.nombre}!
      </p>
      </div>
    );
  }
  
  export default Caja;