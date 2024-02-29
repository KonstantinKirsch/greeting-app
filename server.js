// Importiert das Express Framework in 
// die Konstante Express
const express = require("express");

// Portnummer fuer den Server wird hier festgelegt!
const PORT = process.env.PORT || 5500;

// Express Anwendung wird erstellt und in
// die Variable "app" importiert
let app = express();

// Alle Dateien die im Ordner "frontend" enthalten sind
// werden an den User 'ohne weiter Verarbeitung' weitergeleitet.
app.use(express.static('greeting-app'));


// Sobald Server gestartet ist, wird eine Meldeun
// Konsole ausgeben
app.listen(PORT, ()=> {
    console.log("Server auf Port $(PORT)");
});