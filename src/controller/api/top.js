const BaseRest = require('../rest.js');
const model = require('../../database/controller/hot_repositories')

module.exports = class extends BaseRest {
  async getAction(){
    let jsons = await model.getHot();
    this.ctx.success(jsons);
  }
  postAction(){
    this.ctx.success();
  }
  putAction(){
    this.ctx.success();
  }
  deleteAction(){
    this.ctx.success();
  }
};
