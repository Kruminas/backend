import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/antra_duombaze", {})
  .then(() => console.log("Pavyko prisijungti prie serverio"))
  .catch((error) => console.log("Nepavyko prisijungti prie serverio:", error));

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Privalo būti vardas"],
    minlength: [3, "Vardas negali būti trumpesnis nei 3 simboliai"],
    maxlength: [200, "Vardas per ilgas, negali būti daugiau nei 200 simbolių"],
  },
  last_name: {
    type: String,
    required: [true, "Pavardė privaloma"],
    minlength: [3, "Pavardė negali būti trumpesnė nei 3 simboliai"],
    maxlength: [200, "Pavardė per ilga, negali būti daugiau nei 200 simbolių"],
  },
  email: {
    type: String,
    required: [true, "El paštas privalomas"],
    minlength: [5, "El. pašto adresas negali būti trumpesnis nei 5 simboliai"],
    maxlength: [50, "El. pašto adresas negali būti ilgesnis nei 50 simbolių"],
    match: [/^\S+@\S+\.\S+$/, "El. pašto formatas neteisingas."],
  },
  password: {
    type: String,
    required: [true, "Slaptažodis privalomas"],
    minlength: [8, "Slaptažodis negali būti trumpesnis nei 8 simboliai"],
    maxlength: [16, "Slaptažodis negali būti ilgesnis nei 16 simbolių"],
    match: [/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/, "Slaptažodis turi tureti bent viena skaičių, vieną didžiąją, vieną mažąją raidę ir specialų simbolį."],
  },
});

const User = mongoose.model("User", userSchema);

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: "Sveikiname sėkmingai prisiregistravus platformoje”." });
  } catch (error) {
    res.status(500).json({ message: "Sveikiname nesėkmingai prisiregistravus platformoje”.", error: error.message });
  }
});

app.listen(3000, () => console.log("Server is running on port 3000"));
