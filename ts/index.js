var store = {
    cards: []
};
var renderButton = function () {
    var buttonAddTask = document.querySelector('.add-new-task');
    buttonAddTask === null || buttonAddTask === void 0 ? void 0 : buttonAddTask.addEventListener('click', function () {
        store.cards.push({ text: Date.now().toString() });
        renderCards();
    });
};
var renderInput = function () {
    var findId = document.querySelector('.search');
    findId.innerHTML =
        "\n        \t<div class=\"search-icon\"></div>\n\n        \t<input type=\"text\" class=\"search-input\" placeholder=\"Search for any training you want\">\n\t\t\t \t \n\t\t";
};
var renderCards = function () {
    var test1 = 'Evaluate the addition and deletion of user IDs.';
    var test2 = 'Pending';
    var test3 = 'Minor';
    var findCurrently = document.querySelector('.currently');
    findCurrently.innerHTML = '';
    store.cards.map(function (card) {
        var addTask = document.createElement("div");
        addTask.innerHTML =
            "\n\t\t<div class=\"task\">\n\t        <div class=\"task__name-new\">".concat(card.text, "</div>\n\t        <div class=\"task__status-new\">").concat(test2, "</div>\n\t        <div class=\"task__priority-new\">").concat(test3, "</div>\n\t        <button class=\"change__task\"></button>\n\t\t</div>\n\t\t");
        findCurrently === null || findCurrently === void 0 ? void 0 : findCurrently.appendChild(addTask);
        var taskName = document.querySelector('.task__name-new');
        var taskStatus = document.querySelector('.task__status-new');
        var taskPriority = document.querySelector('.task__priority-new');
        if (!taskName || !taskStatus || !taskPriority) {
            console.log('We have not this element');
            return;
        }
        taskName.className = 'task__name';
        taskStatus.className = 'task__status';
        taskPriority.className = 'task__priority';
    });
};
renderInput();
renderButton();
renderCards();
