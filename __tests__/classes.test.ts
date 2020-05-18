import classesModel from './models/classes';
import { getClasses } from '../src/classes';
import { parseModel } from './helpers';

describe('Classes', () => {
  let classes;

  beforeAll(async () => {
    const { model, prefixes } = await parseModel(classesModel);
    classes = await getClasses(model, prefixes);

    console.log(classes);
  });

  it('should generate classes', () => {
    expect(classes).toHaveLength(1);
  });

  it('should have label "Area Owner"', () => {
    expect(classes[0].label).toBe('Area Owner');
  });
});
