// Super simple script that goes to google.com and renders a pdf of the page at "render.pdf"

var page = require("webpage").create(); // Load the external page utility

// After we open our page, the following function will be called
function pageLoaded(){
  
  page.render("render.pdf"); // Takes a snapshot of the page currently being viewed. The paramater here is the destination
  console.log("\nYour snapshot is available in 'render.pdf'");
  
  // Instead of just rendering a pdf, you can extract specific text data with the following
  var r = page.evaluate(function(){	// again another callback that is injected in the page
      // Code in here is executed against the HTML of the page
      return $(".pl a")[0].innerHTML;
  });
  console.log("Result: "+r);
  
  phantom.exit(); // Nothing to do here! Terminate phantom (it doesn't assume you're done, unlike nodejs)
}

// Now actually load the page and give the pageLoaded function as a callback
page.open("https://detroit.craigslist.org/search/apa",pageLoaded);
