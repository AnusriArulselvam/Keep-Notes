//  const input=document.querySelector("input");
//  const add=document.querySelector(".add");
//  const noteshtml=document.querySelector(".notes");
//  let notesJson=JSON.parse(localStorage.getItem("notes")) || [];

//  function getNoteshtml(notes,index){
//     <li class="notes">
//         <button class="delete-btn"  
//     </li>
//  }
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.add');
    const notesInput = document.querySelector('.notes-input');
    const notesList = document.querySelector('.notes');

    addButton.addEventListener('click', () => {
        const noteText = notesInput.value.trim();
        if (noteText) {
            addNoteToList(noteText);
            notesInput.value = '';
        }
    });

    notesInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const noteText = notesInput.value.trim();
            if (noteText) {
                addNoteToList(noteText);
                notesInput.value = '';
            }
        }
    });

    function addNoteToList(noteText) {
        const li = document.createElement('li');
        li.classList.add('note-item');

        const noteSpan = document.createElement('span');
        noteSpan.textContent = noteText;
        li.appendChild(noteSpan);

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete');
        deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
        deleteButton.addEventListener('click', () => {
            notesList.removeChild(li);
        });
        li.appendChild(deleteButton);

        notesList.appendChild(li);
    }
});
