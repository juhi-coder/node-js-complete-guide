const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      <body>
        <form action="/message" method="POST">
          <input type="text" name="message" />
          <button type="button"></button>
        </form>
      </body>
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString;
      const message = parseody.split("m")[1];
      fs.writeFileSync("message.txt", message);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  }
  res.setHeader("Content-type=text/html");
  res.write("<html>");
  res.write(
    <head>
      <titla>My First Page</titla>
    </head>
  );
  res.write(
    <body>
      <h1>Hello from my node.js server</h1>
    </body>
  );
  res.end();
};

//module.export=requestHandler;

module.exports = {
  handler: requestHandler,
  someText: "i love you janu",
};

// exports.handler=requestHandler;
// exports.someText="i lve you janu";

// module.exports.handler=requestHandler;
// module.exports.someText="i love you janu";
