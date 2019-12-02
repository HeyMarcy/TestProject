# Test Project
This project was built using [Parcel](https://parceljs.org/) and [TailwindCSS](https://tailwindcss.com/ together.

It's using `postcss-cli` to watch Tailwind's config file.

## Usage

Just fork this repository, run `yarn` and you should be ready to go.

- **Development:**
  `yarn start` will run a development server with hot reloading at <localhost:1234>
- **Production:**
  `yarn build` will bundle everything up on your `/dist` folder

## Intent and To Dos:
There are four sections that aren't included — the footer, logo section, the "It works..." section, and the second-to-last 'legos' section.

There are probably many formatting issues. I seem to be having a conflict with 'Prettier'.


### Overall - To-Do:
- Incorporate ScrollMagic to transition between sections.
- Check and adjust vertical rhythm (spacing).
- Clean up file structure.
- Check for no javascipt (graceful degredation), and a11y.

### Hero Section - To-Do:
Hero Part One: 
- Stagger columns, bring in any contained icons, adjust timing,
- Animate black curved lines to 'draw' in by animating the stroke's dashed property or by using 'Draw SVG' plugin.

Hero Part Two: 
- Trigger 'lines' from hero graphic to stagger in. 
- Create gsap timeline to grap lines above a certain index, and have the. Animate the x and y coorinates randomly but constrained within boundaries that corrolate to the dimensions of the 'container' graphic. 
- Refactor the four circle graphics - control background and line height properties with css/js

Section Four (Legos) NOT INCLUDED: 
- create single svg of lego
- place instances that cycle through the four colors using 'currentColor'
- create function to add instances on-click event
- animate each section to spin on-click event

Section Five: 
- graphic one: fix anim trigger 
- graphic two: create animation (Morph SVG plugin?) 
- graphic three: layout adjustment needed? Not enough room for requested animation. 
- Adjust vertical spacing. 


Section Six: 
- Create Logos svg with strokes 
- Animate strokes

Section Eight: 
- Utilize svg from section four.
- Place instances using x & y offsets and z-index.

Footer: 
- Create footer
