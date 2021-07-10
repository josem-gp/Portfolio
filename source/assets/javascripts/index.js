import 'bootstrap';


const accordeon = () => {
  const stacks = document.querySelectorAll('.stacks');
  stacks.forEach((stack) => {
    stack.addEventListener('click', (event) => {
      event.currentTarget.firstElementChild.firstChild.classList.toggle('downwards');
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


const changeNavBar = () => {
  const navBar = document.querySelector('.navbar');
  window.addEventListener("scroll", (event) => {
    console.log('scrolling!');
    const getOffset = (el) => {
      const rect = el.getBoundingClientRect();
      const objectDirection = {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
      };
      if(objectDirection.top < 714) {
        console.log('Home!');
      } else if(objectDirection.top < 1403) {
        console.log('About!');
      } else if(objectDirection.top < 2125) {
        console.log('TechStack!');
      } else if(objectDirection.top < 4512) {
        console.log('Portfolio!');
      } else {
        console.log('Contact!');
      }
    }
    getOffset(navBar);
  });
}

changeNavBar();
