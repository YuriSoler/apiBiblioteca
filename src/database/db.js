import mongoose from "mongoose";

async function conexaoDB() {
  await mongoose.connect(
    "mongodb+srv://soler:mongodb020480@biblioteca.dqqv8lv.mongodb.net/"
  );
}

export default conexaoDB;
