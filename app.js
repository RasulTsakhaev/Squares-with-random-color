const board = document.querySelector('#board')
const colors = ['#e74c3c', '#8e44ad', '#FFF200',
'#3498db', '#e67e22','#2ecc71','#FF0000','#3914AF',
'#876ED7','#00CB00','#FF7373','#66A3D1'  ]
const SQUARES_NUMBER = 120

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
     setColor(square))

     square.addEventListener('mouseleave', () => 
     removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow =`0 0 100px ${color}, 0 0 1px ${color},`
    
}
function removeColor(element) {
    element.style.backgroundColor = '#D6F870'
    element.style.boxShadow =`0 0 5px #000`
}

function getRandomColor() {
    const index = Math.floor (Math.random() * colors.length)
    return colors[index]
}