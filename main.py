while True:
    print("sound_level:" + input.sound_level())
    if input.light_level() > 20:
        music.set_volume(100)
        music.play_melody("E A D G B E", 120)
    elif input.sound_level():
        music.stop_all_sounds()
    

