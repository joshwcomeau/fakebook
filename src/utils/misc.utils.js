import pick from 'lodash.pick';
import values from 'lodash.values';
import flow from 'lodash.flow';


export const pickValues = flow(pick, values);
