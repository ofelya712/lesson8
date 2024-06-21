import { useState, useEffect } from 'react'
import './App.css'
import { AddUser } from './components/AddUser'
import { UserList } from './components/UserList'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  const [users, setUsers] = useState([])
  const addItem = obj => setUsers([...users, obj])
  useEffect(() => {
    axios
      .get("http://localhost:3004/users")
      .then(res => {
        setUsers(res.data)
      })
  }, [])
  const deleteItem = id => {
    axios
      .delete(`http://localhost:3004/users/${id}`)
      .then(() => {
        setUsers(users.filter(item => item.id !== id))
      })
    toast.success("Deleted")
  }
  const increaseItem = id => {
    const user = users.find(user => user.id === id)
    const newSalary = +user.salary + 50000
    axios
      .put(`http://localhost:3004/users/${id}`, { ...user, salary: newSalary })
      .then(() => {
        setUsers(users.map(elm =>
          elm.id === id ? { ...elm, salary: newSalary } : elm))
      })
  }
  return (
    <div className='row'>
      <AddUser
        onAdd={addItem}
      />
      <ToastContainer
      />
      <UserList
        users={users}
        onDelete={deleteItem}
        onIncrease={increaseItem}

      />

    </div>
  )
}

export default App
