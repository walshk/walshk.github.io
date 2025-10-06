import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

/* import the fontawesome core */
import {
    library,
    type IconDefinition,
} from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';

/* add icons to the library */
library.add(faEnvelope, faLocationDot);
library.add(faGithub as IconDefinition);
library.add(faLinkedin as IconDefinition);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
