import inquirer from "inquirer";
import qr from "qr-image"
import fs from "fs"


inquirer
  .prompt([
// since question is object, we have to use {}
// message key can be used to display what type of data user needs to insert
// name key can be used to store data which user insert that asked by message key
    {message:"Enter URL",name:"URL"}

  ])
  .then((answers) => {
    const url=answers.URL;
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream("qrcode.png"));
fs.writeFile("url.txt",url,((err)=>{
    if(err){
        console.log(err)
    }
    else{
        if(fs.writeFile==="url.txt"){
            console.log("file updated")
        }
        else{
            console.log("file created")

        }
    }
}))
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });