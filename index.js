// Write your code here!
let main = document.querySelector('#main')
main.remove('main')

let newHeader = document.createElement('h1')

newHeader.id = 'victory';

newHeader.innerHTML = "YOUR-NAME is the champion";

document.body.appendChild(newHeader)

