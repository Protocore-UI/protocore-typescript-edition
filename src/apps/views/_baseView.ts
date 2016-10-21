import * as $ from "jquery";

export default class BaseView {
  el: string;

  template: string;

  constructor(params: any) {
    console.log('LOG: Initialize BaseView');

    this.el = params.el || 'body';
    this.template = params.template || '<div></div>';
    this.render();
  }

  render() {
    console.log("LOG: Executed Baseview Render");
    $(this.el).html(this.template);
  }
};
