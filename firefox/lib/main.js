// Import the page-mod API
var pageMod = require("sdk/page-mod");
var self = require("sdk/self");
pageMod.PageMod({
  include: ["https://www.irctc.co.in/eticketing/loginHome.jsf"],
  contentScriptFile: self.data.url("irctc.js")
});