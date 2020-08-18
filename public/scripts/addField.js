// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botao

.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // Duplicar os campos. Que campos?
const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

   // pegar os campos. Que campos?
const fields = newFieldContainer.querySelectorAll('input')


   //para cada campo, limpar
fields.ForEach(function(field) {
   //pegar o field do momento e limpar em seguida
    field.value = ""
})


   // Colocar na página
document.querySelector('#schedule-items').appendChild(newFieldContainer)

}