window.addEventListener('load', () => {
    const form = document.querySelector("#taskForm");
    const input = document.querySelector("#newTaskInput");
    const list_el = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        if (!task) {
            alert("Please fill out the task");
            return;
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        // task_content_el.innerText = task;

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);
        //The above is for adding a task in

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        const task_check_el = document.createElement("button");
        task_check_el.classList.add("check");
        task_check_el.innerHTML = "Check";

        task_action_el.appendChild(task_edit_el);
        task_action_el.appendChild(task_delete_el);
        task_action_el.appendChild(task_check_el);

        task_el.appendChild(task_action_el);

        list_el.appendChild(task_el);

        input.value = "";

        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            }else {
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });

        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
        });

        task_check_el.addEventListener('click', () => {
            if (task_check_el.innerText.toLowerCase() == "check") {
                task_el.setAttribute("style", "opacity:0.5;");
                task_check_el.innerText = "Uncheck";
                task_edit_el.disabled = true;
                task_delete_el.disabled = true;
            }else {
                task_el.setAttribute("style", "opacity:1.0;");
                task_check_el.innerText = "Check";
                task_edit_el.disabled = false;
                task_delete_el.disabled = false;
            }
        });
    });
});