// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"4wHLC":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = "localhost";
var HMR_PORT = 1234;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "19f253ce8d73d851";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c3914215b448807c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8wJRy":[function(require,module,exports,__globalThis) {
var _checkClipboardOnClick = require("@actions/popup/checkClipboardOnClick");
var _displayGeneratedComment = require("@actions/popup/displayGeneratedComment");
// FIXME: is this run-time event?
chrome.storage.local.get("generatedComment", (data)=>{
    if (data.generatedComment) (0, _displayGeneratedComment.displayGeneratedComment)(data.generatedComment);
});
function processClipboard() {
    // 1- detect when button is clicked
    console.log("processing clipboard");
    let button = document.getElementById("process-clipboard");
    button?.addEventListener("click", (0, _checkClipboardOnClick.checkClipboardOnClick));
}
document.addEventListener("DOMContentLoaded", processClipboard);

},{"@actions/popup/checkClipboardOnClick":"69l5Z","@actions/popup/displayGeneratedComment":"3QKBf"}],"69l5Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkClipboardOnClick", ()=>checkClipboardOnClick);
let lastClipboard = "";
function isLinkedInPostUrl(url) {
    return /^https:\/\/www\.linkedin\.com\/posts\//.test(url.trim());
}
async function checkClipboardOnClick() {
    console.log("clickboard checking");
    try {
        const text = await navigator.clipboard.readText();
        if (text && text !== lastClipboard && isLinkedInPostUrl(text)) {
            lastClipboard = text;
            console.log("\uD83D\uDCCB Copied LinkedIn Post URL:", text);
            chrome.runtime.sendMessage({
                type: "OPEN_POST_TAB",
                url: text
            });
        }
    } catch (err) {
        console.warn("Clipboard access error:", err);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hR5Gi"}],"hR5Gi":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"3QKBf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "displayGeneratedComment", ()=>displayGeneratedComment);
function displayGeneratedComment(comment) {
    const commentBox = document.getElementById("comment-box");
    const copyButton = document.getElementById("copy-btn");
    if (commentBox && copyButton) {
        commentBox.value = comment;
        copyButton.disabled = false;
        copyButton.onclick = async ()=>{
            try {
                await navigator.clipboard.writeText(commentBox.value);
                copyButton.innerText = "Copied!";
                commentBox.value = "";
                await chrome.storage.local.set({
                    generatedComment: ""
                });
                setTimeout(()=>copyButton.innerText = "Copy Comment", 1500);
            } catch (err) {
                console.error("\u274C Failed to copy:", err);
            }
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"hR5Gi"}]},["4wHLC","8wJRy"], "8wJRy", "parcelRequire94c2", {})

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFdBQVc7QUFBWSxJQUFJLFdBQVc7QUFBSyxJQUFJLGtCQUFrQjtBQUFLLElBQUksYUFBYTtBQUFNLElBQUksZUFBZTtBQUFtQixJQUFJLGNBQWM7QUFBTSxPQUFPLE1BQU0sQ0FBQyxhQUFhLEdBQUc7QUFBbUI7QUFFaE4sK0tBQStLLEdBQy9LOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDQSxHQUNBLElBQUksYUFBYTtBQUNqQixJQUFJLFlBQVksT0FBTyxNQUFNLENBQUMsTUFBTTtBQUNwQyxTQUFTLE9BQU8sVUFBVTtJQUN4QixVQUFVLElBQUksQ0FBQyxJQUFJLEVBQUU7SUFDckIsSUFBSSxDQUFDLEdBQUcsR0FBRztRQUNULE1BQU0sT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDdkMsa0JBQWtCLEVBQUU7UUFDcEIsbUJBQW1CLEVBQUU7UUFDckIsUUFBUSxTQUFVLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLFlBQWE7UUFDaEQ7UUFDQSxTQUFTLFNBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1FBQzlCO0lBQ0Y7SUFDQSxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHO0FBQ3RDO0FBQ0EsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFHO0FBQ3ZCLE9BQU8sTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDO0FBQ3pCLElBQUksY0FBYywwQkFBMEIsS0FDMUMsZUFBZSwwQkFBMEIsS0FDekMsZ0JBQWdCLG1DQUFtQyxLQUNuRCxlQUFlLG1DQUFtQyxLQUNsRCxpQkFBaUI7QUFDbkIsU0FBUztJQUNQLE9BQU8sWUFBYSxDQUFBLE9BQU8sYUFBYSxlQUFlLFNBQVMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksU0FBUyxRQUFRLEdBQUcsV0FBVTtBQUNqSTtBQUNBLFNBQVM7SUFDUCxPQUFPLFlBQWEsQ0FBQSxPQUFPLGFBQWEsY0FBYyxTQUFTLElBQUksR0FBRyxlQUFjO0FBQ3RGO0FBRUEsd0NBQXdDO0FBQ3hDLElBQUksWUFBWSxXQUFXLFNBQVM7QUFDcEMsSUFBSSxDQUFDLGFBQWEsT0FBTyxPQUFPLE1BQU0sQ0FBQyxJQUFJLEtBQUssWUFDOUMsSUFBSTtJQUNGLDRDQUE0QztJQUM1QyxZQUFZLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztBQUNqQyxFQUFFLE9BQU07QUFDTixVQUFVO0FBQ1o7QUFFRixJQUFJLFdBQVc7QUFDZixJQUFJLE9BQU87QUFDWCxJQUFJLFdBQVcsY0FBYyxPQUFPLGFBQWEsZUFBZSxTQUFTLFFBQVEsS0FBSyxZQUFZLENBQUM7SUFBQztJQUFhO0lBQWE7Q0FBVSxDQUFDLFFBQVEsQ0FBQyxZQUFZLFFBQVE7QUFFdEssd0NBQXdDO0FBQ3hDLElBQUksU0FBUyxPQUFPLE1BQU0sQ0FBQyxNQUFNO0FBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxlQUFlLEVBQUU7SUFDdEMsd0JBQXdCO0lBQ3hCLElBQUksU0FBUyxPQUFPLFlBQVksY0FBYyxPQUFPLFdBQVcsY0FBYyxPQUFPLFNBQVM7SUFFOUYsb0RBQW9EO0lBQ3BELDBEQUEwRDtJQUMxRCxJQUFJLG9CQUFvQjtJQUN4QixJQUFJO1FBQ0QsQ0FBQSxHQUFHLElBQUcsRUFBRztJQUNaLEVBQUUsT0FBTyxLQUFLO1FBQ1osb0JBQW9CLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUN6QztJQUNBLElBQUk7SUFDSixJQUFJLGFBQ0YsS0FBSyxJQUFJLFlBQVk7U0FFckIsSUFBSTtRQUNGLDRGQUE0RjtRQUM1RixJQUFJLEVBQ0YsVUFBVSxFQUNWLFVBQVUsRUFDWCxHQUFHLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsT0FBTztRQUNyRCxJQUFJLGVBQWUsUUFBUSxlQUFlLEtBQUssS0FBSyxXQUFXLFFBQVEsRUFBRTtZQUN2RSxXQUFXLEVBQUUsQ0FBQyxXQUFXLE9BQU07Z0JBQzdCLElBQUk7b0JBQ0YsTUFBTSxjQUFjO29CQUNwQixXQUFXLFdBQVcsQ0FBQztnQkFDekIsRUFBRSxPQUFNO29CQUNOLFdBQVcsV0FBVyxDQUFDO2dCQUN6QjtZQUNGO1lBRUEsZ0dBQWdHO1lBQ2hHLGVBQWUsSUFBTSxXQUFXLFdBQVcsQ0FBQztRQUM5QztJQUNGLEVBQUUsT0FBTTtRQUNOLElBQUksT0FBTyxjQUFjLGFBQ3ZCLElBQUk7WUFDRixLQUFLLElBQUksVUFBVSxXQUFXLFFBQVEsV0FBWSxDQUFBLE9BQU8sTUFBTSxPQUFPLEVBQUMsSUFBSztRQUM5RSxFQUFFLE9BQU8sS0FBSztZQUNaLG1DQUFtQztZQUNuQyxJQUFJLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLG9EQUN2QyxRQUFRLEtBQUssQ0FBQyxJQUFJLE9BQU87UUFFN0I7SUFFSjtJQUVGLElBQUksSUFBSTtRQUNOLGFBQWE7UUFDYixHQUFHLFNBQVMsR0FBRyxlQUFnQixNQUFNLHdCQUF3QixHQUF6QjtZQUNsQyxJQUFJLEtBQUssZUFBZSxNQUFLLEtBQUssS0FBSyxDQUFDLE1BQU0sSUFBSTtZQUNsRCxNQUFNLGNBQWM7UUFDdEI7UUFDQSxJQUFJLGNBQWMsV0FBVztZQUMzQixHQUFHLE9BQU8sR0FBRyxTQUFVLENBQUM7Z0JBQ3RCLElBQUksRUFBRSxPQUFPLEVBQ1gsUUFBUSxLQUFLLENBQUMsRUFBRSxPQUFPO1lBRTNCO1lBQ0EsR0FBRyxPQUFPLEdBQUc7Z0JBQ1gsUUFBUSxJQUFJLENBQUM7WUFDZjtRQUNGO0lBQ0Y7QUFDRjtBQUNBLGVBQWUsY0FBYyxLQUFLLGVBQWUsR0FBaEI7SUFDL0IsZ0JBQWdCLENBQUMsRUFBRSwwQkFBMEI7SUFDN0MsaUJBQWlCLENBQUMsRUFBRSwwQkFBMEI7SUFDOUMsaUJBQWlCLEVBQUU7SUFDbkIsa0JBQWtCLEVBQUU7SUFDcEIsaUJBQWlCO0lBQ2pCLElBQUksS0FBSyxJQUFJLEtBQUssVUFDaEI7U0FDSyxJQUFJLEtBQUssSUFBSSxLQUFLLFVBQVU7UUFDakMsdUNBQXVDO1FBQ3ZDLElBQUksT0FBTyxhQUFhLGFBQ3RCO1FBRUYsSUFBSSxTQUFTLEtBQUssTUFBTTtRQUV4QixvQkFBb0I7UUFDcEIsSUFBSSxVQUFVLE9BQU8sS0FBSyxDQUFDLENBQUE7WUFDekIsT0FBTyxNQUFNLElBQUksS0FBSyxTQUFTLE1BQU0sSUFBSSxLQUFLLFFBQVEsZUFBZSxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxZQUFZO1FBQ3ZIO1FBRUEsMEVBQTBFO1FBQzFFLDJFQUEyRTtRQUMzRSxrRUFBa0U7UUFDbEUsMkVBQTJFO1FBQzNFLHNDQUFzQztRQUN0QyxJQUFJLFdBQVcsa0JBQWtCLE9BQU8sSUFBSSxDQUFDLENBQUEsSUFBSyxFQUFFLE9BQU8sS0FBSyxpQkFBaUIsT0FBTyxXQUFXLGVBQWUsT0FBTyxnQkFBZ0IsYUFDdkksVUFBVSxDQUFDLE9BQU8sYUFBYSxDQUFDLElBQUksWUFBWSxtQkFBbUI7WUFDakUsWUFBWTtRQUNkO1FBRUYsSUFBSSxTQUFTO1lBQ1gsUUFBUSxLQUFLO1lBRWIseUVBQXlFO1lBQ3pFLElBQUksT0FBTyxXQUFXLGVBQWUsT0FBTyxnQkFBZ0IsYUFDMUQsT0FBTyxhQUFhLENBQUMsSUFBSSxZQUFZO1lBRXZDLE1BQU0sZ0JBQWdCO1lBQ3RCO1lBRUEsOEZBQThGO1lBQzlGLElBQUksa0JBQWtCLENBQUM7WUFDdkIsSUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLGVBQWUsTUFBTSxFQUFFLElBQUs7Z0JBQzlDLElBQUksS0FBSyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQzdCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFO29CQUN4QixVQUFVLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUNoQyxlQUFlLENBQUMsR0FBRyxHQUFHO2dCQUN4QjtZQUNGO1FBQ0YsT0FBTztJQUNUO0lBQ0EsSUFBSSxLQUFLLElBQUksS0FBSyxTQUFTO1FBQ3pCLCtCQUErQjtRQUMvQixLQUFLLElBQUksa0JBQWtCLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBRTtZQUNoRCxJQUFJLFFBQVEsZUFBZSxTQUFTLEdBQUcsZUFBZSxTQUFTLEdBQUcsZUFBZSxLQUFLO1lBQ3RGLFFBQVEsS0FBSyxDQUFDLDRCQUFrQixlQUFlLE9BQU8sR0FBRyxPQUFPLFFBQVEsU0FBUyxlQUFlLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDN0c7UUFDQSxJQUFJLE9BQU8sYUFBYSxhQUFhO1lBQ25DLGdDQUFnQztZQUNoQztZQUNBLElBQUksVUFBVSxtQkFBbUIsS0FBSyxXQUFXLENBQUMsSUFBSTtZQUN0RCxhQUFhO1lBQ2IsU0FBUyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCO0lBQ0Y7QUFDRjtBQUNBLFNBQVM7SUFDUCxJQUFJLFVBQVUsU0FBUyxjQUFjLENBQUM7SUFDdEMsSUFBSSxTQUFTO1FBQ1gsUUFBUSxNQUFNO1FBQ2QsUUFBUSxHQUFHLENBQUM7SUFDZDtBQUNGO0FBQ0EsU0FBUyxtQkFBbUIsV0FBVztJQUNyQyxJQUFJLFVBQVUsU0FBUyxhQUFhLENBQUM7SUFDckMsUUFBUSxFQUFFLEdBQUc7SUFDYixJQUFJLFlBQVk7SUFDaEIsS0FBSyxJQUFJLGNBQWMsWUFBYTtRQUNsQyxJQUFJLFFBQVEsV0FBVyxNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUc7WUFDbEUsT0FBTyxHQUFHLEVBQUU7U0FDVCxFQUFFLGFBQWEsUUFBUSxVQUFVLE9BQU8sR0FBRyxFQUFFLFNBQVMsQ0FBQyxFQUFFLEtBQUssNkJBQTZCLEVBQUUsbUJBQW1CLE1BQU0sUUFBUSxFQUFFLDJGQUEyRixFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3JQLEVBQUUsTUFBTSxJQUFJLEVBQUU7UUFDVixHQUFHLE1BQU0sV0FBVyxLQUFLO1FBQ3pCLGFBQWE7QUFDakI7QUFDQTtBQUNBLG9CQUFhLEVBQUUsV0FBVyxPQUFPLENBQUM7O2FBRXJCLEVBQUUsTUFBTTs7VUFFWCxFQUFFLFdBQVcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBLE9BQVEsdUJBQWEsT0FBTyxVQUFVLElBQUksQ0FBQyxJQUFJOztRQUV4RSxFQUFFLFdBQVcsYUFBYSxHQUFHLENBQUMsOENBQXVDLEVBQUUsV0FBVyxhQUFhLENBQUMsc0NBQXNDLENBQUMsR0FBRyxHQUFHOztJQUVqSixDQUFDO0lBQ0g7SUFDQSxhQUFhO0lBQ2IsUUFBUSxTQUFTLEdBQUc7SUFDcEIsT0FBTztBQUNUO0FBQ0EsU0FBUztJQUNQLElBQUksT0FBTyxhQUFhLGVBQWUsWUFBWSxVQUNqRCxTQUFTLE1BQU07U0FDVixJQUFJLE9BQU8sV0FBVyxlQUFlLFVBQVUsT0FBTyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsTUFBTSxFQUMzRixPQUFPLE9BQU8sQ0FBQyxNQUFNO1NBRXJCLElBQUk7UUFDRixJQUFJLEVBQ0YsVUFBVSxFQUNWLFVBQVUsRUFDWCxHQUFHLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsT0FBTztRQUNyRCxJQUFJLGVBQWUsUUFBUSxlQUFlLEtBQUssS0FBSyxXQUFXLFFBQVEsRUFDckUsV0FBVyxXQUFXLENBQUM7SUFFM0IsRUFBRSxPQUFPLEtBQUs7UUFDWixRQUFRLEtBQUssQ0FBQztJQUNoQjtBQUVKO0FBQ0EsU0FBUyxXQUFXLE1BQU0sRUFBRSxFQUFFLEVBQUUsbUNBQW1DO0lBQ2pFLElBQUksVUFBVSxPQUFPLE9BQU87SUFDNUIsSUFBSSxDQUFDLFNBQ0gsT0FBTyxFQUFFO0lBRVgsSUFBSSxVQUFVLEVBQUU7SUFDaEIsSUFBSSxHQUFHLEdBQUc7SUFDVixJQUFLLEtBQUssUUFDUixJQUFLLEtBQUssT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUU7UUFDdkIsTUFBTSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3RCLElBQUksUUFBUSxNQUFNLE1BQU0sT0FBTyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksTUFBTSxHQUFHLEVBQUUsS0FBSyxJQUM5RCxRQUFRLElBQUksQ0FBQztZQUFDO1lBQVE7U0FBRTtJQUU1QjtJQUVGLElBQUksT0FBTyxNQUFNLEVBQ2YsVUFBVSxRQUFRLE1BQU0sQ0FBQyxXQUFXLE9BQU8sTUFBTSxFQUFFO0lBRXJELE9BQU87QUFDVDtBQUNBLFNBQVMsV0FBVyxJQUFJO0lBQ3RCLElBQUksT0FBTyxLQUFLLFlBQVksQ0FBQztJQUM3QixJQUFJLENBQUMsTUFDSDtJQUVGLElBQUksVUFBVSxLQUFLLFNBQVM7SUFDNUIsUUFBUSxNQUFNLEdBQUc7UUFDZixJQUFJLEtBQUssVUFBVSxLQUFLLE1BQ3RCLGFBQWE7UUFDYixLQUFLLFVBQVUsQ0FBQyxXQUFXLENBQUM7SUFFaEM7SUFDQSxRQUFRLFlBQVksQ0FBQyxRQUNyQixhQUFhO0lBQ2IsS0FBSyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxNQUFNLEtBQUssR0FBRztJQUNuQyxhQUFhO0lBQ2IsS0FBSyxVQUFVLENBQUMsWUFBWSxDQUFDLFNBQVMsS0FBSyxXQUFXO0FBQ3hEO0FBQ0EsSUFBSSxhQUFhO0FBQ2pCLFNBQVM7SUFDUCxJQUFJLGNBQWMsT0FBTyxhQUFhLGFBQ3BDO0lBRUYsYUFBYSxXQUFXO1FBQ3RCLElBQUksUUFBUSxTQUFTLGdCQUFnQixDQUFDO1FBQ3RDLElBQUssSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLE1BQU0sRUFBRSxJQUFLO1lBQ3JDLGdDQUFnQztZQUNoQyxJQUFJLEtBQUssV0FBVyxNQUFLLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQy9DLElBQUksV0FBVztZQUNmLElBQUksc0JBQXNCLGFBQWEsY0FBYyxJQUFJLE9BQU8sbURBQW1ELFdBQVcsSUFBSSxDQUFDLFFBQVEsS0FBSyxPQUFPLENBQUMsV0FBVyxNQUFNO1lBQ3pLLElBQUksV0FBVyxnQkFBZ0IsSUFBSSxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsU0FBUyxNQUFNLE1BQU0sS0FBSyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxVQUNILFdBQVcsS0FBSyxDQUFDLEVBQUU7UUFFdkI7UUFDQSxhQUFhO0lBQ2YsR0FBRztBQUNMO0FBQ0EsU0FBUyxZQUFZLEtBQUs7SUFDeEIsSUFBSSxNQUFNLElBQUksS0FBSyxNQUFNO1FBQ3ZCLElBQUksT0FBTyxhQUFhLGFBQWE7WUFDbkMsSUFBSSxTQUFTLFNBQVMsYUFBYSxDQUFDO1lBQ3BDLE9BQU8sR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLFFBQVEsS0FBSyxHQUFHO1lBQ3pDLElBQUksTUFBTSxZQUFZLEtBQUssWUFDekIsT0FBTyxJQUFJLEdBQUc7WUFFaEIsT0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTO2dCQUMzQixJQUFJO2dCQUNKLE9BQU8sTUFBTSxHQUFHLElBQU0sUUFBUTtnQkFDOUIsT0FBTyxPQUFPLEdBQUc7Z0JBQ2hCLENBQUEsaUJBQWlCLFNBQVMsSUFBSSxBQUFELE1BQU8sUUFBUSxtQkFBbUIsS0FBSyxLQUFLLGVBQWUsV0FBVyxDQUFDO1lBQ3ZHO1FBQ0YsT0FBTyxJQUFJLE9BQU8sa0JBQWtCLFlBQVk7WUFDOUMsaUJBQWlCO1lBQ2pCLElBQUksTUFBTSxZQUFZLEtBQUssWUFDekIsT0FBTyxPQUFtQixNQUFNLEdBQUcsR0FBRyxRQUFRLEtBQUssR0FBRztpQkFFdEQsT0FBTyxJQUFJLFFBQVEsQ0FBQyxTQUFTO2dCQUMzQixJQUFJO29CQUNGLGNBQTBCLE1BQU0sR0FBRyxHQUFHLFFBQVEsS0FBSyxHQUFHO29CQUN0RDtnQkFDRixFQUFFLE9BQU8sS0FBSztvQkFDWixPQUFPO2dCQUNUO1lBQ0Y7UUFFSjtJQUNGO0FBQ0Y7QUFDQSxlQUFlLGdCQUFnQixNQUFNO0lBQ25DLE9BQU8sZUFBZSxHQUFHLE9BQU8sTUFBTSxDQUFDO0lBQ3ZDLElBQUk7SUFDSixJQUFJO1FBQ0Ysa0VBQWtFO1FBQ2xFLGdFQUFnRTtRQUNoRSxnRUFBZ0U7UUFDaEUsbURBQW1EO1FBQ25ELGlEQUFpRDtRQUNqRCxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLG1CQUFtQjtZQUN0QixJQUFJLFdBQVcsT0FBTyxHQUFHLENBQUMsQ0FBQTtnQkFDeEIsSUFBSTtnQkFDSixPQUFPLEFBQUMsQ0FBQSxlQUFlLFlBQVksTUFBSyxNQUFPLFFBQVEsaUJBQWlCLEtBQUssSUFBSSxLQUFLLElBQUksYUFBYSxLQUFLLENBQUMsQ0FBQTtvQkFDM0csb0JBQW9CO29CQUNwQixJQUFJLFVBQVUsT0FBTyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsV0FBVyxHQUFHLGdCQUFnQixJQUFJLEtBQUssT0FBTyw0QkFBNEIsZUFBZSxrQkFBa0IsMEJBQTBCO3dCQUNsTCxPQUFPLE9BQU8sQ0FBQyxNQUFNO3dCQUNyQjtvQkFDRjtvQkFDQSxNQUFNO2dCQUNSO1lBQ0Y7WUFDQSxrQkFBa0IsTUFBTSxRQUFRLEdBQUcsQ0FBQztRQUN0QztRQUNBLE9BQU8sT0FBTyxDQUFDLFNBQVUsS0FBSztZQUM1QixTQUFTLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRTtRQUMvQjtJQUNGLFNBQVU7UUFDUixPQUFPLE9BQU8sZUFBZTtRQUM3QixJQUFJLGlCQUNGLGdCQUFnQixPQUFPLENBQUMsQ0FBQTtZQUN0QixJQUFJLFFBQVE7Z0JBQ1YsSUFBSTtnQkFDSCxDQUFBLGtCQUFrQixTQUFTLElBQUksQUFBRCxNQUFPLFFBQVEsb0JBQW9CLEtBQUssS0FBSyxnQkFBZ0IsV0FBVyxDQUFDO1lBQzFHO1FBQ0Y7SUFFSjtBQUNGO0FBQ0EsU0FBUyxTQUFTLE9BQU8sa0JBQWtCLEdBQW5CLEVBQXVCLE1BQU0sY0FBYyxHQUFmO0lBQ2xELElBQUksVUFBVSxPQUFPLE9BQU87SUFDNUIsSUFBSSxDQUFDLFNBQ0g7SUFFRixJQUFJLE1BQU0sSUFBSSxLQUFLLE9BQ2pCO1NBQ0ssSUFBSSxNQUFNLElBQUksS0FBSyxNQUFNO1FBQzlCLElBQUksT0FBTyxNQUFNLFlBQVksQ0FBQyxPQUFPLGFBQWEsQ0FBQztRQUNuRCxJQUFJLE1BQU07WUFDUixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dCQUNyQixpRUFBaUU7Z0JBQ2pFLG9IQUFvSDtnQkFDcEgsSUFBSSxVQUFVLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2xDLElBQUssSUFBSSxPQUFPLFFBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxFQUFFO29CQUM1QyxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUk7b0JBQ3JCLElBQUksVUFBVSxXQUFXLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRTtvQkFDN0MsSUFBSSxRQUFRLE1BQU0sS0FBSyxHQUNyQixVQUFVLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRTtnQkFFbEM7WUFFSjtZQUNBLElBQUksbUJBR0YsQUFGQSw0REFBNEQ7WUFDNUQsK0NBQStDO1lBQzlDLENBQUEsR0FBRyxJQUFHLEVBQUcsTUFBTSxNQUFNO1lBR3hCLGFBQWE7WUFDYixJQUFJLEtBQUssT0FBTyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDekMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUc7Z0JBQUM7Z0JBQUk7YUFBSztRQUNoQztRQUVBLDhGQUE4RjtRQUM5RiwwR0FBMEc7UUFDMUcsSUFBSSxPQUFPLE1BQU0sRUFDZixTQUFTLE9BQU8sTUFBTSxFQUFFO0lBRTVCO0FBQ0Y7QUFDQSxTQUFTLFVBQVUsTUFBTSxFQUFFLEVBQUU7SUFDM0IsSUFBSSxVQUFVLE9BQU8sT0FBTztJQUM1QixJQUFJLENBQUMsU0FDSDtJQUVGLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtRQUNmLDhFQUE4RTtRQUM5RSxJQUFJLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3pCLElBQUksVUFBVSxFQUFFO1FBQ2hCLElBQUssSUFBSSxPQUFPLEtBQU07WUFDcEIsSUFBSSxVQUFVLFdBQVcsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ3RELElBQUksUUFBUSxNQUFNLEtBQUssR0FDckIsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUk7UUFFMUI7UUFFQSxzR0FBc0c7UUFDdEcsT0FBTyxPQUFPLENBQUMsR0FBRztRQUNsQixPQUFPLE9BQU8sS0FBSyxDQUFDLEdBQUc7UUFFdkIsMEJBQTBCO1FBQzFCLFFBQVEsT0FBTyxDQUFDLENBQUE7WUFDZCxVQUFVLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRTtRQUNoQztJQUNGLE9BQU8sSUFBSSxPQUFPLE1BQU0sRUFDdEIsVUFBVSxPQUFPLE1BQU0sRUFBRTtBQUU3QjtBQUNBLFNBQVMsZUFBZSxPQUFPLGtCQUFrQixHQUFuQixFQUF1QixHQUFHLFdBQVcsR0FBWixFQUFnQixhQUFhLHVDQUF1QyxHQUF4QztJQUNqRixnQkFBZ0IsQ0FBQztJQUNqQixJQUFJLGtCQUFrQixRQUFRLElBQUksZUFDaEMsT0FBTztJQUdULHVHQUF1RztJQUN2RyxJQUFJLFVBQVUsV0FBVyxPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDN0MsSUFBSSxXQUFXO0lBQ2YsTUFBTyxRQUFRLE1BQU0sR0FBRyxFQUFHO1FBQ3pCLElBQUksSUFBSSxRQUFRLEtBQUs7UUFDckIsSUFBSSxJQUFJLGtCQUFrQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDdEMsSUFBSSxHQUNGLCtFQUErRTtRQUMvRSxXQUFXO2FBQ04sSUFBSSxNQUFNLE1BQU07WUFDckIseURBQXlEO1lBQ3pELElBQUksSUFBSSxXQUFXLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRTtZQUMzQyxJQUFJLEVBQUUsTUFBTSxLQUFLLEdBQUc7Z0JBQ2xCLGtGQUFrRjtnQkFDbEYsV0FBVztnQkFDWDtZQUNGO1lBQ0EsUUFBUSxJQUFJLElBQUk7UUFDbEI7SUFDRjtJQUNBLE9BQU87QUFDVDtBQUNBLFNBQVMsa0JBQWtCLE9BQU8sa0JBQWtCLEdBQW5CLEVBQXVCLEdBQUcsV0FBVyxHQUFaLEVBQWdCLGFBQWEsdUNBQXVDLEdBQXhDO0lBQ3BGLElBQUksVUFBVSxPQUFPLE9BQU87SUFDNUIsSUFBSSxDQUFDLFNBQ0g7SUFFRixJQUFJLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxPQUFPLGFBQWEsQ0FBQyxFQUFFO1FBQ3ZELDJFQUEyRTtRQUMzRSx5RUFBeUU7UUFDekUsSUFBSSxDQUFDLE9BQU8sTUFBTSxFQUFFO1lBQ2xCLGlCQUFpQjtZQUNqQixPQUFPO1FBQ1Q7UUFDQSxPQUFPLGtCQUFrQixPQUFPLE1BQU0sRUFBRSxJQUFJO0lBQzlDO0lBQ0EsSUFBSSxhQUFhLENBQUMsR0FBRyxFQUNuQixPQUFPO0lBRVQsYUFBYSxDQUFDLEdBQUcsR0FBRztJQUNwQixJQUFJLFNBQVMsT0FBTyxLQUFLLENBQUMsR0FBRztJQUM3QixJQUFJLENBQUMsUUFDSCxPQUFPO0lBRVQsZ0JBQWdCLElBQUksQ0FBQztRQUFDO1FBQVE7S0FBRztJQUNqQyxJQUFJLFVBQVUsT0FBTyxHQUFHLElBQUksT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1FBQzlELGVBQWUsSUFBSSxDQUFDO1lBQUM7WUFBUTtTQUFHO1FBQ2hDLE9BQU87SUFDVDtJQUNBLE9BQU87QUFDVDtBQUNBLFNBQVM7SUFDUCwwQkFBMEI7SUFDMUIsSUFBSyxJQUFJLElBQUksR0FBRyxJQUFJLGdCQUFnQixNQUFNLEVBQUUsSUFBSztRQUMvQyxJQUFJLEtBQUssZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFO1lBQ3ZCLFdBQVcsZUFBZSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsY0FBYyxDQUFDLEdBQUcsR0FBRztRQUN2QjtJQUNGO0lBQ0Esa0JBQWtCLEVBQUU7QUFDdEI7QUFDQSxTQUFTLFdBQVcsT0FBTyxrQkFBa0IsR0FBbkIsRUFBdUIsR0FBRyxXQUFXLEdBQVo7SUFDakQsSUFBSSxTQUFTLE9BQU8sS0FBSyxDQUFDLEdBQUc7SUFDN0IsT0FBTyxPQUFPLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDdEIsSUFBSSxVQUFVLE9BQU8sR0FBRyxFQUN0QixPQUFPLEdBQUcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxPQUFPLENBQUMsR0FBRztJQUV0QyxJQUFJLFVBQVUsT0FBTyxHQUFHLElBQUksT0FBTyxHQUFHLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUM3RCxPQUFPLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsU0FBVSxFQUFFO1FBQy9DLEdBQUcsT0FBTyxPQUFPLENBQUMsR0FBRztJQUN2QjtJQUVGLE9BQU8sT0FBTyxLQUFLLENBQUMsR0FBRztBQUN6QjtBQUNBLFNBQVMsVUFBVSxPQUFPLGtCQUFrQixHQUFuQixFQUF1QixHQUFHLFdBQVcsR0FBWjtJQUNoRCxzQkFBc0I7SUFDdEIsT0FBTztJQUVQLDZEQUE2RDtJQUM3RCxJQUFJLFNBQVMsT0FBTyxLQUFLLENBQUMsR0FBRztJQUM3QixJQUFJLFVBQVUsT0FBTyxHQUFHLElBQUksT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO1FBQzlELElBQUkscUJBQXFCLEVBQUU7UUFDM0IsT0FBTyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFNBQVUsRUFBRTtZQUM5QyxJQUFJLG1CQUFtQixHQUFHO2dCQUN4QixPQUFPLFdBQVcsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ3hDO1lBQ0EsSUFBSSxNQUFNLE9BQU8sQ0FBQyxxQkFBcUIsaUJBQWlCLE1BQU0sRUFDNUQsbUJBQW1CLElBQUksSUFBSTtRQUUvQjtRQUNBLElBQUksbUJBQW1CLE1BQU0sRUFBRTtZQUM3QixJQUFJLFVBQVUsbUJBQW1CLEtBQUssQ0FBQyxTQUFVLENBQUM7Z0JBQ2hELE9BQU8sZUFBZSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ2xDO1lBQ0EsSUFBSSxDQUFDLFNBQ0gsT0FBTztZQUVUO1FBQ0Y7SUFDRjtBQUNGOzs7QUM1a0JBO0FBQ0E7QUFHQSxpQ0FBaUM7QUFDakMsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQztJQUMxQyxJQUFJLEtBQUssZ0JBQWdCLEVBQ3JCLENBQUEsR0FBQSxnREFBdUIsQUFBRCxFQUFFLEtBQUssZ0JBQWdCO0FBRXJEO0FBRUEsU0FBUztJQUNMLG1DQUFtQztJQUNuQyxRQUFRLEdBQUcsQ0FBQztJQUNaLElBQUksU0FBUyxTQUFTLGNBQWMsQ0FBQztJQUNyQyxRQUFRLGlCQUFpQixTQUFTLENBQUEsR0FBQSw0Q0FBcUIsQUFBRDtBQUMxRDtBQUVBLFNBQVMsZ0JBQWdCLENBQUMsb0JBQW9COzs7OztBQ1o5QywyREFBc0I7QUFOdEIsSUFBSSxnQkFBZ0I7QUFFcEIsU0FBUyxrQkFBa0IsR0FBVztJQUNsQyxPQUFPLHlDQUF5QyxJQUFJLENBQUMsSUFBSSxJQUFJO0FBQ2pFO0FBRU8sZUFBZTtJQUNsQixRQUFRLEdBQUcsQ0FBQztJQUNaLElBQUk7UUFDQSxNQUFNLE9BQU8sTUFBTSxVQUFVLFNBQVMsQ0FBQyxRQUFRO1FBRS9DLElBQUksUUFBUSxTQUFTLGlCQUFpQixrQkFBa0IsT0FBTztZQUMzRCxnQkFBZ0I7WUFDaEIsUUFBUSxHQUFHLENBQUMsMENBQWdDO1lBRTVDLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQztnQkFDdkIsTUFBTTtnQkFDTixLQUFLO1lBQ1Q7UUFDSjtJQUNKLEVBQUUsT0FBTyxLQUFLO1FBQ1YsUUFBUSxJQUFJLENBQUMsMkJBQTJCO0lBQzVDO0FBQ0o7OztBQ3ZCQSxRQUFRLGNBQWMsR0FBRyxTQUFVLENBQUM7SUFDbEMsT0FBTyxLQUFLLEVBQUUsVUFBVSxHQUFHLElBQUk7UUFBQyxTQUFTO0lBQUM7QUFDNUM7QUFFQSxRQUFRLGlCQUFpQixHQUFHLFNBQVUsQ0FBQztJQUNyQyxPQUFPLGNBQWMsQ0FBQyxHQUFHLGNBQWM7UUFBQyxPQUFPO0lBQUk7QUFDckQ7QUFFQSxRQUFRLFNBQVMsR0FBRyxTQUFVLE1BQU0sRUFBRSxJQUFJO0lBQ3hDLE9BQU8sSUFBSSxDQUFDLFFBQVEsT0FBTyxDQUFDLFNBQVUsR0FBRztRQUN2QyxJQUNFLFFBQVEsYUFDUixRQUFRLGdCQUNSLE9BQU8sU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxNQUUzQztRQUdGLE9BQU8sY0FBYyxDQUFDLE1BQU0sS0FBSztZQUMvQixZQUFZO1lBQ1osS0FBSztnQkFDSCxPQUFPLE1BQU0sQ0FBQyxJQUFJO1lBQ3BCO1FBQ0Y7SUFDRjtJQUVBLE9BQU87QUFDVDtBQUVBLFFBQVEsTUFBTSxHQUFHLFNBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHO0lBQzVDLE9BQU8sY0FBYyxDQUFDLE1BQU0sVUFBVTtRQUNwQyxZQUFZO1FBQ1osS0FBSztJQUNQO0FBQ0Y7Ozs7O0FDbENBLDZEQUFnQjtBQUFULFNBQVMsd0JBQXdCLE9BQWU7SUFDbkQsTUFBTSxhQUFhLFNBQVMsY0FBYyxDQUFDO0lBQzNDLE1BQU0sYUFBYSxTQUFTLGNBQWMsQ0FBQztJQUUzQyxJQUFJLGNBQWMsWUFBWTtRQUMxQixXQUFXLEtBQUssR0FBRztRQUNuQixXQUFXLFFBQVEsR0FBRztRQUV0QixXQUFXLE9BQU8sR0FBRztZQUNqQixJQUFJO2dCQUNBLE1BQU0sVUFBVSxTQUFTLENBQUMsU0FBUyxDQUFDLFdBQVcsS0FBSztnQkFDcEQsV0FBVyxTQUFTLEdBQUc7Z0JBQ3ZCLFdBQVcsS0FBSyxHQUFHO2dCQUNuQixNQUFNLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7b0JBQUUsa0JBQWtCO2dCQUFHO2dCQUN0RCxXQUFXLElBQU8sV0FBVyxTQUFTLEdBQUcsZ0JBQWlCO1lBQzlELEVBQUUsT0FBTyxLQUFLO2dCQUNWLFFBQVEsS0FBSyxDQUFDLDBCQUFxQjtZQUN2QztRQUNKO0lBQ0o7QUFDSiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1icm93c2VyLWhtci9saWIvcnVudGltZS04MGE0ZGUwZGEzZjBkMDhhLmpzIiwic3JjL3BvcHVwLnRzIiwic3JjL2FjdGlvbnMvcG9wdXAvY2hlY2tDbGlwYm9hcmRPbkNsaWNrLnRzIiwibm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJzcmMvYWN0aW9ucy9wb3B1cC9kaXNwbGF5R2VuZXJhdGVkQ29tbWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgSE1SX0hPU1QgPSBcImxvY2FsaG9zdFwiO3ZhciBITVJfUE9SVCA9IDEyMzQ7dmFyIEhNUl9TRVJWRVJfUE9SVCA9IDEyMzQ7dmFyIEhNUl9TRUNVUkUgPSBmYWxzZTt2YXIgSE1SX0VOVl9IQVNIID0gXCIxOWYyNTNjZThkNzNkODUxXCI7dmFyIEhNUl9VU0VfU1NFID0gZmFsc2U7bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEID0gXCJjMzkxNDIxNWI0NDg4MDdjXCI7XCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGdsb2JhbCBITVJfSE9TVCwgSE1SX1BPUlQsIEhNUl9TRVJWRVJfUE9SVCwgSE1SX0VOVl9IQVNILCBITVJfU0VDVVJFLCBITVJfVVNFX1NTRSwgY2hyb21lLCBicm93c2VyLCBfX3BhcmNlbF9faW1wb3J0X18sIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX18sIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAqL1xuLyo6OlxuaW1wb3J0IHR5cGUge1xuICBITVJBc3NldCxcbiAgSE1STWVzc2FnZSxcbn0gZnJvbSAnQHBhcmNlbC9yZXBvcnRlci1kZXYtc2VydmVyL3NyYy9ITVJTZXJ2ZXIuanMnO1xuaW50ZXJmYWNlIFBhcmNlbFJlcXVpcmUge1xuICAoc3RyaW5nKTogbWl4ZWQ7XG4gIGNhY2hlOiB7fFtzdHJpbmddOiBQYXJjZWxNb2R1bGV8fTtcbiAgaG90RGF0YToge3xbc3RyaW5nXTogbWl4ZWR8fTtcbiAgTW9kdWxlOiBhbnk7XG4gIHBhcmVudDogP1BhcmNlbFJlcXVpcmU7XG4gIGlzUGFyY2VsUmVxdWlyZTogdHJ1ZTtcbiAgbW9kdWxlczoge3xbc3RyaW5nXTogW0Z1bmN0aW9uLCB7fFtzdHJpbmddOiBzdHJpbmd8fV18fTtcbiAgSE1SX0JVTkRMRV9JRDogc3RyaW5nO1xuICByb290OiBQYXJjZWxSZXF1aXJlO1xufVxuaW50ZXJmYWNlIFBhcmNlbE1vZHVsZSB7XG4gIGhvdDoge3xcbiAgICBkYXRhOiBtaXhlZCxcbiAgICBhY2NlcHQoY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgZGlzcG9zZShjYjogKG1peGVkKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBhY2NlcHQoZGVwczogQXJyYXk8c3RyaW5nPiB8IHN0cmluZywgY2I6IChGdW5jdGlvbikgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gZGVjbGluZSgpOiB2b2lkLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IEFycmF5PChGdW5jdGlvbikgPT4gdm9pZD4sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IEFycmF5PChtaXhlZCkgPT4gdm9pZD4sXG4gIHx9O1xufVxuaW50ZXJmYWNlIEV4dGVuc2lvbkNvbnRleHQge1xuICBydW50aW1lOiB7fFxuICAgIHJlbG9hZCgpOiB2b2lkLFxuICAgIGdldFVSTCh1cmw6IHN0cmluZyk6IHN0cmluZztcbiAgICBnZXRNYW5pZmVzdCgpOiB7bWFuaWZlc3RfdmVyc2lvbjogbnVtYmVyLCAuLi59O1xuICB8fTtcbn1cbmRlY2xhcmUgdmFyIG1vZHVsZToge2J1bmRsZTogUGFyY2VsUmVxdWlyZSwgLi4ufTtcbmRlY2xhcmUgdmFyIEhNUl9IT1NUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfUE9SVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1NFUlZFUl9QT1JUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfRU5WX0hBU0g6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9TRUNVUkU6IGJvb2xlYW47XG5kZWNsYXJlIHZhciBITVJfVVNFX1NTRTogYm9vbGVhbjtcbmRlY2xhcmUgdmFyIGNocm9tZTogRXh0ZW5zaW9uQ29udGV4dDtcbmRlY2xhcmUgdmFyIGJyb3dzZXI6IEV4dGVuc2lvbkNvbnRleHQ7XG5kZWNsYXJlIHZhciBfX3BhcmNlbF9faW1wb3J0X186IChzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5kZWNsYXJlIHZhciBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fOiAoc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuZGVjbGFyZSB2YXIgZ2xvYmFsVGhpczogdHlwZW9mIHNlbGY7XG5kZWNsYXJlIHZhciBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGU6IE9iamVjdDtcbiovXG52YXIgT1ZFUkxBWV9JRCA9ICdfX3BhcmNlbF9fZXJyb3JfX292ZXJsYXlfXyc7XG52YXIgT2xkTW9kdWxlID0gbW9kdWxlLmJ1bmRsZS5Nb2R1bGU7XG5mdW5jdGlvbiBNb2R1bGUobW9kdWxlTmFtZSkge1xuICBPbGRNb2R1bGUuY2FsbCh0aGlzLCBtb2R1bGVOYW1lKTtcbiAgdGhpcy5ob3QgPSB7XG4gICAgZGF0YTogbW9kdWxlLmJ1bmRsZS5ob3REYXRhW21vZHVsZU5hbWVdLFxuICAgIF9hY2NlcHRDYWxsYmFja3M6IFtdLFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBbXSxcbiAgICBhY2NlcHQ6IGZ1bmN0aW9uIChmbikge1xuICAgICAgdGhpcy5fYWNjZXB0Q2FsbGJhY2tzLnB1c2goZm4gfHwgZnVuY3Rpb24gKCkge30pO1xuICAgIH0sXG4gICAgZGlzcG9zZTogZnVuY3Rpb24gKGZuKSB7XG4gICAgICB0aGlzLl9kaXNwb3NlQ2FsbGJhY2tzLnB1c2goZm4pO1xuICAgIH1cbiAgfTtcbiAgbW9kdWxlLmJ1bmRsZS5ob3REYXRhW21vZHVsZU5hbWVdID0gdW5kZWZpbmVkO1xufVxubW9kdWxlLmJ1bmRsZS5Nb2R1bGUgPSBNb2R1bGU7XG5tb2R1bGUuYnVuZGxlLmhvdERhdGEgPSB7fTtcbnZhciBjaGVja2VkQXNzZXRzIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi8sXG4gIGRpc3Bvc2VkQXNzZXRzIC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi8sXG4gIGFzc2V0c1RvRGlzcG9zZSAvKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovLFxuICBhc3NldHNUb0FjY2VwdCAvKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICovLFxuICBidW5kbGVOb3RGb3VuZCA9IGZhbHNlO1xuZnVuY3Rpb24gZ2V0SG9zdG5hbWUoKSB7XG4gIHJldHVybiBITVJfSE9TVCB8fCAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBsb2NhdGlvbi5wcm90b2NvbC5pbmRleE9mKCdodHRwJykgPT09IDAgPyBsb2NhdGlvbi5ob3N0bmFtZSA6ICdsb2NhbGhvc3QnKTtcbn1cbmZ1bmN0aW9uIGdldFBvcnQoKSB7XG4gIHJldHVybiBITVJfUE9SVCB8fCAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyA/IGxvY2F0aW9uLnBvcnQgOiBITVJfU0VSVkVSX1BPUlQpO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5sZXQgV2ViU29ja2V0ID0gZ2xvYmFsVGhpcy5XZWJTb2NrZXQ7XG5pZiAoIVdlYlNvY2tldCAmJiB0eXBlb2YgbW9kdWxlLmJ1bmRsZS5yb290ID09PSAnZnVuY3Rpb24nKSB7XG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWdsb2JhbC1hc3NpZ25cbiAgICBXZWJTb2NrZXQgPSBtb2R1bGUuYnVuZGxlLnJvb3QoJ3dzJyk7XG4gIH0gY2F0Y2gge1xuICAgIC8vIGlnbm9yZS5cbiAgfVxufVxudmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbnZhciBwb3J0ID0gZ2V0UG9ydCgpO1xudmFyIHByb3RvY29sID0gSE1SX1NFQ1VSRSB8fCB0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnICYmIGxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JyAmJiAhWydsb2NhbGhvc3QnLCAnMTI3LjAuMC4xJywgJzAuMC4wLjAnXS5pbmNsdWRlcyhob3N0bmFtZSkgPyAnd3NzJyA6ICd3cyc7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbnZhciBwYXJlbnQgPSBtb2R1bGUuYnVuZGxlLnBhcmVudDtcbmlmICghcGFyZW50IHx8ICFwYXJlbnQuaXNQYXJjZWxSZXF1aXJlKSB7XG4gIC8vIFdlYiBleHRlbnNpb24gY29udGV4dFxuICB2YXIgZXh0Q3R4ID0gdHlwZW9mIGJyb3dzZXIgPT09ICd1bmRlZmluZWQnID8gdHlwZW9mIGNocm9tZSA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogY2hyb21lIDogYnJvd3NlcjtcblxuICAvLyBTYWZhcmkgZG9lc24ndCBzdXBwb3J0IHNvdXJjZVVSTCBpbiBlcnJvciBzdGFja3MuXG4gIC8vIGV2YWwgbWF5IGFsc28gYmUgZGlzYWJsZWQgdmlhIENTUCwgc28gZG8gYSBxdWljayBjaGVjay5cbiAgdmFyIHN1cHBvcnRzU291cmNlVVJMID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgKDAsIGV2YWwpKCd0aHJvdyBuZXcgRXJyb3IoXCJ0ZXN0XCIpOyAvLyMgc291cmNlVVJMPXRlc3QuanMnKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgc3VwcG9ydHNTb3VyY2VVUkwgPSBlcnIuc3RhY2suaW5jbHVkZXMoJ3Rlc3QuanMnKTtcbiAgfVxuICB2YXIgd3M7XG4gIGlmIChITVJfVVNFX1NTRSkge1xuICAgIHdzID0gbmV3IEV2ZW50U291cmNlKCcvX19wYXJjZWxfaG1yJyk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIElmIHdlJ3JlIHJ1bm5pbmcgaW4gdGhlIGRldiBzZXJ2ZXIncyBub2RlIHJ1bm5lciwgbGlzdGVuIGZvciBtZXNzYWdlcyBvbiB0aGUgcGFyZW50IHBvcnQuXG4gICAgICBsZXQge1xuICAgICAgICB3b3JrZXJEYXRhLFxuICAgICAgICBwYXJlbnRQb3J0XG4gICAgICB9ID0gbW9kdWxlLmJ1bmRsZS5yb290KCdub2RlOndvcmtlcl90aHJlYWRzJykgLyo6IGFueSovO1xuICAgICAgaWYgKHdvcmtlckRhdGEgIT09IG51bGwgJiYgd29ya2VyRGF0YSAhPT0gdm9pZCAwICYmIHdvcmtlckRhdGEuX19wYXJjZWwpIHtcbiAgICAgICAgcGFyZW50UG9ydC5vbignbWVzc2FnZScsIGFzeW5jIG1lc3NhZ2UgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBoYW5kbGVNZXNzYWdlKG1lc3NhZ2UpO1xuICAgICAgICAgICAgcGFyZW50UG9ydC5wb3N0TWVzc2FnZSgndXBkYXRlZCcpO1xuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgcGFyZW50UG9ydC5wb3N0TWVzc2FnZSgncmVzdGFydCcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlIGJ1bmRsZSBoYXMgZmluaXNoZWQgcnVubmluZywgbm90aWZ5IHRoZSBkZXYgc2VydmVyIHRoYXQgdGhlIEhNUiB1cGRhdGUgaXMgY29tcGxldGUuXG4gICAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHBhcmVudFBvcnQucG9zdE1lc3NhZ2UoJ3JlYWR5JykpO1xuICAgICAgfVxuICAgIH0gY2F0Y2gge1xuICAgICAgaWYgKHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgd3MgPSBuZXcgV2ViU29ja2V0KHByb3RvY29sICsgJzovLycgKyBob3N0bmFtZSArIChwb3J0ID8gJzonICsgcG9ydCA6ICcnKSArICcvJyk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIElnbm9yZSBjbG91ZGZsYXJlIHdvcmtlcnMgZXJyb3IuXG4gICAgICAgICAgaWYgKGVyci5tZXNzYWdlICYmICFlcnIubWVzc2FnZS5pbmNsdWRlcygnRGlzYWxsb3dlZCBvcGVyYXRpb24gY2FsbGVkIHdpdGhpbiBnbG9iYWwgc2NvcGUnKSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmICh3cykge1xuICAgIC8vICRGbG93Rml4TWVcbiAgICB3cy5vbm1lc3NhZ2UgPSBhc3luYyBmdW5jdGlvbiAoZXZlbnQgLyo6IHtkYXRhOiBzdHJpbmcsIC4uLn0gKi8pIHtcbiAgICAgIHZhciBkYXRhIC8qOiBITVJNZXNzYWdlICovID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgIGF3YWl0IGhhbmRsZU1lc3NhZ2UoZGF0YSk7XG4gICAgfTtcbiAgICBpZiAod3MgaW5zdGFuY2VvZiBXZWJTb2NrZXQpIHtcbiAgICAgIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS5tZXNzYWdlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd3Mub25jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdbcGFyY2VsXSDwn5qoIENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgd2FzIGxvc3QnKTtcbiAgICAgIH07XG4gICAgfVxuICB9XG59XG5hc3luYyBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGRhdGEgLyo6IEhNUk1lc3NhZ2UgKi8pIHtcbiAgY2hlY2tlZEFzc2V0cyA9IHt9IC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi87XG4gIGRpc3Bvc2VkQXNzZXRzID0ge30gLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLztcbiAgYXNzZXRzVG9BY2NlcHQgPSBbXTtcbiAgYXNzZXRzVG9EaXNwb3NlID0gW107XG4gIGJ1bmRsZU5vdEZvdW5kID0gZmFsc2U7XG4gIGlmIChkYXRhLnR5cGUgPT09ICdyZWxvYWQnKSB7XG4gICAgZnVsbFJlbG9hZCgpO1xuICB9IGVsc2UgaWYgKGRhdGEudHlwZSA9PT0gJ3VwZGF0ZScpIHtcbiAgICAvLyBSZW1vdmUgZXJyb3Igb3ZlcmxheSBpZiB0aGVyZSBpcyBvbmVcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgfVxuICAgIGxldCBhc3NldHMgPSBkYXRhLmFzc2V0cztcblxuICAgIC8vIEhhbmRsZSBITVIgVXBkYXRlXG4gICAgbGV0IGhhbmRsZWQgPSBhc3NldHMuZXZlcnkoYXNzZXQgPT4ge1xuICAgICAgcmV0dXJuIGFzc2V0LnR5cGUgPT09ICdjc3MnIHx8IGFzc2V0LnR5cGUgPT09ICdqcycgJiYgaG1yQWNjZXB0Q2hlY2sobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldC5pZCwgYXNzZXQuZGVwc0J5QnVuZGxlKTtcbiAgICB9KTtcblxuICAgIC8vIERpc3BhdGNoIGEgY3VzdG9tIGV2ZW50IGluIGNhc2UgYSBidW5kbGUgd2FzIG5vdCBmb3VuZC4gVGhpcyBtaWdodCBtZWFuXG4gICAgLy8gYW4gYXNzZXQgb24gdGhlIHNlcnZlciBjaGFuZ2VkIGFuZCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBwYWdlLiBUaGlzIGV2ZW50XG4gICAgLy8gZ2l2ZXMgdGhlIGNsaWVudCBhbiBvcHBvcnR1bml0eSB0byByZWZyZXNoIHdpdGhvdXQgbG9zaW5nIHN0YXRlXG4gICAgLy8gKGUuZy4gdmlhIFJlYWN0IFNlcnZlciBDb21wb25lbnRzKS4gSWYgZS5wcmV2ZW50RGVmYXVsdCgpIGlzIG5vdCBjYWxsZWQsXG4gICAgLy8gd2Ugd2lsbCB0cmlnZ2VyIGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAgICBpZiAoaGFuZGxlZCAmJiBidW5kbGVOb3RGb3VuZCAmJiBhc3NldHMuc29tZShhID0+IGEuZW52SGFzaCAhPT0gSE1SX0VOVl9IQVNIKSAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQ3VzdG9tRXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBoYW5kbGVkID0gIXdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncGFyY2VsaG1ycmVsb2FkJywge1xuICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICB9KSk7XG4gICAgfVxuICAgIGlmIChoYW5kbGVkKSB7XG4gICAgICBjb25zb2xlLmNsZWFyKCk7XG5cbiAgICAgIC8vIERpc3BhdGNoIGN1c3RvbSBldmVudCBzbyBvdGhlciBydW50aW1lcyAoZS5nIFJlYWN0IFJlZnJlc2gpIGFyZSBhd2FyZS5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQ3VzdG9tRXZlbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncGFyY2VsaG1yYWNjZXB0JykpO1xuICAgICAgfVxuICAgICAgYXdhaXQgaG1yQXBwbHlVcGRhdGVzKGFzc2V0cyk7XG4gICAgICBobXJEaXNwb3NlUXVldWUoKTtcblxuICAgICAgLy8gUnVuIGFjY2VwdCBjYWxsYmFja3MuIFRoaXMgd2lsbCBhbHNvIHJlLWV4ZWN1dGUgb3RoZXIgZGlzcG9zZWQgYXNzZXRzIGluIHRvcG9sb2dpY2FsIG9yZGVyLlxuICAgICAgbGV0IHByb2Nlc3NlZEFzc2V0cyA9IHt9O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHNUb0FjY2VwdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgaWQgPSBhc3NldHNUb0FjY2VwdFtpXVsxXTtcbiAgICAgICAgaWYgKCFwcm9jZXNzZWRBc3NldHNbaWRdKSB7XG4gICAgICAgICAgaG1yQWNjZXB0KGFzc2V0c1RvQWNjZXB0W2ldWzBdLCBpZCk7XG4gICAgICAgICAgcHJvY2Vzc2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgZnVsbFJlbG9hZCgpO1xuICB9XG4gIGlmIChkYXRhLnR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAvLyBMb2cgcGFyY2VsIGVycm9ycyB0byBjb25zb2xlXG4gICAgZm9yIChsZXQgYW5zaURpYWdub3N0aWMgb2YgZGF0YS5kaWFnbm9zdGljcy5hbnNpKSB7XG4gICAgICBsZXQgc3RhY2sgPSBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgPyBhbnNpRGlhZ25vc3RpYy5jb2RlZnJhbWUgOiBhbnNpRGlhZ25vc3RpYy5zdGFjaztcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ/CfmqggW3BhcmNlbF06ICcgKyBhbnNpRGlhZ25vc3RpYy5tZXNzYWdlICsgJ1xcbicgKyBzdGFjayArICdcXG5cXG4nICsgYW5zaURpYWdub3N0aWMuaGludHMuam9pbignXFxuJykpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gUmVuZGVyIHRoZSBmYW5jeSBodG1sIG92ZXJsYXlcbiAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgICAgdmFyIG92ZXJsYXkgPSBjcmVhdGVFcnJvck92ZXJsYXkoZGF0YS5kaWFnbm9zdGljcy5odG1sKTtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiByZW1vdmVFcnJvck92ZXJsYXkoKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoT1ZFUkxBWV9JRCk7XG4gIGlmIChvdmVybGF5KSB7XG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZygnW3BhcmNlbF0g4pyoIEVycm9yIHJlc29sdmVkJyk7XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVycm9yT3ZlcmxheShkaWFnbm9zdGljcykge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBvdmVybGF5LmlkID0gT1ZFUkxBWV9JRDtcbiAgbGV0IGVycm9ySFRNTCA9ICc8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogYmxhY2s7IG9wYWNpdHk6IDAuODU7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHdoaXRlOyBwb3NpdGlvbjogZml4ZWQ7IGhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IHRvcDogMHB4OyBsZWZ0OiAwcHg7IHBhZGRpbmc6IDMwcHg7IGZvbnQtZmFtaWx5OiBNZW5sbywgQ29uc29sYXMsIG1vbm9zcGFjZTsgei1pbmRleDogOTk5OTtcIj4nO1xuICBmb3IgKGxldCBkaWFnbm9zdGljIG9mIGRpYWdub3N0aWNzKSB7XG4gICAgbGV0IHN0YWNrID0gZGlhZ25vc3RpYy5mcmFtZXMubGVuZ3RoID8gZGlhZ25vc3RpYy5mcmFtZXMucmVkdWNlKChwLCBmcmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIGAke3B9XG48YSBocmVmPVwiJHtwcm90b2NvbCA9PT0gJ3dzcycgPyAnaHR0cHMnIDogJ2h0dHAnfTovLyR7aG9zdG5hbWV9OiR7cG9ydH0vX19wYXJjZWxfbGF1bmNoX2VkaXRvcj9maWxlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGZyYW1lLmxvY2F0aW9uKX1cIiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyBjb2xvcjogIzg4OFwiIG9uY2xpY2s9XCJmZXRjaCh0aGlzLmhyZWYpOyByZXR1cm4gZmFsc2VcIj4ke2ZyYW1lLmxvY2F0aW9ufTwvYT5cbiR7ZnJhbWUuY29kZX1gO1xuICAgIH0sICcnKSA6IGRpYWdub3N0aWMuc3RhY2s7XG4gICAgZXJyb3JIVE1MICs9IGBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBtYXJnaW4tdG9wOiAyMHB4O1wiPlxuICAgICAgICAgIPCfmqggJHtkaWFnbm9zdGljLm1lc3NhZ2V9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cHJlPiR7c3RhY2t9PC9wcmU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgJHtkaWFnbm9zdGljLmhpbnRzLm1hcChoaW50ID0+ICc8ZGl2PvCfkqEgJyArIGhpbnQgKyAnPC9kaXY+Jykuam9pbignJyl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICAke2RpYWdub3N0aWMuZG9jdW1lbnRhdGlvbiA/IGA8ZGl2PvCfk50gPGEgc3R5bGU9XCJjb2xvcjogdmlvbGV0XCIgaHJlZj1cIiR7ZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9ufVwiIHRhcmdldD1cIl9ibGFua1wiPkxlYXJuIG1vcmU8L2E+PC9kaXY+YCA6ICcnfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuICBlcnJvckhUTUwgKz0gJzwvZGl2Pic7XG4gIG92ZXJsYXkuaW5uZXJIVE1MID0gZXJyb3JIVE1MO1xuICByZXR1cm4gb3ZlcmxheTtcbn1cbmZ1bmN0aW9uIGZ1bGxSZWxvYWQoKSB7XG4gIGlmICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnICYmICdyZWxvYWQnIGluIGxvY2F0aW9uKSB7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4dEN0eCAhPT0gJ3VuZGVmaW5lZCcgJiYgZXh0Q3R4ICYmIGV4dEN0eC5ydW50aW1lICYmIGV4dEN0eC5ydW50aW1lLnJlbG9hZCkge1xuICAgIGV4dEN0eC5ydW50aW1lLnJlbG9hZCgpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICBsZXQge1xuICAgICAgICB3b3JrZXJEYXRhLFxuICAgICAgICBwYXJlbnRQb3J0XG4gICAgICB9ID0gbW9kdWxlLmJ1bmRsZS5yb290KCdub2RlOndvcmtlcl90aHJlYWRzJykgLyo6IGFueSovO1xuICAgICAgaWYgKHdvcmtlckRhdGEgIT09IG51bGwgJiYgd29ya2VyRGF0YSAhPT0gdm9pZCAwICYmIHdvcmtlckRhdGEuX19wYXJjZWwpIHtcbiAgICAgICAgcGFyZW50UG9ydC5wb3N0TWVzc2FnZSgncmVzdGFydCcpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignW3BhcmNlbF0g4pqg77iPIEFuIEhNUiB1cGRhdGUgd2FzIG5vdCBhY2NlcHRlZC4gUGxlYXNlIHJlc3RhcnQgdGhlIHByb2Nlc3MuJyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBnZXRQYXJlbnRzKGJ1bmRsZSwgaWQpIC8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi97XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgcGFyZW50cyA9IFtdO1xuICB2YXIgaywgZCwgZGVwO1xuICBmb3IgKGsgaW4gbW9kdWxlcykge1xuICAgIGZvciAoZCBpbiBtb2R1bGVzW2tdWzFdKSB7XG4gICAgICBkZXAgPSBtb2R1bGVzW2tdWzFdW2RdO1xuICAgICAgaWYgKGRlcCA9PT0gaWQgfHwgQXJyYXkuaXNBcnJheShkZXApICYmIGRlcFtkZXAubGVuZ3RoIC0gMV0gPT09IGlkKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChbYnVuZGxlLCBrXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgcGFyZW50cyA9IHBhcmVudHMuY29uY2F0KGdldFBhcmVudHMoYnVuZGxlLnBhcmVudCwgaWQpKTtcbiAgfVxuICByZXR1cm4gcGFyZW50cztcbn1cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsobGluaykge1xuICB2YXIgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gIGlmICghaHJlZikge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbmV3TGluayA9IGxpbmsuY2xvbmVOb2RlKCk7XG4gIG5ld0xpbmsub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChsaW5rLnBhcmVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICB9XG4gIH07XG4gIG5ld0xpbmsuc2V0QXR0cmlidXRlKCdocmVmJyxcbiAgLy8gJEZsb3dGaXhNZVxuICBocmVmLnNwbGl0KCc/JylbMF0gKyAnPycgKyBEYXRlLm5vdygpKTtcbiAgLy8gJEZsb3dGaXhNZVxuICBsaW5rLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0xpbmssIGxpbmsubmV4dFNpYmxpbmcpO1xufVxudmFyIGNzc1RpbWVvdXQgPSBudWxsO1xuZnVuY3Rpb24gcmVsb2FkQ1NTKCkge1xuICBpZiAoY3NzVGltZW91dCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNzc1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lW2luY29tcGF0aWJsZS10eXBlXVxuICAgICAgdmFyIGhyZWYgLyo6IHN0cmluZyAqLyA9IGxpbmtzW2ldLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICAgICAgdmFyIGhvc3RuYW1lID0gZ2V0SG9zdG5hbWUoKTtcbiAgICAgIHZhciBzZXJ2ZWRGcm9tSE1SU2VydmVyID0gaG9zdG5hbWUgPT09ICdsb2NhbGhvc3QnID8gbmV3IFJlZ0V4cCgnXihodHRwcz86XFxcXC9cXFxcLygwLjAuMC4wfDEyNy4wLjAuMSl8bG9jYWxob3N0KTonICsgZ2V0UG9ydCgpKS50ZXN0KGhyZWYpIDogaHJlZi5pbmRleE9mKGhvc3RuYW1lICsgJzonICsgZ2V0UG9ydCgpKTtcbiAgICAgIHZhciBhYnNvbHV0ZSA9IC9eaHR0cHM/OlxcL1xcLy9pLnRlc3QoaHJlZikgJiYgaHJlZi5pbmRleE9mKGxvY2F0aW9uLm9yaWdpbikgIT09IDAgJiYgIXNlcnZlZEZyb21ITVJTZXJ2ZXI7XG4gICAgICBpZiAoIWFic29sdXRlKSB7XG4gICAgICAgIHVwZGF0ZUxpbmsobGlua3NbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBjc3NUaW1lb3V0ID0gbnVsbDtcbiAgfSwgNTApO1xufVxuZnVuY3Rpb24gaG1yRG93bmxvYWQoYXNzZXQpIHtcbiAgaWYgKGFzc2V0LnR5cGUgPT09ICdqcycpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0LnNyYyA9IGFzc2V0LnVybCArICc/dD0nICsgRGF0ZS5ub3coKTtcbiAgICAgIGlmIChhc3NldC5vdXRwdXRGb3JtYXQgPT09ICdlc21vZHVsZScpIHtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAnbW9kdWxlJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHZhciBfZG9jdW1lbnQkaGVhZDtcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHJlc29sdmUoc2NyaXB0KTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSByZWplY3Q7XG4gICAgICAgIChfZG9jdW1lbnQkaGVhZCA9IGRvY3VtZW50LmhlYWQpID09PSBudWxsIHx8IF9kb2N1bWVudCRoZWFkID09PSB2b2lkIDAgfHwgX2RvY3VtZW50JGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGltcG9ydFNjcmlwdHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIFdvcmtlciBzY3JpcHRzXG4gICAgICBpZiAoYXNzZXQub3V0cHV0Rm9ybWF0ID09PSAnZXNtb2R1bGUnKSB7XG4gICAgICAgIHJldHVybiBfX3BhcmNlbF9faW1wb3J0X18oYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX18oYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5hc3luYyBmdW5jdGlvbiBobXJBcHBseVVwZGF0ZXMoYXNzZXRzKSB7XG4gIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGUgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBsZXQgc2NyaXB0c1RvUmVtb3ZlO1xuICB0cnkge1xuICAgIC8vIElmIHNvdXJjZVVSTCBjb21tZW50cyBhcmVuJ3Qgc3VwcG9ydGVkIGluIGV2YWwsIHdlIG5lZWQgdG8gbG9hZFxuICAgIC8vIHRoZSB1cGRhdGUgZnJvbSB0aGUgZGV2IHNlcnZlciBvdmVyIEhUVFAgc28gdGhhdCBzdGFjayB0cmFjZXNcbiAgICAvLyBhcmUgY29ycmVjdCBpbiBlcnJvcnMvbG9ncy4gVGhpcyBpcyBtdWNoIHNsb3dlciB0aGFuIGV2YWwsIHNvXG4gICAgLy8gd2Ugb25seSBkbyBpdCBpZiBuZWVkZWQgKGN1cnJlbnRseSBqdXN0IFNhZmFyaSkuXG4gICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNzI5N1xuICAgIC8vIFRoaXMgcGF0aCBpcyBhbHNvIHRha2VuIGlmIGEgQ1NQIGRpc2FsbG93cyBldmFsLlxuICAgIGlmICghc3VwcG9ydHNTb3VyY2VVUkwpIHtcbiAgICAgIGxldCBwcm9taXNlcyA9IGFzc2V0cy5tYXAoYXNzZXQgPT4ge1xuICAgICAgICB2YXIgX2htckRvd25sb2FkO1xuICAgICAgICByZXR1cm4gKF9obXJEb3dubG9hZCA9IGhtckRvd25sb2FkKGFzc2V0KSkgPT09IG51bGwgfHwgX2htckRvd25sb2FkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaG1yRG93bmxvYWQuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAvLyBXZWIgZXh0ZW5zaW9uIGZpeFxuICAgICAgICAgIGlmIChleHRDdHggJiYgZXh0Q3R4LnJ1bnRpbWUgJiYgZXh0Q3R4LnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKS5tYW5pZmVzdF92ZXJzaW9uID09IDMgJiYgdHlwZW9mIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSAhPSAndW5kZWZpbmVkJyAmJiBnbG9iYWwgaW5zdGFuY2VvZiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUpIHtcbiAgICAgICAgICAgIGV4dEN0eC5ydW50aW1lLnJlbG9hZCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBzY3JpcHRzVG9SZW1vdmUgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuICAgIGFzc2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChhc3NldCkge1xuICAgICAgaG1yQXBwbHkobW9kdWxlLmJ1bmRsZS5yb290LCBhc3NldCk7XG4gICAgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgZGVsZXRlIGdsb2JhbC5wYXJjZWxIb3RVcGRhdGU7XG4gICAgaWYgKHNjcmlwdHNUb1JlbW92ZSkge1xuICAgICAgc2NyaXB0c1RvUmVtb3ZlLmZvckVhY2goc2NyaXB0ID0+IHtcbiAgICAgICAgaWYgKHNjcmlwdCkge1xuICAgICAgICAgIHZhciBfZG9jdW1lbnQkaGVhZDI7XG4gICAgICAgICAgKF9kb2N1bWVudCRoZWFkMiA9IGRvY3VtZW50LmhlYWQpID09PSBudWxsIHx8IF9kb2N1bWVudCRoZWFkMiA9PT0gdm9pZCAwIHx8IF9kb2N1bWVudCRoZWFkMi5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGhtckFwcGx5KGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgYXNzZXQgLyo6ICBITVJBc3NldCAqLykge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGFzc2V0LnR5cGUgPT09ICdjc3MnKSB7XG4gICAgcmVsb2FkQ1NTKCk7XG4gIH0gZWxzZSBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIGxldCBkZXBzID0gYXNzZXQuZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXTtcbiAgICBpZiAoZGVwcykge1xuICAgICAgaWYgKG1vZHVsZXNbYXNzZXQuaWRdKSB7XG4gICAgICAgIC8vIFJlbW92ZSBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgcmVtb3ZlZCBhbmQgd2lsbCBiZWNvbWUgb3JwaGFuZWQuXG4gICAgICAgIC8vIFRoaXMgaXMgbmVjZXNzYXJ5IHNvIHRoYXQgaWYgdGhlIGFzc2V0IGlzIGFkZGVkIGJhY2sgYWdhaW4sIHRoZSBjYWNoZSBpcyBnb25lLCBhbmQgd2UgcHJldmVudCBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gICAgICAgIGxldCBvbGREZXBzID0gbW9kdWxlc1thc3NldC5pZF1bMV07XG4gICAgICAgIGZvciAobGV0IGRlcCBpbiBvbGREZXBzKSB7XG4gICAgICAgICAgaWYgKCFkZXBzW2RlcF0gfHwgZGVwc1tkZXBdICE9PSBvbGREZXBzW2RlcF0pIHtcbiAgICAgICAgICAgIGxldCBpZCA9IG9sZERlcHNbZGVwXTtcbiAgICAgICAgICAgIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgICAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICBobXJEZWxldGUobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHNTb3VyY2VVUkwpIHtcbiAgICAgICAgLy8gR2xvYmFsIGV2YWwuIFdlIHdvdWxkIHVzZSBgbmV3IEZ1bmN0aW9uYCBoZXJlIGJ1dCBicm93c2VyXG4gICAgICAgIC8vIHN1cHBvcnQgZm9yIHNvdXJjZSBtYXBzIGlzIGJldHRlciB3aXRoIGV2YWwuXG4gICAgICAgICgwLCBldmFsKShhc3NldC5vdXRwdXQpO1xuICAgICAgfVxuXG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsZXQgZm4gPSBnbG9iYWwucGFyY2VsSG90VXBkYXRlW2Fzc2V0LmlkXTtcbiAgICAgIG1vZHVsZXNbYXNzZXQuaWRdID0gW2ZuLCBkZXBzXTtcbiAgICB9XG5cbiAgICAvLyBBbHdheXMgdHJhdmVyc2UgdG8gdGhlIHBhcmVudCBidW5kbGUsIGV2ZW4gaWYgd2UgYWxyZWFkeSByZXBsYWNlZCB0aGUgYXNzZXQgaW4gdGhpcyBidW5kbGUuXG4gICAgLy8gVGhpcyBpcyByZXF1aXJlZCBpbiBjYXNlIG1vZHVsZXMgYXJlIGR1cGxpY2F0ZWQuIFdlIG5lZWQgdG8gZW5zdXJlIGFsbCBpbnN0YW5jZXMgaGF2ZSB0aGUgdXBkYXRlZCBjb2RlLlxuICAgIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgICBobXJBcHBseShidW5kbGUucGFyZW50LCBhc3NldCk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBobXJEZWxldGUoYnVuZGxlLCBpZCkge1xuICBsZXQgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKG1vZHVsZXNbaWRdKSB7XG4gICAgLy8gQ29sbGVjdCBkZXBlbmRlbmNpZXMgdGhhdCB3aWxsIGJlY29tZSBvcnBoYW5lZCB3aGVuIHRoaXMgbW9kdWxlIGlzIGRlbGV0ZWQuXG4gICAgbGV0IGRlcHMgPSBtb2R1bGVzW2lkXVsxXTtcbiAgICBsZXQgb3JwaGFucyA9IFtdO1xuICAgIGZvciAobGV0IGRlcCBpbiBkZXBzKSB7XG4gICAgICBsZXQgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBkZXBzW2RlcF0pO1xuICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIG9ycGhhbnMucHVzaChkZXBzW2RlcF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIERlbGV0ZSB0aGUgbW9kdWxlLiBUaGlzIG11c3QgYmUgZG9uZSBiZWZvcmUgZGVsZXRpbmcgZGVwZW5kZW5jaWVzIGluIGNhc2Ugb2YgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLlxuICAgIGRlbGV0ZSBtb2R1bGVzW2lkXTtcbiAgICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTtcblxuICAgIC8vIE5vdyBkZWxldGUgdGhlIG9ycGhhbnMuXG4gICAgb3JwaGFucy5mb3JFYWNoKGlkID0+IHtcbiAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChidW5kbGUucGFyZW50KSB7XG4gICAgaG1yRGVsZXRlKGJ1bmRsZS5wYXJlbnQsIGlkKTtcbiAgfVxufVxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2soYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBpZCAvKjogc3RyaW5nICovLCBkZXBzQnlCdW5kbGUgLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki8pIHtcbiAgY2hlY2tlZEFzc2V0cyA9IHt9O1xuICBpZiAoaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlLCBpZCwgZGVwc0J5QnVuZGxlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gVHJhdmVyc2UgcGFyZW50cyBicmVhZHRoIGZpcnN0LiBBbGwgcG9zc2libGUgYW5jZXN0cmllcyBtdXN0IGFjY2VwdCB0aGUgSE1SIHVwZGF0ZSwgb3Igd2UnbGwgcmVsb2FkLlxuICBsZXQgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gIGxldCBhY2NlcHRlZCA9IGZhbHNlO1xuICB3aGlsZSAocGFyZW50cy5sZW5ndGggPiAwKSB7XG4gICAgbGV0IHYgPSBwYXJlbnRzLnNoaWZ0KCk7XG4gICAgbGV0IGEgPSBobXJBY2NlcHRDaGVja09uZSh2WzBdLCB2WzFdLCBudWxsKTtcbiAgICBpZiAoYSkge1xuICAgICAgLy8gSWYgdGhpcyBwYXJlbnQgYWNjZXB0cywgc3RvcCB0cmF2ZXJzaW5nIHVwd2FyZCwgYnV0IHN0aWxsIGNvbnNpZGVyIHNpYmxpbmdzLlxuICAgICAgYWNjZXB0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoYSAhPT0gbnVsbCkge1xuICAgICAgLy8gT3RoZXJ3aXNlLCBxdWV1ZSB0aGUgcGFyZW50cyBpbiB0aGUgbmV4dCBsZXZlbCB1cHdhcmQuXG4gICAgICBsZXQgcCA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCB2WzFdKTtcbiAgICAgIGlmIChwLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBJZiB0aGVyZSBhcmUgbm8gcGFyZW50cywgdGhlbiB3ZSd2ZSByZWFjaGVkIGFuIGVudHJ5IHdpdGhvdXQgYWNjZXB0aW5nLiBSZWxvYWQuXG4gICAgICAgIGFjY2VwdGVkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcGFyZW50cy5wdXNoKC4uLnApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYWNjZXB0ZWQ7XG59XG5mdW5jdGlvbiBobXJBY2NlcHRDaGVja09uZShidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8sIGRlcHNCeUJ1bmRsZSAvKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qLykge1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGRlcHNCeUJ1bmRsZSAmJiAhZGVwc0J5QnVuZGxlW2J1bmRsZS5ITVJfQlVORExFX0lEXSkge1xuICAgIC8vIElmIHdlIHJlYWNoZWQgdGhlIHJvb3QgYnVuZGxlIHdpdGhvdXQgZmluZGluZyB3aGVyZSB0aGUgYXNzZXQgc2hvdWxkIGdvLFxuICAgIC8vIHRoZXJlJ3Mgbm90aGluZyB0byBkby4gTWFyayBhcyBcImFjY2VwdGVkXCIgc28gd2UgZG9uJ3QgcmVsb2FkIHRoZSBwYWdlLlxuICAgIGlmICghYnVuZGxlLnBhcmVudCkge1xuICAgICAgYnVuZGxlTm90Rm91bmQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBobXJBY2NlcHRDaGVja09uZShidW5kbGUucGFyZW50LCBpZCwgZGVwc0J5QnVuZGxlKTtcbiAgfVxuICBpZiAoY2hlY2tlZEFzc2V0c1tpZF0pIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjaGVja2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBpZiAoIWNhY2hlZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGFzc2V0c1RvRGlzcG9zZS5wdXNoKFtidW5kbGUsIGlkXSk7XG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgYXNzZXRzVG9BY2NlcHQucHVzaChbYnVuZGxlLCBpZF0pO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGhtckRpc3Bvc2VRdWV1ZSgpIHtcbiAgLy8gRGlzcG9zZSBhbGwgb2xkIGFzc2V0cy5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc3NldHNUb0Rpc3Bvc2UubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgaWQgPSBhc3NldHNUb0Rpc3Bvc2VbaV1bMV07XG4gICAgaWYgKCFkaXNwb3NlZEFzc2V0c1tpZF0pIHtcbiAgICAgIGhtckRpc3Bvc2UoYXNzZXRzVG9EaXNwb3NlW2ldWzBdLCBpZCk7XG4gICAgICBkaXNwb3NlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICAgIH1cbiAgfVxuICBhc3NldHNUb0Rpc3Bvc2UgPSBbXTtcbn1cbmZ1bmN0aW9uIGhtckRpc3Bvc2UoYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBpZCAvKjogc3RyaW5nICovKSB7XG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBidW5kbGUuaG90RGF0YVtpZF0gPSB7fTtcbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90KSB7XG4gICAgY2FjaGVkLmhvdC5kYXRhID0gYnVuZGxlLmhvdERhdGFbaWRdO1xuICB9XG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIGNiKGJ1bmRsZS5ob3REYXRhW2lkXSk7XG4gICAgfSk7XG4gIH1cbiAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07XG59XG5mdW5jdGlvbiBobXJBY2NlcHQoYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBpZCAvKjogc3RyaW5nICovKSB7XG4gIC8vIEV4ZWN1dGUgdGhlIG1vZHVsZS5cbiAgYnVuZGxlKGlkKTtcblxuICAvLyBSdW4gdGhlIGFjY2VwdCBjYWxsYmFja3MgaW4gdGhlIG5ldyB2ZXJzaW9uIG9mIHRoZSBtb2R1bGUuXG4gIHZhciBjYWNoZWQgPSBidW5kbGUuY2FjaGVbaWRdO1xuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGxldCBhc3NldHNUb0Fsc29BY2NlcHQgPSBbXTtcbiAgICBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbiAoY2IpIHtcbiAgICAgIGxldCBhZGRpdGlvbmFsQXNzZXRzID0gY2IoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYWRkaXRpb25hbEFzc2V0cykgJiYgYWRkaXRpb25hbEFzc2V0cy5sZW5ndGgpIHtcbiAgICAgICAgYXNzZXRzVG9BbHNvQWNjZXB0LnB1c2goLi4uYWRkaXRpb25hbEFzc2V0cyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGFzc2V0c1RvQWxzb0FjY2VwdC5sZW5ndGgpIHtcbiAgICAgIGxldCBoYW5kbGVkID0gYXNzZXRzVG9BbHNvQWNjZXB0LmV2ZXJ5KGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHJldHVybiBobXJBY2NlcHRDaGVjayhhWzBdLCBhWzFdKTtcbiAgICAgIH0pO1xuICAgICAgaWYgKCFoYW5kbGVkKSB7XG4gICAgICAgIHJldHVybiBmdWxsUmVsb2FkKCk7XG4gICAgICB9XG4gICAgICBobXJEaXNwb3NlUXVldWUoKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgeyBjaGVja0NsaXBib2FyZE9uQ2xpY2sgfSBmcm9tIFwiQGFjdGlvbnMvcG9wdXAvY2hlY2tDbGlwYm9hcmRPbkNsaWNrXCI7XG5pbXBvcnQgeyBkaXNwbGF5R2VuZXJhdGVkQ29tbWVudCB9IGZyb20gXCJAYWN0aW9ucy9wb3B1cC9kaXNwbGF5R2VuZXJhdGVkQ29tbWVudFwiO1xuXG5cbi8vIEZJWE1FOiBpcyB0aGlzIHJ1bi10aW1lIGV2ZW50P1xuY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFwiZ2VuZXJhdGVkQ29tbWVudFwiLCAoZGF0YSkgPT4ge1xuICAgIGlmIChkYXRhLmdlbmVyYXRlZENvbW1lbnQpIHtcbiAgICAgICAgZGlzcGxheUdlbmVyYXRlZENvbW1lbnQoZGF0YS5nZW5lcmF0ZWRDb21tZW50KTtcbiAgICB9XG59KTtcblxuZnVuY3Rpb24gcHJvY2Vzc0NsaXBib2FyZCgpIHtcbiAgICAvLyAxLSBkZXRlY3Qgd2hlbiBidXR0b24gaXMgY2xpY2tlZFxuICAgIGNvbnNvbGUubG9nKFwicHJvY2Vzc2luZyBjbGlwYm9hcmRcIik7XG4gICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvY2Vzcy1jbGlwYm9hcmRcIik7XG4gICAgYnV0dG9uPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hlY2tDbGlwYm9hcmRPbkNsaWNrKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgcHJvY2Vzc0NsaXBib2FyZCk7XG5cbiIsImxldCBsYXN0Q2xpcGJvYXJkID0gXCJcIjtcblxuZnVuY3Rpb24gaXNMaW5rZWRJblBvc3RVcmwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gL15odHRwczpcXC9cXC93d3dcXC5saW5rZWRpblxcLmNvbVxcL3Bvc3RzXFwvLy50ZXN0KHVybC50cmltKCkpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY2hlY2tDbGlwYm9hcmRPbkNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2tib2FyZCBjaGVja2luZ1wiKVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLnJlYWRUZXh0KCk7XG5cbiAgICAgICAgaWYgKHRleHQgJiYgdGV4dCAhPT0gbGFzdENsaXBib2FyZCAmJiBpc0xpbmtlZEluUG9zdFVybCh0ZXh0KSkge1xuICAgICAgICAgICAgbGFzdENsaXBib2FyZCA9IHRleHQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIvCfk4sgQ29waWVkIExpbmtlZEluIFBvc3QgVVJMOlwiLCB0ZXh0KTtcblxuICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiT1BFTl9QT1NUX1RBQlwiLFxuICAgICAgICAgICAgICAgIHVybDogdGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwiQ2xpcGJvYXJkIGFjY2VzcyBlcnJvcjpcIiwgZXJyKTtcbiAgICB9XG59XG5cbiIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKFxuICAgICAga2V5ID09PSAnZGVmYXVsdCcgfHxcbiAgICAgIGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8XG4gICAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZGVzdCwga2V5KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5R2VuZXJhdGVkQ29tbWVudChjb21tZW50OiBzdHJpbmcpIHtcbiAgICBjb25zdCBjb21tZW50Qm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb21tZW50LWJveFwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xuICAgIGNvbnN0IGNvcHlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvcHktYnRuXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXG4gICAgaWYgKGNvbW1lbnRCb3ggJiYgY29weUJ1dHRvbikge1xuICAgICAgICBjb21tZW50Qm94LnZhbHVlID0gY29tbWVudDtcbiAgICAgICAgY29weUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvcHlCdXR0b24ub25jbGljayA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29tbWVudEJveC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgY29weUJ1dHRvbi5pbm5lclRleHQgPSBcIkNvcGllZCFcIjtcbiAgICAgICAgICAgICAgICBjb21tZW50Qm94LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBnZW5lcmF0ZWRDb21tZW50OiBcIlwiIH0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gKGNvcHlCdXR0b24uaW5uZXJUZXh0ID0gXCJDb3B5IENvbW1lbnRcIiksIDE1MDApO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuKdjCBGYWlsZWQgdG8gY29weTpcIiwgZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6InBvcHVwLmI0NDg4MDdjLmpzLm1hcCJ9
