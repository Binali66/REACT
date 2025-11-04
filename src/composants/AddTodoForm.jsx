import { useState } from "react";

export default function AddTodoForm({ onAdd }) {
  // Déclaration des états internes du composant
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState("");

  // fonction de soumission du formulaire
  const handleSubmit = (e) => {
    // empêche le rafraîchissement de la page
    e.preventDefault();

    // Supprime les espaces avant et après le texte
    const trimmed = title.trim();
    if (!trimmed) {
      setError("Le titre est obligatoire.");
      return;
    }
    setError(""); // efface tous les message d'erreur apres la validation

    // Objet de la nouvelle tâche
    const newTodo = {
      // propriétés de l'objet newTodo
      id: Date.now(),
      title: trimmed,
      note: note.trim() || null,
      done: false,
      createdAt: new Date().toISOString(),
    };

    onAdd?.(newTodo);     // Remonte l’info au parent
    setTitle("");         // reset du formulaire
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label htmlFor="title" className="block text-sm font-medium">
          Titre de la tâche 
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex : Faire ses devoirs"
          className="w-full border rounded px-2 py-2"
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>

      <div>
        <label htmlFor="note" className="block text-sm font-medium">
          Note 
        </label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3} // pour avoir plus de place dans la case.
          placeholder="Détail, lieu, etc."
          className="w-full border rounded "
        />
      </div>

      <button
        type="submit" // attribut soumis aux formulaire.
        disabled={!title.trim()} // désactive le champ du titre s'il est vide, meme avec des espaces.
        // prend toute la largeur du bouton, arrondi les coté, fond du bouton en bleu; texte en blanc et la couleur devient semi-transparent.
        className="w-full border rounded-lg bg-blue-700 ; text-white disabled:opacity-50"
      >
        Ajouter
      </button>
    </form>
  );
}
