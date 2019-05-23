# MyTravelSolution Styleguide

# Colour Palette
- <span style="color: #5800ff">**Primary Color**</span>: #5800ff;
- <span style="color: #b914cc">**Secondary Color**</span>: #b914cc;
- <span style="color: #444444">**Dark Grey**</span>: #444444;
- **White**: #ffffff;
- <span style="color: #e8e8e8">**Off-white**</span>: #e8e8e8;

# Fonts
## Font Families
- [Fira Sans](https://fonts.google.com/specimen/Fira+Sans)

## Sizes
- Extra Small: 13px
- Small: 14px

# CSS
## Class Naming Conventions
CSS classes will be named using the Block Element Modifier (BEM) naming conventions. 

- [CSS Naming Conventions That Will Save You Hours Of Debugging](https://medium.freecodecamp.org/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849)
- [react-bem-helper](https://www.npmjs.com/package/react-bem-helper)


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

## Global & Local Naming Conventions
Global CSS properties such as images and headings must use generic names such as `logo` or `title--white`.

CSS properties that are contextual must have their element name suffixed with their property i.e.: `hamburger-menu__container` or `mts_logo__logo--left`

## Section Padding
Each section will have a universal padding of `20px`.

## Variables
CSS variables declarations will be found in `App.css`. These will be variables applied globally throughout the application.