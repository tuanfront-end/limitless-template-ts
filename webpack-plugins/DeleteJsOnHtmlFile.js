const fs = require("fs");
const path = require("path");
class DeleteJsOnHtmlFile {}
class DeleteJsOnHtmlFile3 {
  constructor(opt) {
    console.log(888888888);

    const defaultOpt = {};
    this.opts = { ...defaultOpt, ...opt };
    this._handleAfterEmit = this._handleAfterEmit.bind(this);
  }

  _handleAfterEmit(conpilation, callback) {
    console.log(9999999);
    // const { filename, pathChange } = this.opts;
    const file = path.resolve(__dirname, "../", "build/index.html");
    const content = fs.readFileSync(file, "utf-8");
    const newContent = content.replace(`p="/"`, `p='xxxxxxx'`);
    fs.writeFileSync(file, newContent);
    callback();
  }

  apply(compiler) {
    compiler.plugin("after-emit", this._handleAfterEmit);
  }
}

module.exports = DeleteJsOnHtmlFile;
