import 'bootstrap';


const Contrast = require('contrast-js');

let contrast = new Contrast();
contrast.launch();

// let contrast = new Contrast({

//   // Set to true if you want to prebuild light/dark colors
//   isCustomColors: false,

//   // dark color HEX if isCustomColors is set to true
//   customLight: "#bddfe0",

//   // light color HEX if isCustomColors is set to true
//   customDark: "#334054",

//   // "cover" or "100%" based on the background-size property in css
//   backgroundSize: "cover",

//   // Option to rename the class for the element containing bg image
//   bgClass: "contrast-bg",

//   // Option to rename the class for the target element
//   elementClass: "contrast-el",

//   // Set to true if the element is a div (to change it's background)
//   isDiv: false,

//   // Turn this so the module runs on window resize
//   isResponsive: true

// });
