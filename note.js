
const fs =  require('fs');

var fetchNotes = () => {
  try {                          //if file won't exist
    var notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString);
  } catch(e){
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body) => {   
    var notes = fetchNotes();
    var note = {title,body}

    var duplicateNotes =  notes.filter((note) => { // to check if note already exists
      return note.title === title;
    });

    if (duplicateNotes.length === 0){
      notes.push(note);
      saveNotes(notes);
      return note
    }

  };
  var logNote = (note) => { 
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

  
module.exports = {
  addNote,logNote
};
  