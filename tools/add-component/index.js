/* eslint-disable no-console, no-use-before-define */
const path = require('path');
const fs = require('fs');
const changeCase = require('change-case');


function run(ComponentName) {
  if (!ComponentName) {
    throw new Error(`
      Please supply a component name!
      'npm run add-component -- YourComponentName'
    `);
  } else if (!changeCase.isUpperCase(ComponentName[0])) {
    throw new Error(`
      Custom React components need to be in PascalCase.
      You provided ${ComponentName}.

      Please capitalize the first letter:
      "${changeCase.upperCaseFirst(ComponentName)}"
    `);
  }

  const componentDirectory = path.join(
    __dirname,
    '../../src/components',
    ComponentName
  );
  createDirectory(componentDirectory);

  const className = changeCase.camelCase(ComponentName);

  // Create and write JS to file
  const componentPath = path.join(componentDirectory, 'index.js');
  const componentTemplate = buildJSTemplate(ComponentName, className);
  fs.writeFileSync(componentPath, componentTemplate);

  // Create and write inline styles to file
  const stylesPath = path.join(componentDirectory, 'styles.js');
  const stylesTemplate = buildStylesTemplate(ComponentName, className);
  fs.writeFileSync(stylesPath, stylesTemplate);

  // Create and write a test to file
  const testPath = path.join(
    componentDirectory,
    `index.test.js`
  );
  const testTemplate = buildTestTemplate(ComponentName);
  fs.writeFileSync(testPath, testTemplate);

  console.info(`Component ${ComponentName} successfully created!`);
  return true;
}


// Helper Methods
function createDirectory(componentDirectory) {
  try {
    fs.mkdirSync(componentDirectory);
  } catch (err) {
    throw new Error(`Sorry, it appears the component ${ComponentName} already exists!`);
  }

  return componentDirectory;
}

function buildJSTemplate(ComponentName, className) {
  // Not digging the break in indentation here,
  // but it's needed for the file to render correctly :(
  return `\
// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';

import styles from './styles';


const ${ComponentName} = () => {
  return (
    <div className={css(styles.${className})}>
      Your Component Here :)
    </div>
  );
};

${ComponentName}.propTypes = {

};

${ComponentName}.defaultProps = {

};

export default ${ComponentName};\n`;
}

function buildStylesTemplate(ComponentName, className) {
  return `\
import { StyleSheet } from 'aphrodite';

export default StyleSheet.create({
  ${className}: {

  },
});\n`;
}

function buildTestTemplate(ComponentName) {
  return `\
/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import ${ComponentName} from './index';

describe('${ComponentName}', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<${ComponentName} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});\n`;
}

const ComponentName = process.argv[2];
run(ComponentName);
