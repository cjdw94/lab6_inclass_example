const fs =  require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./note.js');

const titleOptions = {
    describe: 'Title of note',
    demand : true,
    alias : 't'
}

const bodyOptions = {
    describe: 'Body of a note',
    demand : true,
    alias : 'b'
}

const argv =  yargs

    .command('add','Add a new note',{
      title: titleOptions,
      body: bodyOptions
    })
    .command('list','List all notes')
    .command('read','Read a note',{
      title: titleOptions
    })
    .command('remove','Remove a Note',{
      title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];

if (command === 'add'){
    var note = notes.addNote(argv.title,argv.body);
    if (note){
      notes.logNote(note);                                //add a new note
    } else{
      console.log("Note already exists");
    }
} else if (command === 'list') {
  var AllNotes = notes.getAll();
  console.log(`Printing ${AllNotes.length} note(s).`);
  AllNotes.forEach((note)=>{                                //list all note(s)
    notes.logNote(note);
  });
}