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
})({"7ehb9":[function(require,module,exports,__globalThis) {
JSON.parse("{\"manifest_version\":3,\"name\":\"LinkedIn Assistant\",\"version\":\"0.1\",\"description\":\"Assists in managing linkedin for better visibility.\",\"permissions\":[\"clipboardRead\",\"scripting\",\"tabs\",\"storage\"],\"host_permissions\":[\"https://www.linkedin.com/*\"],\"action\":{\"default_popup\":\"\",\"default_title\":\"LinkedIn Post Scrapper\"},\"background\":{\"service_worker\":\"\"},\"content_security_policy\":{\"extension_pages\":\"script-src 'self' http://localhost:*;object-src 'self';\"}}");

},{}],"eGaF0":[function(require,module,exports,__globalThis) {
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

},{}]},["7ehb9","eGaF0"], null, "parcelRequire94c2", {})
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
                        "src/scraper.ts"
                    ]
                });
            }
        });
    });
});

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEtBQUssS0FBSyxDQUFDOzs7QUNBWDtBQUVBLDBCQUEwQixHQUMxQixJQUFJLE1BQU0sT0FBTyxZQUFZLGNBQWMsU0FBUztBQUNwRCxJQUFJLGFBQWEsSUFBSSxPQUFPLENBQUMsTUFBTTtBQUNuQyxJQUFJLFVBQVU7QUFDZCxJQUFJLFlBQVksQ0FBQyxLQUFLLEtBQU8sQ0FBQyxHQUFHO1FBQy9CLElBQUksT0FBTyxZQUFZLGFBQ3JCLE9BQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxTQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFBLE1BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLFFBQVE7UUFFbEksT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJO0lBQ3BCO0FBQ0EsSUFBSSxZQUFZLFVBQVUsSUFBSSxJQUFJLEVBQUU7QUFDcEMsSUFBSSxhQUFhLFVBQVUsSUFBSSxJQUFJLEVBQUU7QUFDckMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHO0lBQ25CLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBO1FBQ2pCLE9BQU8sUUFBUSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtZQUMxQixJQUFJLElBQUksRUFBRSxLQUFLLFNBQVM7WUFDeEIsT0FBTyxXQUFXLElBQUksRUFBRSxFQUFFO2dCQUN4Qix1QkFBdUI7WUFDekIsR0FBRyxLQUFLLENBQUMsS0FBTztRQUNsQjtJQUNGLEdBQUcsSUFBSSxDQUFDO1FBQ04sV0FBVyxJQUFJLENBQUMsSUFBSSxPQUFPO0lBQzdCO0FBQ0Y7QUFDQSxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSztJQUN0QyxJQUFJLElBQUkscUJBQXFCLEVBQUU7UUFDN0IsVUFBVSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZCLElBQUksT0FBTyxDQUFDLE1BQU07SUFDcEI7QUFDRjs7O0FDL0JBLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLFFBQVE7SUFDbkQsSUFBSSxRQUFRLElBQUksS0FBSyxtQkFBbUIsUUFBUSxHQUFHLEVBQy9DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUFFLEtBQUssUUFBUSxHQUFHO1FBQUUsUUFBUTtJQUFNLEdBQUcsQ0FBQztRQUNyRCxNQUFNLFFBQVEsSUFBSSxFQUFFO1FBRXBCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxTQUFTLFlBQVksRUFBRSxJQUFJO1lBQ2xFLElBQUksaUJBQWlCLFNBQVMsS0FBSyxNQUFNLEtBQUssWUFBWTtnQkFDdEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztnQkFFckMsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFDO29CQUMzQixRQUFRO3dCQUFFO29CQUFNO29CQUNoQixPQUFPO3dCQUFDO3FCQUFpQjtnQkFDN0I7WUFDSjtRQUNKO0lBQ0o7QUFFUiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS13ZWJleHRlbnNpb24vbGliL3J1bnRpbWUtMzJlMjQ2YmRjNzJjZWQwNS5qcyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtd2ViZXh0ZW5zaW9uL2xpYi9ydW50aW1lLTQ2ZmMxYjNlYmU1OTVjMGEuanMiLCJzcmMvYmFja2dyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJKU09OLnBhcnNlKFwie1xcXCJtYW5pZmVzdF92ZXJzaW9uXFxcIjozLFxcXCJuYW1lXFxcIjpcXFwiTGlua2VkSW4gQXNzaXN0YW50XFxcIixcXFwidmVyc2lvblxcXCI6XFxcIjAuMVxcXCIsXFxcImRlc2NyaXB0aW9uXFxcIjpcXFwiQXNzaXN0cyBpbiBtYW5hZ2luZyBsaW5rZWRpbiBmb3IgYmV0dGVyIHZpc2liaWxpdHkuXFxcIixcXFwicGVybWlzc2lvbnNcXFwiOltcXFwiY2xpcGJvYXJkUmVhZFxcXCIsXFxcInNjcmlwdGluZ1xcXCIsXFxcInRhYnNcXFwiLFxcXCJzdG9yYWdlXFxcIl0sXFxcImhvc3RfcGVybWlzc2lvbnNcXFwiOltcXFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tLypcXFwiXSxcXFwiYWN0aW9uXFxcIjp7XFxcImRlZmF1bHRfcG9wdXBcXFwiOlxcXCJcXFwiLFxcXCJkZWZhdWx0X3RpdGxlXFxcIjpcXFwiTGlua2VkSW4gUG9zdCBTY3JhcHBlclxcXCJ9LFxcXCJiYWNrZ3JvdW5kXFxcIjp7XFxcInNlcnZpY2Vfd29ya2VyXFxcIjpcXFwiXFxcIn0sXFxcImNvbnRlbnRfc2VjdXJpdHlfcG9saWN5XFxcIjp7XFxcImV4dGVuc2lvbl9wYWdlc1xcXCI6XFxcInNjcmlwdC1zcmMgJ3NlbGYnIGh0dHA6Ly9sb2NhbGhvc3Q6KjtvYmplY3Qtc3JjICdzZWxmJztcXFwifX1cIikiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogZ2xvYmFsIGNocm9tZSwgYnJvd3NlciAqL1xubGV0IGVudiA9IHR5cGVvZiBicm93c2VyID09PSAndW5kZWZpbmVkJyA/IGNocm9tZSA6IGJyb3dzZXI7XG5sZXQgb3JpZ1JlbG9hZCA9IGVudi5ydW50aW1lLnJlbG9hZDtcbmxldCBhdm9pZElEID0gLTE7XG5sZXQgcHJvbWlzaWZ5ID0gKG9iaiwgZm4pID0+ICguLi5hcmdzKSA9PiB7XG4gIGlmICh0eXBlb2YgYnJvd3NlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gb2JqW2ZuXSguLi5hcmdzLCByZXMgPT4gZW52LnJ1bnRpbWUubGFzdEVycm9yID8gcmVqZWN0KGVudi5ydW50aW1lLmxhc3RFcnJvcikgOiByZXNvbHZlKHJlcykpKTtcbiAgfVxuICByZXR1cm4gb2JqW2ZuXSguLi5hcmdzKTtcbn07XG5sZXQgcXVlcnlUYWJzID0gcHJvbWlzaWZ5KGVudi50YWJzLCAncXVlcnknKTtcbmxldCBtZXNzYWdlVGFiID0gcHJvbWlzaWZ5KGVudi50YWJzLCAnc2VuZE1lc3NhZ2UnKTtcbmVudi5ydW50aW1lLnJlbG9hZCA9ICgpID0+IHtcbiAgcXVlcnlUYWJzKHt9KS50aGVuKHRhYnMgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLmFsbCh0YWJzLm1hcCh0YWIgPT4ge1xuICAgICAgaWYgKHRhYi5pZCA9PT0gYXZvaWRJRCkgcmV0dXJuO1xuICAgICAgcmV0dXJuIG1lc3NhZ2VUYWIodGFiLmlkLCB7XG4gICAgICAgIF9fcGFyY2VsX2htcl9yZWxvYWRfXzogdHJ1ZVxuICAgICAgfSkuY2F0Y2goKCkgPT4ge30pO1xuICAgIH0pKTtcbiAgfSkudGhlbigoKSA9PiB7XG4gICAgb3JpZ1JlbG9hZC5jYWxsKGVudi5ydW50aW1lKTtcbiAgfSk7XG59O1xuZW52LnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtc2csIHNlbmRlcikgPT4ge1xuICBpZiAobXNnLl9fcGFyY2VsX2htcl9yZWxvYWRfXykge1xuICAgIGF2b2lkSUQgPSBzZW5kZXIudGFiLmlkO1xuICAgIGVudi5ydW50aW1lLnJlbG9hZCgpO1xuICB9XG59KTsiLCJjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UsIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gXCJPUEVOX1BPU1RfVEFCXCIgJiYgbWVzc2FnZS51cmwpIHtcbiAgICAgICAgY2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBtZXNzYWdlLnVybCwgYWN0aXZlOiBmYWxzZSB9LCAodGFiKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YWJJZCA9IHRhYi5pZDtcblxuICAgICAgICAgICAgY2hyb21lLnRhYnMub25VcGRhdGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uIGxpc3RlbmVyKHVwZGF0ZWRUYWJJZCwgaW5mbykge1xuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkVGFiSWQgPT09IHRhYklkICYmIGluZm8uc3RhdHVzID09PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hyb21lLnRhYnMub25VcGRhdGVkLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgICAgICAgICAgICAgICBjaHJvbWUuc2NyaXB0aW5nLmV4ZWN1dGVTY3JpcHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB7IHRhYklkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlczogW1wic3JjL3NjcmFwZXIudHNcIl1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuIl0sIm5hbWVzIjpbXSwidmVyc2lvbiI6MywiZmlsZSI6ImJhY2tncm91bmQuMGEwY2VkZGIuanMubWFwIn0=
