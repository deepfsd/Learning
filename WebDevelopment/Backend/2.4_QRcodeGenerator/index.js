import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {"message": "Enter the URL: ",
     "name": "URL"}
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_png = qr.image(url);
    qr_png.pipe(fs.createWriteStream("QR.png"))
    fs.writeFile("URL.txt", url , (err)=>
    {
        if (err) throw err;
        console.log("File saved successfuly")
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

