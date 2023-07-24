const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { org_name, api_key } = require("./config.js");

const configuration = new Configuration({
  organization: org_name,
  apiKey: api_key,
});
const openai = new OpenAIApi(configuration);

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// middleware for moderation of speech used by user
app.use(async (req, res, next) => {
  const r = await check(req, res);
  if (r === true) {
    res.send(`Inappropriate Speech used`);
  } else {
    next();
  }
});

const check = async (req, res) => {
  let flag = false;
  await openai
    .createModeration({
      input: `${req.body.message}`,
    })
    .then((response) => {
      if (JSON.stringify(response.data.results[0].flagged) === `true`) {
        flag = true;
      }
    });
  return flag;
};

app.listen(3090, "0.0.0.0", () => {
  console.log(`server has started at port 3090`);
});

// this route would be used for general conversations where whole conversation would be send to give a context of conversation to the api we are hitting
app.post("/chat", async (req, res) => {
  const { message } = req.body;
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: `${message}` }],
    max_tokens: 2000,
    temperature: 0.5,
  });
  res.send(response.data.choices[0].message.content);
});

//for translations from one language to other
app.post("/translate", async (req, res) => {
  const { message, expected_lang } = req.body;
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Covert the text :${message} to ${expected_lang}`,
      },
    ],
    max_tokens: 1000,
    temperature: 0.2,
  });
  res.send(response.data.choices[0].message.content);
});

// to convert code from one language to other
app.post("/convert_code", async (req, res) => {
  const { message, expected_lang } = req.body;

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: `Covert the code :${message} to ${expected_lang}`,
      },
    ],
    max_tokens: 2000,
    temperature: 0.5,
  });
  res.send(response.data.choices[0].message.content);
});
