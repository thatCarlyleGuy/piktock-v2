// const path = require('path');

module.exports = {
  components: 'src/components/**/[A-Z]*.js',
  getExampleFilename(componentPath) {
    // const parsed = path.parse(componentPath);
    // const exampleDir = path.join(parsed.dir, 'examples');
    // console.log('HEREER', path.join(exampleDir, `${parsed.name}.examples.md`));
    // return path.join(exampleDir, `${parsed.name}.examples.md`);
    console.log('HERER', componentPath.replace(/\.js?$/, '.md'));
    return componentPath.replace(/\.js?$/, '.md');
  },
};
