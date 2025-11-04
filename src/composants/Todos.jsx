function Todos({ todos, setTodos }) {
  // Fonction déclare un composant Todos, entre les accolades
  // c'est une props (todos) c'est une prop qui contient la list de toutes les tâches.
  // Cette ligne de code est facultatif elle sert a verifier ce que contient la variabe. console.log("console log depuis todos: ", todos);
  // La fonction console.log déclare une chaine de carctère << console log depuis todos >>
  // todos est une variable qu'on a recu depuis les props composant parents.

  const updateTodo = (id) => {
      console.log("id clicked: ", id)
      setTodos((todos) => {
        const newTodos = todos.map((el) => {
          if (el.id === id)
          {
            el.isDone = !el.isDone
          }
          console.log(el)
          return el;
        })
        console.log(newTodos)

        return [...newTodos]
      })
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };
  return (
    // indique ce qui sera affiché à l'écran quand le composant est utiliser.
    // fragments React pour ne pas utiliser des div.
    <>
      <h1>Liste des tâches</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id} - {todo.label} - {todo.isDone ? "✅ Terminé" : "⏳ En cours"} <input type="button" onClick={() =>  updateTodo(todo.id)} value="Upate Status" />
            <input // bouton supprime la tâche
              type="button"
              onClick={() => deleteTodo(todo.id)} // appel de la fonction deleteTodo avec l'id
              value="Supprimer"
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 ml-2"
            />
          </li>
        ))}
      </ul>
    </>
    // Balise HTML qui affiche un gros titre. ul c'est une list à puces et elle va contenir des éléments li.
    // todos c'est un tableau de tâches, .map() est une methode qui permet de parcourir
    // un tableau et de retourner un nouveau tableau avec des résultats. (todo) => (...)
    // todo.id est une propriété qui affiche l'identifiant, todo.label est une propriété qui 
    // affiche la chaine de caractère et todo.isDone est une propriété 
    
  );
}

export default Todos;
