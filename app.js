// Super simple script that goes to google.com and renders a pdf of the page at "render.pdf"

var page = require("webpage").create(); // Load the external page utility

// After we open our page, the following function will be called
function pageLoaded(){
  page.render("render.pdf"); // Takes a snapshot of the page currently being viewed. The paramater here is the destination
  console.log("\nYour snapshot is available in 'render.pdf'");
}

// Now actually load the page and give the pageLoaded function as a callback
page.open("https://www.google.com",pageLoaded);
