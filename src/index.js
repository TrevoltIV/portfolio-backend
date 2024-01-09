const express = require('express');
const { getCollection } = require('databased');


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api', async (req, res) => {
  const apiKey = req.query.apiKey;
  const method = req.query.method;

  if (apiKey === "thisbackendistoosimpleforanapikeythatmatters") {
    if (method === "getCollection") {
        console.log(await getCollection('db', 'projects'))
        res.json({ data: await getCollection('db', 'projects') });
    } else {
        res.json({ error: `Invalid method '${method}'`});
    }
  } else {
    res.json({ error: `Invalid API key`});
  }
});

app.listen(PORT);


// http://localhost:3000/api?method=getCollection&apiKey=thisbackendistoosimpleforanapikeythatmatters