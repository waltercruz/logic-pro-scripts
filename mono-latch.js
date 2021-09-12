
function HandleMIDI(e) {
    // Trace(e)
    if (e instanceof NoteOn && e.pitch != GetParameter('Unlatch Note')) {
        const notes = [...Array(128).keys()]
        notes.forEach(function (noteNumber) {
            f = new NoteOff();
            f.pitch = noteNumber;
            f.velocity = e.velocity;
            //Trace(f)
            f.send();
        })
        Trace(e)
        e.send();
    }
    if (e.pitch == GetParameter('Unlatch Note')) {
        const notes = [...Array(128).keys()]
        notes.forEach(function (noteNumber) {
            f = new NoteOff();
            f.pitch = noteNumber;
            f.velocity = e.velocity;
            //Trace(f)
            f.send();
        })
    }
    return;
}

var PluginParameters = [
    {
        name: 'Unlatch Note', type: 'lin',
        minValue: 0, maxValue: 127, numberOfSteps: 127, defaultValue: 56
    },
];
