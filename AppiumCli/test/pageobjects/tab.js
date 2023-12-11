class Tab {
  constructor(selector) {
    this.selector = selector;
  }

  get tabElement() {
    return $(this.selector);
  }
}
export default Tab;
