import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()

  const baseUrl = 'https://users-crud.academlo.tech'
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl)

  useEffect(() => {
    getUsers('/users')
  }, [])

  console.log(users)

  return (
    <div>
      <header className='header__container'>
        <h1>Users</h1>
        <button className='header__container__button'><img className="icon" src="../../public/img/plus_icon.png" alt="" /><span> Add new user</span></button>
      </header>
      <FormUser
       createUser={createUser}
       infoUpdate={infoUpdate}
       updateUser={updateUser}
       setInfoUpdate={setInfoUpdate}
      />
      <div className='cards__container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
