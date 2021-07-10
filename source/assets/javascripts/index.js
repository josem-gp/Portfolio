import 'bootstrap';


const accordeon = () => {
  const stacks = document.querySelectorAll('.stacks');
  stacks.forEach((stack) => {
    stack.addEventListener('click', (event) => {
      event.currentTarget.classList.toggle('active');
      }
    );
});
}

accordeon();

const filter = () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');
  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      if(event.currentTarget.dataset.filter === 'all'){
        const activeBtn = Array.from(document.querySelectorAll('.filter-btn')).find(element => element.classList.contains('active'));
        activeBtn.classList.remove('active');
        event.currentTarget.classList.add('active');
        projects.forEach((element) => {
          element.classList.contains('active') ? '' : element.classList.add('active');
        })
      } else if (event.currentTarget.dataset.filter === 'rails'){
        const activeBtn = Array.from(document.querySelectorAll('.filter-btn')).find(element => element.classList.contains('active'));
        activeBtn.classList.remove('active');
        event.currentTarget.classList.add('active');
        projects.forEach((element) => {
          element.classList.remove('active');
          element.dataset.filter === 'rails' ? element.classList.add('active') : '';
        })
      } else if (event.currentTarget.dataset.filter === 'react'){
        const activeBtn = Array.from(document.querySelectorAll('.filter-btn')).find(element => element.classList.contains('active'));
        activeBtn.classList.remove('active');
        event.currentTarget.classList.add('active');
        projects.forEach((element) => {
          element.classList.remove('active');
          element.dataset.filter === 'react' ? element.classList.add('active') : '';
        })
      } else if (event.currentTarget.dataset.filter === 'api'){
        const activeBtn = Array.from(document.querySelectorAll('.filter-btn')).find(element => element.classList.contains('active'));
        activeBtn.classList.remove('active');
        event.currentTarget.classList.add('active');
        projects.forEach((element) => {
          element.classList.remove('active');
          element.dataset.filter === 'api' ? element.classList.add('active') : '';
        })
      }
    });
  });
}

filter();
