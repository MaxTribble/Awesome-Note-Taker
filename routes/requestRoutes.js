const fs = require('fs')
const { v4: uuidv4 } = require('uuid');

function handle (app){
app.post('/api/notes', (req, res) => {
    let allNotes = fs.readFileSync('db/db.json');
    allNotes = JSON.parse(allNotes);
    const { title, text } = req.body;
  
    if (req.body) {
      const newNote = {
        title,
        text,
        id: uuidv4(),
      };
      
    allNotes.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(allNotes));
    console.log(allNotes)
    }
  });

  app.delete('/api/notes/:id', (req, res) => {
    // reading notes form db.json
    let allNotes = JSON.parse(fs.readFileSync('db/db.json'))
    // removing note with id
    let deleteNotes = allNotes.filter(item => item.id !== req.params.id);
    // Rewriting note to db.json
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
    
  })
};

  module.exports = handle