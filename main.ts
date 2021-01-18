while (true) {
    console.log("sound_level:" + input.soundLevel())
    if (input.lightLevel() > 20) {
        music.setVolume(100)
        music.playMelody("E A D G B E", 120)
    } else if (input.soundLevel()) {
        music.stopAllSounds()
    }
    
}
