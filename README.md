Game Selector
===============

A random game selector. Spin the wheel and pick a random game to play from your Steam library!

[A demo is available](http://uxvirtual.github.io/game-selector/index.html).

## Instructions

To update the list of games edit the `games` variable in the `<script>` tag at the bottom of `index.html`. Follow the
same format as the existing examples. Each game requires the following properties set:

*   `id` - the ID of the Steam game. This can be found by looking at the URL of the game on the Steam store. 
    e.g. for http://store.steampowered.com/app/17460/ the ID will be `17460`.
    
*   `title` - the title of the Steam game. This isn't displayed anywhere, however it makes it easier to identify games
    in the list.

*   `header` - the URL to the header image for the game. This can be found by right clicking and copying the URL to the
    game image on the Steam store page for the game. This image is typically on the right hand side and should be 
    460x216px in dimensions. These exact dimensions must be used in order for the game selector to function properly.
    
*   `url` - the URL to the game on the Steam store. e.g. http://store.steampowered.com/app/17460/.

To change the length of time the wheel will spin for, edit `spinLength` in `index.html`.

## Attribution

[Aidan Strickland (Forester)](https://soundcloud.com/aidan-strickland/) / slot machine music

[dobroide](https://www.freesound.org/people/dobroide/) / arcade ambient sound

[ecodios](https://www.freesound.org/people/ecodios/) / coin slot sounds

[kodack](https://www.freesound.org/people/kodack/) / arcade beep sound
