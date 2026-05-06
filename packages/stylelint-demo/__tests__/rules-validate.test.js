const assert = require('assert');
const stylelint = require('stylelint');
const path = require('path');

describe('test/rules-validate.test.js', () => {
  // 每一个it就是一个jest的小单元
  // 验证默认值的选项
  it('Validate default', async () => {
    const filePaths = [path.join(__dirname, './fixtures/index.css')];
    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),  //  配置stylelint规则的的路径
      files: filePaths, //  需要校验的文件路径
      fix: false, // 是否自动修复，默认为false
    });
    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length !== 0);
    }
  });

  it('Validate sass', async () => {
    const filePaths = [path.join(__dirname, './fixtures/sass-test.scss')];

    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });

    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length !== 0);
    }
  });

  it('Validate less', async () => {
    const filePaths = [path.join(__dirname, './fixtures/less-test.less')];

    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });

    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length !== 0);
    }
  });

  it('Validate css-module', async () => {
    const filePaths = [path.join(__dirname, './fixtures/css-module.scss')];

    const result = await stylelint.lint({
      configFile: path.join(__dirname, '../index.js'),
      files: filePaths,
      fix: false,
    });

    if (result && result.errored) {
      const filesResult = JSON.parse(result.output || '[]') || [];
      filesResult.forEach((fileResult) => {
        console.log(`========= ${filePaths} ==========`);
        console.log(fileResult.warnings);
      });

      assert.ok(filesResult.length === 0);
    }
  });
});
