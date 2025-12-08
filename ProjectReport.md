# Project Report

Repo: https://github.com/blanchard789/blanchard789.github.io
Site: https://blanchard789.github.io/

### 11/23/25:

- Created and pushed the following files

```
assets/
    with some icon files for previous projects
scripts/
    main.js
styles/
    styles.css
index.html
README.md
ProjectReport.md
```

Mostly just trying to get the repo and project setup. Assets will be a folder for image files needed for the website. Scripts will be a folder for any eventual JavaScript files. Styles will be a folder for any cascading style sheets used in this website. Index.html is the main page for the website. ProjectReport.md will be for required class updates such as this one.

- Created prototype nav bar

Copied nav bar from class homework exercise. I also modified it a bit, including adding my own colors. I will need to go back later and work on it some more, but it's a good enough starting point.

### 11/24/25

- Created section elements for all 4 required sections. Set up some early css formatting for them as well.

- Updated nav bar to support smaller screens. On mobile and tablet screens nav buttons are replaced with selection box to save space, using media queries.

- Started add some info the created section elements.

### 11/27/25

- Added more info to required sections. Such as employment and education info.

- Further refined CSS formatting for required information sections. Such as adding borders and changing some rows to columns for better use of space and formatting.

### 11/28/2025

- Further refined CSS formatting for required information sections. Such as recoloring borders and background color for better contrast and aesthetics.

- Added a basic footer, will need to further refine later as it has some padding issues. Includes a JS function to update copyright year automatically.

- Started grid element for projects section. Uses a grid-container class with grid-item class as child elements. Allows for a n x 3 table of project items, each project item gets a title, image, description, optional field-set for featured info, and code source button.

## 11/29/2025

- Refined grid element to have better formatting. Main goal was to get everything to be spaced nicely and for colors to have better contrast.

## 12/4/2025

- Created @media queries for smaller screen devices. Primarily just wanted to make sure things like containers and text scaled in a nice way when the screen size changes. For tablet screen ratios, I have the grid go down to two columns to save space, and 1 column for mobile ratios. I also made the section containers for the site slightly larger for smaller screens than desktop to make better use of limited screen real estate.

- Started contact form section using Web3Forms. Required basic starter code was copied from https://web3forms.com/ but was modified to fit formatting and style of site.

- Revised nav bar to use better formatting. Also fixed the mobile nav menu to work better.

## 12/6/2025

- Further formatted contact form to match site design and provide better user cues. Also added it to @media queries to switch it from being in columns to being in rows when a smaller device is visiting the site.

- Added a section for other contact info, with button links. Such as GitHub and LinkedIn pages.

- I created a clickable crow icon. Using JS it generates a random number and there is 5 responses it can result in. When a response is generated the text of it will be displayed above the crow icon. Most of the responses are just hard coded Caws (because it is a crow), but there is also one that returns the day of the week. I referenced information about the Date and getDay() functions from https://www.w3schools.com/jsref/jsref_getday.asp

## 12/7/2025

! This commit was not included in the video. !

- Added border-radius to more elements. Wanted the site to feel less boxy.

- Replaced a lot of the white backgrounds with a light purple/bluish color.

- Fixed the formatting of the crow. It had a huge hitbox before, so that is fixed now.

- Condensed a bunch of redundant formatting. Makes it easier to read and navigate, but also allows site to be more quickly adpated since they share the same parent now.

- Condensed colors down to global variables and combined any sections that used the same color scheme into the same parent. Like the above line this makes it easier to just swap out the global colors and have the site auto apply it for you.

## Before Every Commit and Push

- Ran the Prettier code formatter, this was done automatically on every save.

- Tested site with Live Server in VS Code as I developed the site. Made it easy to visually verify everything looked right.

- I ran WAVE and resolved any alerts, errors, or contrast errors. It's a nice tool because sometimes you miss an alt text or two. Contrast wasn’t usually an issue since I kept the same color palette the whole time.

- Ran a screen reader on the whole site. It was helpful to make sure alt text and labels were being read correctly. I wasn't really trying to make the site audibly accessible per say though, but after experiencing some of the faults and omissions on major sites we reviewed in the class, I thought it would be nice to at least try to make sure there was some audio cues.
