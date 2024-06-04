import mongoose from "mongoose";
import app from "./app";
import config from "./config"; 


async function main(){
  try {
    await mongoose.connect(config.mongo_url as string)

    app.listen(config.port, () =>{
        console.log(`App is listening on port: ${config.port}`);
    })
  } catch (error) {
    console.log({
        message: "An error is going on server",
        error
    });
  }
}


main();