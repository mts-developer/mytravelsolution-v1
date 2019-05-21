# MyTravelSolution Styleguide

# Colour Palette
- <span style="color: #5800ff">**Primary Color**</span>: #5800ff;
- <span style="color: #b914cc">**Secondary Color**</span>: #b914cc;
- **White**: #ffffff;
- <span style="color: #e8e8e8">**Off-white**</span>: #e8e8e8;

# Fonts
## Font Families
- [Fira Sans](https://fonts.google.com/specimen/Fira+Sans)

## Sizes

Small: 14px

# CSS
## Naming
CSS classes will be named using the Block Element Modifier (BEM) naming conventions. [Source](https://medium.freecodecamp.org/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849)

### Blocks
The primary component. 
```css
.button {

}
```

### Elements
Child components usually nested within a block would be declared as such.
```css
.button__label {

}
```

### Modifiers
Modifiers includes sizes, colours and other properties that could transform an element.
```css
.button--blue {

}
```

## Section Margins
Each section will have a universal margin of `20px`.

## Variables
CSS variables declarations will be found in `App.css`. These will be variables applied globally throughout the application.