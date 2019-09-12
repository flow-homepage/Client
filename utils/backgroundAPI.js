require('dotenv').config();

async function getBackground() {
  const htmlBackground = document.getElementById('page');
  const photoCredits = document.getElementById('profileLink');
  const newImage = await axios.get(
    'https://flowhome-server.herokuapp.com/api/background'
  );
  htmlBackground.style.background = `linear-gradient(rgba(36, 51, 91, 0.5), rgba(36, 51, 91, 0.5)), url('${newImage.data.urls.regular}')`;
  htmlBackground.style.backgroundSize = `cover`;
  photoCredits.innerHTML = `${newImage.data.user.name}`;
  photoCredits.href = `${newImage.data.user.links.html}`;
}

getBackground();
