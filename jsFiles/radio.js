const initialCategory = JSON.parse(window.localStorage.getItem('category'));
if (initialCategory) {
  document.getElementById(`radio${initialCategory.name}`).checked = true;
} else {
  const category = {
    name: 'Uncategorized'
  };

  window.localStorage.setItem('category', JSON.stringify(category));
}

function handleCategoryRadio() {
  const selectedValue = document.querySelector(
    'input[name="radioCategories"]:checked'
  ).value;

  const category = {
    name: selectedValue
  };

  window.localStorage.setItem('category', JSON.stringify(category));

  document.querySelectorAll(`.recentTab`).forEach(element => {
    if (!element.classList.contains('hidden')) {
      element.classList.add('hidden');
    }
  });

  document.querySelectorAll(`.category${selectedValue}`).forEach(element => {
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
    }
  });
}
