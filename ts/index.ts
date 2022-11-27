const render = () => {
	let test1 = 'Evaluate the addition and deletion of user IDs.'
	let test2 = 'Pending'
	let test3 = 'Minor'

	const buttonAddTask = document.querySelector('.add-new-task')

	buttonAddTask?.addEventListener('click', () => {
		let addTask = document.createElement("div")
		addTask.innerHTML =

			`<div class="task">
	        <div class="task__name-new"></div>
	        <div class="task__status-new"></div>
	        <div class="task__priority-new"></div>
	        <button class="change__task"></button>
		</div>`

		let myNewTask = document.querySelector('.completed')
		let positionNewTask = myNewTask?.parentNode

		positionNewTask?.insertBefore(addTask, myNewTask)

		const taskName = document.querySelector('.task__name-new')
		const taskStatus = document.querySelector('.task__status-new')
		const taskPriority = document.querySelector('.task__priority-new')

		if (!taskName || !taskStatus || !taskPriority) {
			console.log('We have not this element')
			return
		}
		taskName.textContent = test1
		taskStatus.textContent = test2
		taskPriority.textContent = test3

		taskName.className = 'task__name'
		taskStatus.className = 'task__status'
		taskPriority.className = 'task__priority'
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

render()
renderInput()