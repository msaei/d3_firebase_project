const modal = document.querySelector('.modal');
M.Modal.init(modal);

const form = document.querySelector('form');
const name = document.querySelector('#name');
const parent = document.querySelector('#parent');
const department = document.querySelector('#department');

form.addEventListener('submit', e => {
    e.preventDefault();
    db.collection('employees').add({
        name: name.value,
        parent: parent.value,
        department: department.value
    })

    //close the modal
    var instance = M.Modal.getInstance(modal)
    instance.close();
    //clear all form fields
    form.rest();
})