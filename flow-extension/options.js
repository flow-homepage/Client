const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1', 'white'];

function constructOptions(buttonColors) {
  for (const item of buttonColors) {
    const button = document.createElement('button');
    button.style.backgroundColor = item;

    // eslint-disable-next-line no-loop-func
    button.addEventListener('click', function() {
      chrome.storage.sync.set({ color: item });
    });
    document.getElementById('buttonDiv').appendChild(button);
  }
}
constructOptions(kButtonColors);
