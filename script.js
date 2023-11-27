let modal = document.getElementById('modal-form')

modal.style.visibility = 'hidden'

document.getElementById('btn-agendar-agora').addEventListener('click', () => {
    modal.style.visibility = 'hidden'
})

document.getElementById('quero-agendar-button').addEventListener('click', () => {
    modal.style.visibility ? modal.style.visibility = "visible" : modal.style.visibility = 'hidden'
})

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.style.visibility = 'hidden';
    }
});