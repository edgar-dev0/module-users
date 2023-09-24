import axios from "axios"
import { useState } from "react"

//el argumento callback sera utilizado para enviar como argumento el estado setCloseForm para poder controlar el cierre del modal
const useFetch = (baseUrl, callback ) => {

  const [infoApi, setInfoApi] = useState()

  //READ
  const getApi = (path) => {
    const url = `${baseUrl}${path}/`
    axios.get(url)
    .then(res => setInfoApi(res.data))
    .catch(err => console.log(err))
  }

  //CREATE
  const postApi = (path, data) => {
    const url = `${baseUrl}${path}/`
    axios.post(url, data)
    .then(res => {
      console.log(res.data)
      setInfoApi([...infoApi, res.data])
      callback(true)
    })
    .catch(err => console.log(err))
  }

  //DELETE
  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`
    axios.delete(url)
    .then(res => {
      console.log(res.data)
      setInfoApi(infoApi.filter(e => e.id !== id))
      callback()
    })
    .catch(err => console.log(err))
  }

  //UPDATE
  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`
    axios.put(url, data)
    .then(res => {
      console.log(res.data)
      setInfoApi(infoApi.map(e => e.id === id ? res.data : e))
      callback(true)
    })
    .catch(err => console.log(err))
  }

  return[ infoApi, getApi, postApi, deleteApi, updateApi ]
}

export default useFetch