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
})({"kXhhF":[function(require,module,exports,__globalThis) {
JSON.parse("{\"manifest_version\":3,\"name\":\"linkedin_post_scrapper\",\"version\":\"0.1\",\"description\":\"Scrapes LinkedIn post content from saved URLs.\",\"permissions\":[\"clipboardRead\",\"scripting\",\"tabs\",\"storage\"],\"host_permissions\":[\"https://www.linkedin.com/*\"],\"action\":{\"default_popup\":\"\",\"default_title\":\"LinkedIn Post Scrapper\"},\"background\":{\"service_worker\":\"\"},\"content_security_policy\":{\"extension_pages\":\"script-src 'self' http://localhost:*;object-src 'self';\"}}");

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

},{}]},["kXhhF","eGaF0"], null, "parcelRequire94c2", {})
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEtBQUssS0FBSyxDQUFDOzs7QUNBWDtBQUVBLDBCQUEwQixHQUMxQixJQUFJLE1BQU0sT0FBTyxZQUFZLGNBQWMsU0FBUztBQUNwRCxJQUFJLGFBQWEsSUFBSSxPQUFPLENBQUMsTUFBTTtBQUNuQyxJQUFJLFVBQVU7QUFDZCxJQUFJLFlBQVksQ0FBQyxLQUFLLEtBQU8sQ0FBQyxHQUFHO1FBQy9CLElBQUksT0FBTyxZQUFZLGFBQ3JCLE9BQU8sSUFBSSxRQUFRLENBQUMsU0FBUyxTQUFXLEdBQUcsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFBLE1BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLFFBQVE7UUFFbEksT0FBTyxHQUFHLENBQUMsR0FBRyxJQUFJO0lBQ3BCO0FBQ0EsSUFBSSxZQUFZLFVBQVUsSUFBSSxJQUFJLEVBQUU7QUFDcEMsSUFBSSxhQUFhLFVBQVUsSUFBSSxJQUFJLEVBQUU7QUFDckMsSUFBSSxPQUFPLENBQUMsTUFBTSxHQUFHO0lBQ25CLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFBO1FBQ2pCLE9BQU8sUUFBUSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtZQUMxQixJQUFJLElBQUksRUFBRSxLQUFLLFNBQVM7WUFDeEIsT0FBTyxXQUFXLElBQUksRUFBRSxFQUFFO2dCQUN4Qix1QkFBdUI7WUFDekIsR0FBRyxLQUFLLENBQUMsS0FBTztRQUNsQjtJQUNGLEdBQUcsSUFBSSxDQUFDO1FBQ04sV0FBVyxJQUFJLENBQUMsSUFBSSxPQUFPO0lBQzdCO0FBQ0Y7QUFDQSxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSztJQUN0QyxJQUFJLElBQUkscUJBQXFCLEVBQUU7UUFDN0IsVUFBVSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1FBQ3ZCLElBQUksT0FBTyxDQUFDLE1BQU07SUFDcEI7QUFDRjs7O0FDL0JBLE9BQU8sT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLFFBQVE7SUFDbkQsSUFBSSxRQUFRLElBQUksS0FBSyxtQkFBbUIsUUFBUSxHQUFHLEVBQy9DLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUFFLEtBQUssUUFBUSxHQUFHO1FBQUUsUUFBUTtJQUFNLEdBQUcsQ0FBQztRQUNyRCxNQUFNLFFBQVEsSUFBSSxFQUFFO1FBRXBCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxTQUFTLFlBQVksRUFBRSxJQUFJO1lBQ2xFLElBQUksaUJBQWlCLFNBQVMsS0FBSyxNQUFNLEtBQUssWUFBWTtnQkFDdEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztnQkFFckMsT0FBTyxTQUFTLENBQUMsYUFBYSxDQUFDO29CQUMzQixRQUFRO3dCQUFFO29CQUFNO29CQUNoQixPQUFPO3dCQUFDO3FCQUFpQjtnQkFDN0I7WUFDSjtRQUNKO0lBQ0o7QUFFUiIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS13ZWJleHRlbnNpb24vbGliL3J1bnRpbWUtMmU0YjM4NTc5OTNlNTk0Ny5qcyIsIm5vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtd2ViZXh0ZW5zaW9uL2xpYi9ydW50aW1lLTQ2ZmMxYjNlYmU1OTVjMGEuanMiLCJzcmMvYmFja2dyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJKU09OLnBhcnNlKFwie1xcXCJtYW5pZmVzdF92ZXJzaW9uXFxcIjozLFxcXCJuYW1lXFxcIjpcXFwibGlua2VkaW5fcG9zdF9zY3JhcHBlclxcXCIsXFxcInZlcnNpb25cXFwiOlxcXCIwLjFcXFwiLFxcXCJkZXNjcmlwdGlvblxcXCI6XFxcIlNjcmFwZXMgTGlua2VkSW4gcG9zdCBjb250ZW50IGZyb20gc2F2ZWQgVVJMcy5cXFwiLFxcXCJwZXJtaXNzaW9uc1xcXCI6W1xcXCJjbGlwYm9hcmRSZWFkXFxcIixcXFwic2NyaXB0aW5nXFxcIixcXFwidGFic1xcXCIsXFxcInN0b3JhZ2VcXFwiXSxcXFwiaG9zdF9wZXJtaXNzaW9uc1xcXCI6W1xcXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vKlxcXCJdLFxcXCJhY3Rpb25cXFwiOntcXFwiZGVmYXVsdF9wb3B1cFxcXCI6XFxcIlxcXCIsXFxcImRlZmF1bHRfdGl0bGVcXFwiOlxcXCJMaW5rZWRJbiBQb3N0IFNjcmFwcGVyXFxcIn0sXFxcImJhY2tncm91bmRcXFwiOntcXFwic2VydmljZV93b3JrZXJcXFwiOlxcXCJcXFwifSxcXFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcXFwiOntcXFwiZXh0ZW5zaW9uX3BhZ2VzXFxcIjpcXFwic2NyaXB0LXNyYyAnc2VsZicgaHR0cDovL2xvY2FsaG9zdDoqO29iamVjdC1zcmMgJ3NlbGYnO1xcXCJ9fVwiKSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBnbG9iYWwgY2hyb21lLCBicm93c2VyICovXG5sZXQgZW52ID0gdHlwZW9mIGJyb3dzZXIgPT09ICd1bmRlZmluZWQnID8gY2hyb21lIDogYnJvd3NlcjtcbmxldCBvcmlnUmVsb2FkID0gZW52LnJ1bnRpbWUucmVsb2FkO1xubGV0IGF2b2lkSUQgPSAtMTtcbmxldCBwcm9taXNpZnkgPSAob2JqLCBmbikgPT4gKC4uLmFyZ3MpID0+IHtcbiAgaWYgKHR5cGVvZiBicm93c2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiBvYmpbZm5dKC4uLmFyZ3MsIHJlcyA9PiBlbnYucnVudGltZS5sYXN0RXJyb3IgPyByZWplY3QoZW52LnJ1bnRpbWUubGFzdEVycm9yKSA6IHJlc29sdmUocmVzKSkpO1xuICB9XG4gIHJldHVybiBvYmpbZm5dKC4uLmFyZ3MpO1xufTtcbmxldCBxdWVyeVRhYnMgPSBwcm9taXNpZnkoZW52LnRhYnMsICdxdWVyeScpO1xubGV0IG1lc3NhZ2VUYWIgPSBwcm9taXNpZnkoZW52LnRhYnMsICdzZW5kTWVzc2FnZScpO1xuZW52LnJ1bnRpbWUucmVsb2FkID0gKCkgPT4ge1xuICBxdWVyeVRhYnMoe30pLnRoZW4odGFicyA9PiB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHRhYnMubWFwKHRhYiA9PiB7XG4gICAgICBpZiAodGFiLmlkID09PSBhdm9pZElEKSByZXR1cm47XG4gICAgICByZXR1cm4gbWVzc2FnZVRhYih0YWIuaWQsIHtcbiAgICAgICAgX19wYXJjZWxfaG1yX3JlbG9hZF9fOiB0cnVlXG4gICAgICB9KS5jYXRjaCgoKSA9PiB7fSk7XG4gICAgfSkpO1xuICB9KS50aGVuKCgpID0+IHtcbiAgICBvcmlnUmVsb2FkLmNhbGwoZW52LnJ1bnRpbWUpO1xuICB9KTtcbn07XG5lbnYucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyKSA9PiB7XG4gIGlmIChtc2cuX19wYXJjZWxfaG1yX3JlbG9hZF9fKSB7XG4gICAgYXZvaWRJRCA9IHNlbmRlci50YWIuaWQ7XG4gICAgZW52LnJ1bnRpbWUucmVsb2FkKCk7XG4gIH1cbn0pOyIsImNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSBcIk9QRU5fUE9TVF9UQUJcIiAmJiBtZXNzYWdlLnVybCkge1xuICAgICAgICBjaHJvbWUudGFicy5jcmVhdGUoeyB1cmw6IG1lc3NhZ2UudXJsLCBhY3RpdmU6IGZhbHNlIH0sICh0YWIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhYklkID0gdGFiLmlkO1xuXG4gICAgICAgICAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQuYWRkTGlzdGVuZXIoZnVuY3Rpb24gbGlzdGVuZXIodXBkYXRlZFRhYklkLCBpbmZvKSB7XG4gICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRUYWJJZCA9PT0gdGFiSWQgJiYgaW5mby5zdGF0dXMgPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgICAgICAgICBjaHJvbWUudGFicy5vblVwZGF0ZWQucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zY3JpcHRpbmcuZXhlY3V0ZVNjcmlwdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHsgdGFiSWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzOiBbXCJzcmMvc2NyYXBlci50c1wiXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC4wYTBjZWRkYi5qcy5tYXAifQ==
