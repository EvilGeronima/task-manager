var render = function () {
    var test1 = 'Evaluate the addition and deletion of user IDs.';
    var test2 = 'Pending';
    var test3 = 'Minor';
    var buttonAddTask = document.querySelector('.add-new-task');
    buttonAddTask === null || buttonAddTask === void 0 ? void 0 : buttonAddTask.addEventListener('click', function () {
        var addTask = document.createElement("div");
        addTask.innerHTML =
            "<div class=\"task\">\n\t        <div class=\"task__name-new\"></div>\n\t        <div class=\"task__status-new\"></div>\n\t        <div class=\"task__priority-new\"></div>\n\t        <button class=\"change__task\"></button>\n\t\t</div>";
        var myNewTask = document.querySelector('.completed');
        var positionNewTask = myNewTask === null || myNewTask === void 0 ? void 0 : myNewTask.parentNode;
        positionNewTask === null || positionNewTask === void 0 ? void 0 : positionNewTask.insertBefore(addTask, myNewTask);
        var taskName = document.querySelector('.task__name-new');
        var taskStatus = document.querySelector('.task__status-new');
        var taskPriority = document.querySelector('.task__priority-new');
        if (!taskName || !taskStatus || !taskPriority) {
            console.log('We have not this element');
            return;
        }
        taskName.textContent = test1;
        taskStatus.textContent = test2;
        taskPriority.textContent = test3;
        taskName.className = 'task__name';
        taskStatus.className = 'task__status';
        taskPriority.className = 'task__priority';
    });
};
var renderInput = function () {
    var findId = document.querySelector('.search');
    findId.innerHTML =
        "\n        \t<div class=\"search-icon\"></div>\n\n        \t<input type=\"text\" class=\"search-input\" placeholder=\"Search for any training you want\">\n \t \n\t\t";
};
render();
renderInput();
