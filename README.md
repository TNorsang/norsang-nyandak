# Hello and Welcome!

## My name is Norsang Nyandak and I am a dedicated Software Engineer, who believes in dreams backed with hard work.

### NPM installs for this to work:

**Free FontAwesome Pacakges**

Copy and Paste:
Step 1: npm i --save @fortawesome/fontawesome-svg-core
npm install --save font-awesome

Step 2: npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons

Step 3: npm i --save @fortawesome/react-fontawesome@latest

Step 4: npm install babel-plugin-macros

Step 5: To Configure :
Add these codes in your `babel.config.js` file
module.exports = function (api) {
return {
plugins: ['macros'],
}
}

Step 6: Free or Pro
Add these codes in your `babel-plugin-macros.config.js` file
module.exports = {
'fontawesome-svg-core': {
'license': 'free'
}
}

Step 7" Now to use these font awesome:
These are the examples for import and usage:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

<FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
<FontAwesomeIcon icon={brands('twitter')} />
