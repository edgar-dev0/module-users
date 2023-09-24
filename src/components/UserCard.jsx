const UserCard = ({ user, deleteUser, setInfoUpdate, handleOpenForm }) => {

  const handleDelete = () => {
    deleteUser('/users', user.id)
  }

  const handleEdit = () => {
    setInfoUpdate(user)
    handleOpenForm()
  }


  return (
   <article className="card">
    <h3 className="card__title">{`${user.first_name} ${user.last_name}`}</h3>
    <ul className="card__list">
      <li className="card__list__item"><span className="card__item__label">Email</span><span className="card__item__value">{user.email}</span></li>
      <li className="card__list__item"><span className="card__item__label">Birthday</span><span className="card__item__value"><box-icon name='gift' type='solid' color='#f4f4f4'></box-icon> {user.birthday}</span></li>
    </ul>
    <div className="buttons__container">
      <button className="card__button__delete" onClick={handleDelete}><img className="icon" src="../img/delete_icon.png" alt="" /></button>
      <button className="card__button__edit" onClick={handleEdit}><img className="icon" src="../img/edit_icon.png" alt="" /></button>
    </div>
   </article>
  )
}

export default UserCard
