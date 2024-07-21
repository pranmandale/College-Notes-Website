const dropdowns = document.querySelectorAll('.drop-down, .drop-down-1');

dropdowns.forEach((dropdown) => {
  const list = dropdown.querySelector('.list');
  const container = dropdown.parentElement;

  dropdown.addEventListener('click', () => {
    if (list.classList.contains('show')) {
      list.classList.remove('show');
      container.style.marginBottom = '0';
    } else {
      dropdowns.forEach((otherDropdown) => {
        const otherList = otherDropdown.querySelector('.list');
        const otherContainer = otherDropdown.parentElement;
        if (otherDropdown !== dropdown) {
          otherList.classList.remove('show');
          otherContainer.style.marginBottom = '0';
        }
      });

      list.classList.add('show');
      container.style.marginBottom = list.clientHeight + 'px';
    }
  });
});
