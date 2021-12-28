const sound = new Howl({
    src: '/assets/pianoNotes.mp3',
    sprite: {
        'c': [0, 6003],
        'c_sharp': [6003, 12003 - 6003,],
        'd': [12003, 18003 - 12003],
        'd_sharp': [18003, 24003 - 18003],
        'e': [24003, 30003 - 24003],
        'f': [30003, 36003 - 30003],
        'f_sharp': [36003, 42003 - 36003],
        'g': [42003, 48003 - 42003],
        'g_sharp': [48003, 54003 - 48003],
        'a': [54003, 60003 - 54003],
        'a_sharp': [60003, 66003 - 60003],
        'b': [66003, 72003 - 66003],
    }
})

const keys = document.querySelectorAll('.white-key, .black-key')

keys.forEach(key => {
    key.addEventListener('click', () => {
        sound.play(key.getAttribute('id'))
    })
})