// IMPORT FONTS
import './fonts.css';

// IMPORT JQUERRY
import $ from 'jquery';

// IMPORT FONT AWESOME
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faBacon, faAnchor } from '@fortawesome/free-solid-svg-icons';

library.add(faBacon);
library.add(faAnchor);
dom.watch();

const body = $('body');
const p = $("<p></p>").text("Inserindo texto").css("color", "red");

body.append(p);
