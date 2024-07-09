import React, { useEffect, useRef, useState } from 'react'
import TodoList from './TodoList';
import bookss from "../icon/book.png"
import toast from 'react-hot-toast'

function TodoApp() {

  const [newT, setNewt] = useState(localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : [])
  const [toggleItem, setToggleItem] = useState(null)

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(newT))
  }, [newT])

  const inputRef = useRef()
  const add = () => {
    const text = inputRef.current.value.trim();
    if (text.length <= 0) {
      return null;
    }
    const newtodo = {
      id: Date.now(),
      todo: text,
      isComplete: false
    }

    setNewt((prev) => [newtodo, ...prev])
    inputRef.current.value = ''
    toast("Note Added Successfully!", {
      duration: 1500,
      position: 'top-right',
      style: {
        backgroundColor: "green",
        color: "white",
        borderRadius: "40px"
      }
    })

  }
  const deletebtn = (id) => {
    setNewt((prev) => prev.filter((todo) => todo.id !== id))
    toast("Selected Note Deleted Successfully!", {
      duration: 1500,
      position: 'top-right',
      style: {
        backgroundColor: "red",
        color: "white",
        borderRadius: "40px"
      }
    })
  }

  const toggle = (id) => {
    toast("Toggle Successfully!", {
      duration: 1500,
      position: 'top-right',
      style: {
        backgroundColor: "gold",
        color: "white",
        borderRadius: "40px"
      }
    })
    setNewt((prev) => prev.map((item) => {

      if (item.id === id) {
        const newStatus = !item.isComplete;

        return { ...item, isComplete: newStatus }
      }
      return item;

    }))
  }
  return (
    <>

      <div className='m-3'>

        <div className='flex items-center mt-7 gap-2 ml-3'>
          <img src={bookss} alt="BookPic" />
          <h1 className='text-3xl font-bold'>Notes</h1>
        </div>

        <div className='flex items-center my-7 ml-3 bg-gray-200 rounded-full'>
          <input className='ml-4 bg-transparent border-0 outline-none flex-1 h-14 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task...' ref={inputRef} />
          <button className='border-none rounded-full bg-[navy] w-32 h-14 hover:text-[red] text-white text-lg font-medium cursor-pointer' onClick={add}>ADD +</button>
        </div>

        <div className='grid grid-cols-3 gap-4'>
          {newT.map((item, index) => {
            return <TodoList key={index} text={item.todo} deletebtn={deletebtn} id={item.id} isComplete={item.isComplete} toggle={toggle} />
          })}
        </div>
      </div>
    </>
  )
}
export default TodoApp;
