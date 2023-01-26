const path = require('path');

function pageRender (app) {app.get('/notes', (req, res) => {
res.sendFile(path.join(__dirname, '../public/notes.html'))
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
  });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});}

module.exports = pageRender