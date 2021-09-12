
function HandleMIDI(e) {
    // Trace(e)
    if (e instanceof NoteOn) {
        const notes = [...Array(128).keys()]
        notes.forEach(function (noteNumber) {
            let f = new NoteOff();
            f.pitch = noteNumber;
            f.velocity = e.velocity;
            //Trace(f)
            f.send();
        })
        if (e.pitch != GetParameter('Unlatch Note')) {
            // Trace(e)
            e.send();
        }

    }
    return;
}

var PluginParameters = [
    {
        name: 'Unlatch Note', type: 'lin',
        minValue: 0, maxValue: 127, numberOfSteps: 127, defaultValue: 56
    },
];
