import { Quad } from 'n3';
import { DocOptions, Prefixes } from './types';
import { getClasses } from './classes';
import { getRelations } from './relations';
import { getAttributes } from './attributes';
import defaultTheme, { generateOverrideStyles } from './theme';
import { getHBSTemplate } from './hbs_helpers';
import { getPrefixList } from './helpers';

const N3 = require('n3');

type ReturnProps = {
  html: string;
  prefixes: Prefixes;
  error?: string;
}

export const transformGUFO2HTML = async (
  gufoStringFile: string,
  options?: DocOptions,
): Promise<ReturnProps> => {
  const { baseIRI, format, documentationProps } = options || {};
  const { title = 'Ontology', description = '', theme: customTheme = {} } =
    documentationProps || {};

  try {
    const parser = new N3.Parser({ baseIRI, format });

    // tslint:disable-next-line: promise-must-complete
    const { quads, prefixes = {} } = await new Promise(
      (resolve: Function, reject: Function) => {
        const quads = [];

        parser.parse(
          gufoStringFile,
          async (error: string, quad: Quad, prefix: Prefixes) => {
            if (error) {
              reject(error);
            } else if (quad) {
              quads.push(quad);
            } else if (prefix) {
              const prefixes = JSON.parse(JSON.stringify(prefix));

              resolve({ quads, prefixes });
            }
          },
        );
      },
    );

    const model = await new N3.Store(quads);

    // === GENERATE ONTOLOGY ELEMENTS ===

    const theme = { ...defaultTheme, ...customTheme };
    const classes = getClasses(model, prefixes);
    const relations = getRelations(model, prefixes);
    const attributes = getAttributes(model, prefixes);
    const prefixList = getPrefixList(prefixes);
    const styles = generateOverrideStyles(theme.overrides);
    const namespace = baseIRI;

    // === GENERATE TEMPLATE ===

    const template = getHBSTemplate(options);

    const html = await template({
      title,
      description,
      namespace,
      prefixList,
      classes,
      relations,
      attributes,
      styles,
      theme,
    });

    return { html, prefixes };
  } catch (error) {
    return { html: null, prefixes: null, error };
  }
};
