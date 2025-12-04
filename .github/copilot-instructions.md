# Copilot Instructions for Jam Spark

## Project Overview
Jam Spark is a **game idea generator** built with vanilla JavaScript, HTML, and CSS. It displays randomizable "idea cards" across four categories (Themes, Goals, Settings, Wildcards) to spark game jam creativity. Hosted on GitHub Pages.

## Architecture

### Core Structure
```
index.html          → Main HTML layout
styles.css          → All styles
app.js              → Main application logic (IdeasContainer class, IdeaService)
data/               → Static idea data files (ES modules)
libs/               → Third-party assets (fonts, icons)
```

### Key Components
- **IdeasContainer class** (`app.js`): Manages a deck of ideas for a single category (shuffle, draw, lock, discard)
- **IdeaService object** (`app.js`): Provides idea arrays by category name
- **Icon cycling**: CSS transitions with `faded-in`/`faded-out` classes, managed by `setInterval`

### Data Structure
Each idea object has:
```javascript
{
    ideaName: string,
    description: string,
    ideaType: { typeName, description, backgroundColor, iconColor },
    icons: string[]  // Array of 5 SVG paths
}
```

### Data Files (data/)
ES module exports with idea arrays:
- `goals.js`, `themes.js`, `settings.js`, `wildcards.js` - Each contains 25-100 idea entries
- Icons reference SVG paths under `libs/game-icons.net/{artist}/`

## Development

### Running Locally
Serve with any static file server (requires ES modules):
```bash
npx serve .              # Using serve
python -m http.server    # Using Python
```

### No Build Required
This is a vanilla JS project - no compilation or bundling needed.

## Conventions

### Styling
- **Plain CSS** in `styles.css`
- Color filters per category: `.theme-filter`, `.goal-filter`, `.setting-filter`, `.wildcard-filter`
- Color classes for text: `.theme-color`, `.goal-color`, `.setting-color`, `.wildcard-color`
- Custom fonts: `enter-command` family from `libs/dafonts.com/`

### Adding New Ideas
1. Add entry to appropriate data file (`data/{category}.js`)
2. Follow existing structure: `ideaName`, `description`, `ideaType` (import from same file), `icons` array
3. Icons: 5 SVG paths from `libs/game-icons.net/` (format: `'/artist/icon-name.svg'`)

### Adding New Category
1. Create data file in `data/` with exported type object and ideas array
2. Import in `app.js` and add case to `IdeaService.getIdeas()`
3. Add filter and color classes to `styles.css`
4. Add new container element in `index.html` with `data-category` and `data-amount` attributes

## Assets
- Icons: `libs/game-icons.net/` organized by artist (CC BY 3.0 licensed)
- Fonts: `libs/dafonts.com/` (EnterCommand family)