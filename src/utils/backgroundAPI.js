async function getBackground() {
  const htmlBackground = document.getElementById('page');
  const newImage = await axios.get('http://localhost:5000/api/background');
  htmlBackground.style.background = `linear-gradient(rgba(36, 51, 91, 0.5), rgba(36, 51, 91, 0.5)), url('${newImage.data}')`;
}

getBackground();
