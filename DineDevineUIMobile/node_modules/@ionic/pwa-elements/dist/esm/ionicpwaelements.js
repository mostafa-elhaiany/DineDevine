import { p as promiseResolve, b as bootstrapLazy } from './index-1c5c47b4.js';
export { s as setNonce } from './index-1c5c47b4.js';

/*
 Stencil Client Patch Browser v3.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
        // TODO(STENCIL-661): Remove code related to the dynamic import shim
        // TODO(STENCIL-663): Remove code related to deprecated `safari10` field.
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["pwa-camera-modal",[[1,"pwa-camera-modal",{"facingMode":[1,"facing-mode"],"present":[64],"dismiss":[64]}]]],["pwa-action-sheet",[[1,"pwa-action-sheet",{"header":[1],"cancelable":[4],"options":[16],"open":[32]}]]],["pwa-toast",[[1,"pwa-toast",{"message":[1],"duration":[2],"closing":[32]}]]],["pwa-camera",[[1,"pwa-camera",{"facingMode":[1,"facing-mode"],"handlePhoto":[16],"handleNoDeviceError":[16],"noDevicesText":[1,"no-devices-text"],"noDevicesButtonText":[1,"no-devices-button-text"],"photo":[32],"photoSrc":[32],"showShutterOverlay":[32],"flashIndex":[32],"hasCamera":[32],"rotation":[32],"deviceError":[32]}]]],["pwa-camera-modal-instance",[[1,"pwa-camera-modal-instance",{"facingMode":[1,"facing-mode"],"noDevicesText":[1,"no-devices-text"],"noDevicesButtonText":[1,"no-devices-button-text"]},[[16,"keyup","handleBackdropKeyUp"]]]]]], options);
});
