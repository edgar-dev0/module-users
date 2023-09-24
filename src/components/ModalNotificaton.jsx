const ModalNotification = () => {
  return (
    <div clasName="formuser-container">
      <form className="formuser">
        <h2 className="formuser__title">Eliminar usuario</h2>      
        <p>El usuario <span>____</span> ha sido eliminado</p>
        <button className="formuser__button">Aceptar</button>
      </form>
    </div>
  )
}

export default ModalNotification
