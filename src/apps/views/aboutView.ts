import BaseView from './_baseView';

export default class AboutView extends BaseView {
  constructor(params: any) {
    super(params);
    console.log('LOG: Initialize AboutView');
  }

  beforeRender() {
    console.log("LOG: AboutView Before Render");
  }

  afterRender() {
    console.log("LOG: AboutView After Render");
  }

  eventsHash() {
    console.log("LOG: AboutView Events Hash");
  }
};
