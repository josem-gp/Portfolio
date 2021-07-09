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

console.log(accordeon());

