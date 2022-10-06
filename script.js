const modalBtn = document.querySelector(`.modal-btn`)
const saveBtn = document.querySelector(`.save-btn`)
const modal = document.querySelector(`.modal`)
const errorMsg = document.querySelector(`.error-msg`)
const modalInput = document.querySelector(`.modal-input`)
const text = document.querySelector(`.text`)

let inputValue = 'this msg is just for testing'
let timeout
let index = 1
let speed = 80

const writingAnimation = () => {
	text.innerHTML = inputValue.slice(0, index)

	index++

	if (index > inputValue.length) {
		return
	}

	timeout = setTimeout(writingAnimation, speed)
}

const showModal = () => {
	modalInput.value = ''
	errorMsg.textContent = ''
	modal.classList.add('active')
}

const checkEnter = e => {
	if (e.key == `Enter`) {
		saveText()
	}
}

const saveText = () => {
	if (modalInput.value == '') {
		errorMsg.textContent = 'Cannot leave empty text'
	} else if (modalInput.value.length < 8) {
		errorMsg.textContent = 'Its too short, make it longer than 8 characters'
	} else {
		inputValue = modalInput.value
		modal.classList.remove('active')
		index = 0
		clearTimeout(timeout)
		writingAnimation()
	}
}

modalInput.addEventListener(`keyup`, checkEnter)
modalBtn.addEventListener(`click`, showModal)
saveBtn.addEventListener(`click`, saveText)
writingAnimation()
