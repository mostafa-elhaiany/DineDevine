'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d7f36e37.js');

const cameraModalInstanceCss = ":host{z-index:1000;position:fixed;top:0;left:0;width:100%;height:100%;display:-ms-flexbox;display:flex;contain:strict;--inset-width:600px;--inset-height:600px}.wrapper{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0, 0, 0, 0.15)}.content{-webkit-box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);box-shadow:0px 0px 5px rgba(0, 0, 0, 0.2);width:var(--inset-width);height:var(--inset-height);max-height:100%}@media only screen and (max-width: 600px){.content{width:100%;height:100%}}";

const PWACameraModal = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.onPhoto = index.createEvent(this, "onPhoto", 7);
    this.noDeviceError = index.createEvent(this, "noDeviceError", 7);
    this.handlePhoto = async (photo) => {
      this.onPhoto.emit(photo);
    };
    this.handleNoDeviceError = async (photo) => {
      this.noDeviceError.emit(photo);
    };
    this.facingMode = 'user';
    this.noDevicesText = 'No camera found';
    this.noDevicesButtonText = 'Choose image';
  }
  handleBackdropClick(e) {
    if (e.target !== this.el) {
      this.onPhoto.emit(null);
    }
  }
  handleComponentClick(e) {
    e.stopPropagation();
  }
  handleBackdropKeyUp(e) {
    if (e.key === "Escape") {
      this.onPhoto.emit(null);
    }
  }
  render() {
    return (index.h("div", { class: "wrapper", onClick: e => this.handleBackdropClick(e) }, index.h("div", { class: "content" }, index.h("pwa-camera", { onClick: e => this.handleComponentClick(e), facingMode: this.facingMode, handlePhoto: this.handlePhoto, handleNoDeviceError: this.handleNoDeviceError, noDevicesButtonText: this.noDevicesButtonText, noDevicesText: this.noDevicesText }))));
  }
  get el() { return index.getElement(this); }
};
PWACameraModal.style = cameraModalInstanceCss;

exports.pwa_camera_modal_instance = PWACameraModal;
