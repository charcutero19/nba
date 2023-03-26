// const nota1 = document.querySelector('.unidad_nota-1')
// const nota2 = document.querySelector('.unidad_nota-2')
// const nota3 = document.querySelector('.unidad_nota-3')
// const nota4 = document.querySelector('.unidad_nota-4')
// const nota5 = document.querySelector('.unidad_nota-5')
// const nota6 = document.querySelector('.unidad_nota-6')
// const nota7 = document.querySelector('.unidad_nota-7')
// const nota8 = document.querySelector('.unidad_nota-8')
// const nota9 = document.querySelector('.unidad_nota-9')
// const nota10 = document.querySelector('.unidad_nota-10')
// const nota11 = document.querySelector('.unidad_nota-11')

// function crearNota() {
//     nota1.setAttribute('style','display: inline-block; animation: bounceIn; animation-duration: 1s;')
//     kefri.addEventListener('click', () => {
//         nota2.setAttribute('style','display: inline-block; animation: bounceIn; animation-duration: 1s;')
//         kefri.addEventListener('click', () => {
//             nota3.setAttribute('style','display: inline-block; animation: bounceIn; animation-duration: 1s;')
//             kefri.addEventListener('click', () => {
//                 nota4.setAttribute('style','display: inline-block; animation: bounceIn; animation-duration: 1s;')
//                 kefri.addEventListener('click', () => {
//                     nota5.setAttribute('style','display: inline-block; animation: bounceIn; animation-duration: 1s;')
//                     kefri.addEventListener('click', () => {
//                         nota6.setAttribute('style','display: inline-block; animation: bounceIn; animation-duration: 1s;')
//                         kefri.addEventListener('click', () => {
//                             nota7.setAttribute('style','display: inline-block; animation: bounceIn; animation-duration: 1s;')
//                             kefri.addEventListener('click', () => {
//                                 nota8.setAttribute('style','display: inline-block; animation: bounceIn; animation-duration: 1s;')
//                                 kefri.addEventListener('click', () => {
//                                     nota9.setAttribute('style','display: inline-block; animation: bounceIn; animation-duration: 1s;')
//                                     kefri.addEventListener('click', () => {
//                                         nota10.setAttribute('style','display: inline-block; animation: bounceIn; animation-duration: 1s;')
//                                         kefri.addEventListener('click', () => {
//                                             nota11.setAttribute('style','display: inline-block; animation: bounceIn; animation-duration: 1s;')
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// }

// kefri.addEventListener('click', () => {
//     crearNota();
// }, {once: true})


const kefri = document.querySelector('.kefri')
const divContainer = document.querySelector('.unidades_notas')

kefri.addEventListener('click', () => {
    const newDiv = document.createElement("div")
    newDiv.id = "unidad_nota"
    newDiv.setAttribute('contenteditable', 'true')
    newDiv.setAttribute('style', 'flex-grow: 1; animation: zoomInDown; animation-duration: 1s;')
    divContainer.appendChild(newDiv)
})
