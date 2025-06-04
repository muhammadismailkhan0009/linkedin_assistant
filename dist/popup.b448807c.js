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
var _checkClipboardOnClick = require("@actions/checkClipboardOnClick");
var _displayGeneratedComment = require("@actions/displayGeneratedComment");
// FIXME: is this run-time event?
chrome.storage.local.get("generatedComment", (data)=>{
    console.log("ran this logic");
    if (data.generatedComment) (0, _displayGeneratedComment.displayGeneratedComment)(data.generatedComment);
});
function processClipboard() {
    // 1- detect when button is clicked
    console.log("processing clipboard");
    let button = document.getElementById("process-clipboard");
    button?.addEventListener("click", (0, _checkClipboardOnClick.checkClipboardOnClick));
}
document.addEventListener("DOMContentLoaded", processClipboard);

},{"@actions/checkClipboardOnClick":"2B90P","@actions/displayGeneratedComment":"jtKFd"}],"2B90P":[function(require,module,exports,__globalThis) {
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

},{}],"jtKFd":[function(require,module,exports,__globalThis) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZXMvQHBhcmNlbC9ydW50aW1lLWJyb3dzZXItaG1yL2xpYi9ydW50aW1lLTgwYTRkZTBkYTNmMGQwOGEuanMiLCJzcmMvcG9wdXAudHMiLCJzcmMvYWN0aW9ucy9jaGVja0NsaXBib2FyZE9uQ2xpY2sudHMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyIsInNyYy9hY3Rpb25zL2Rpc3BsYXlHZW5lcmF0ZWRDb21tZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBITVJfSE9TVCA9IFwibG9jYWxob3N0XCI7dmFyIEhNUl9QT1JUID0gMTIzNDt2YXIgSE1SX1NFUlZFUl9QT1JUID0gMTIzNDt2YXIgSE1SX1NFQ1VSRSA9IGZhbHNlO3ZhciBITVJfRU5WX0hBU0ggPSBcIjE5ZjI1M2NlOGQ3M2Q4NTFcIjt2YXIgSE1SX1VTRV9TU0UgPSBmYWxzZTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQgPSBcImMzOTE0MjE1YjQ0ODgwN2NcIjtcInVzZSBzdHJpY3RcIjtcblxuLyogZ2xvYmFsIEhNUl9IT1NULCBITVJfUE9SVCwgSE1SX1NFUlZFUl9QT1JULCBITVJfRU5WX0hBU0gsIEhNUl9TRUNVUkUsIEhNUl9VU0VfU1NFLCBjaHJvbWUsIGJyb3dzZXIsIF9fcGFyY2VsX19pbXBvcnRfXywgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXywgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlICovXG4vKjo6XG5pbXBvcnQgdHlwZSB7XG4gIEhNUkFzc2V0LFxuICBITVJNZXNzYWdlLFxufSBmcm9tICdAcGFyY2VsL3JlcG9ydGVyLWRldi1zZXJ2ZXIvc3JjL0hNUlNlcnZlci5qcyc7XG5pbnRlcmZhY2UgUGFyY2VsUmVxdWlyZSB7XG4gIChzdHJpbmcpOiBtaXhlZDtcbiAgY2FjaGU6IHt8W3N0cmluZ106IFBhcmNlbE1vZHVsZXx9O1xuICBob3REYXRhOiB7fFtzdHJpbmddOiBtaXhlZHx9O1xuICBNb2R1bGU6IGFueTtcbiAgcGFyZW50OiA/UGFyY2VsUmVxdWlyZTtcbiAgaXNQYXJjZWxSZXF1aXJlOiB0cnVlO1xuICBtb2R1bGVzOiB7fFtzdHJpbmddOiBbRnVuY3Rpb24sIHt8W3N0cmluZ106IHN0cmluZ3x9XXx9O1xuICBITVJfQlVORExFX0lEOiBzdHJpbmc7XG4gIHJvb3Q6IFBhcmNlbFJlcXVpcmU7XG59XG5pbnRlcmZhY2UgUGFyY2VsTW9kdWxlIHtcbiAgaG90OiB7fFxuICAgIGRhdGE6IG1peGVkLFxuICAgIGFjY2VwdChjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICBkaXNwb3NlKGNiOiAobWl4ZWQpID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGFjY2VwdChkZXBzOiBBcnJheTxzdHJpbmc+IHwgc3RyaW5nLCBjYjogKEZ1bmN0aW9uKSA9PiB2b2lkKTogdm9pZCxcbiAgICAvLyBkZWNsaW5lKCk6IHZvaWQsXG4gICAgX2FjY2VwdENhbGxiYWNrczogQXJyYXk8KEZ1bmN0aW9uKSA9PiB2b2lkPixcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogQXJyYXk8KG1peGVkKSA9PiB2b2lkPixcbiAgfH07XG59XG5pbnRlcmZhY2UgRXh0ZW5zaW9uQ29udGV4dCB7XG4gIHJ1bnRpbWU6IHt8XG4gICAgcmVsb2FkKCk6IHZvaWQsXG4gICAgZ2V0VVJMKHVybDogc3RyaW5nKTogc3RyaW5nO1xuICAgIGdldE1hbmlmZXN0KCk6IHttYW5pZmVzdF92ZXJzaW9uOiBudW1iZXIsIC4uLn07XG4gIHx9O1xufVxuZGVjbGFyZSB2YXIgbW9kdWxlOiB7YnVuZGxlOiBQYXJjZWxSZXF1aXJlLCAuLi59O1xuZGVjbGFyZSB2YXIgSE1SX0hPU1Q6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9QT1JUOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfU0VSVkVSX1BPUlQ6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9FTlZfSEFTSDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1NFQ1VSRTogYm9vbGVhbjtcbmRlY2xhcmUgdmFyIEhNUl9VU0VfU1NFOiBib29sZWFuO1xuZGVjbGFyZSB2YXIgY2hyb21lOiBFeHRlbnNpb25Db250ZXh0O1xuZGVjbGFyZSB2YXIgYnJvd3NlcjogRXh0ZW5zaW9uQ29udGV4dDtcbmRlY2xhcmUgdmFyIF9fcGFyY2VsX19pbXBvcnRfXzogKHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbmRlY2xhcmUgdmFyIF9fcGFyY2VsX19pbXBvcnRTY3JpcHRzX186IChzdHJpbmcpID0+IFByb21pc2U8dm9pZD47XG5kZWNsYXJlIHZhciBnbG9iYWxUaGlzOiB0eXBlb2Ygc2VsZjtcbmRlY2xhcmUgdmFyIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZTogT2JqZWN0O1xuKi9cbnZhciBPVkVSTEFZX0lEID0gJ19fcGFyY2VsX19lcnJvcl9fb3ZlcmxheV9fJztcbnZhciBPbGRNb2R1bGUgPSBtb2R1bGUuYnVuZGxlLk1vZHVsZTtcbmZ1bmN0aW9uIE1vZHVsZShtb2R1bGVOYW1lKSB7XG4gIE9sZE1vZHVsZS5jYWxsKHRoaXMsIG1vZHVsZU5hbWUpO1xuICB0aGlzLmhvdCA9IHtcbiAgICBkYXRhOiBtb2R1bGUuYnVuZGxlLmhvdERhdGFbbW9kdWxlTmFtZV0sXG4gICAgX2FjY2VwdENhbGxiYWNrczogW10sXG4gICAgX2Rpc3Bvc2VDYWxsYmFja3M6IFtdLFxuICAgIGFjY2VwdDogZnVuY3Rpb24gKGZuKSB7XG4gICAgICB0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaChmbiB8fCBmdW5jdGlvbiAoKSB7fSk7XG4gICAgfSxcbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHRoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaChmbik7XG4gICAgfVxuICB9O1xuICBtb2R1bGUuYnVuZGxlLmhvdERhdGFbbW9kdWxlTmFtZV0gPSB1bmRlZmluZWQ7XG59XG5tb2R1bGUuYnVuZGxlLk1vZHVsZSA9IE1vZHVsZTtcbm1vZHVsZS5idW5kbGUuaG90RGF0YSA9IHt9O1xudmFyIGNoZWNrZWRBc3NldHMgLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLyxcbiAgZGlzcG9zZWRBc3NldHMgLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLyxcbiAgYXNzZXRzVG9EaXNwb3NlIC8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi8sXG4gIGFzc2V0c1RvQWNjZXB0IC8qOiBBcnJheTxbUGFyY2VsUmVxdWlyZSwgc3RyaW5nXT4gKi8sXG4gIGJ1bmRsZU5vdEZvdW5kID0gZmFsc2U7XG5mdW5jdGlvbiBnZXRIb3N0bmFtZSgpIHtcbiAgcmV0dXJuIEhNUl9IT1NUIHx8ICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnICYmIGxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoJ2h0dHAnKSA9PT0gMCA/IGxvY2F0aW9uLmhvc3RuYW1lIDogJ2xvY2FsaG9zdCcpO1xufVxuZnVuY3Rpb24gZ2V0UG9ydCgpIHtcbiAgcmV0dXJuIEhNUl9QT1JUIHx8ICh0eXBlb2YgbG9jYXRpb24gIT09ICd1bmRlZmluZWQnID8gbG9jYXRpb24ucG9ydCA6IEhNUl9TRVJWRVJfUE9SVCk7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbmxldCBXZWJTb2NrZXQgPSBnbG9iYWxUaGlzLldlYlNvY2tldDtcbmlmICghV2ViU29ja2V0ICYmIHR5cGVvZiBtb2R1bGUuYnVuZGxlLnJvb3QgPT09ICdmdW5jdGlvbicpIHtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZ2xvYmFsLWFzc2lnblxuICAgIFdlYlNvY2tldCA9IG1vZHVsZS5idW5kbGUucm9vdCgnd3MnKTtcbiAgfSBjYXRjaCB7XG4gICAgLy8gaWdub3JlLlxuICB9XG59XG52YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xudmFyIHBvcnQgPSBnZXRQb3J0KCk7XG52YXIgcHJvdG9jb2wgPSBITVJfU0VDVVJFIHx8IHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonICYmICFbJ2xvY2FsaG9zdCcsICcxMjcuMC4wLjEnLCAnMC4wLjAuMCddLmluY2x1ZGVzKGhvc3RuYW1lKSA/ICd3c3MnIDogJ3dzJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxudmFyIHBhcmVudCA9IG1vZHVsZS5idW5kbGUucGFyZW50O1xuaWYgKCFwYXJlbnQgfHwgIXBhcmVudC5pc1BhcmNlbFJlcXVpcmUpIHtcbiAgLy8gV2ViIGV4dGVuc2lvbiBjb250ZXh0XG4gIHZhciBleHRDdHggPSB0eXBlb2YgYnJvd3NlciA9PT0gJ3VuZGVmaW5lZCcgPyB0eXBlb2YgY2hyb21lID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBjaHJvbWUgOiBicm93c2VyO1xuXG4gIC8vIFNhZmFyaSBkb2Vzbid0IHN1cHBvcnQgc291cmNlVVJMIGluIGVycm9yIHN0YWNrcy5cbiAgLy8gZXZhbCBtYXkgYWxzbyBiZSBkaXNhYmxlZCB2aWEgQ1NQLCBzbyBkbyBhIHF1aWNrIGNoZWNrLlxuICB2YXIgc3VwcG9ydHNTb3VyY2VVUkwgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICAoMCwgZXZhbCkoJ3Rocm93IG5ldyBFcnJvcihcInRlc3RcIik7IC8vIyBzb3VyY2VVUkw9dGVzdC5qcycpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBzdXBwb3J0c1NvdXJjZVVSTCA9IGVyci5zdGFjay5pbmNsdWRlcygndGVzdC5qcycpO1xuICB9XG4gIHZhciB3cztcbiAgaWYgKEhNUl9VU0VfU1NFKSB7XG4gICAgd3MgPSBuZXcgRXZlbnRTb3VyY2UoJy9fX3BhcmNlbF9obXInKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgLy8gSWYgd2UncmUgcnVubmluZyBpbiB0aGUgZGV2IHNlcnZlcidzIG5vZGUgcnVubmVyLCBsaXN0ZW4gZm9yIG1lc3NhZ2VzIG9uIHRoZSBwYXJlbnQgcG9ydC5cbiAgICAgIGxldCB7XG4gICAgICAgIHdvcmtlckRhdGEsXG4gICAgICAgIHBhcmVudFBvcnRcbiAgICAgIH0gPSBtb2R1bGUuYnVuZGxlLnJvb3QoJ25vZGU6d29ya2VyX3RocmVhZHMnKSAvKjogYW55Ki87XG4gICAgICBpZiAod29ya2VyRGF0YSAhPT0gbnVsbCAmJiB3b3JrZXJEYXRhICE9PSB2b2lkIDAgJiYgd29ya2VyRGF0YS5fX3BhcmNlbCkge1xuICAgICAgICBwYXJlbnRQb3J0Lm9uKCdtZXNzYWdlJywgYXN5bmMgbWVzc2FnZSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGhhbmRsZU1lc3NhZ2UobWVzc2FnZSk7XG4gICAgICAgICAgICBwYXJlbnRQb3J0LnBvc3RNZXNzYWdlKCd1cGRhdGVkJyk7XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBwYXJlbnRQb3J0LnBvc3RNZXNzYWdlKCdyZXN0YXJ0Jyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZnRlciB0aGUgYnVuZGxlIGhhcyBmaW5pc2hlZCBydW5uaW5nLCBub3RpZnkgdGhlIGRldiBzZXJ2ZXIgdGhhdCB0aGUgSE1SIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAgICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4gcGFyZW50UG9ydC5wb3N0TWVzc2FnZSgncmVhZHknKSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCB7XG4gICAgICBpZiAodHlwZW9mIFdlYlNvY2tldCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3cyA9IG5ldyBXZWJTb2NrZXQocHJvdG9jb2wgKyAnOi8vJyArIGhvc3RuYW1lICsgKHBvcnQgPyAnOicgKyBwb3J0IDogJycpICsgJy8nKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gSWdub3JlIGNsb3VkZmxhcmUgd29ya2VycyBlcnJvci5cbiAgICAgICAgICBpZiAoZXJyLm1lc3NhZ2UgJiYgIWVyci5tZXNzYWdlLmluY2x1ZGVzKCdEaXNhbGxvd2VkIG9wZXJhdGlvbiBjYWxsZWQgd2l0aGluIGdsb2JhbCBzY29wZScpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKHdzKSB7XG4gICAgLy8gJEZsb3dGaXhNZVxuICAgIHdzLm9ubWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uIChldmVudCAvKjoge2RhdGE6IHN0cmluZywgLi4ufSAqLykge1xuICAgICAgdmFyIGRhdGEgLyo6IEhNUk1lc3NhZ2UgKi8gPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgYXdhaXQgaGFuZGxlTWVzc2FnZShkYXRhKTtcbiAgICB9O1xuICAgIGlmICh3cyBpbnN0YW5jZW9mIFdlYlNvY2tldCkge1xuICAgICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLm1lc3NhZ2UpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB3cy5vbmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1twYXJjZWxdIPCfmqggQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciB3YXMgbG9zdCcpO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZGF0YSAvKjogSE1STWVzc2FnZSAqLykge1xuICBjaGVja2VkQXNzZXRzID0ge30gLyo6IHt8W3N0cmluZ106IGJvb2xlYW58fSAqLztcbiAgZGlzcG9zZWRBc3NldHMgPSB7fSAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovO1xuICBhc3NldHNUb0FjY2VwdCA9IFtdO1xuICBhc3NldHNUb0Rpc3Bvc2UgPSBbXTtcbiAgYnVuZGxlTm90Rm91bmQgPSBmYWxzZTtcbiAgaWYgKGRhdGEudHlwZSA9PT0gJ3JlbG9hZCcpIHtcbiAgICBmdWxsUmVsb2FkKCk7XG4gIH0gZWxzZSBpZiAoZGF0YS50eXBlID09PSAndXBkYXRlJykge1xuICAgIC8vIFJlbW92ZSBlcnJvciBvdmVybGF5IGlmIHRoZXJlIGlzIG9uZVxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICB9XG4gICAgbGV0IGFzc2V0cyA9IGRhdGEuYXNzZXRzO1xuXG4gICAgLy8gSGFuZGxlIEhNUiBVcGRhdGVcbiAgICBsZXQgaGFuZGxlZCA9IGFzc2V0cy5ldmVyeShhc3NldCA9PiB7XG4gICAgICByZXR1cm4gYXNzZXQudHlwZSA9PT0gJ2NzcycgfHwgYXNzZXQudHlwZSA9PT0gJ2pzJyAmJiBobXJBY2NlcHRDaGVjayhtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0LmlkLCBhc3NldC5kZXBzQnlCdW5kbGUpO1xuICAgIH0pO1xuXG4gICAgLy8gRGlzcGF0Y2ggYSBjdXN0b20gZXZlbnQgaW4gY2FzZSBhIGJ1bmRsZSB3YXMgbm90IGZvdW5kLiBUaGlzIG1pZ2h0IG1lYW5cbiAgICAvLyBhbiBhc3NldCBvbiB0aGUgc2VydmVyIGNoYW5nZWQgYW5kIHdlIHNob3VsZCByZWxvYWQgdGhlIHBhZ2UuIFRoaXMgZXZlbnRcbiAgICAvLyBnaXZlcyB0aGUgY2xpZW50IGFuIG9wcG9ydHVuaXR5IHRvIHJlZnJlc2ggd2l0aG91dCBsb3Npbmcgc3RhdGVcbiAgICAvLyAoZS5nLiB2aWEgUmVhY3QgU2VydmVyIENvbXBvbmVudHMpLiBJZiBlLnByZXZlbnREZWZhdWx0KCkgaXMgbm90IGNhbGxlZCxcbiAgICAvLyB3ZSB3aWxsIHRyaWdnZXIgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICAgIGlmIChoYW5kbGVkICYmIGJ1bmRsZU5vdEZvdW5kICYmIGFzc2V0cy5zb21lKGEgPT4gYS5lbnZIYXNoICE9PSBITVJfRU5WX0hBU0gpICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBDdXN0b21FdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGhhbmRsZWQgPSAhd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwYXJjZWxobXJyZWxvYWQnLCB7XG4gICAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICAgIH0pKTtcbiAgICB9XG4gICAgaWYgKGhhbmRsZWQpIHtcbiAgICAgIGNvbnNvbGUuY2xlYXIoKTtcblxuICAgICAgLy8gRGlzcGF0Y2ggY3VzdG9tIGV2ZW50IHNvIG90aGVyIHJ1bnRpbWVzIChlLmcgUmVhY3QgUmVmcmVzaCkgYXJlIGF3YXJlLlxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBDdXN0b21FdmVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwYXJjZWxobXJhY2NlcHQnKSk7XG4gICAgICB9XG4gICAgICBhd2FpdCBobXJBcHBseVVwZGF0ZXMoYXNzZXRzKTtcbiAgICAgIGhtckRpc3Bvc2VRdWV1ZSgpO1xuXG4gICAgICAvLyBSdW4gYWNjZXB0IGNhbGxiYWNrcy4gVGhpcyB3aWxsIGFsc28gcmUtZXhlY3V0ZSBvdGhlciBkaXNwb3NlZCBhc3NldHMgaW4gdG9wb2xvZ2ljYWwgb3JkZXIuXG4gICAgICBsZXQgcHJvY2Vzc2VkQXNzZXRzID0ge307XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0c1RvQWNjZXB0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBpZCA9IGFzc2V0c1RvQWNjZXB0W2ldWzFdO1xuICAgICAgICBpZiAoIXByb2Nlc3NlZEFzc2V0c1tpZF0pIHtcbiAgICAgICAgICBobXJBY2NlcHQoYXNzZXRzVG9BY2NlcHRbaV1bMF0sIGlkKTtcbiAgICAgICAgICBwcm9jZXNzZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBmdWxsUmVsb2FkKCk7XG4gIH1cbiAgaWYgKGRhdGEudHlwZSA9PT0gJ2Vycm9yJykge1xuICAgIC8vIExvZyBwYXJjZWwgZXJyb3JzIHRvIGNvbnNvbGVcbiAgICBmb3IgKGxldCBhbnNpRGlhZ25vc3RpYyBvZiBkYXRhLmRpYWdub3N0aWNzLmFuc2kpIHtcbiAgICAgIGxldCBzdGFjayA9IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA/IGFuc2lEaWFnbm9zdGljLmNvZGVmcmFtZSA6IGFuc2lEaWFnbm9zdGljLnN0YWNrO1xuICAgICAgY29uc29sZS5lcnJvcign8J+aqCBbcGFyY2VsXTogJyArIGFuc2lEaWFnbm9zdGljLm1lc3NhZ2UgKyAnXFxuJyArIHN0YWNrICsgJ1xcblxcbicgKyBhbnNpRGlhZ25vc3RpYy5oaW50cy5qb2luKCdcXG4nKSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBSZW5kZXIgdGhlIGZhbmN5IGh0bWwgb3ZlcmxheVxuICAgICAgcmVtb3ZlRXJyb3JPdmVybGF5KCk7XG4gICAgICB2YXIgb3ZlcmxheSA9IGNyZWF0ZUVycm9yT3ZlcmxheShkYXRhLmRpYWdub3N0aWNzLmh0bWwpO1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIHJlbW92ZUVycm9yT3ZlcmxheSgpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChPVkVSTEFZX0lEKTtcbiAgaWYgKG92ZXJsYXkpIHtcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdbcGFyY2VsXSDinKggRXJyb3IgcmVzb2x2ZWQnKTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRXJyb3JPdmVybGF5KGRpYWdub3N0aWNzKSB7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG92ZXJsYXkuaWQgPSBPVkVSTEFZX0lEO1xuICBsZXQgZXJyb3JIVE1MID0gJzxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOiBibGFjazsgb3BhY2l0eTogMC44NTsgZm9udC1zaXplOiAxNnB4OyBjb2xvcjogd2hpdGU7IHBvc2l0aW9uOiBmaXhlZDsgaGVpZ2h0OiAxMDAlOyB3aWR0aDogMTAwJTsgdG9wOiAwcHg7IGxlZnQ6IDBweDsgcGFkZGluZzogMzBweDsgZm9udC1mYW1pbHk6IE1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlOyB6LWluZGV4OiA5OTk5O1wiPic7XG4gIGZvciAobGV0IGRpYWdub3N0aWMgb2YgZGlhZ25vc3RpY3MpIHtcbiAgICBsZXQgc3RhY2sgPSBkaWFnbm9zdGljLmZyYW1lcy5sZW5ndGggPyBkaWFnbm9zdGljLmZyYW1lcy5yZWR1Y2UoKHAsIGZyYW1lKSA9PiB7XG4gICAgICByZXR1cm4gYCR7cH1cbjxhIGhyZWY9XCIke3Byb3RvY29sID09PSAnd3NzJyA/ICdodHRwcycgOiAnaHR0cCd9Oi8vJHtob3N0bmFtZX06JHtwb3J0fS9fX3BhcmNlbF9sYXVuY2hfZWRpdG9yP2ZpbGU9JHtlbmNvZGVVUklDb21wb25lbnQoZnJhbWUubG9jYXRpb24pfVwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IGNvbG9yOiAjODg4XCIgb25jbGljaz1cImZldGNoKHRoaXMuaHJlZik7IHJldHVybiBmYWxzZVwiPiR7ZnJhbWUubG9jYXRpb259PC9hPlxuJHtmcmFtZS5jb2RlfWA7XG4gICAgfSwgJycpIDogZGlhZ25vc3RpYy5zdGFjaztcbiAgICBlcnJvckhUTUwgKz0gYFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IGJvbGQ7IG1hcmdpbi10b3A6IDIwcHg7XCI+XG4gICAgICAgICAg8J+aqCAke2RpYWdub3N0aWMubWVzc2FnZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwcmU+JHtzdGFja308L3ByZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAke2RpYWdub3N0aWMuaGludHMubWFwKGhpbnQgPT4gJzxkaXY+8J+SoSAnICsgaGludCArICc8L2Rpdj4nKS5qb2luKCcnKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICR7ZGlhZ25vc3RpYy5kb2N1bWVudGF0aW9uID8gYDxkaXY+8J+TnSA8YSBzdHlsZT1cImNvbG9yOiB2aW9sZXRcIiBocmVmPVwiJHtkaWFnbm9zdGljLmRvY3VtZW50YXRpb259XCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGVhcm4gbW9yZTwvYT48L2Rpdj5gIDogJyd9XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG4gIGVycm9ySFRNTCArPSAnPC9kaXY+JztcbiAgb3ZlcmxheS5pbm5lckhUTUwgPSBlcnJvckhUTUw7XG4gIHJldHVybiBvdmVybGF5O1xufVxuZnVuY3Rpb24gZnVsbFJlbG9hZCgpIHtcbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3JlbG9hZCcgaW4gbG9jYXRpb24pIHtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXh0Q3R4ICE9PSAndW5kZWZpbmVkJyAmJiBleHRDdHggJiYgZXh0Q3R4LnJ1bnRpbWUgJiYgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKSB7XG4gICAgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKCk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB7XG4gICAgICAgIHdvcmtlckRhdGEsXG4gICAgICAgIHBhcmVudFBvcnRcbiAgICAgIH0gPSBtb2R1bGUuYnVuZGxlLnJvb3QoJ25vZGU6d29ya2VyX3RocmVhZHMnKSAvKjogYW55Ki87XG4gICAgICBpZiAod29ya2VyRGF0YSAhPT0gbnVsbCAmJiB3b3JrZXJEYXRhICE9PSB2b2lkIDAgJiYgd29ya2VyRGF0YS5fX3BhcmNlbCkge1xuICAgICAgICBwYXJlbnRQb3J0LnBvc3RNZXNzYWdlKCdyZXN0YXJ0Jyk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdbcGFyY2VsXSDimqDvuI8gQW4gSE1SIHVwZGF0ZSB3YXMgbm90IGFjY2VwdGVkLiBQbGVhc2UgcmVzdGFydCB0aGUgcHJvY2Vzcy4nKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGdldFBhcmVudHMoYnVuZGxlLCBpZCkgLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqL3tcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBwYXJlbnRzID0gW107XG4gIHZhciBrLCBkLCBkZXA7XG4gIGZvciAoayBpbiBtb2R1bGVzKSB7XG4gICAgZm9yIChkIGluIG1vZHVsZXNba11bMV0pIHtcbiAgICAgIGRlcCA9IG1vZHVsZXNba11bMV1bZF07XG4gICAgICBpZiAoZGVwID09PSBpZCB8fCBBcnJheS5pc0FycmF5KGRlcCkgJiYgZGVwW2RlcC5sZW5ndGggLSAxXSA9PT0gaWQpIHtcbiAgICAgICAgcGFyZW50cy5wdXNoKFtidW5kbGUsIGtdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBwYXJlbnRzID0gcGFyZW50cy5jb25jYXQoZ2V0UGFyZW50cyhidW5kbGUucGFyZW50LCBpZCkpO1xuICB9XG4gIHJldHVybiBwYXJlbnRzO1xufVxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rKSB7XG4gIHZhciBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgaWYgKCFocmVmKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuZXdMaW5rID0gbGluay5jbG9uZU5vZGUoKTtcbiAgbmV3TGluay5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxpbmsucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgIH1cbiAgfTtcbiAgbmV3TGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLFxuICAvLyAkRmxvd0ZpeE1lXG4gIGhyZWYuc3BsaXQoJz8nKVswXSArICc/JyArIERhdGUubm93KCkpO1xuICAvLyAkRmxvd0ZpeE1lXG4gIGxpbmsucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3TGluaywgbGluay5uZXh0U2libGluZyk7XG59XG52YXIgY3NzVGltZW91dCA9IG51bGw7XG5mdW5jdGlvbiByZWxvYWRDU1MoKSB7XG4gIGlmIChjc3NUaW1lb3V0IHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY3NzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICRGbG93Rml4TWVbaW5jb21wYXRpYmxlLXR5cGVdXG4gICAgICB2YXIgaHJlZiAvKjogc3RyaW5nICovID0gbGlua3NbaV0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICB2YXIgaG9zdG5hbWUgPSBnZXRIb3N0bmFtZSgpO1xuICAgICAgdmFyIHNlcnZlZEZyb21ITVJTZXJ2ZXIgPSBob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgPyBuZXcgUmVnRXhwKCdeKGh0dHBzPzpcXFxcL1xcXFwvKDAuMC4wLjB8MTI3LjAuMC4xKXxsb2NhbGhvc3QpOicgKyBnZXRQb3J0KCkpLnRlc3QoaHJlZikgOiBocmVmLmluZGV4T2YoaG9zdG5hbWUgKyAnOicgKyBnZXRQb3J0KCkpO1xuICAgICAgdmFyIGFic29sdXRlID0gL15odHRwcz86XFwvXFwvL2kudGVzdChocmVmKSAmJiBocmVmLmluZGV4T2YobG9jYXRpb24ub3JpZ2luKSAhPT0gMCAmJiAhc2VydmVkRnJvbUhNUlNlcnZlcjtcbiAgICAgIGlmICghYWJzb2x1dGUpIHtcbiAgICAgICAgdXBkYXRlTGluayhsaW5rc1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNzc1RpbWVvdXQgPSBudWxsO1xuICB9LCA1MCk7XG59XG5mdW5jdGlvbiBobXJEb3dubG9hZChhc3NldCkge1xuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2pzJykge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICBzY3JpcHQuc3JjID0gYXNzZXQudXJsICsgJz90PScgKyBEYXRlLm5vdygpO1xuICAgICAgaWYgKGFzc2V0Lm91dHB1dEZvcm1hdCA9PT0gJ2VzbW9kdWxlJykge1xuICAgICAgICBzY3JpcHQudHlwZSA9ICdtb2R1bGUnO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdmFyIF9kb2N1bWVudCRoZWFkO1xuICAgICAgICBzY3JpcHQub25sb2FkID0gKCkgPT4gcmVzb2x2ZShzY3JpcHQpO1xuICAgICAgICBzY3JpcHQub25lcnJvciA9IHJlamVjdDtcbiAgICAgICAgKF9kb2N1bWVudCRoZWFkID0gZG9jdW1lbnQuaGVhZCkgPT09IG51bGwgfHwgX2RvY3VtZW50JGhlYWQgPT09IHZvaWQgMCB8fCBfZG9jdW1lbnQkaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgaW1wb3J0U2NyaXB0cyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gV29ya2VyIHNjcmlwdHNcbiAgICAgIGlmIChhc3NldC5vdXRwdXRGb3JtYXQgPT09ICdlc21vZHVsZScpIHtcbiAgICAgICAgcmV0dXJuIF9fcGFyY2VsX19pbXBvcnRfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXyhhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCkpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbmFzeW5jIGZ1bmN0aW9uIGhtckFwcGx5VXBkYXRlcyhhc3NldHMpIHtcbiAgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIGxldCBzY3JpcHRzVG9SZW1vdmU7XG4gIHRyeSB7XG4gICAgLy8gSWYgc291cmNlVVJMIGNvbW1lbnRzIGFyZW4ndCBzdXBwb3J0ZWQgaW4gZXZhbCwgd2UgbmVlZCB0byBsb2FkXG4gICAgLy8gdGhlIHVwZGF0ZSBmcm9tIHRoZSBkZXYgc2VydmVyIG92ZXIgSFRUUCBzbyB0aGF0IHN0YWNrIHRyYWNlc1xuICAgIC8vIGFyZSBjb3JyZWN0IGluIGVycm9ycy9sb2dzLiBUaGlzIGlzIG11Y2ggc2xvd2VyIHRoYW4gZXZhbCwgc29cbiAgICAvLyB3ZSBvbmx5IGRvIGl0IGlmIG5lZWRlZCAoY3VycmVudGx5IGp1c3QgU2FmYXJpKS5cbiAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM3Mjk3XG4gICAgLy8gVGhpcyBwYXRoIGlzIGFsc28gdGFrZW4gaWYgYSBDU1AgZGlzYWxsb3dzIGV2YWwuXG4gICAgaWYgKCFzdXBwb3J0c1NvdXJjZVVSTCkge1xuICAgICAgbGV0IHByb21pc2VzID0gYXNzZXRzLm1hcChhc3NldCA9PiB7XG4gICAgICAgIHZhciBfaG1yRG93bmxvYWQ7XG4gICAgICAgIHJldHVybiAoX2htckRvd25sb2FkID0gaG1yRG93bmxvYWQoYXNzZXQpKSA9PT0gbnVsbCB8fCBfaG1yRG93bmxvYWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9obXJEb3dubG9hZC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIC8vIFdlYiBleHRlbnNpb24gZml4XG4gICAgICAgICAgaWYgKGV4dEN0eCAmJiBleHRDdHgucnVudGltZSAmJiBleHRDdHgucnVudGltZS5nZXRNYW5pZmVzdCgpLm1hbmlmZXN0X3ZlcnNpb24gPT0gMyAmJiB0eXBlb2YgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlICE9ICd1bmRlZmluZWQnICYmIGdsb2JhbCBpbnN0YW5jZW9mIFNlcnZpY2VXb3JrZXJHbG9iYWxTY29wZSkge1xuICAgICAgICAgICAgZXh0Q3R4LnJ1bnRpbWUucmVsb2FkKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIHNjcmlwdHNUb1JlbW92ZSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG4gICAgYXNzZXRzLmZvckVhY2goZnVuY3Rpb24gKGFzc2V0KSB7XG4gICAgICBobXJBcHBseShtb2R1bGUuYnVuZGxlLnJvb3QsIGFzc2V0KTtcbiAgICB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBkZWxldGUgZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZTtcbiAgICBpZiAoc2NyaXB0c1RvUmVtb3ZlKSB7XG4gICAgICBzY3JpcHRzVG9SZW1vdmUuZm9yRWFjaChzY3JpcHQgPT4ge1xuICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgdmFyIF9kb2N1bWVudCRoZWFkMjtcbiAgICAgICAgICAoX2RvY3VtZW50JGhlYWQyID0gZG9jdW1lbnQuaGVhZCkgPT09IG51bGwgfHwgX2RvY3VtZW50JGhlYWQyID09PSB2b2lkIDAgfHwgX2RvY3VtZW50JGhlYWQyLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaG1yQXBwbHkoYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBhc3NldCAvKjogIEhNUkFzc2V0ICovKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoYXNzZXQudHlwZSA9PT0gJ2NzcycpIHtcbiAgICByZWxvYWRDU1MoKTtcbiAgfSBlbHNlIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgbGV0IGRlcHMgPSBhc3NldC5kZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdO1xuICAgIGlmIChkZXBzKSB7XG4gICAgICBpZiAobW9kdWxlc1thc3NldC5pZF0pIHtcbiAgICAgICAgLy8gUmVtb3ZlIGRlcGVuZGVuY2llcyB0aGF0IGFyZSByZW1vdmVkIGFuZCB3aWxsIGJlY29tZSBvcnBoYW5lZC5cbiAgICAgICAgLy8gVGhpcyBpcyBuZWNlc3Nhcnkgc28gdGhhdCBpZiB0aGUgYXNzZXQgaXMgYWRkZWQgYmFjayBhZ2FpbiwgdGhlIGNhY2hlIGlzIGdvbmUsIGFuZCB3ZSBwcmV2ZW50IGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAgICAgICAgbGV0IG9sZERlcHMgPSBtb2R1bGVzW2Fzc2V0LmlkXVsxXTtcbiAgICAgICAgZm9yIChsZXQgZGVwIGluIG9sZERlcHMpIHtcbiAgICAgICAgICBpZiAoIWRlcHNbZGVwXSB8fCBkZXBzW2RlcF0gIT09IG9sZERlcHNbZGVwXSkge1xuICAgICAgICAgICAgbGV0IGlkID0gb2xkRGVwc1tkZXBdO1xuICAgICAgICAgICAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgIGhtckRlbGV0ZShtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0c1NvdXJjZVVSTCkge1xuICAgICAgICAvLyBHbG9iYWwgZXZhbC4gV2Ugd291bGQgdXNlIGBuZXcgRnVuY3Rpb25gIGhlcmUgYnV0IGJyb3dzZXJcbiAgICAgICAgLy8gc3VwcG9ydCBmb3Igc291cmNlIG1hcHMgaXMgYmV0dGVyIHdpdGggZXZhbC5cbiAgICAgICAgKDAsIGV2YWwpKGFzc2V0Lm91dHB1dCk7XG4gICAgICB9XG5cbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIGxldCBmbiA9IGdsb2JhbC5wYXJjZWxIb3RVcGRhdGVbYXNzZXQuaWRdO1xuICAgICAgbW9kdWxlc1thc3NldC5pZF0gPSBbZm4sIGRlcHNdO1xuICAgIH1cblxuICAgIC8vIEFsd2F5cyB0cmF2ZXJzZSB0byB0aGUgcGFyZW50IGJ1bmRsZSwgZXZlbiBpZiB3ZSBhbHJlYWR5IHJlcGxhY2VkIHRoZSBhc3NldCBpbiB0aGlzIGJ1bmRsZS5cbiAgICAvLyBUaGlzIGlzIHJlcXVpcmVkIGluIGNhc2UgbW9kdWxlcyBhcmUgZHVwbGljYXRlZC4gV2UgbmVlZCB0byBlbnN1cmUgYWxsIGluc3RhbmNlcyBoYXZlIHRoZSB1cGRhdGVkIGNvZGUuXG4gICAgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIGhtckFwcGx5KGJ1bmRsZS5wYXJlbnQsIGFzc2V0KTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGhtckRlbGV0ZShidW5kbGUsIGlkKSB7XG4gIGxldCBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobW9kdWxlc1tpZF0pIHtcbiAgICAvLyBDb2xsZWN0IGRlcGVuZGVuY2llcyB0aGF0IHdpbGwgYmVjb21lIG9ycGhhbmVkIHdoZW4gdGhpcyBtb2R1bGUgaXMgZGVsZXRlZC5cbiAgICBsZXQgZGVwcyA9IG1vZHVsZXNbaWRdWzFdO1xuICAgIGxldCBvcnBoYW5zID0gW107XG4gICAgZm9yIChsZXQgZGVwIGluIGRlcHMpIHtcbiAgICAgIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGRlcHNbZGVwXSk7XG4gICAgICBpZiAocGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgb3JwaGFucy5wdXNoKGRlcHNbZGVwXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIHRoZSBtb2R1bGUuIFRoaXMgbXVzdCBiZSBkb25lIGJlZm9yZSBkZWxldGluZyBkZXBlbmRlbmNpZXMgaW4gY2FzZSBvZiBjaXJjdWxhciBkZXBlbmRlbmNpZXMuXG4gICAgZGVsZXRlIG1vZHVsZXNbaWRdO1xuICAgIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdO1xuXG4gICAgLy8gTm93IGRlbGV0ZSB0aGUgb3JwaGFucy5cbiAgICBvcnBoYW5zLmZvckVhY2goaWQgPT4ge1xuICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGJ1bmRsZS5wYXJlbnQpIHtcbiAgICBobXJEZWxldGUoYnVuZGxlLnBhcmVudCwgaWQpO1xuICB9XG59XG5mdW5jdGlvbiBobXJBY2NlcHRDaGVjayhidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8sIGRlcHNCeUJ1bmRsZSAvKjogP3sgW3N0cmluZ106IHsgW3N0cmluZ106IHN0cmluZyB9IH0qLykge1xuICBjaGVja2VkQXNzZXRzID0ge307XG4gIGlmIChobXJBY2NlcHRDaGVja09uZShidW5kbGUsIGlkLCBkZXBzQnlCdW5kbGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvLyBUcmF2ZXJzZSBwYXJlbnRzIGJyZWFkdGggZmlyc3QuIEFsbCBwb3NzaWJsZSBhbmNlc3RyaWVzIG11c3QgYWNjZXB0IHRoZSBITVIgdXBkYXRlLCBvciB3ZSdsbCByZWxvYWQuXG4gIGxldCBwYXJlbnRzID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIGlkKTtcbiAgbGV0IGFjY2VwdGVkID0gZmFsc2U7XG4gIHdoaWxlIChwYXJlbnRzLmxlbmd0aCA+IDApIHtcbiAgICBsZXQgdiA9IHBhcmVudHMuc2hpZnQoKTtcbiAgICBsZXQgYSA9IGhtckFjY2VwdENoZWNrT25lKHZbMF0sIHZbMV0sIG51bGwpO1xuICAgIGlmIChhKSB7XG4gICAgICAvLyBJZiB0aGlzIHBhcmVudCBhY2NlcHRzLCBzdG9wIHRyYXZlcnNpbmcgdXB3YXJkLCBidXQgc3RpbGwgY29uc2lkZXIgc2libGluZ3MuXG4gICAgICBhY2NlcHRlZCA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChhICE9PSBudWxsKSB7XG4gICAgICAvLyBPdGhlcndpc2UsIHF1ZXVlIHRoZSBwYXJlbnRzIGluIHRoZSBuZXh0IGxldmVsIHVwd2FyZC5cbiAgICAgIGxldCBwID0gZ2V0UGFyZW50cyhtb2R1bGUuYnVuZGxlLnJvb3QsIHZbMV0pO1xuICAgICAgaWYgKHAubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIC8vIElmIHRoZXJlIGFyZSBubyBwYXJlbnRzLCB0aGVuIHdlJ3ZlIHJlYWNoZWQgYW4gZW50cnkgd2l0aG91dCBhY2NlcHRpbmcuIFJlbG9hZC5cbiAgICAgICAgYWNjZXB0ZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwYXJlbnRzLnB1c2goLi4ucCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhY2NlcHRlZDtcbn1cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrT25lKGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLywgZGVwc0J5QnVuZGxlIC8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovKSB7XG4gIHZhciBtb2R1bGVzID0gYnVuZGxlLm1vZHVsZXM7XG4gIGlmICghbW9kdWxlcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZGVwc0J5QnVuZGxlICYmICFkZXBzQnlCdW5kbGVbYnVuZGxlLkhNUl9CVU5ETEVfSURdKSB7XG4gICAgLy8gSWYgd2UgcmVhY2hlZCB0aGUgcm9vdCBidW5kbGUgd2l0aG91dCBmaW5kaW5nIHdoZXJlIHRoZSBhc3NldCBzaG91bGQgZ28sXG4gICAgLy8gdGhlcmUncyBub3RoaW5nIHRvIGRvLiBNYXJrIGFzIFwiYWNjZXB0ZWRcIiBzbyB3ZSBkb24ndCByZWxvYWQgdGhlIHBhZ2UuXG4gICAgaWYgKCFidW5kbGUucGFyZW50KSB7XG4gICAgICBidW5kbGVOb3RGb3VuZCA9IHRydWU7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGhtckFjY2VwdENoZWNrT25lKGJ1bmRsZS5wYXJlbnQsIGlkLCBkZXBzQnlCdW5kbGUpO1xuICB9XG4gIGlmIChjaGVja2VkQXNzZXRzW2lkXSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNoZWNrZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGlmICghY2FjaGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgYXNzZXRzVG9EaXNwb3NlLnB1c2goW2J1bmRsZSwgaWRdKTtcbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBhc3NldHNUb0FjY2VwdC5wdXNoKFtidW5kbGUsIGlkXSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaG1yRGlzcG9zZVF1ZXVlKCkge1xuICAvLyBEaXNwb3NlIGFsbCBvbGQgYXNzZXRzLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFzc2V0c1RvRGlzcG9zZS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpZCA9IGFzc2V0c1RvRGlzcG9zZVtpXVsxXTtcbiAgICBpZiAoIWRpc3Bvc2VkQXNzZXRzW2lkXSkge1xuICAgICAgaG1yRGlzcG9zZShhc3NldHNUb0Rpc3Bvc2VbaV1bMF0sIGlkKTtcbiAgICAgIGRpc3Bvc2VkQXNzZXRzW2lkXSA9IHRydWU7XG4gICAgfVxuICB9XG4gIGFzc2V0c1RvRGlzcG9zZSA9IFtdO1xufVxuZnVuY3Rpb24gaG1yRGlzcG9zZShidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8pIHtcbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGJ1bmRsZS5ob3REYXRhW2lkXSA9IHt9O1xuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QpIHtcbiAgICBjYWNoZWQuaG90LmRhdGEgPSBidW5kbGUuaG90RGF0YVtpZF07XG4gIH1cbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2Rpc3Bvc2VDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgY2IoYnVuZGxlLmhvdERhdGFbaWRdKTtcbiAgICB9KTtcbiAgfVxuICBkZWxldGUgYnVuZGxlLmNhY2hlW2lkXTtcbn1cbmZ1bmN0aW9uIGhtckFjY2VwdChidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGlkIC8qOiBzdHJpbmcgKi8pIHtcbiAgLy8gRXhlY3V0ZSB0aGUgbW9kdWxlLlxuICBidW5kbGUoaWQpO1xuXG4gIC8vIFJ1biB0aGUgYWNjZXB0IGNhbGxiYWNrcyBpbiB0aGUgbmV3IHZlcnNpb24gb2YgdGhlIG1vZHVsZS5cbiAgdmFyIGNhY2hlZCA9IGJ1bmRsZS5jYWNoZVtpZF07XG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCAmJiBjYWNoZWQuaG90Ll9hY2NlcHRDYWxsYmFja3MubGVuZ3RoKSB7XG4gICAgbGV0IGFzc2V0c1RvQWxzb0FjY2VwdCA9IFtdO1xuICAgIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjYikge1xuICAgICAgbGV0IGFkZGl0aW9uYWxBc3NldHMgPSBjYihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgfSk7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShhZGRpdGlvbmFsQXNzZXRzKSAmJiBhZGRpdGlvbmFsQXNzZXRzLmxlbmd0aCkge1xuICAgICAgICBhc3NldHNUb0Fsc29BY2NlcHQucHVzaCguLi5hZGRpdGlvbmFsQXNzZXRzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoYXNzZXRzVG9BbHNvQWNjZXB0Lmxlbmd0aCkge1xuICAgICAgbGV0IGhhbmRsZWQgPSBhc3NldHNUb0Fsc29BY2NlcHQuZXZlcnkoZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIGhtckFjY2VwdENoZWNrKGFbMF0sIGFbMV0pO1xuICAgICAgfSk7XG4gICAgICBpZiAoIWhhbmRsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bGxSZWxvYWQoKTtcbiAgICAgIH1cbiAgICAgIGhtckRpc3Bvc2VRdWV1ZSgpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IGNoZWNrQ2xpcGJvYXJkT25DbGljayB9IGZyb20gXCJAYWN0aW9ucy9jaGVja0NsaXBib2FyZE9uQ2xpY2tcIjtcbmltcG9ydCB7IGRpc3BsYXlHZW5lcmF0ZWRDb21tZW50IH0gZnJvbSBcIkBhY3Rpb25zL2Rpc3BsYXlHZW5lcmF0ZWRDb21tZW50XCI7XG5cblxuLy8gRklYTUU6IGlzIHRoaXMgcnVuLXRpbWUgZXZlbnQ/XG5jaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoXCJnZW5lcmF0ZWRDb21tZW50XCIsIChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJyYW4gdGhpcyBsb2dpY1wiKTtcbiAgICBpZiAoZGF0YS5nZW5lcmF0ZWRDb21tZW50KSB7XG4gICAgICAgIGRpc3BsYXlHZW5lcmF0ZWRDb21tZW50KGRhdGEuZ2VuZXJhdGVkQ29tbWVudCk7XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIHByb2Nlc3NDbGlwYm9hcmQoKSB7XG4gICAgLy8gMS0gZGV0ZWN0IHdoZW4gYnV0dG9uIGlzIGNsaWNrZWRcbiAgICBjb25zb2xlLmxvZyhcInByb2Nlc3NpbmcgY2xpcGJvYXJkXCIpO1xuICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2Nlc3MtY2xpcGJvYXJkXCIpO1xuICAgIGJ1dHRvbj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoZWNrQ2xpcGJvYXJkT25DbGljayk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHByb2Nlc3NDbGlwYm9hcmQpO1xuXG4iLCJsZXQgbGFzdENsaXBib2FyZCA9IFwiXCI7XG5cbmZ1bmN0aW9uIGlzTGlua2VkSW5Qb3N0VXJsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIC9eaHR0cHM6XFwvXFwvd3d3XFwubGlua2VkaW5cXC5jb21cXC9wb3N0c1xcLy8udGVzdCh1cmwudHJpbSgpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQ2xpcGJvYXJkT25DbGljaygpIHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrYm9hcmQgY2hlY2tpbmdcIilcbiAgICB0cnkge1xuICAgICAgICBjb25zdCB0ZXh0ID0gYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC5yZWFkVGV4dCgpO1xuXG4gICAgICAgIGlmICh0ZXh0ICYmIHRleHQgIT09IGxhc3RDbGlwYm9hcmQgJiYgaXNMaW5rZWRJblBvc3RVcmwodGV4dCkpIHtcbiAgICAgICAgICAgIGxhc3RDbGlwYm9hcmQgPSB0ZXh0O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLwn5OLIENvcGllZCBMaW5rZWRJbiBQb3N0IFVSTDpcIiwgdGV4dCk7XG5cbiAgICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcIk9QRU5fUE9TVF9UQUJcIixcbiAgICAgICAgICAgICAgICB1cmw6IHRleHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIkNsaXBib2FyZCBhY2Nlc3MgZXJyb3I6XCIsIGVycik7XG4gICAgfVxufVxuXG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChcbiAgICAgIGtleSA9PT0gJ2RlZmF1bHQnIHx8XG4gICAgICBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fFxuICAgICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGRlc3QsIGtleSlcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gZGlzcGxheUdlbmVyYXRlZENvbW1lbnQoY29tbWVudDogc3RyaW5nKSB7XG4gICAgY29uc3QgY29tbWVudEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29tbWVudC1ib3hcIikgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICBjb25zdCBjb3B5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb3B5LWJ0blwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgIGlmIChjb21tZW50Qm94ICYmIGNvcHlCdXR0b24pIHtcbiAgICAgICAgY29tbWVudEJveC52YWx1ZSA9IGNvbW1lbnQ7XG4gICAgICAgIGNvcHlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICBjb3B5QnV0dG9uLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvbW1lbnRCb3gudmFsdWUpO1xuICAgICAgICAgICAgICAgIGNvcHlCdXR0b24uaW5uZXJUZXh0ID0gXCJDb3BpZWQhXCI7XG4gICAgICAgICAgICAgICAgY29tbWVudEJveC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgZ2VuZXJhdGVkQ29tbWVudDogXCJcIiB9KTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IChjb3B5QnV0dG9uLmlubmVyVGV4dCA9IFwiQ29weSBDb21tZW50XCIpLCAxNTAwKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLinYwgRmFpbGVkIHRvIGNvcHk6XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJwb3B1cC5iNDQ4ODA3Yy5qcy5tYXAifQ==
