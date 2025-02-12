document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const options = document.getElementById('options');
  const priority = document.getElementById('priority');
  const due = document.getElementById('due');
  const taskbutton = document.getElementById('taskbutton');
  const task = document.getElementById('task');
  const darkmode = document.getElementById('darkmode');

  taskbutton.addEventListener('click', () => {
    const tasks = input.value.trim();
    const category = options.value;
    const prio = priority.value;
    const duedate = due.value;

    if (tasks !== '') {
      addTask(tasks, category, prio, duedate);
      input.value = '';
      due.value = '';
    }
  });

  function addTask(tasks, category, prio, duedate) {
    const li = document.createElement('li');

    li.innerHTML = `
      <input type="checkbox" class="task-checkbox">
      <span>${tasks} (${category}, ${prio}, Due: ${duedate})</span>
      <div>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    task.appendChild(li);

    const checkbox = li.querySelector('.task-checkbox');
    const textSpan = li.querySelector('span');

    checkbox.addEventListener('change', () => {
      textSpan.classList.toggle('completed', checkbox.checked);
    });

    li.querySelector('.edit-btn').addEventListener('click', () => {
      const newText = prompt('Edit your task:', tasks);
      if (newText !== null && newText.trim() !== '') {
        textSpan.innerText = `${newText.trim()} (${category}, ${prio}, Due: ${duedate})`;
      }
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
      task.removeChild(li);
    });
  }

  darkmode.addEventListener('change', () => {
    document.body.classList.toggle('darkmode', darkmode.checked);
  });
});
