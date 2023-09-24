import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import ModalNotification from './components/ModalNotificaton'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [closeForm, setCloseForm] = useState(true)
  const handleOpenForm = () => {
    setCloseForm(false)
  }

  const baseUrl = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl, setCloseForm)

  useEffect(() => {
    getUsers('/users')
  }, [])

  console.log(users)

  return (
    <div>
      <header className='header__container'>
        <h1>Users</h1>
        <button onClick={handleOpenForm} className='header__container__button'><img className="icon" src="../../public/img/plus_icon.png" alt="" /><span> Add new user</span></button>
      </header>
      <hr />
      <FormUser
       createUser={createUser}
       infoUpdate={infoUpdate}
       updateUser={updateUser}
       setInfoUpdate={setInfoUpdate}
       closeForm={closeForm}
       setCloseForm={setCloseForm}
      />
      <div className='cards__container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
