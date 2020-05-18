# gUFO to HTML

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/OntoUML/gufo2html/Node%20CI?style=flat-square)

Javascript library utility for transform gUFO files to HTML.

## Getting Start

```
npm install gufo2html --save

// yarn users
yarn add gufo2html
```

## Usage

```javascript
import { transformGUFO2HTML } from 'gufo2html';

transformGUFO2HTML(ttlStringModel, options)
```

### Options

```
baseIRI?: string;
  documentationProps?: {
    title?: string;
    description?: string[];
    customPartials?: {
      headContent?: string;
      styles?: string;
      head?: string;
      body?: string;
      generalInformation?: string;
      termsIndex?: string;
      classes?: string;
      relations?: string;
      attributes?: string;
    };
    theme?: DocTheme;
  };
  format?: string;
```

### Theme

```
colors?: {
  background?: string;
  border?: string;
  title?: string;
  text?: string;
};
shape?: {
  borderRadius?: string;
};
typography?: {
  fontFamily?: string;
  fontSize?: string;
  mobileFontSize?: string;
};
overrides?: {
  [key in keyof HTMLElementTagNameMap]?: CSS.Properties;
};
```

## About

If you are interested to know more, feel free to open an issue to provide feedback on the project or reach our team members for more specific cases:
 * [Claudenir M. Fonseca](https://github.com/claudenirmf)
 * [Tiago Prince Sales](https://github.com/tgoprince)
 * [Lucas Bassetti](https://github.com/LucasBassetti)
 * [Victor Viola](https://github.com/victorviola)

