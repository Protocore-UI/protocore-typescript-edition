import BaseView from './_baseView';

export default class HomeView extends BaseView {
  constructor(params: any) {
    super(params);
    console.log('LOG: Initialize HomeView');
  }

  beforeRender() {
    console.log("LOG: HomeView Before Render");
  }

  afterRender() {
    console.log("LOG: HomeView After Render");
  }

  eventsHash() {
    console.log("LOG: HomeView Events Hash");
  }
};
