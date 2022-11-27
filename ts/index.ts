
type Store = {
	cards: { text: string }[]
}

const store: Store = {
	cards: [

	]
}


const renderButton = () => {

	const buttonAddTask = document.querySelector('.add-new-task')

	buttonAddTask?.addEventListener('click', () => {
		store.cards.push({ text: Date.now().toString() })

		renderCards()
	})
}
const renderInput = () => {

	const findId = document.querySelector('.search')

	findId!!.innerHTML =
		`
        	<div class="search-icon"></div>

        	<input type="text" class="search-input" placeholder="Search for any training you want">
			 	 
		`

}

const renderCards = () => {

	let test1 = 'Evaluate the addition and deletion of user IDs.'
	let test2 = 'Pending'
	let test3 = 'Minor'

	const findCurrently = document.querySelector('.currently')
	findCurrently!!.innerHTML = ''


	store.cards.map((card) => {
		let addTask = document.createElement("div")
		addTask.innerHTML =

			`
		<div class="task">
	        <div class="task__name-new">${card.text}</div>
	        <div class="task__status-new">${test2}</div>
	        <div class="task__priority-new">${test3}</div>
	        <button class="change__task"></button>
		</div>
		`

		findCurrently?.appendChild(addTask)

		const taskName = document.querySelector('.task__name-new')
		const taskStatus = document.querySelector('.task__status-new')
		const taskPriority = document.querySelector('.task__priority-new')

		if (!taskName || !taskStatus || !taskPriority) {
			console.log('We have not this element')
			return
		}

		taskName.className = 'task__name'
		taskStatus.className = 'task__status'
		taskPriority.className = 'task__priority'
	})

}


renderInput()
renderButton()
renderCards()