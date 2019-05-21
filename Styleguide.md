# MyTravelSolution Styleguide

# Fonts

- [Fira Sans](https://fonts.google.com/specimen/Fira+Sans)

# CSS

## Naming

CSS classes will be named using the Block Element Modifier (BEM) naming conventions. (Source)[https://medium.freecodecamp.org/css-naming-conventions-that-will-save-you-hours-of-debugging-35cea737d849]

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
This would includes sizes, colours and other properties that could transform an element.
```css
.button--blue {

}
```


## Page Margins

Each page will have a universal margin of `20px`.

# Imports

## Images

All images will be exported and indexed as a single object per folder. 

Images will be imported and used as such:
```javascript
import logos from '../../logos'

<img src={logos.logo_name} alt="Main Logo" />
```