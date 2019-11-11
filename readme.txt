Setup Instructions for Front-End
-------------------

1. Run 'npm install' which should install the following libraries:
   - axios
   - dotenv
   - highlightjs
   - moment (and related libraries)
   - prop-types
   - react (and related libraries)

2. Include a .env file in the root directory with information like the following:
   - BACKEND_WEATHER_URL = http://localhost:5000/api/weather
   - BACKEND_IMAGE_URL = http://localhost:5000/api/background
   - EXTENSION_SUFFIX = localhost
   - EXTENSION_URL = *://localhost/*
   - DARKSKYKEY = <API Key>

3. Run 'npm run start' which should build React and run the front-end server
   - localhost:3000


Setup Instructions for Chrome Extension
-------------------

1. Open Chrome and navigate to chrome://extensions

2. At the top right, switch on 'Developer Mode'

3. At the top left, click 'Load unpacked'

4. Navigate to the extension folder root and install from there

5. This local installation will work for localhost and flowhome.us

NOTE: The public extension URL is https://chrome.google.com/webstore/detail/flow-homepage-helper/jadklcjnechlbblefifkjodppcbckmlg