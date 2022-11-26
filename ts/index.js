let test1 = 'Evaluate the addition and deletion of user IDs.'
let test2 = 'Pending'
let test3 = 'Minor'



const buttonAddTask = document.querySelector('.add-new-task')

buttonAddTask.addEventListener('click', () => {
	let addTask = document.createElement("div")
	addTask.innerHTML =

		`<div class="task">
	        <div class="task__name-new"></div>
	        <div class="task__status-new"></div>
	        <div class="task__priority-new"></div>
	        <button class="change__task"></button>
		</div>`

	let myNewTask = document.querySelector('.completed')
	let positionNewTask = myNewTask.parentNode
	positionNewTask.insertBefore(addTask, myNewTask)

	const positionSelect = document.querySelector('#position')

	const taskName = document.querySelector('.task__name-new')
	const taskStatus = document.querySelector('.task__status-new')
	const taskPriority = document.querySelector('.task__priority-new')

	taskName.textContent = test1
	taskStatus.textContent = test2
	taskPriority.textContent = test3

	const oldTaskName = document.querySelector('.task__name-new').className = 'task__name'
	const oldTaskStatus = document.querySelector('.task__status-new').className = 'task__status'
	const oldTaskPriority = document.querySelector('.task__priority-new').className = 'task__priority'
})
