import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors())

app.get("/", (req, res) => {
    const response = {
        email: "oluwaseun.beicks@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: 
        "https://github.com/Oluwaseunoa/hng12-backend-01"
    }
    res.status(200).json(response)
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});