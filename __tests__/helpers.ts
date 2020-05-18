import { Prefixes } from '../src/types';
import { Quad } from 'n3';

const N3 = require('n3');

export const parseModel = async (ontology: string): Promise<any> => {
  try {
    const parser = new N3.Parser();

    // tslint:disable-next-line: promise-must-complete
    const { quads, prefixes = {} } = await new Promise(
      (resolve: Function, reject: Function) => {
        const quads = [];

        parser.parse(
          ontology,
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

    return { model, prefixes };
  } catch (error) {
    return { error };
  }
};
