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
})({"3dEul":[function(require,module,exports,__globalThis) {
JSON.parse("{\"manifest_version\":3,\"name\":\"LinkedIn Assistant\",\"version\":\"0.1\",\"description\":\"Assists in managing linkedin for better visibility.\",\"permissions\":[\"clipboardRead\",\"scripting\",\"tabs\",\"storage\"],\"host_permissions\":[\"https://www.linkedin.com/*\"],\"action\":{\"default_popup\":\"\",\"default_title\":\"LinkedIn Post Scrapper\"},\"background\":{\"service_worker\":\"\",\"type\":\"module\"},\"content_security_policy\":{\"extension_pages\":\"script-src 'self' http://localhost:*;object-src 'self';\"}}");

},{}],"6SiwO":[function(require,module,exports,__globalThis) {
"use strict";
/* global chrome, browser */ let env = typeof browser === 'undefined' ? chrome : browser;
let origReload = env.runtime.reload;
let avoidID = -1;
let promisify = (obj, fn)=>(...args)=>{
        if (typeof browser === 'undefined') return new Promise((resolve, reject)=>obj[fn](...args, (res)=>env.runtime.lastError ? reject(env.runtime.lastError) : resolve(res)));
        return obj[fn](...args);
    };
let queryTabs = promisify(env.tabs, 'query');
let messageTab = promisify(env.tabs, 'sendMessage');
env.runtime.reload = ()=>{
    queryTabs({}).then((tabs)=>{
        return Promise.all(tabs.map((tab)=>{
            if (tab.id === avoidID) return;
            return messageTab(tab.id, {
                __parcel_hmr_reload__: true
            }).catch(()=>{});
        }));
    }).then(()=>{
        origReload.call(env.runtime);
    });
};
env.runtime.onMessage.addListener((msg, sender)=>{
    if (msg.__parcel_hmr_reload__) {
        avoidID = sender.tab.id;
        env.runtime.reload();
    }
});

},{}],"6fp4J":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = "localhost";
var HMR_PORT = 1234;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "210281caf8d4160d";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "401ce8f9e455c874";
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

},{}],"cOfSa":[function(require,module,exports,__globalThis) {
chrome.runtime.onMessage.addListener((message, sender, sendResponse)=>{
    if (message.type === "OPEN_POST_TAB" && message.url) chrome.tabs.create({
        url: message.url,
        active: false
    }, (tab)=>{
        const tabId = tab.id;
        chrome.tabs.onUpdated.addListener(function listener(updatedTabId, info) {
            if (updatedTabId === tabId && info.status === "complete") {
                chrome.tabs.onUpdated.removeListener(listener);
                chrome.scripting.executeScript({
                    target: {
                        tabId
                    },
                    files: [
                        "src/cnontent.js"
                    ]
                });
            }
        });
    });
});

},{}]},["3dEul","6SiwO","6fp4J","cOfSa"], "cOfSa", "parcelRequire94c2", {})

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNGOzs7QUM1a0JBLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLFFBQVE7SUFDbkQsSUFBSSxRQUFRLElBQUksS0FBSyxtQkFBbUIsUUFBUSxHQUFHLEVBQy9DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUFFLEtBQUssUUFBUSxHQUFHO1FBQUUsUUFBUTtJQUFNLEdBQUcsQ0FBQztRQUNyRCxNQUFNLFFBQVEsSUFBSSxFQUFFO1FBRXBCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxTQUFTLFlBQVksRUFBRSxJQUFJO1lBQ2xFLElBQUksaUJBQWlCLFNBQVMsS0FBSyxNQUFNLEtBQUssWUFBWTtnQkFDdEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztnQkFFckMsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFDO29CQUMzQixRQUFRO3dCQUFFO29CQUFNO29CQUNoQixPQUFPO3dCQUFDO3FCQUFrQjtnQkFDOUI7WUFDSjtRQUNKO0lBQ0o7QUFFUiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS13ZWJleHRlbnNpb24vbGliL3J1bnRpbWUtMzljZDVmMTc1MTA2MjQzNS5qcyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtd2ViZXh0ZW5zaW9uL2xpYi9ydW50aW1lLTQ2ZmMxYjNlYmU1OTVjMGEuanMiLCJub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWJyb3dzZXItaG1yL2xpYi9ydW50aW1lLWY5ZmVlZTFlOGI5OTU4YTMuanMiLCJzcmMvYmFja2dyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJKU09OLnBhcnNlKFwie1xcXCJtYW5pZmVzdF92ZXJzaW9uXFxcIjozLFxcXCJuYW1lXFxcIjpcXFwiTGlua2VkSW4gQXNzaXN0YW50XFxcIixcXFwidmVyc2lvblxcXCI6XFxcIjAuMVxcXCIsXFxcImRlc2NyaXB0aW9uXFxcIjpcXFwiQXNzaXN0cyBpbiBtYW5hZ2luZyBsaW5rZWRpbiBmb3IgYmV0dGVyIHZpc2liaWxpdHkuXFxcIixcXFwicGVybWlzc2lvbnNcXFwiOltcXFwiY2xpcGJvYXJkUmVhZFxcXCIsXFxcInNjcmlwdGluZ1xcXCIsXFxcInRhYnNcXFwiLFxcXCJzdG9yYWdlXFxcIl0sXFxcImhvc3RfcGVybWlzc2lvbnNcXFwiOltcXFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tLypcXFwiXSxcXFwiYWN0aW9uXFxcIjp7XFxcImRlZmF1bHRfcG9wdXBcXFwiOlxcXCJcXFwiLFxcXCJkZWZhdWx0X3RpdGxlXFxcIjpcXFwiTGlua2VkSW4gUG9zdCBTY3JhcHBlclxcXCJ9LFxcXCJiYWNrZ3JvdW5kXFxcIjp7XFxcInNlcnZpY2Vfd29ya2VyXFxcIjpcXFwiXFxcIixcXFwidHlwZVxcXCI6XFxcIm1vZHVsZVxcXCJ9LFxcXCJjb250ZW50X3NlY3VyaXR5X3BvbGljeVxcXCI6e1xcXCJleHRlbnNpb25fcGFnZXNcXFwiOlxcXCJzY3JpcHQtc3JjICdzZWxmJyBodHRwOi8vbG9jYWxob3N0Oio7b2JqZWN0LXNyYyAnc2VsZic7XFxcIn19XCIpIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGdsb2JhbCBjaHJvbWUsIGJyb3dzZXIgKi9cbmxldCBlbnYgPSB0eXBlb2YgYnJvd3NlciA9PT0gJ3VuZGVmaW5lZCcgPyBjaHJvbWUgOiBicm93c2VyO1xubGV0IG9yaWdSZWxvYWQgPSBlbnYucnVudGltZS5yZWxvYWQ7XG5sZXQgYXZvaWRJRCA9IC0xO1xubGV0IHByb21pc2lmeSA9IChvYmosIGZuKSA9PiAoLi4uYXJncykgPT4ge1xuICBpZiAodHlwZW9mIGJyb3dzZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IG9ialtmbl0oLi4uYXJncywgcmVzID0+IGVudi5ydW50aW1lLmxhc3RFcnJvciA/IHJlamVjdChlbnYucnVudGltZS5sYXN0RXJyb3IpIDogcmVzb2x2ZShyZXMpKSk7XG4gIH1cbiAgcmV0dXJuIG9ialtmbl0oLi4uYXJncyk7XG59O1xubGV0IHF1ZXJ5VGFicyA9IHByb21pc2lmeShlbnYudGFicywgJ3F1ZXJ5Jyk7XG5sZXQgbWVzc2FnZVRhYiA9IHByb21pc2lmeShlbnYudGFicywgJ3NlbmRNZXNzYWdlJyk7XG5lbnYucnVudGltZS5yZWxvYWQgPSAoKSA9PiB7XG4gIHF1ZXJ5VGFicyh7fSkudGhlbih0YWJzID0+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGFicy5tYXAodGFiID0+IHtcbiAgICAgIGlmICh0YWIuaWQgPT09IGF2b2lkSUQpIHJldHVybjtcbiAgICAgIHJldHVybiBtZXNzYWdlVGFiKHRhYi5pZCwge1xuICAgICAgICBfX3BhcmNlbF9obXJfcmVsb2FkX186IHRydWVcbiAgICAgIH0pLmNhdGNoKCgpID0+IHt9KTtcbiAgICB9KSk7XG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgIG9yaWdSZWxvYWQuY2FsbChlbnYucnVudGltZSk7XG4gIH0pO1xufTtcbmVudi5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnLCBzZW5kZXIpID0+IHtcbiAgaWYgKG1zZy5fX3BhcmNlbF9obXJfcmVsb2FkX18pIHtcbiAgICBhdm9pZElEID0gc2VuZGVyLnRhYi5pZDtcbiAgICBlbnYucnVudGltZS5yZWxvYWQoKTtcbiAgfVxufSk7IiwidmFyIEhNUl9IT1NUID0gXCJsb2NhbGhvc3RcIjt2YXIgSE1SX1BPUlQgPSAxMjM0O3ZhciBITVJfU0VSVkVSX1BPUlQgPSAxMjM0O3ZhciBITVJfU0VDVVJFID0gZmFsc2U7dmFyIEhNUl9FTlZfSEFTSCA9IFwiMjEwMjgxY2FmOGQ0MTYwZFwiO3ZhciBITVJfVVNFX1NTRSA9IGZhbHNlO21vZHVsZS5idW5kbGUuSE1SX0JVTkRMRV9JRCA9IFwiNDAxY2U4ZjllNDU1Yzg3NFwiO1widXNlIHN0cmljdFwiO1xuXG4vKiBnbG9iYWwgSE1SX0hPU1QsIEhNUl9QT1JULCBITVJfU0VSVkVSX1BPUlQsIEhNUl9FTlZfSEFTSCwgSE1SX1NFQ1VSRSwgSE1SX1VTRV9TU0UsIGNocm9tZSwgYnJvd3NlciwgX19wYXJjZWxfX2ltcG9ydF9fLCBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fLCBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgKi9cbi8qOjpcbmltcG9ydCB0eXBlIHtcbiAgSE1SQXNzZXQsXG4gIEhNUk1lc3NhZ2UsXG59IGZyb20gJ0BwYXJjZWwvcmVwb3J0ZXItZGV2LXNlcnZlci9zcmMvSE1SU2VydmVyLmpzJztcbmludGVyZmFjZSBQYXJjZWxSZXF1aXJlIHtcbiAgKHN0cmluZyk6IG1peGVkO1xuICBjYWNoZToge3xbc3RyaW5nXTogUGFyY2VsTW9kdWxlfH07XG4gIGhvdERhdGE6IHt8W3N0cmluZ106IG1peGVkfH07XG4gIE1vZHVsZTogYW55O1xuICBwYXJlbnQ6ID9QYXJjZWxSZXF1aXJlO1xuICBpc1BhcmNlbFJlcXVpcmU6IHRydWU7XG4gIG1vZHVsZXM6IHt8W3N0cmluZ106IFtGdW5jdGlvbiwge3xbc3RyaW5nXTogc3RyaW5nfH1dfH07XG4gIEhNUl9CVU5ETEVfSUQ6IHN0cmluZztcbiAgcm9vdDogUGFyY2VsUmVxdWlyZTtcbn1cbmludGVyZmFjZSBQYXJjZWxNb2R1bGUge1xuICBob3Q6IHt8XG4gICAgZGF0YTogbWl4ZWQsXG4gICAgYWNjZXB0KGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIGRpc3Bvc2UoY2I6IChtaXhlZCkgPT4gdm9pZCk6IHZvaWQsXG4gICAgLy8gYWNjZXB0KGRlcHM6IEFycmF5PHN0cmluZz4gfCBzdHJpbmcsIGNiOiAoRnVuY3Rpb24pID0+IHZvaWQpOiB2b2lkLFxuICAgIC8vIGRlY2xpbmUoKTogdm9pZCxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBBcnJheTwoRnVuY3Rpb24pID0+IHZvaWQ+LFxuICAgIF9kaXNwb3NlQ2FsbGJhY2tzOiBBcnJheTwobWl4ZWQpID0+IHZvaWQ+LFxuICB8fTtcbn1cbmludGVyZmFjZSBFeHRlbnNpb25Db250ZXh0IHtcbiAgcnVudGltZToge3xcbiAgICByZWxvYWQoKTogdm9pZCxcbiAgICBnZXRVUkwodXJsOiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgZ2V0TWFuaWZlc3QoKToge21hbmlmZXN0X3ZlcnNpb246IG51bWJlciwgLi4ufTtcbiAgfH07XG59XG5kZWNsYXJlIHZhciBtb2R1bGU6IHtidW5kbGU6IFBhcmNlbFJlcXVpcmUsIC4uLn07XG5kZWNsYXJlIHZhciBITVJfSE9TVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX1BPUlQ6IHN0cmluZztcbmRlY2xhcmUgdmFyIEhNUl9TRVJWRVJfUE9SVDogc3RyaW5nO1xuZGVjbGFyZSB2YXIgSE1SX0VOVl9IQVNIOiBzdHJpbmc7XG5kZWNsYXJlIHZhciBITVJfU0VDVVJFOiBib29sZWFuO1xuZGVjbGFyZSB2YXIgSE1SX1VTRV9TU0U6IGJvb2xlYW47XG5kZWNsYXJlIHZhciBjaHJvbWU6IEV4dGVuc2lvbkNvbnRleHQ7XG5kZWNsYXJlIHZhciBicm93c2VyOiBFeHRlbnNpb25Db250ZXh0O1xuZGVjbGFyZSB2YXIgX19wYXJjZWxfX2ltcG9ydF9fOiAoc3RyaW5nKSA9PiBQcm9taXNlPHZvaWQ+O1xuZGVjbGFyZSB2YXIgX19wYXJjZWxfX2ltcG9ydFNjcmlwdHNfXzogKHN0cmluZykgPT4gUHJvbWlzZTx2b2lkPjtcbmRlY2xhcmUgdmFyIGdsb2JhbFRoaXM6IHR5cGVvZiBzZWxmO1xuZGVjbGFyZSB2YXIgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlOiBPYmplY3Q7XG4qL1xudmFyIE9WRVJMQVlfSUQgPSAnX19wYXJjZWxfX2Vycm9yX19vdmVybGF5X18nO1xudmFyIE9sZE1vZHVsZSA9IG1vZHVsZS5idW5kbGUuTW9kdWxlO1xuZnVuY3Rpb24gTW9kdWxlKG1vZHVsZU5hbWUpIHtcbiAgT2xkTW9kdWxlLmNhbGwodGhpcywgbW9kdWxlTmFtZSk7XG4gIHRoaXMuaG90ID0ge1xuICAgIGRhdGE6IG1vZHVsZS5idW5kbGUuaG90RGF0YVttb2R1bGVOYW1lXSxcbiAgICBfYWNjZXB0Q2FsbGJhY2tzOiBbXSxcbiAgICBfZGlzcG9zZUNhbGxiYWNrczogW10sXG4gICAgYWNjZXB0OiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHRoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKGZuIHx8IGZ1bmN0aW9uICgpIHt9KTtcbiAgICB9LFxuICAgIGRpc3Bvc2U6IGZ1bmN0aW9uIChmbikge1xuICAgICAgdGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKGZuKTtcbiAgICB9XG4gIH07XG4gIG1vZHVsZS5idW5kbGUuaG90RGF0YVttb2R1bGVOYW1lXSA9IHVuZGVmaW5lZDtcbn1cbm1vZHVsZS5idW5kbGUuTW9kdWxlID0gTW9kdWxlO1xubW9kdWxlLmJ1bmRsZS5ob3REYXRhID0ge307XG52YXIgY2hlY2tlZEFzc2V0cyAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovLFxuICBkaXNwb3NlZEFzc2V0cyAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovLFxuICBhc3NldHNUb0Rpc3Bvc2UgLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqLyxcbiAgYXNzZXRzVG9BY2NlcHQgLyo6IEFycmF5PFtQYXJjZWxSZXF1aXJlLCBzdHJpbmddPiAqLyxcbiAgYnVuZGxlTm90Rm91bmQgPSBmYWxzZTtcbmZ1bmN0aW9uIGdldEhvc3RuYW1lKCkge1xuICByZXR1cm4gSE1SX0hPU1QgfHwgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZignaHR0cCcpID09PSAwID8gbG9jYXRpb24uaG9zdG5hbWUgOiAnbG9jYWxob3N0Jyk7XG59XG5mdW5jdGlvbiBnZXRQb3J0KCkge1xuICByZXR1cm4gSE1SX1BPUlQgfHwgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhdGlvbi5wb3J0IDogSE1SX1NFUlZFUl9QT1JUKTtcbn1cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxubGV0IFdlYlNvY2tldCA9IGdsb2JhbFRoaXMuV2ViU29ja2V0O1xuaWYgKCFXZWJTb2NrZXQgJiYgdHlwZW9mIG1vZHVsZS5idW5kbGUucm9vdCA9PT0gJ2Z1bmN0aW9uJykge1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1nbG9iYWwtYXNzaWduXG4gICAgV2ViU29ja2V0ID0gbW9kdWxlLmJ1bmRsZS5yb290KCd3cycpO1xuICB9IGNhdGNoIHtcbiAgICAvLyBpZ25vcmUuXG4gIH1cbn1cbnZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG52YXIgcG9ydCA9IGdldFBvcnQoKTtcbnZhciBwcm90b2NvbCA9IEhNUl9TRUNVUkUgfHwgdHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBsb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgJiYgIVsnbG9jYWxob3N0JywgJzEyNy4wLjAuMScsICcwLjAuMC4wJ10uaW5jbHVkZXMoaG9zdG5hbWUpID8gJ3dzcycgOiAnd3MnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG52YXIgcGFyZW50ID0gbW9kdWxlLmJ1bmRsZS5wYXJlbnQ7XG5pZiAoIXBhcmVudCB8fCAhcGFyZW50LmlzUGFyY2VsUmVxdWlyZSkge1xuICAvLyBXZWIgZXh0ZW5zaW9uIGNvbnRleHRcbiAgdmFyIGV4dEN0eCA9IHR5cGVvZiBicm93c2VyID09PSAndW5kZWZpbmVkJyA/IHR5cGVvZiBjaHJvbWUgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IGNocm9tZSA6IGJyb3dzZXI7XG5cbiAgLy8gU2FmYXJpIGRvZXNuJ3Qgc3VwcG9ydCBzb3VyY2VVUkwgaW4gZXJyb3Igc3RhY2tzLlxuICAvLyBldmFsIG1heSBhbHNvIGJlIGRpc2FibGVkIHZpYSBDU1AsIHNvIGRvIGEgcXVpY2sgY2hlY2suXG4gIHZhciBzdXBwb3J0c1NvdXJjZVVSTCA9IGZhbHNlO1xuICB0cnkge1xuICAgICgwLCBldmFsKSgndGhyb3cgbmV3IEVycm9yKFwidGVzdFwiKTsgLy8jIHNvdXJjZVVSTD10ZXN0LmpzJyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHN1cHBvcnRzU291cmNlVVJMID0gZXJyLnN0YWNrLmluY2x1ZGVzKCd0ZXN0LmpzJyk7XG4gIH1cbiAgdmFyIHdzO1xuICBpZiAoSE1SX1VTRV9TU0UpIHtcbiAgICB3cyA9IG5ldyBFdmVudFNvdXJjZSgnL19fcGFyY2VsX2htcicpO1xuICB9IGVsc2Uge1xuICAgIHRyeSB7XG4gICAgICAvLyBJZiB3ZSdyZSBydW5uaW5nIGluIHRoZSBkZXYgc2VydmVyJ3Mgbm9kZSBydW5uZXIsIGxpc3RlbiBmb3IgbWVzc2FnZXMgb24gdGhlIHBhcmVudCBwb3J0LlxuICAgICAgbGV0IHtcbiAgICAgICAgd29ya2VyRGF0YSxcbiAgICAgICAgcGFyZW50UG9ydFxuICAgICAgfSA9IG1vZHVsZS5idW5kbGUucm9vdCgnbm9kZTp3b3JrZXJfdGhyZWFkcycpIC8qOiBhbnkqLztcbiAgICAgIGlmICh3b3JrZXJEYXRhICE9PSBudWxsICYmIHdvcmtlckRhdGEgIT09IHZvaWQgMCAmJiB3b3JrZXJEYXRhLl9fcGFyY2VsKSB7XG4gICAgICAgIHBhcmVudFBvcnQub24oJ21lc3NhZ2UnLCBhc3luYyBtZXNzYWdlID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgaGFuZGxlTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgIHBhcmVudFBvcnQucG9zdE1lc3NhZ2UoJ3VwZGF0ZWQnKTtcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHBhcmVudFBvcnQucG9zdE1lc3NhZ2UoJ3Jlc3RhcnQnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEFmdGVyIHRoZSBidW5kbGUgaGFzIGZpbmlzaGVkIHJ1bm5pbmcsIG5vdGlmeSB0aGUgZGV2IHNlcnZlciB0aGF0IHRoZSBITVIgdXBkYXRlIGlzIGNvbXBsZXRlLlxuICAgICAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiBwYXJlbnRQb3J0LnBvc3RNZXNzYWdlKCdyZWFkeScpKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIHtcbiAgICAgIGlmICh0eXBlb2YgV2ViU29ja2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHdzID0gbmV3IFdlYlNvY2tldChwcm90b2NvbCArICc6Ly8nICsgaG9zdG5hbWUgKyAocG9ydCA/ICc6JyArIHBvcnQgOiAnJykgKyAnLycpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyBJZ25vcmUgY2xvdWRmbGFyZSB3b3JrZXJzIGVycm9yLlxuICAgICAgICAgIGlmIChlcnIubWVzc2FnZSAmJiAhZXJyLm1lc3NhZ2UuaW5jbHVkZXMoJ0Rpc2FsbG93ZWQgb3BlcmF0aW9uIGNhbGxlZCB3aXRoaW4gZ2xvYmFsIHNjb3BlJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAod3MpIHtcbiAgICAvLyAkRmxvd0ZpeE1lXG4gICAgd3Mub25tZXNzYWdlID0gYXN5bmMgZnVuY3Rpb24gKGV2ZW50IC8qOiB7ZGF0YTogc3RyaW5nLCAuLi59ICovKSB7XG4gICAgICB2YXIgZGF0YSAvKjogSE1STWVzc2FnZSAqLyA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG4gICAgICBhd2FpdCBoYW5kbGVNZXNzYWdlKGRhdGEpO1xuICAgIH07XG4gICAgaWYgKHdzIGluc3RhbmNlb2YgV2ViU29ja2V0KSB7XG4gICAgICB3cy5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGUubWVzc2FnZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHdzLm9uY2xvc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignW3BhcmNlbF0g8J+aqCBDb25uZWN0aW9uIHRvIHRoZSBITVIgc2VydmVyIHdhcyBsb3N0Jyk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlTWVzc2FnZShkYXRhIC8qOiBITVJNZXNzYWdlICovKSB7XG4gIGNoZWNrZWRBc3NldHMgPSB7fSAvKjoge3xbc3RyaW5nXTogYm9vbGVhbnx9ICovO1xuICBkaXNwb3NlZEFzc2V0cyA9IHt9IC8qOiB7fFtzdHJpbmddOiBib29sZWFufH0gKi87XG4gIGFzc2V0c1RvQWNjZXB0ID0gW107XG4gIGFzc2V0c1RvRGlzcG9zZSA9IFtdO1xuICBidW5kbGVOb3RGb3VuZCA9IGZhbHNlO1xuICBpZiAoZGF0YS50eXBlID09PSAncmVsb2FkJykge1xuICAgIGZ1bGxSZWxvYWQoKTtcbiAgfSBlbHNlIGlmIChkYXRhLnR5cGUgPT09ICd1cGRhdGUnKSB7XG4gICAgLy8gUmVtb3ZlIGVycm9yIG92ZXJsYXkgaWYgdGhlcmUgaXMgb25lXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJlbW92ZUVycm9yT3ZlcmxheSgpO1xuICAgIH1cbiAgICBsZXQgYXNzZXRzID0gZGF0YS5hc3NldHM7XG5cbiAgICAvLyBIYW5kbGUgSE1SIFVwZGF0ZVxuICAgIGxldCBoYW5kbGVkID0gYXNzZXRzLmV2ZXJ5KGFzc2V0ID0+IHtcbiAgICAgIHJldHVybiBhc3NldC50eXBlID09PSAnY3NzJyB8fCBhc3NldC50eXBlID09PSAnanMnICYmIGhtckFjY2VwdENoZWNrKG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQuaWQsIGFzc2V0LmRlcHNCeUJ1bmRsZSk7XG4gICAgfSk7XG5cbiAgICAvLyBEaXNwYXRjaCBhIGN1c3RvbSBldmVudCBpbiBjYXNlIGEgYnVuZGxlIHdhcyBub3QgZm91bmQuIFRoaXMgbWlnaHQgbWVhblxuICAgIC8vIGFuIGFzc2V0IG9uIHRoZSBzZXJ2ZXIgY2hhbmdlZCBhbmQgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgcGFnZS4gVGhpcyBldmVudFxuICAgIC8vIGdpdmVzIHRoZSBjbGllbnQgYW4gb3Bwb3J0dW5pdHkgdG8gcmVmcmVzaCB3aXRob3V0IGxvc2luZyBzdGF0ZVxuICAgIC8vIChlLmcuIHZpYSBSZWFjdCBTZXJ2ZXIgQ29tcG9uZW50cykuIElmIGUucHJldmVudERlZmF1bHQoKSBpcyBub3QgY2FsbGVkLFxuICAgIC8vIHdlIHdpbGwgdHJpZ2dlciBhIGZ1bGwgcGFnZSByZWxvYWQuXG4gICAgaWYgKGhhbmRsZWQgJiYgYnVuZGxlTm90Rm91bmQgJiYgYXNzZXRzLnNvbWUoYSA9PiBhLmVudkhhc2ggIT09IEhNUl9FTlZfSEFTSCkgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEN1c3RvbUV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaGFuZGxlZCA9ICF3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3BhcmNlbGhtcnJlbG9hZCcsIHtcbiAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZVxuICAgICAgfSkpO1xuICAgIH1cbiAgICBpZiAoaGFuZGxlZCkge1xuICAgICAgY29uc29sZS5jbGVhcigpO1xuXG4gICAgICAvLyBEaXNwYXRjaCBjdXN0b20gZXZlbnQgc28gb3RoZXIgcnVudGltZXMgKGUuZyBSZWFjdCBSZWZyZXNoKSBhcmUgYXdhcmUuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEN1c3RvbUV2ZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3BhcmNlbGhtcmFjY2VwdCcpKTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IGhtckFwcGx5VXBkYXRlcyhhc3NldHMpO1xuICAgICAgaG1yRGlzcG9zZVF1ZXVlKCk7XG5cbiAgICAgIC8vIFJ1biBhY2NlcHQgY2FsbGJhY2tzLiBUaGlzIHdpbGwgYWxzbyByZS1leGVjdXRlIG90aGVyIGRpc3Bvc2VkIGFzc2V0cyBpbiB0b3BvbG9naWNhbCBvcmRlci5cbiAgICAgIGxldCBwcm9jZXNzZWRBc3NldHMgPSB7fTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzVG9BY2NlcHQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGlkID0gYXNzZXRzVG9BY2NlcHRbaV1bMV07XG4gICAgICAgIGlmICghcHJvY2Vzc2VkQXNzZXRzW2lkXSkge1xuICAgICAgICAgIGhtckFjY2VwdChhc3NldHNUb0FjY2VwdFtpXVswXSwgaWQpO1xuICAgICAgICAgIHByb2Nlc3NlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGZ1bGxSZWxvYWQoKTtcbiAgfVxuICBpZiAoZGF0YS50eXBlID09PSAnZXJyb3InKSB7XG4gICAgLy8gTG9nIHBhcmNlbCBlcnJvcnMgdG8gY29uc29sZVxuICAgIGZvciAobGV0IGFuc2lEaWFnbm9zdGljIG9mIGRhdGEuZGlhZ25vc3RpY3MuYW5zaSkge1xuICAgICAgbGV0IHN0YWNrID0gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lID8gYW5zaURpYWdub3N0aWMuY29kZWZyYW1lIDogYW5zaURpYWdub3N0aWMuc3RhY2s7XG4gICAgICBjb25zb2xlLmVycm9yKCfwn5qoIFtwYXJjZWxdOiAnICsgYW5zaURpYWdub3N0aWMubWVzc2FnZSArICdcXG4nICsgc3RhY2sgKyAnXFxuXFxuJyArIGFuc2lEaWFnbm9zdGljLmhpbnRzLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFJlbmRlciB0aGUgZmFuY3kgaHRtbCBvdmVybGF5XG4gICAgICByZW1vdmVFcnJvck92ZXJsYXkoKTtcbiAgICAgIHZhciBvdmVybGF5ID0gY3JlYXRlRXJyb3JPdmVybGF5KGRhdGEuZGlhZ25vc3RpY3MuaHRtbCk7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gcmVtb3ZlRXJyb3JPdmVybGF5KCkge1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKE9WRVJMQVlfSUQpO1xuICBpZiAob3ZlcmxheSkge1xuICAgIG92ZXJsYXkucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2coJ1twYXJjZWxdIOKcqCBFcnJvciByZXNvbHZlZCcpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVFcnJvck92ZXJsYXkoZGlhZ25vc3RpY3MpIHtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgb3ZlcmxheS5pZCA9IE9WRVJMQVlfSUQ7XG4gIGxldCBlcnJvckhUTUwgPSAnPGRpdiBzdHlsZT1cImJhY2tncm91bmQ6IGJsYWNrOyBvcGFjaXR5OiAwLjg1OyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiB3aGl0ZTsgcG9zaXRpb246IGZpeGVkOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyB0b3A6IDBweDsgbGVmdDogMHB4OyBwYWRkaW5nOiAzMHB4OyBmb250LWZhbWlseTogTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2U7IHotaW5kZXg6IDk5OTk7XCI+JztcbiAgZm9yIChsZXQgZGlhZ25vc3RpYyBvZiBkaWFnbm9zdGljcykge1xuICAgIGxldCBzdGFjayA9IGRpYWdub3N0aWMuZnJhbWVzLmxlbmd0aCA/IGRpYWdub3N0aWMuZnJhbWVzLnJlZHVjZSgocCwgZnJhbWUpID0+IHtcbiAgICAgIHJldHVybiBgJHtwfVxuPGEgaHJlZj1cIiR7cHJvdG9jb2wgPT09ICd3c3MnID8gJ2h0dHBzJyA6ICdodHRwJ306Ly8ke2hvc3RuYW1lfToke3BvcnR9L19fcGFyY2VsX2xhdW5jaF9lZGl0b3I/ZmlsZT0ke2VuY29kZVVSSUNvbXBvbmVudChmcmFtZS5sb2NhdGlvbil9XCIgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgY29sb3I6ICM4ODhcIiBvbmNsaWNrPVwiZmV0Y2godGhpcy5ocmVmKTsgcmV0dXJuIGZhbHNlXCI+JHtmcmFtZS5sb2NhdGlvbn08L2E+XG4ke2ZyYW1lLmNvZGV9YDtcbiAgICB9LCAnJykgOiBkaWFnbm9zdGljLnN0YWNrO1xuICAgIGVycm9ySFRNTCArPSBgXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLXRvcDogMjBweDtcIj5cbiAgICAgICAgICDwn5qoICR7ZGlhZ25vc3RpYy5tZXNzYWdlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHByZT4ke3N0YWNrfTwvcHJlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICR7ZGlhZ25vc3RpYy5oaW50cy5tYXAoaGludCA9PiAnPGRpdj7wn5KhICcgKyBoaW50ICsgJzwvZGl2PicpLmpvaW4oJycpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgJHtkaWFnbm9zdGljLmRvY3VtZW50YXRpb24gPyBgPGRpdj7wn5OdIDxhIHN0eWxlPVwiY29sb3I6IHZpb2xldFwiIGhyZWY9XCIke2RpYWdub3N0aWMuZG9jdW1lbnRhdGlvbn1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MZWFybiBtb3JlPC9hPjwvZGl2PmAgOiAnJ31cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbiAgZXJyb3JIVE1MICs9ICc8L2Rpdj4nO1xuICBvdmVybGF5LmlubmVySFRNTCA9IGVycm9ySFRNTDtcbiAgcmV0dXJuIG92ZXJsYXk7XG59XG5mdW5jdGlvbiBmdWxsUmVsb2FkKCkge1xuICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJyAmJiAncmVsb2FkJyBpbiBsb2NhdGlvbikge1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHRDdHggIT09ICd1bmRlZmluZWQnICYmIGV4dEN0eCAmJiBleHRDdHgucnVudGltZSAmJiBleHRDdHgucnVudGltZS5yZWxvYWQpIHtcbiAgICBleHRDdHgucnVudGltZS5yZWxvYWQoKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHtcbiAgICAgICAgd29ya2VyRGF0YSxcbiAgICAgICAgcGFyZW50UG9ydFxuICAgICAgfSA9IG1vZHVsZS5idW5kbGUucm9vdCgnbm9kZTp3b3JrZXJfdGhyZWFkcycpIC8qOiBhbnkqLztcbiAgICAgIGlmICh3b3JrZXJEYXRhICE9PSBudWxsICYmIHdvcmtlckRhdGEgIT09IHZvaWQgMCAmJiB3b3JrZXJEYXRhLl9fcGFyY2VsKSB7XG4gICAgICAgIHBhcmVudFBvcnQucG9zdE1lc3NhZ2UoJ3Jlc3RhcnQnKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1twYXJjZWxdIOKaoO+4jyBBbiBITVIgdXBkYXRlIHdhcyBub3QgYWNjZXB0ZWQuIFBsZWFzZSByZXN0YXJ0IHRoZSBwcm9jZXNzLicpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZ2V0UGFyZW50cyhidW5kbGUsIGlkKSAvKjogQXJyYXk8W1BhcmNlbFJlcXVpcmUsIHN0cmluZ10+ICove1xuICB2YXIgbW9kdWxlcyA9IGJ1bmRsZS5tb2R1bGVzO1xuICBpZiAoIW1vZHVsZXMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHBhcmVudHMgPSBbXTtcbiAgdmFyIGssIGQsIGRlcDtcbiAgZm9yIChrIGluIG1vZHVsZXMpIHtcbiAgICBmb3IgKGQgaW4gbW9kdWxlc1trXVsxXSkge1xuICAgICAgZGVwID0gbW9kdWxlc1trXVsxXVtkXTtcbiAgICAgIGlmIChkZXAgPT09IGlkIHx8IEFycmF5LmlzQXJyYXkoZGVwKSAmJiBkZXBbZGVwLmxlbmd0aCAtIDFdID09PSBpZCkge1xuICAgICAgICBwYXJlbnRzLnB1c2goW2J1bmRsZSwga10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIHBhcmVudHMgPSBwYXJlbnRzLmNvbmNhdChnZXRQYXJlbnRzKGJ1bmRsZS5wYXJlbnQsIGlkKSk7XG4gIH1cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5mdW5jdGlvbiB1cGRhdGVMaW5rKGxpbmspIHtcbiAgdmFyIGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuICBpZiAoIWhyZWYpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIG5ld0xpbmsgPSBsaW5rLmNsb25lTm9kZSgpO1xuICBuZXdMaW5rLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGluay5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lXG4gICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgfVxuICB9O1xuICBuZXdMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsXG4gIC8vICRGbG93Rml4TWVcbiAgaHJlZi5zcGxpdCgnPycpWzBdICsgJz8nICsgRGF0ZS5ub3coKSk7XG4gIC8vICRGbG93Rml4TWVcbiAgbGluay5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdMaW5rLCBsaW5rLm5leHRTaWJsaW5nKTtcbn1cbnZhciBjc3NUaW1lb3V0ID0gbnVsbDtcbmZ1bmN0aW9uIHJlbG9hZENTUygpIHtcbiAgaWYgKGNzc1RpbWVvdXQgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuICBjc3NUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gJEZsb3dGaXhNZVtpbmNvbXBhdGlibGUtdHlwZV1cbiAgICAgIHZhciBocmVmIC8qOiBzdHJpbmcgKi8gPSBsaW5rc1tpXS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIHZhciBob3N0bmFtZSA9IGdldEhvc3RuYW1lKCk7XG4gICAgICB2YXIgc2VydmVkRnJvbUhNUlNlcnZlciA9IGhvc3RuYW1lID09PSAnbG9jYWxob3N0JyA/IG5ldyBSZWdFeHAoJ14oaHR0cHM/OlxcXFwvXFxcXC8oMC4wLjAuMHwxMjcuMC4wLjEpfGxvY2FsaG9zdCk6JyArIGdldFBvcnQoKSkudGVzdChocmVmKSA6IGhyZWYuaW5kZXhPZihob3N0bmFtZSArICc6JyArIGdldFBvcnQoKSk7XG4gICAgICB2YXIgYWJzb2x1dGUgPSAvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KGhyZWYpICYmIGhyZWYuaW5kZXhPZihsb2NhdGlvbi5vcmlnaW4pICE9PSAwICYmICFzZXJ2ZWRGcm9tSE1SU2VydmVyO1xuICAgICAgaWYgKCFhYnNvbHV0ZSkge1xuICAgICAgICB1cGRhdGVMaW5rKGxpbmtzW2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY3NzVGltZW91dCA9IG51bGw7XG4gIH0sIDUwKTtcbn1cbmZ1bmN0aW9uIGhtckRvd25sb2FkKGFzc2V0KSB7XG4gIGlmIChhc3NldC50eXBlID09PSAnanMnKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdC5zcmMgPSBhc3NldC51cmwgKyAnP3Q9JyArIERhdGUubm93KCk7XG4gICAgICBpZiAoYXNzZXQub3V0cHV0Rm9ybWF0ID09PSAnZXNtb2R1bGUnKSB7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ21vZHVsZSc7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB2YXIgX2RvY3VtZW50JGhlYWQ7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHNjcmlwdCk7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gcmVqZWN0O1xuICAgICAgICAoX2RvY3VtZW50JGhlYWQgPSBkb2N1bWVudC5oZWFkKSA9PT0gbnVsbCB8fCBfZG9jdW1lbnQkaGVhZCA9PT0gdm9pZCAwIHx8IF9kb2N1bWVudCRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBpbXBvcnRTY3JpcHRzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyBXb3JrZXIgc2NyaXB0c1xuICAgICAgaWYgKGFzc2V0Lm91dHB1dEZvcm1hdCA9PT0gJ2VzbW9kdWxlJykge1xuICAgICAgICByZXR1cm4gX19wYXJjZWxfX2ltcG9ydF9fKGFzc2V0LnVybCArICc/dD0nICsgRGF0ZS5ub3coKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBfX3BhcmNlbF9faW1wb3J0U2NyaXB0c19fKGFzc2V0LnVybCArICc/dD0nICsgRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuYXN5bmMgZnVuY3Rpb24gaG1yQXBwbHlVcGRhdGVzKGFzc2V0cykge1xuICBnbG9iYWwucGFyY2VsSG90VXBkYXRlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgbGV0IHNjcmlwdHNUb1JlbW92ZTtcbiAgdHJ5IHtcbiAgICAvLyBJZiBzb3VyY2VVUkwgY29tbWVudHMgYXJlbid0IHN1cHBvcnRlZCBpbiBldmFsLCB3ZSBuZWVkIHRvIGxvYWRcbiAgICAvLyB0aGUgdXBkYXRlIGZyb20gdGhlIGRldiBzZXJ2ZXIgb3ZlciBIVFRQIHNvIHRoYXQgc3RhY2sgdHJhY2VzXG4gICAgLy8gYXJlIGNvcnJlY3QgaW4gZXJyb3JzL2xvZ3MuIFRoaXMgaXMgbXVjaCBzbG93ZXIgdGhhbiBldmFsLCBzb1xuICAgIC8vIHdlIG9ubHkgZG8gaXQgaWYgbmVlZGVkIChjdXJyZW50bHkganVzdCBTYWZhcmkpLlxuICAgIC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzcyOTdcbiAgICAvLyBUaGlzIHBhdGggaXMgYWxzbyB0YWtlbiBpZiBhIENTUCBkaXNhbGxvd3MgZXZhbC5cbiAgICBpZiAoIXN1cHBvcnRzU291cmNlVVJMKSB7XG4gICAgICBsZXQgcHJvbWlzZXMgPSBhc3NldHMubWFwKGFzc2V0ID0+IHtcbiAgICAgICAgdmFyIF9obXJEb3dubG9hZDtcbiAgICAgICAgcmV0dXJuIChfaG1yRG93bmxvYWQgPSBobXJEb3dubG9hZChhc3NldCkpID09PSBudWxsIHx8IF9obXJEb3dubG9hZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2htckRvd25sb2FkLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgLy8gV2ViIGV4dGVuc2lvbiBmaXhcbiAgICAgICAgICBpZiAoZXh0Q3R4ICYmIGV4dEN0eC5ydW50aW1lICYmIGV4dEN0eC5ydW50aW1lLmdldE1hbmlmZXN0KCkubWFuaWZlc3RfdmVyc2lvbiA9PSAzICYmIHR5cGVvZiBTZXJ2aWNlV29ya2VyR2xvYmFsU2NvcGUgIT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsIGluc3RhbmNlb2YgU2VydmljZVdvcmtlckdsb2JhbFNjb3BlKSB7XG4gICAgICAgICAgICBleHRDdHgucnVudGltZS5yZWxvYWQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgc2NyaXB0c1RvUmVtb3ZlID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cbiAgICBhc3NldHMuZm9yRWFjaChmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgIGhtckFwcGx5KG1vZHVsZS5idW5kbGUucm9vdCwgYXNzZXQpO1xuICAgIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGRlbGV0ZSBnbG9iYWwucGFyY2VsSG90VXBkYXRlO1xuICAgIGlmIChzY3JpcHRzVG9SZW1vdmUpIHtcbiAgICAgIHNjcmlwdHNUb1JlbW92ZS5mb3JFYWNoKHNjcmlwdCA9PiB7XG4gICAgICAgIGlmIChzY3JpcHQpIHtcbiAgICAgICAgICB2YXIgX2RvY3VtZW50JGhlYWQyO1xuICAgICAgICAgIChfZG9jdW1lbnQkaGVhZDIgPSBkb2N1bWVudC5oZWFkKSA9PT0gbnVsbCB8fCBfZG9jdW1lbnQkaGVhZDIgPT09IHZvaWQgMCB8fCBfZG9jdW1lbnQkaGVhZDIucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBobXJBcHBseShidW5kbGUgLyo6IFBhcmNlbFJlcXVpcmUgKi8sIGFzc2V0IC8qOiAgSE1SQXNzZXQgKi8pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChhc3NldC50eXBlID09PSAnY3NzJykge1xuICAgIHJlbG9hZENTUygpO1xuICB9IGVsc2UgaWYgKGFzc2V0LnR5cGUgPT09ICdqcycpIHtcbiAgICBsZXQgZGVwcyA9IGFzc2V0LmRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF07XG4gICAgaWYgKGRlcHMpIHtcbiAgICAgIGlmIChtb2R1bGVzW2Fzc2V0LmlkXSkge1xuICAgICAgICAvLyBSZW1vdmUgZGVwZW5kZW5jaWVzIHRoYXQgYXJlIHJlbW92ZWQgYW5kIHdpbGwgYmVjb21lIG9ycGhhbmVkLlxuICAgICAgICAvLyBUaGlzIGlzIG5lY2Vzc2FyeSBzbyB0aGF0IGlmIHRoZSBhc3NldCBpcyBhZGRlZCBiYWNrIGFnYWluLCB0aGUgY2FjaGUgaXMgZ29uZSwgYW5kIHdlIHByZXZlbnQgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICAgICAgICBsZXQgb2xkRGVwcyA9IG1vZHVsZXNbYXNzZXQuaWRdWzFdO1xuICAgICAgICBmb3IgKGxldCBkZXAgaW4gb2xkRGVwcykge1xuICAgICAgICAgIGlmICghZGVwc1tkZXBdIHx8IGRlcHNbZGVwXSAhPT0gb2xkRGVwc1tkZXBdKSB7XG4gICAgICAgICAgICBsZXQgaWQgPSBvbGREZXBzW2RlcF07XG4gICAgICAgICAgICBsZXQgcGFyZW50cyA9IGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICAgICAgICBpZiAocGFyZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgaG1yRGVsZXRlKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzU291cmNlVVJMKSB7XG4gICAgICAgIC8vIEdsb2JhbCBldmFsLiBXZSB3b3VsZCB1c2UgYG5ldyBGdW5jdGlvbmAgaGVyZSBidXQgYnJvd3NlclxuICAgICAgICAvLyBzdXBwb3J0IGZvciBzb3VyY2UgbWFwcyBpcyBiZXR0ZXIgd2l0aCBldmFsLlxuICAgICAgICAoMCwgZXZhbCkoYXNzZXQub3V0cHV0KTtcbiAgICAgIH1cblxuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgbGV0IGZuID0gZ2xvYmFsLnBhcmNlbEhvdFVwZGF0ZVthc3NldC5pZF07XG4gICAgICBtb2R1bGVzW2Fzc2V0LmlkXSA9IFtmbiwgZGVwc107XG4gICAgfVxuXG4gICAgLy8gQWx3YXlzIHRyYXZlcnNlIHRvIHRoZSBwYXJlbnQgYnVuZGxlLCBldmVuIGlmIHdlIGFscmVhZHkgcmVwbGFjZWQgdGhlIGFzc2V0IGluIHRoaXMgYnVuZGxlLlxuICAgIC8vIFRoaXMgaXMgcmVxdWlyZWQgaW4gY2FzZSBtb2R1bGVzIGFyZSBkdXBsaWNhdGVkLiBXZSBuZWVkIHRvIGVuc3VyZSBhbGwgaW5zdGFuY2VzIGhhdmUgdGhlIHVwZGF0ZWQgY29kZS5cbiAgICBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgICAgaG1yQXBwbHkoYnVuZGxlLnBhcmVudCwgYXNzZXQpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gaG1yRGVsZXRlKGJ1bmRsZSwgaWQpIHtcbiAgbGV0IG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChtb2R1bGVzW2lkXSkge1xuICAgIC8vIENvbGxlY3QgZGVwZW5kZW5jaWVzIHRoYXQgd2lsbCBiZWNvbWUgb3JwaGFuZWQgd2hlbiB0aGlzIG1vZHVsZSBpcyBkZWxldGVkLlxuICAgIGxldCBkZXBzID0gbW9kdWxlc1tpZF1bMV07XG4gICAgbGV0IG9ycGhhbnMgPSBbXTtcbiAgICBmb3IgKGxldCBkZXAgaW4gZGVwcykge1xuICAgICAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgZGVwc1tkZXBdKTtcbiAgICAgIGlmIChwYXJlbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBvcnBoYW5zLnB1c2goZGVwc1tkZXBdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBEZWxldGUgdGhlIG1vZHVsZS4gVGhpcyBtdXN0IGJlIGRvbmUgYmVmb3JlIGRlbGV0aW5nIGRlcGVuZGVuY2llcyBpbiBjYXNlIG9mIGNpcmN1bGFyIGRlcGVuZGVuY2llcy5cbiAgICBkZWxldGUgbW9kdWxlc1tpZF07XG4gICAgZGVsZXRlIGJ1bmRsZS5jYWNoZVtpZF07XG5cbiAgICAvLyBOb3cgZGVsZXRlIHRoZSBvcnBoYW5zLlxuICAgIG9ycGhhbnMuZm9yRWFjaChpZCA9PiB7XG4gICAgICBobXJEZWxldGUobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoYnVuZGxlLnBhcmVudCkge1xuICAgIGhtckRlbGV0ZShidW5kbGUucGFyZW50LCBpZCk7XG4gIH1cbn1cbmZ1bmN0aW9uIGhtckFjY2VwdENoZWNrKGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLywgZGVwc0J5QnVuZGxlIC8qOiA/eyBbc3RyaW5nXTogeyBbc3RyaW5nXTogc3RyaW5nIH0gfSovKSB7XG4gIGNoZWNrZWRBc3NldHMgPSB7fTtcbiAgaWYgKGhtckFjY2VwdENoZWNrT25lKGJ1bmRsZSwgaWQsIGRlcHNCeUJ1bmRsZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIFRyYXZlcnNlIHBhcmVudHMgYnJlYWR0aCBmaXJzdC4gQWxsIHBvc3NpYmxlIGFuY2VzdHJpZXMgbXVzdCBhY2NlcHQgdGhlIEhNUiB1cGRhdGUsIG9yIHdlJ2xsIHJlbG9hZC5cbiAgbGV0IHBhcmVudHMgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgaWQpO1xuICBsZXQgYWNjZXB0ZWQgPSBmYWxzZTtcbiAgd2hpbGUgKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgIGxldCB2ID0gcGFyZW50cy5zaGlmdCgpO1xuICAgIGxldCBhID0gaG1yQWNjZXB0Q2hlY2tPbmUodlswXSwgdlsxXSwgbnVsbCk7XG4gICAgaWYgKGEpIHtcbiAgICAgIC8vIElmIHRoaXMgcGFyZW50IGFjY2VwdHMsIHN0b3AgdHJhdmVyc2luZyB1cHdhcmQsIGJ1dCBzdGlsbCBjb25zaWRlciBzaWJsaW5ncy5cbiAgICAgIGFjY2VwdGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKGEgIT09IG51bGwpIHtcbiAgICAgIC8vIE90aGVyd2lzZSwgcXVldWUgdGhlIHBhcmVudHMgaW4gdGhlIG5leHQgbGV2ZWwgdXB3YXJkLlxuICAgICAgbGV0IHAgPSBnZXRQYXJlbnRzKG1vZHVsZS5idW5kbGUucm9vdCwgdlsxXSk7XG4gICAgICBpZiAocC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgYXJlIG5vIHBhcmVudHMsIHRoZW4gd2UndmUgcmVhY2hlZCBhbiBlbnRyeSB3aXRob3V0IGFjY2VwdGluZy4gUmVsb2FkLlxuICAgICAgICBhY2NlcHRlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHBhcmVudHMucHVzaCguLi5wKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFjY2VwdGVkO1xufVxuZnVuY3Rpb24gaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlIC8qOiBQYXJjZWxSZXF1aXJlICovLCBpZCAvKjogc3RyaW5nICovLCBkZXBzQnlCdW5kbGUgLyo6ID97IFtzdHJpbmddOiB7IFtzdHJpbmddOiBzdHJpbmcgfSB9Ki8pIHtcbiAgdmFyIG1vZHVsZXMgPSBidW5kbGUubW9kdWxlcztcbiAgaWYgKCFtb2R1bGVzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChkZXBzQnlCdW5kbGUgJiYgIWRlcHNCeUJ1bmRsZVtidW5kbGUuSE1SX0JVTkRMRV9JRF0pIHtcbiAgICAvLyBJZiB3ZSByZWFjaGVkIHRoZSByb290IGJ1bmRsZSB3aXRob3V0IGZpbmRpbmcgd2hlcmUgdGhlIGFzc2V0IHNob3VsZCBnbyxcbiAgICAvLyB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uIE1hcmsgYXMgXCJhY2NlcHRlZFwiIHNvIHdlIGRvbid0IHJlbG9hZCB0aGUgcGFnZS5cbiAgICBpZiAoIWJ1bmRsZS5wYXJlbnQpIHtcbiAgICAgIGJ1bmRsZU5vdEZvdW5kID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gaG1yQWNjZXB0Q2hlY2tPbmUoYnVuZGxlLnBhcmVudCwgaWQsIGRlcHNCeUJ1bmRsZSk7XG4gIH1cbiAgaWYgKGNoZWNrZWRBc3NldHNbaWRdKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY2hlY2tlZEFzc2V0c1tpZF0gPSB0cnVlO1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgaWYgKCFjYWNoZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBhc3NldHNUb0Rpc3Bvc2UucHVzaChbYnVuZGxlLCBpZF0pO1xuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmxlbmd0aCkge1xuICAgIGFzc2V0c1RvQWNjZXB0LnB1c2goW2J1bmRsZSwgaWRdKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBobXJEaXNwb3NlUXVldWUoKSB7XG4gIC8vIERpc3Bvc2UgYWxsIG9sZCBhc3NldHMuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXNzZXRzVG9EaXNwb3NlLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGlkID0gYXNzZXRzVG9EaXNwb3NlW2ldWzFdO1xuICAgIGlmICghZGlzcG9zZWRBc3NldHNbaWRdKSB7XG4gICAgICBobXJEaXNwb3NlKGFzc2V0c1RvRGlzcG9zZVtpXVswXSwgaWQpO1xuICAgICAgZGlzcG9zZWRBc3NldHNbaWRdID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgYXNzZXRzVG9EaXNwb3NlID0gW107XG59XG5mdW5jdGlvbiBobXJEaXNwb3NlKGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLykge1xuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgYnVuZGxlLmhvdERhdGFbaWRdID0ge307XG4gIGlmIChjYWNoZWQgJiYgY2FjaGVkLmhvdCkge1xuICAgIGNhY2hlZC5ob3QuZGF0YSA9IGJ1bmRsZS5ob3REYXRhW2lkXTtcbiAgfVxuICBpZiAoY2FjaGVkICYmIGNhY2hlZC5ob3QgJiYgY2FjaGVkLmhvdC5fZGlzcG9zZUNhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBjYWNoZWQuaG90Ll9kaXNwb3NlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICBjYihidW5kbGUuaG90RGF0YVtpZF0pO1xuICAgIH0pO1xuICB9XG4gIGRlbGV0ZSBidW5kbGUuY2FjaGVbaWRdO1xufVxuZnVuY3Rpb24gaG1yQWNjZXB0KGJ1bmRsZSAvKjogUGFyY2VsUmVxdWlyZSAqLywgaWQgLyo6IHN0cmluZyAqLykge1xuICAvLyBFeGVjdXRlIHRoZSBtb2R1bGUuXG4gIGJ1bmRsZShpZCk7XG5cbiAgLy8gUnVuIHRoZSBhY2NlcHQgY2FsbGJhY2tzIGluIHRoZSBuZXcgdmVyc2lvbiBvZiB0aGUgbW9kdWxlLlxuICB2YXIgY2FjaGVkID0gYnVuZGxlLmNhY2hlW2lkXTtcbiAgaWYgKGNhY2hlZCAmJiBjYWNoZWQuaG90ICYmIGNhY2hlZC5ob3QuX2FjY2VwdENhbGxiYWNrcy5sZW5ndGgpIHtcbiAgICBsZXQgYXNzZXRzVG9BbHNvQWNjZXB0ID0gW107XG4gICAgY2FjaGVkLmhvdC5fYWNjZXB0Q2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICBsZXQgYWRkaXRpb25hbEFzc2V0cyA9IGNiKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGdldFBhcmVudHMobW9kdWxlLmJ1bmRsZS5yb290LCBpZCk7XG4gICAgICB9KTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFkZGl0aW9uYWxBc3NldHMpICYmIGFkZGl0aW9uYWxBc3NldHMubGVuZ3RoKSB7XG4gICAgICAgIGFzc2V0c1RvQWxzb0FjY2VwdC5wdXNoKC4uLmFkZGl0aW9uYWxBc3NldHMpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChhc3NldHNUb0Fsc29BY2NlcHQubGVuZ3RoKSB7XG4gICAgICBsZXQgaGFuZGxlZCA9IGFzc2V0c1RvQWxzb0FjY2VwdC5ldmVyeShmdW5jdGlvbiAoYSkge1xuICAgICAgICByZXR1cm4gaG1yQWNjZXB0Q2hlY2soYVswXSwgYVsxXSk7XG4gICAgICB9KTtcbiAgICAgIGlmICghaGFuZGxlZCkge1xuICAgICAgICByZXR1cm4gZnVsbFJlbG9hZCgpO1xuICAgICAgfVxuICAgICAgaG1yRGlzcG9zZVF1ZXVlKCk7XG4gICAgfVxuICB9XG59IiwiY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09IFwiT1BFTl9QT1NUX1RBQlwiICYmIG1lc3NhZ2UudXJsKSB7XG4gICAgICAgIGNocm9tZS50YWJzLmNyZWF0ZSh7IHVybDogbWVzc2FnZS51cmwsIGFjdGl2ZTogZmFsc2UgfSwgKHRhYikgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFiSWQgPSB0YWIuaWQ7XG5cbiAgICAgICAgICAgIGNocm9tZS50YWJzLm9uVXBkYXRlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiBsaXN0ZW5lcih1cGRhdGVkVGFiSWQsIGluZm8pIHtcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlZFRhYklkID09PSB0YWJJZCAmJiBpbmZvLnN0YXR1cyA9PT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS50YWJzLm9uVXBkYXRlZC5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnNjcmlwdGluZy5leGVjdXRlU2NyaXB0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldDogeyB0YWJJZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXM6IFtcInNyYy9jbm9udGVudC5qc1wiXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5lNDU1Yzg3NC5qcy5tYXAifQ==
