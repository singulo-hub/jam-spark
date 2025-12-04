import { THEMES } from './data/themes.js';
import { GOALS } from './data/goals.js';
import { SETTINGS } from './data/settings.js';
import { WILDCARDS } from './data/wildcards.js';

// Utility: Fisher-Yates shuffle
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Idea Service - provides ideas by category
const IdeaService = {
    getIdeas(category) {
        switch (category) {
            case 'Themes': return [...THEMES];
            case 'Goals': return [...GOALS];
            case 'Settings': return [...SETTINGS];
            case 'Wildcards': return [...WILDCARDS];
            default: return [...GOALS];
        }
    }
};

// Get filter class based on category
function getFilterClass(category) {
    switch (category) {
        case 'Themes': return 'theme-filter';
        case 'Goals': return 'goal-filter';
        case 'Settings': return 'setting-filter';
        case 'Wildcards': return 'wildcard-filter';
        default: return 'goal-filter';
    }
}

// Get color class based on category
function getColorClass(category) {
    switch (category) {
        case 'Themes': return 'theme-color';
        case 'Goals': return 'goal-color';
        case 'Settings': return 'setting-color';
        case 'Wildcards': return 'wildcard-color';
        default: return 'goal-color';
    }
}

// Ideas Container class - manages a deck of ideas for a category
class IdeasContainer {
    constructor(containerElement) {
        this.container = containerElement;
        this.category = containerElement.dataset.category;
        this.amount = parseInt(containerElement.dataset.amount, 10);
        this.ideas = [];
        this.allIdeas = []; // Keep a copy of all ideas for searching
        this.activeIdeas = [];
        this.lockedIdeas = [];
        this.ideaElements = [];
        this.iconAnimationIntervals = [];
        
        this.listElement = containerElement.querySelector('.ideas-list');
        this.button = containerElement.querySelector('.ideas-button');
        
        this.init();
    }
    
    init() {
        // Load and shuffle ideas
        this.allIdeas = IdeaService.getIdeas(this.category);
        this.ideas = shuffle([...this.allIdeas]);
        
        // Initialize locked array
        this.lockedIdeas = new Array(this.amount).fill(false);
        
        // Draw initial ideas
        for (let i = 0; i < this.amount; i++) {
            this.drawIdea(i);
        }
        
        // Bind category button
        this.button.addEventListener('click', () => this.randomizeAll());
    }
    
    drawIdea(index) {
        const idea = this.ideas.pop();
        if (!idea) return;
        
        this.activeIdeas[index] = idea;
        this.lockedIdeas[index] = false;
        
        // Create or update idea element
        this.renderIdea(index);
    }
    
    renderIdea(index) {
        const idea = this.activeIdeas[index];
        if (!idea) return;
        
        const filterClass = getFilterClass(this.category);
        const colorClass = getColorClass(this.category);
        
        // Clear any existing animation interval for this index
        if (this.iconAnimationIntervals[index]) {
            clearInterval(this.iconAnimationIntervals[index]);
        }
        
        const li = document.createElement('li');
        li.className = 'idea-container';
        li.innerHTML = `
            <div class="content-container" style="outline-color: ${idea.ideaType.iconColor}">
                <button class="clear-button" aria-label="Clear and search">
                    <img src="libs/game-icons.net/lorc/cross-mark.svg" draggable="false" alt="Clear">
                </button>
                <button class="lock-button" aria-label="Lock idea">
                    <img class="lock-icon ${filterClass}" src="libs/game-icons.net/delapouite/padlock-open.svg" draggable="false" alt="Lock">
                </button>
                <button class="discard-button" aria-label="Get new idea">
                    <div class="icon-container">
                        <img class="icon ${filterClass} faded-in" src="libs/game-icons.net${idea.icons[0]}" draggable="false" alt="Idea icon">
                        <img class="icon ${filterClass} faded-out" src="libs/game-icons.net${idea.icons[1]}" draggable="false" alt="Idea icon">
                    </div>
                    <div class="text-container">
                        <h3 class="${colorClass}">${idea.ideaName.toUpperCase()}</h3>
                        <p>${idea.description.toUpperCase()}</p>
                    </div>
                </button>
            </div>
        `;
        
        // Setup event listeners
        const clearButton = li.querySelector('.clear-button');
        const lockButton = li.querySelector('.lock-button');
        const discardButton = li.querySelector('.discard-button');
        const lockIcon = li.querySelector('.lock-icon');
        const contentContainer = li.querySelector('.content-container');
        const icons = li.querySelectorAll('.icon');
        
        clearButton.addEventListener('click', () => {
            this.showSearch(index);
        });
        
        lockButton.addEventListener('click', () => {
            this.lockedIdeas[index] = !this.lockedIdeas[index];
            if (this.lockedIdeas[index]) {
                lockIcon.src = 'libs/game-icons.net/lorc/padlock.svg';
                lockIcon.classList.remove('unlocked');
                lockIcon.classList.add('locked');
                contentContainer.classList.add('locked-border');
            } else {
                lockIcon.src = 'libs/game-icons.net/delapouite/padlock-open.svg';
                lockIcon.classList.remove('locked');
                lockIcon.classList.add('unlocked');
                contentContainer.classList.remove('locked-border');
            }
        });
        
        discardButton.addEventListener('click', () => {
            if (!this.lockedIdeas[index]) {
                this.discardIdea(index);
            }
        });
        
        // Setup icon cycling animation
        let currentIconIndex = 0;
        let showingFirst = true;
        
        this.iconAnimationIntervals[index] = setInterval(() => {
            if (showingFirst) {
                icons[0].classList.remove('faded-in');
                icons[0].classList.add('faded-out');
                icons[1].classList.remove('faded-out');
                icons[1].classList.add('faded-in');
                
                // Preload next icon for first
                currentIconIndex = (currentIconIndex + 2) % idea.icons.length;
                setTimeout(() => {
                    icons[0].src = `libs/game-icons.net${idea.icons[currentIconIndex]}`;
                }, 2000);
            } else {
                icons[1].classList.remove('faded-in');
                icons[1].classList.add('faded-out');
                icons[0].classList.remove('faded-out');
                icons[0].classList.add('faded-in');
                
                // Preload next icon for second
                const nextIndex = (currentIconIndex + 1) % idea.icons.length;
                setTimeout(() => {
                    icons[1].src = `libs/game-icons.net${idea.icons[nextIndex]}`;
                }, 2000);
            }
            showingFirst = !showingFirst;
        }, 5000);
        
        // Replace or add element
        if (this.ideaElements[index]) {
            this.listElement.replaceChild(li, this.ideaElements[index]);
        } else {
            this.listElement.appendChild(li);
        }
        this.ideaElements[index] = li;
    }
    
    discardIdea(index) {
        const oldIdea = this.activeIdeas[index];
        if (oldIdea) {
            // Put card at bottom of deck
            this.ideas.unshift(oldIdea);
        }
        this.drawIdea(index);
    }
    
    randomizeAll() {
        this.ideas = shuffle(this.ideas);
        for (let i = 0; i < this.amount; i++) {
            if (!this.lockedIdeas[i]) {
                this.discardIdea(i);
            }
        }
    }
    
    showSearch(index) {
        const filterClass = getFilterClass(this.category);
        const colorClass = getColorClass(this.category);
        
        // Clear any existing animation interval for this index
        if (this.iconAnimationIntervals[index]) {
            clearInterval(this.iconAnimationIntervals[index]);
        }
        
        const li = document.createElement('li');
        li.className = 'idea-container';
        li.innerHTML = `
            <div class="search-container">
                <div class="search-input-wrapper">
                    <input type="text" class="search-input" placeholder="Search for an idea..." autofocus>
                    <button class="cancel-search-button" aria-label="Cancel search">
                        <img src="libs/game-icons.net/lorc/cross-mark.svg" draggable="false" alt="Cancel">
                    </button>
                </div>
                <div class="search-results"></div>
            </div>
        `;
        
        const searchInput = li.querySelector('.search-input');
        const cancelButton = li.querySelector('.cancel-search-button');
        const searchResults = li.querySelector('.search-results');
        
        // Show initial results (all ideas)
        this.updateSearchResults(searchResults, '', index, filterClass, colorClass);
        
        searchInput.addEventListener('input', (e) => {
            this.updateSearchResults(searchResults, e.target.value, index, filterClass, colorClass);
        });
        
        cancelButton.addEventListener('click', () => {
            this.renderIdea(index);
        });
        
        // Replace element
        if (this.ideaElements[index]) {
            this.listElement.replaceChild(li, this.ideaElements[index]);
        }
        this.ideaElements[index] = li;
        
        // Focus the input
        searchInput.focus();
    }
    
    updateSearchResults(container, query, index, filterClass, colorClass) {
        const normalizedQuery = query.toLowerCase().trim();
        
        // Filter ideas based on query
        const filteredIdeas = normalizedQuery === '' 
            ? this.allIdeas 
            : this.allIdeas.filter(idea => 
                idea.ideaName.toLowerCase().includes(normalizedQuery) ||
                idea.description.toLowerCase().includes(normalizedQuery)
            );
        
        // Limit to 10 results
        const limitedResults = filteredIdeas.slice(0, 10);
        
        container.innerHTML = '';
        
        if (limitedResults.length === 0) {
            container.innerHTML = '<div class="search-no-results">No ideas found</div>';
            return;
        }
        
        limitedResults.forEach(idea => {
            const button = document.createElement('button');
            button.className = 'search-result-item';
            button.innerHTML = `
                <img class="${filterClass}" src="libs/game-icons.net${idea.icons[0]}" draggable="false" alt="Idea icon">
                <span class="${colorClass}">${idea.ideaName.toUpperCase()}</span>
            `;
            button.addEventListener('click', () => {
                this.selectIdea(index, idea);
            });
            container.appendChild(button);
        });
    }
    
    selectIdea(index, idea) {
        // Remove the selected idea from the deck if it's there
        const deckIndex = this.ideas.findIndex(i => i.ideaName === idea.ideaName);
        if (deckIndex !== -1) {
            this.ideas.splice(deckIndex, 1);
        }
        
        // Put the old active idea back in the deck if there was one
        const oldIdea = this.activeIdeas[index];
        if (oldIdea && oldIdea.ideaName !== idea.ideaName) {
            this.ideas.unshift(oldIdea);
        }
        
        // Set the selected idea as active
        this.activeIdeas[index] = idea;
        this.lockedIdeas[index] = false;
        
        // Render the idea
        this.renderIdea(index);
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all idea containers
    const containers = document.querySelectorAll('.ideas-container');
    const ideasContainers = Array.from(containers).map(el => new IdeasContainer(el));
    
    // Setup randomize all button
    const randomizeAllButton = document.getElementById('randomize-all');
    randomizeAllButton.addEventListener('click', () => {
        ideasContainers.forEach(container => container.randomizeAll());
    });
});
