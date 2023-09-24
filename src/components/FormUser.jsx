import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const FormUser = ({ createUser, infoUpdate, updateUser, setInfoUpdate, closeForm, setCloseForm }) => {

  const { handleSubmit, register, reset } = useForm()

  const handleCloseForm = () => {
    setCloseForm(true)
  }

  useEffect(() => {
    reset(infoUpdate)
  }, [infoUpdate])
  
  const submit = data => {
    if(infoUpdate) {
      //update
      updateUser('/users', infoUpdate.id, data)
      setInfoUpdate()
    } else {
      //create
      createUser('/users', data)
    }
    reset({
      email:'',
      password:'',
      first_name:'',
      last_name:'',
      birthday:''
    })
  }

  //e.stopPropagation evita que el evento onClick del elemento padre no sea heredado a todos los elementos hijos
  return (
    <div onClick={handleCloseForm} className={`formuser-container ${closeForm && 'close-form'}`}>
        <form onClick={e => e.stopPropagation()} className="formuser" onSubmit={handleSubmit(submit)}>
          <h2 className="formuser__title">{ infoUpdate ? 'Update user' : 'New user' }</h2>
          <div onClick={handleCloseForm} className="formuser__close">x</div>
          <div className="formuser__group">
            <label className="formuser__label" htmlFor="email">Email</label>
            <input className="formuser__input" {...register('email')} type="email" id="email"/>
          </div>
          <div className="formuser__group">
            <label className="formuser__label" htmlFor="password">Password</label>
            <input className="formuser__input" {...register('password')} type="password" id="password"/>
          </div>
          <div className="formuser__group">
            <label className="formuser__label" htmlFor="firs_name">First name</label>
            <input className="formuser__input" {...register('first_name')} type="text" id="firs_name"/>
          </div>
          <div className="formuser__group">
            <label className="formuser__label" htmlFor="last_name">Last name</label>
            <input className="formuser__input" {...register('last_name')} type="text" id="last_name"/>
          </div>
          <div className="formuser__group">
            <label className="formuser__label" htmlFor="birthday">Birthday </label>
            <input className="formuser__input" {...register('birthday')} type="date" id="birthday"/>
          </div>
          <button className="formuser__button"> { infoUpdate ? 'Update' : 'Create' }</button>
        </form>
    </div>
  )
}

export default FormUser;