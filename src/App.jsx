import "tailwindcss";
import { useState } from 'react'
import './App.css'
import Todos from './composants/Todos'
import AddTodoForm from "./composants/AddTodoForm";

const listeTodos =[
  {id: 1, label: "Faire ses devoirs", isDone: true}, // ceci est un objet
  {id: 2, label: "Faire des course", isDone: false},
  {id: 3, label: "faire du vélo", isDone: true},
  {id: 4, label: "Faire une balade", isDone: false},
  {id: 5, label: "Faire une pizza", isDone: false},
  {id: 6, label: "Faire du sport", isDone: false},
  {id: 7, label: "Faire", isDone: false},
]
function App() {
  const [todos, setTodos] = useState(listeTodos)
  //TODO: Creer un tableau d'objets permettant d'afficher la liste des todos dans le 
  // composant todo
  
  const handleAdd = (newTodo) => {
    setTodos((prev) => [newTodo, ...prev]);
  };
  // Fonction pour supprimer une tâche à partir de ID
  const handleDelete = (id) => {
  // On filtre le tableau pour garder uniquement les tâches dont l'id est différent de celui qu'on veut supprimer
  setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
};

  return (
    <>
        <h1 className="text-4xl text-green-700">Mon application React</h1>


      <div className="my-4 rounded-2xl bg-white p-5 shadow">
        <AddTodoForm onAdd={handleAdd} />
      </div>

        <Todos  todos={todos} setTodos={setTodos} onDelete={handleDelete} />
    </>
  )
}

export default App
