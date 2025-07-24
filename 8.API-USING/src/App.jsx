import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

function App() {

  //Tüm kullanıcıları getir
  const getAllUsers = async () => {
    try {
      const response = await axios.get(BASE_URL + '/users')
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching users:', error)
    }
  }

  //Id'ye göre kullanıcı getir
  const getUserById = async (id) => {
    try {
      const response = await axios.get(BASE_URL + '/users/' + id)
      console.log(response.data)
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  }

  //Kullanıcı ekle
  const addUser = async (user) => {
    try {
      const response = await axios.post(BASE_URL + '/users', user)
      console.log(response.data)
    }
    catch (error) {
      console.error('Error adding user:', error)
    }
  }

  //Kullanıcı güncelle
  const updateUser = async (id, user) => {
    try {
      const response = await axios.put(BASE_URL + '/users/' + id, user)
      console.log(response.data)
    }
    catch (error) {
      console.error('Error updating user:', error)
    }
  }

  //Kullanıcı sil
  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(BASE_URL + '/users/' + id)
      console.log(response.data)
    }
    catch (error) {
      console.error('Error deleting user:', error)
    }
  }




  useEffect(() => {
    //getAllUsers();
    // getUserById(1);
    //const newUser = {
    //  id: 3,
    //  name: 'John Doe',
    //  email: 'john.doe@example.com',
    //  password: '123456'
    //}
    //addUser(newUser);

    // updateUser(1, {
    //   name: 'John Doe',
    //   email: 'john.doe@example.com',
    //   password: 'xxd456'
    // });

    deleteUser(1);
  }, [])


  return (
    <div>

    </div>

  )
}

export default App
