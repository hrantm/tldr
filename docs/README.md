## Scriblr

### Background

Taking notes during meetings and lectures in both tedious and time consuming. This mobile application will record long speeches, convert the speech to a text file and summarize the text file and turn it into a small manageable note. Users will be able to save their notes, and revisit them individually.

This will be a great tool for college students, business professionals as well as the hearing impaired.

Development of the features in this application will be guided by
[SMMRY](http://smmry.com/about) and
[WATSON](https://github.com/watson-developer-cloud/node-sdk)

### Functionality & MVP

With this application, users will be able to:

- [ ] Sign in/Log in,
- [ ] Record Audio,
- [ ] Convert recorded speech to text,
- [ ] Summarize large blocks of text into notes,
- [ ] Create, Read, Delete Notes

### Wireframes

![wireframes](images/flex-settings.png)

### Technologies & Technical Challenges

This mobile application will be implemented with JavaScript, Ruby, Rails, React Native, the Watson API and the SMMRY API


This extension will be implemented using the standard Chrome extension technology: JavaScript, HTML, and CSS.  In addition to the `manifest.json` and `package.json` files, there will be two scripts:

- `content.js`: will contain the logic for finding and recoloring elements in the DOM
- `options.js`: will contain the logic for changing the user's settings

There will also be two HTML files to display the content:

- `new_style.css`: the file containing the styling rules for recoloring
- `options.html`: the file that renders the Settings menu for the user

The primary technical challenges will be:

- Identifying all the colors used on the DOM elements,
- Determining which grey scale tone corresponds to each color -- this will be different depending on whether the user requires high contrast or not
- Determining which high-contrast colors should be used to replace the existing colors, when the extension is in high contrast color mode

The colors will be identified by mapping classes in the DOM to a variety of attributes in the CSS such as `color`, `background-color`, and perhaps others.  Going from color to grey scale will be done with a standard algorithm.  Going from color to high-contrast color will be more challenging: currently, I plan to utilize a subset of high-contrast colors and map the given colors via some distance algorithm to the best match for these colors.

### Group Members & Work Breakdown

Our group consists of two members, Munyo Frey and Ryan Hall.

Munyo's primary responsibilities will be:

- Researching & implementing the ability to locate and alter DOM elements
- Creating the functionality to identify all colors based on the CSS file
- Writing the algorithm to correctly identify high-contrast alternatives
- Creating the Chrome store page & marketing the app

Ryan's primary responsibilites will be:

- Researching and setting up the Chrome extension infrastructure
- Producing the new HTML file with new colors
- Creating the algorithm to correctly identify gray-scale alternatives
- Creating the Settings page
- Writing the repo's README, complete with screenshots and code snippets

### Implementation Timeline

**Day 1**: Get started on the infrastructure of the extension, following [this guide](https://developer.chrome.com/extensions/getstarted) from Chrome.  By the end of the day, we will have:

- A completed `package.json` (Ryan)
- A completed `manifest.json` (Ryan)
- The ability to locate and alter a DOM element by class (Munyo)

**Day 2**: Work on identifying the colors used in the DOM by class and other attributes, and create and render a new DOM with different colors.  By the end of the day, we will have:

- The ability to identify all colors (Munyo)
- A new HTML file that gets rendered in place of the current DOM, using different colors (Ryan)

**Day 3**: Dedicate this day to correctly replacing colors with their grey scale or high-contrast equivalents.  By the end of the day:

- Implement an algorithm for replacing colors with grey scale tones (Ryan)
- At least understand (and hopefully implement) and algorithm for replacing colors with high-contrast equivalents (Munyo)
- Render a new DOM that contains each of these color equivalents (Ryan)

**Day 4**: Create the settings page and connect the settings to the color change logic.  If time, create high-contrast grey scale and low-contrast algorithms as well.  By the end of the day:

- Fully implemented settings changes that re-render a differently colored DOM (Ryan)
- A detailed README (Ryan)
- A polished Chrome store page, sent to our networks to begin marketing/downloads (Munyo)
- If time, implement the final two features: normal color to low contrast and normal to high-contrast grey scale (Both)

**Day 5**: Create demo page for chrome extension. By the end of the day:
- Set up github pages (Ryan)
- Mock up wireframes for how the demo page will look (Both)
- Grab nice looking screenshots from the chrome extension (Munyo)
- Make a few gifs that shows off the key features of the chrome extension (Munyo)

### Plan for getting users and reviews
- Both Munyo and Ryan will each share with at least 20 friends and family and ask for good reviews
- Munyo will find an appropriate subreddit and make a post there to show off the chrome extension
- Ryan will reach out to http://www.colourblindawareness.org/ to share the chrome extension
