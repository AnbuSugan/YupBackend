const client = require("./connection.js");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.send({ message: "node app is running" });
});
client.connect();
app.get;

app.post("/createUser", (req, res) => {
  const yups = req.body;
  let insertQuery = `insert into yups(date,campaignTitle,specialElements,additionalSpotTextarea,firstName,lastName,phoneNumber,emailValid,verification,chooseMedia,chooseLength,voiceTalent,finalApproval)
                       values( '${yups.date}', '${yups.campaignTitle}','${yups.specialElements}','${yups.additionalSpotTextarea}','${yups.firstName}','${yups.lastName}','${yups.phoneNumber}','${yups.emailValid}','${yups.verification}','${yups.chooseMedia}','${yups.chooseLength}','${yups.voiceTalent}','${yups.finalApproval}')`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Insertion was successful");
    } else {
      console.log(err.message);
      res.status(500).send("Internal Server Error");
    }
  });
  client.end;
});

app.listen(3300, () => {
  console.log("Sever is now listening at port 3300");
});
