// Import the page-mod API
var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
  include: ["https://www.irctc.co.in/eticketing/loginHome.jsf"],
  contentScriptFile: data.url("irctc.js")
});
