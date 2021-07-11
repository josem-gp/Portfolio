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
  const colorBtn = Array.from(document.querySelectorAll('.nav-link')).filter(element => element.classList.contains('scroll-color'));
  const homeBtn = Array.from(document.querySelectorAll('.nav-link')).find(element => element.dataset.link === 'home');
  const aboutBtn = Array.from(document.querySelectorAll('.nav-link')).find(element => element.dataset.link === 'about');
  const techBtn = Array.from(document.querySelectorAll('.nav-link')).find(element => element.dataset.link === 'techstack');
  const portfolioBtn = Array.from(document.querySelectorAll('.nav-link')).find(element => element.dataset.link === 'portfolio');
  const contactBtn = Array.from(document.querySelectorAll('.nav-link')).find(element => element.dataset.link === 'contact');
  window.addEventListener("scroll", (event) => {
    const getOffset = (el) => {
      const rect = el.getBoundingClientRect();
      const objectDirection = {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
      };
      if(objectDirection.top < 645) {
          homeBtn.classList.contains('scroll-color') ? '' : homeBtn.classList.add('scroll-color');
          aboutBtn.classList.contains('scroll-color') ? aboutBtn.classList.remove('scroll-color') : '';
          techBtn.classList.contains('scroll-color') ? techBtn.classList.remove('scroll-color') : '';
          portfolioBtn.classList.contains('scroll-color') ? portfolioBtn.classList.remove('scroll-color') : '';
          contactBtn.classList.contains('scroll-color') ? contactBtn.classList.remove('scroll-color') : '';
      } else if(objectDirection.top < 1330) {
          aboutBtn.classList.contains('scroll-color') ? '' : aboutBtn.classList.add('scroll-color');
          homeBtn.classList.contains('scroll-color') ? homeBtn.classList.remove('scroll-color') : '';
          techBtn.classList.contains('scroll-color') ? techBtn.classList.remove('scroll-color') : '';
          portfolioBtn.classList.contains('scroll-color') ? portfolioBtn.classList.remove('scroll-color') : '';
          contactBtn.classList.contains('scroll-color') ? contactBtn.classList.remove('scroll-color') : '';
      } else if(objectDirection.top < 2055) {
          techBtn.classList.contains('scroll-color') ? '' : techBtn.classList.add('scroll-color');
          homeBtn.classList.contains('scroll-color') ? homeBtn.classList.remove('scroll-color') : '';
          aboutBtn.classList.contains('scroll-color') ? aboutBtn.classList.remove('scroll-color') : '';
          portfolioBtn.classList.contains('scroll-color') ? portfolioBtn.classList.remove('scroll-color') : '';
          contactBtn.classList.contains('scroll-color') ? contactBtn.classList.remove('scroll-color') : '';
      } else if(objectDirection.top < 4600) {
          portfolioBtn.classList.contains('scroll-color') ? '' : portfolioBtn.classList.add('scroll-color');
          homeBtn.classList.contains('scroll-color') ? homeBtn.classList.remove('scroll-color') : '';
          aboutBtn.classList.contains('scroll-color') ? aboutBtn.classList.remove('scroll-color') : '';
          techBtn.classList.contains('scroll-color') ? techBtn.classList.remove('scroll-color') : '';
          contactBtn.classList.contains('scroll-color') ? contactBtn.classList.remove('scroll-color') : '';
      } else {
          contactBtn.classList.contains('scroll-color') ? '' : contactBtn.classList.add('scroll-color');
          homeBtn.classList.contains('scroll-color') ? homeBtn.classList.remove('scroll-color') : '';
          aboutBtn.classList.contains('scroll-color') ? aboutBtn.classList.remove('scroll-color') : '';
          techBtn.classList.contains('scroll-color') ? techBtn.classList.remove('scroll-color') : '';
          portfolioBtn.classList.contains('scroll-color') ? portfolioBtn.classList.remove('scroll-color') : '';
      }
  }
    getOffset(navBar);
  });
}

changeNavBar();



