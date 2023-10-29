'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d7f36e37.js');

const toastCss = ":host{position:fixed;bottom:20px;left:0;right:0;display:-ms-flexbox;display:flex;opacity:0}:host(.in){-webkit-transition:opacity 300ms;transition:opacity 300ms;opacity:1}:host(.out){-webkit-transition:opacity 1s;transition:opacity 1s;opacity:0}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.toast{font-family:-apple-system, system-ui, \"Helvetica Neue\", Roboto, sans-serif;background-color:#eee;color:black;border-radius:5px;padding:10px 15px;font-size:14px;font-weight:500;-webkit-box-shadow:0px 1px 2px rgba(0, 0, 0, 0.20);box-shadow:0px 1px 2px rgba(0, 0, 0, 0.20)}";

const PWAToast = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.message = undefined;
    this.duration = 2000;
    this.closing = null;
  }
  hostData() {
    const classes = {
      out: !!this.closing
    };
    if (this.closing !== null) {
      classes['in'] = !this.closing;
    }
    return {
      class: classes
    };
  }
  componentDidLoad() {
    setTimeout(() => {
      this.closing = false;
    });
    setTimeout(() => {
      this.close();
    }, this.duration);
  }
  close() {
    this.closing = true;
    setTimeout(() => {
      this.el.parentNode.removeChild(this.el);
    }, 1000);
  }
  __stencil_render() {
    return (index.h("div", { class: "wrapper" }, index.h("div", { class: "toast" }, this.message)));
  }
  get el() { return index.getElement(this); }
  render() { return index.h(index.Host, this.hostData(), this.__stencil_render()); }
};
PWAToast.style = toastCss;

exports.pwa_toast = PWAToast;
