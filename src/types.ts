
export type DocElement = {
  comment?: string;
  label?: string;
  name: string;
  prefixName: string;
  prefix: string;
  uri: string;
};

export type DocRelation = DocElement & {
  domain: DocElement;
  range: DocElement;
};

export type DocClass = DocElement & {
  disjointWith: DocElement[];
  isDomainOf: DocElement[];
  isRangeOf: DocElement[];
  supertypes: DocElement[];
  subtypes: DocElement[];
  stereotypes: DocElement[];
};

export type DocTheme = {
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
    [key in keyof HTMLElementTagNameMap]?: import('csstype').Properties;
  };
};

export type DocOptions = {
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
  format?: 'Turtle' | 'N-Triples';
}

export type Prefixes = { [key: string]: string };