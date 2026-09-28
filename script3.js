const noteInput = document.getElementById('noteInput');
const noteInput2 = document.getElementById('noteInput2');
const noteInput3 = document.getElementById('noteInput3');
const noteInput4 = document.getElementById('noteInput4');
const noteInput5 = document.getElementById('noteInput5');
const noteInput6 = document.getElementById('noteInput6');
const noteInput7 = document.getElementById('noteInput7');
const noteInput8 = document.getElementById('noteInput8');
const addBtn = document.getElementById('addBtn');
const notesList = document.getElementById('notesList');
const notesList2 = document.getElementById('notesList2');

addBtn.addEventListener('click', function() {
    let a = noteInput.value;
    let b = noteInput2.value;
    let c = noteInput3.value;
    let d = noteInput4.value;
    let e = noteInput5.value;
    let f = noteInput6.value;
    let g = noteInput7.value;
    let note = `${a} Name | ${b} Quantity | ${c} Drawer Number | ${d} The Price | ${e} Safety limit | ${f} Tax Number | ${g} Invoice Date`
    if (a == '' || b == '' || c == '' || d == '' || e == '' || f == '' || g == '') {
        alert('برجاء ان تكتب شئ.')
        return;
    }

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));

    noteInput.value = ''
    noteInput2.value = ''
    noteInput3.value = ''
    noteInput4.value = ''
    noteInput5.value = ''
    noteInput6.value = ''
    noteInput7.value = ''
    displayNotes()
})

function displayNotes() {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notesList.innerHTML = ''
    notes.forEach(function(notes, index) {
        let li = document.createElement('li');
        li.classList.add('item');
        li.innerHTML = `
        <span>${notes}</span>
        <button class='deleteBtn' onclick= 'deleteNote(${index})' >Delete</button>
        <button class='plusBtn'>+</button>
        <button class='minusBtn'>-</button>
        `
        notesList.appendChild(li);
    });
}

function deleteNote (index) {
    if (confirm('هل أنت متأكد من الحذف النهائي')) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes()
    }
}

displayNotes()