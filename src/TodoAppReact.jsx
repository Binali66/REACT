import { useState } from 'react';

function TodoForm() {
  const [text, setText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      // Ajouter la tâche
      addTodo(text);
      setText(''); // Réinitialisation du champ
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ajouter une tâche..."
        className="border p-2 rounded-l"
      />
      <button 
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-r"
      >
        Ajouter
      </button>
    </form>
  );
}