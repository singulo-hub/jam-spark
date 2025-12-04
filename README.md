# Jam Spark

A game idea generator to spark creativity for game jams!

## About

Jam Spark displays randomizable "idea cards" across four categories to help game developers brainstorm unique game concepts:

- **Themes**: How a player's goals tie into broader narrative themes
- **Goals**: Clear direction for the player
- **Settings**: Features of the surrounding world (generates two for interesting combinations)
- **Wildcards**: Special modifiers inspired by the [Godot Wild Jam](https://godotwildjam.com/)

I decided to generate two settings at a time because I kept getting interesting combinations you don't normally see, which allowed my creative mind to rationalize why medieval and modern ideas might belong together. Renaissance fair, anyone?

## How to Use

1. **Click the title** to randomize all categories at once
2. **Click a category header** to randomize just that category
3. **Click an individual idea** to swap it for a new one
4. **Click the lock icon** to keep ideas you like

## Running Locally

This is a vanilla JavaScript project - no build step required. Just serve the files with any static server.

I like to use the Live Server extension in VS Code. It'll open up http://localhost:5500/

## History

Initially this project was in Godot 3.5.1 but I was having trouble getting the font scaling to work right at smaller resolutions. It was then rebuilt in Angular, and later converted to vanilla JavaScript for simplicity.

For the overall layout, I was inspired by [monochroma380's Game Idea Generator](https://monochroma380.itch.io/game-idea-generator).

## Credits

- Icons by many contributors on [Game-icons.net](https://game-icons.net/) (CC BY 3.0)
- Fonts by [jeti on dafont.com](https://www.dafont.com/jeti.d1589)

## License

MIT
