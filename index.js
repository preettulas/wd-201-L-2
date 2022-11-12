const http = require("http");
const fs = require("fs");
const args = require('minimist')(process.argv.slice(2));

let home_Content = "";
let project_Content = "";
let registration_Content = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  home_Content = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  project_Content = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registration_Content = registration;
});

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  http
  .createServer((request, response) => {
    let url = request.url;
    response.writeHeader(200, { "Content-Type": "text/html" });
    switch (url) {
      case "/project":
        response.write(project_Content);
        response.end();
        break;
      case "/registration":
        response.write(registration_Content);
        response.end();
        break;
      default:
        response.write(home_Content);
        response.end();
        break;
    }
  })
  .listen(args.port);
});
