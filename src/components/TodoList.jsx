import React from 'react'
import checked from '../icon/checked.png'
import deletes from '../icon/delete.png'
import cancel from '../icon/cancel.png'

function TodoList({ text, deletebtn, id, isComplete, toggle }) {
  return (
    <>



<div className="max-w-sm m-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[purple] dark:border-[red] relative">
    <p className={`mb-8 font-normal text-black break-words ${isComplete ? "line-through" : ""}`}>
        {text}
    </p>
    <div className="absolute bottom-0 left-0 mb-4 ml-4">
        <img
            className="inline-flex items-center w-7 h-7"
            onClick={() => deletebtn(id)}
            src={deletes}
            alt='Delete'
        />
    </div>
    <div className="absolute bottom-0 right-0 mb-4 mr-4">
        <img
            className="inline-flex items-end font-medium bg-[navy] rounded-lg w-7 h-7"
            onClick={() => toggle(id)}
            src={isComplete ? cancel : checked}
            alt='tik'
        />
    </div>
</div>




    </>
  )
}

export default TodoList
