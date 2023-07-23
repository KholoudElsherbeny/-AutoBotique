globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'http';
import { Server } from 'https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, readBody, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import unstorage_47drivers_47fs from 'unstorage/drivers/fs';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, relative, join } from 'pathe';
import { generateJSON } from '@intlify/bundle-utils';
import { isFunction, isObject as isObject$1 } from '@intlify/shared';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{"baseURL":"https://phpv8.aait-d.com/auto-boutique/public/api/","i18n":{"experimental":{"jsTsFormatResource":false},"baseUrl":""}},"i18n":{"precompile":{"strictMessage":true,"escapeHtml":false}}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

storage.mount('i18n', unstorage_47drivers_47fs({"driver":"fs","base":"D:\\projects\\websites\\auto_botique\\.nuxt\\i18n","ignore":["**/node_modules/**","**/.git/**"]}));

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/i18n-meta.json": {
    "type": "application/json",
    "etag": "\"2-vyGp6PvFo4RvsFtPoIWeCReyIC8\"",
    "mtime": "2023-06-18T09:42:11.933Z",
    "size": 2,
    "path": "../public/i18n-meta.json"
  },
  "/_nuxt/aboutUs_bg.8e9329a6.js": {
    "type": "application/javascript",
    "etag": "\"53-3buXFygBgP8EqEPIy3FixZ5dA2U\"",
    "mtime": "2023-06-18T09:42:11.922Z",
    "size": 83,
    "path": "../public/_nuxt/aboutUs_bg.8e9329a6.js"
  },
  "/_nuxt/aboutUs_bg.a95c6ca6.png": {
    "type": "image/png",
    "etag": "\"1207d9-usG4CH9n6RvmQtoMymiRu7rL51s\"",
    "mtime": "2023-06-18T09:42:11.910Z",
    "size": 1181657,
    "path": "../public/_nuxt/aboutUs_bg.a95c6ca6.png"
  },
  "/_nuxt/ar.f08e0124.js": {
    "type": "application/javascript",
    "etag": "\"2973-eGVN/SzTImhMCxm/Nyn10556has\"",
    "mtime": "2023-06-18T09:42:11.927Z",
    "size": 10611,
    "path": "../public/_nuxt/ar.f08e0124.js"
  },
  "/_nuxt/arrow.0c6c14e1.svg": {
    "type": "image/svg+xml",
    "etag": "\"23d-uLJAY8hgPUHGNsUxQN+sjjALxY8\"",
    "mtime": "2023-06-18T09:42:11.913Z",
    "size": 573,
    "path": "../public/_nuxt/arrow.0c6c14e1.svg"
  },
  "/_nuxt/arrow.ecb86765.js": {
    "type": "application/javascript",
    "etag": "\"4e-vGhJCxCs0m9KCk/4JPXZIKqbK9w\"",
    "mtime": "2023-06-18T09:42:11.926Z",
    "size": 78,
    "path": "../public/_nuxt/arrow.ecb86765.js"
  },
  "/_nuxt/auth.671c6c89.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"430-v2DjBX+S/PWSsz4qGwPZxeM8f0U\"",
    "mtime": "2023-06-18T09:42:11.933Z",
    "size": 1072,
    "path": "../public/_nuxt/auth.671c6c89.css"
  },
  "/_nuxt/auth.b2447dd2.js": {
    "type": "application/javascript",
    "etag": "\"e8-JgoqLkLiSKMHabcRVii5nIJdn8Q\"",
    "mtime": "2023-06-18T09:42:11.924Z",
    "size": 232,
    "path": "../public/_nuxt/auth.b2447dd2.js"
  },
  "/_nuxt/auth.c3ed30a4.js": {
    "type": "application/javascript",
    "etag": "\"57a-iBsCBwMe8gWdW/urTIWF+3RthZw\"",
    "mtime": "2023-06-18T09:42:11.928Z",
    "size": 1402,
    "path": "../public/_nuxt/auth.c3ed30a4.js"
  },
  "/_nuxt/auth.ea6811d1.js": {
    "type": "application/javascript",
    "etag": "\"73-0KpEH9qUgL2aJvDKe8gL2xRUZD0\"",
    "mtime": "2023-06-18T09:42:11.927Z",
    "size": 115,
    "path": "../public/_nuxt/auth.ea6811d1.js"
  },
  "/_nuxt/BACKDROP.c1189ef5.svg": {
    "type": "image/svg+xml",
    "etag": "\"ad2e1-oG0NRx2ob1VPWNbldeOHF95kHlk\"",
    "mtime": "2023-06-18T09:42:11.909Z",
    "size": 709345,
    "path": "../public/_nuxt/BACKDROP.c1189ef5.svg"
  },
  "/_nuxt/BACKDROP.fc8a6ccc.js": {
    "type": "application/javascript",
    "etag": "\"51-uH8iO4kBC5xTT7CIAVWAwIs/8VA\"",
    "mtime": "2023-06-18T09:42:11.924Z",
    "size": 81,
    "path": "../public/_nuxt/BACKDROP.fc8a6ccc.js"
  },
  "/_nuxt/BACKDROP2.3fa92dd5.svg": {
    "type": "image/svg+xml",
    "etag": "\"14a261-4lC/INe1bYy+ogksOjBSMRD9/PQ\"",
    "mtime": "2023-06-18T09:42:11.910Z",
    "size": 1352289,
    "path": "../public/_nuxt/BACKDROP2.3fa92dd5.svg"
  },
  "/_nuxt/BACKDROP2.90d07d0f.js": {
    "type": "application/javascript",
    "etag": "\"52-aOAJjmj8TS3s8ZuVntH5MyNMbaU\"",
    "mtime": "2023-06-18T09:42:11.923Z",
    "size": 82,
    "path": "../public/_nuxt/BACKDROP2.90d07d0f.js"
  },
  "/_nuxt/bell_icon.33b9ffca.svg": {
    "type": "image/svg+xml",
    "etag": "\"2b1-qAd48GcByD63ixYvr+9puuCwdY4\"",
    "mtime": "2023-06-18T09:42:11.920Z",
    "size": 689,
    "path": "../public/_nuxt/bell_icon.33b9ffca.svg"
  },
  "/_nuxt/bookmark_full.5fa7cd7b.svg": {
    "type": "image/svg+xml",
    "etag": "\"13d-cN+DhD/fm37jzNP88BMbh4Gp5Nk\"",
    "mtime": "2023-06-18T09:42:11.913Z",
    "size": 317,
    "path": "../public/_nuxt/bookmark_full.5fa7cd7b.svg"
  },
  "/_nuxt/carbon_bg.ac906456.svg": {
    "type": "image/svg+xml",
    "etag": "\"169a3f-7Z/S124fNi1OUgYPFkCmDaUqn5g\"",
    "mtime": "2023-06-18T09:42:11.922Z",
    "size": 1481279,
    "path": "../public/_nuxt/carbon_bg.ac906456.svg"
  },
  "/_nuxt/CardProduct.457a1aa3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d70-t30KjLKk3xHmVIZiGTQq7YhiEVU\"",
    "mtime": "2023-06-18T09:42:11.931Z",
    "size": 3440,
    "path": "../public/_nuxt/CardProduct.457a1aa3.css"
  },
  "/_nuxt/CardProduct.e609eda7.js": {
    "type": "application/javascript",
    "etag": "\"823-fJ1MycD0CoYjL1IrsOxsqgcJOBM\"",
    "mtime": "2023-06-18T09:42:11.926Z",
    "size": 2083,
    "path": "../public/_nuxt/CardProduct.e609eda7.js"
  },
  "/_nuxt/color.473bc8ca.png": {
    "type": "image/png",
    "etag": "\"2873-/0xLyyIHiRspL1RO202p0t9dRc8\"",
    "mtime": "2023-06-18T09:42:11.892Z",
    "size": 10355,
    "path": "../public/_nuxt/color.473bc8ca.png"
  },
  "/_nuxt/Combined-Shape.070e8d21.svg": {
    "type": "image/svg+xml",
    "etag": "\"5ae-KClmo9l9yTuaJg/MURnGeS8Ol3g\"",
    "mtime": "2023-06-18T09:42:11.909Z",
    "size": 1454,
    "path": "../public/_nuxt/Combined-Shape.070e8d21.svg"
  },
  "/_nuxt/composables.33e0fa5e.js": {
    "type": "application/javascript",
    "etag": "\"61-t3tLoItgAWdsU7/GJfIg+mKuVhk\"",
    "mtime": "2023-06-18T09:42:11.923Z",
    "size": 97,
    "path": "../public/_nuxt/composables.33e0fa5e.js"
  },
  "/_nuxt/contact_form_bg.47b5771f.png": {
    "type": "image/png",
    "etag": "\"9d5c0-qZFkD0KU4SuGvbEFF2U+dhNlkWQ\"",
    "mtime": "2023-06-18T09:42:11.911Z",
    "size": 644544,
    "path": "../public/_nuxt/contact_form_bg.47b5771f.png"
  },
  "/_nuxt/contact_location_icon.dc4a0d09.svg": {
    "type": "image/svg+xml",
    "etag": "\"551-hdAniyZpgHxUKqblQc4x9Z5ER1E\"",
    "mtime": "2023-06-18T09:42:11.908Z",
    "size": 1361,
    "path": "../public/_nuxt/contact_location_icon.dc4a0d09.svg"
  },
  "/_nuxt/cookie.a04b2244.js": {
    "type": "application/javascript",
    "etag": "\"bb7-j3AHAQ4NMdwzSIFMXJ52wRzGYUI\"",
    "mtime": "2023-06-18T09:42:11.923Z",
    "size": 2999,
    "path": "../public/_nuxt/cookie.a04b2244.js"
  },
  "/_nuxt/custom.9b40fc17.js": {
    "type": "application/javascript",
    "etag": "\"25f-amRIfcarFsmnGzwIyh3s/RXZaDE\"",
    "mtime": "2023-06-18T09:42:11.927Z",
    "size": 607,
    "path": "../public/_nuxt/custom.9b40fc17.js"
  },
  "/_nuxt/default.62cb432e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2045-ifnFChpFrrY4t7mJkekpovpMlIs\"",
    "mtime": "2023-06-18T09:42:11.933Z",
    "size": 8261,
    "path": "../public/_nuxt/default.62cb432e.css"
  },
  "/_nuxt/default.9c1fd65a.js": {
    "type": "application/javascript",
    "etag": "\"2c8b-OrFKvFnC95y1qEJzL1zzsNQyius\"",
    "mtime": "2023-06-18T09:42:11.936Z",
    "size": 11403,
    "path": "../public/_nuxt/default.9c1fd65a.js"
  },
  "/_nuxt/din.36be8806.ttf": {
    "type": "font/ttf",
    "etag": "\"223cc-QtJmpc9sutW62GlRIu0mFXFv12U\"",
    "mtime": "2023-06-18T09:42:11.908Z",
    "size": 140236,
    "path": "../public/_nuxt/din.36be8806.ttf"
  },
  "/_nuxt/edit_password_icon.920ba58a.svg": {
    "type": "image/svg+xml",
    "etag": "\"3ff-iNR/+M5WRdraMS94EOq/e8P1AfI\"",
    "mtime": "2023-06-18T09:42:11.920Z",
    "size": 1023,
    "path": "../public/_nuxt/edit_password_icon.920ba58a.svg"
  },
  "/_nuxt/en.d8a4d4f9.js": {
    "type": "application/javascript",
    "etag": "\"1524-oVylppIbLyE2w7RNEgirlIiRTBA\"",
    "mtime": "2023-06-18T09:42:11.927Z",
    "size": 5412,
    "path": "../public/_nuxt/en.d8a4d4f9.js"
  },
  "/_nuxt/entry.292f65b0.js": {
    "type": "application/javascript",
    "etag": "\"176eda-W6rDPbEjXvsoleF1DZA/CvBFylU\"",
    "mtime": "2023-06-18T09:42:11.922Z",
    "size": 1535706,
    "path": "../public/_nuxt/entry.292f65b0.js"
  },
  "/_nuxt/entry.7269f667.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"115098-5iz2qWmrDNlXuOW0FRYyQ1JdCLk\"",
    "mtime": "2023-06-18T09:42:11.934Z",
    "size": 1134744,
    "path": "../public/_nuxt/entry.7269f667.css"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-06-18T09:42:11.933Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.d1c3875b.js": {
    "type": "application/javascript",
    "etag": "\"8fb-SukJvDJT1TPqrA3S5Z8zH49Rcho\"",
    "mtime": "2023-06-18T09:42:11.928Z",
    "size": 2299,
    "path": "../public/_nuxt/error-404.d1c3875b.js"
  },
  "/_nuxt/error-500.87628705.js": {
    "type": "application/javascript",
    "etag": "\"7a3-gCauB6j+gml6L5TLECMlUJaeEnU\"",
    "mtime": "2023-06-18T09:42:11.929Z",
    "size": 1955,
    "path": "../public/_nuxt/error-500.87628705.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-06-18T09:42:11.931Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.ae3c4796.js": {
    "type": "application/javascript",
    "etag": "\"545-zjzqBu04nM+FTYeRKLaYBSnOijA\"",
    "mtime": "2023-06-18T09:42:11.921Z",
    "size": 1349,
    "path": "../public/_nuxt/error-component.ae3c4796.js"
  },
  "/_nuxt/fa-brands-400.20c4a58b.ttf": {
    "type": "font/ttf",
    "etag": "\"2db48-8JgqdyhdU2U4RbCngXC0aI25cvE\"",
    "mtime": "2023-06-18T09:42:11.894Z",
    "size": 187208,
    "path": "../public/_nuxt/fa-brands-400.20c4a58b.ttf"
  },
  "/_nuxt/fa-brands-400.74833209.woff2": {
    "type": "font/woff2",
    "etag": "\"1a5f4-Q1D5upM4RjT6819BxQPJnHZ/EGk\"",
    "mtime": "2023-06-18T09:42:11.890Z",
    "size": 108020,
    "path": "../public/_nuxt/fa-brands-400.74833209.woff2"
  },
  "/_nuxt/fa-regular-400.528d022d.ttf": {
    "type": "font/ttf",
    "etag": "\"f9d0-Z6+mI3Zwq5kSUFbyiZEp8ikS3PM\"",
    "mtime": "2023-06-18T09:42:11.894Z",
    "size": 63952,
    "path": "../public/_nuxt/fa-regular-400.528d022d.ttf"
  },
  "/_nuxt/fa-regular-400.8e7e5ea1.woff2": {
    "type": "font/woff2",
    "etag": "\"6174-+zY9J8/f5xokP6KsPasoFSMrm34\"",
    "mtime": "2023-06-18T09:42:11.892Z",
    "size": 24948,
    "path": "../public/_nuxt/fa-regular-400.8e7e5ea1.woff2"
  },
  "/_nuxt/fa-solid-900.67a65763.ttf": {
    "type": "font/ttf",
    "etag": "\"60584-IL1mODAYjLrdImTh2vlJfD/8NiE\"",
    "mtime": "2023-06-18T09:42:11.893Z",
    "size": 394628,
    "path": "../public/_nuxt/fa-solid-900.67a65763.ttf"
  },
  "/_nuxt/fa-solid-900.7152a693.woff2": {
    "type": "font/woff2",
    "etag": "\"24a6c-a5mqZQvRKjbKoU4BJ0Ndj0zTunM\"",
    "mtime": "2023-06-18T09:42:11.892Z",
    "size": 150124,
    "path": "../public/_nuxt/fa-solid-900.7152a693.woff2"
  },
  "/_nuxt/fa-v4compatibility.0515a423.ttf": {
    "type": "font/ttf",
    "etag": "\"27bc-qdByrKng+twqcWdnHOPWsY2c0sw\"",
    "mtime": "2023-06-18T09:42:11.893Z",
    "size": 10172,
    "path": "../public/_nuxt/fa-v4compatibility.0515a423.ttf"
  },
  "/_nuxt/fa-v4compatibility.694a17c3.woff2": {
    "type": "font/woff2",
    "etag": "\"11d4-j4DQu+mV9/6SMg/a7BDNXM1xClE\"",
    "mtime": "2023-06-18T09:42:11.892Z",
    "size": 4564,
    "path": "../public/_nuxt/fa-v4compatibility.694a17c3.woff2"
  },
  "/_nuxt/fetch.2ec56229.js": {
    "type": "application/javascript",
    "etag": "\"2cd5-FNNlRx8ssMwACvhHCpHxyuc69FE\"",
    "mtime": "2023-06-18T09:42:11.923Z",
    "size": 11477,
    "path": "../public/_nuxt/fetch.2ec56229.js"
  },
  "/_nuxt/FormButton.58c4559e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"46a-NUGBZHr5U9H9VGLAC4/b/5jzr28\"",
    "mtime": "2023-06-18T09:42:11.930Z",
    "size": 1130,
    "path": "../public/_nuxt/FormButton.58c4559e.css"
  },
  "/_nuxt/FormButton.e5cd7372.js": {
    "type": "application/javascript",
    "etag": "\"195-K20jXSqKSuysb6lRILW34zrigEw\"",
    "mtime": "2023-06-18T09:42:11.923Z",
    "size": 405,
    "path": "../public/_nuxt/FormButton.e5cd7372.js"
  },
  "/_nuxt/FormInput.646b0dfe.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a7-U3D0leyR96lNKo4MI2/SeM4/Gos\"",
    "mtime": "2023-06-18T09:42:11.930Z",
    "size": 1447,
    "path": "../public/_nuxt/FormInput.646b0dfe.css"
  },
  "/_nuxt/FormInput.a59cf4ac.js": {
    "type": "application/javascript",
    "etag": "\"72a-8NJDWPs0RdfNMoCASfZy6/C2Xzc\"",
    "mtime": "2023-06-18T09:42:11.923Z",
    "size": 1834,
    "path": "../public/_nuxt/FormInput.a59cf4ac.js"
  },
  "/_nuxt/FormTelInput.99aa1042.js": {
    "type": "application/javascript",
    "etag": "\"b82-usXmBkADnh+Beo3jKSIsKfOCh0Q\"",
    "mtime": "2023-06-18T09:42:11.923Z",
    "size": 2946,
    "path": "../public/_nuxt/FormTelInput.99aa1042.js"
  },
  "/_nuxt/FormTelInput.e05768df.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"90b-59Xfrhzq77SlB8DCl29/5cgQANI\"",
    "mtime": "2023-06-18T09:42:11.930Z",
    "size": 2315,
    "path": "../public/_nuxt/FormTelInput.e05768df.css"
  },
  "/_nuxt/golden_clock_icon.5931487f.svg": {
    "type": "image/svg+xml",
    "etag": "\"625-EPpRGxq0nz6ZMddqdy0Q0PNWmNk\"",
    "mtime": "2023-06-18T09:42:11.909Z",
    "size": 1573,
    "path": "../public/_nuxt/golden_clock_icon.5931487f.svg"
  },
  "/_nuxt/golden_insta.9d5af7ea.svg": {
    "type": "image/svg+xml",
    "etag": "\"d22-a8naK0k4RUfzQ8rx7Lg901OIld0\"",
    "mtime": "2023-06-18T09:42:11.909Z",
    "size": 3362,
    "path": "../public/_nuxt/golden_insta.9d5af7ea.svg"
  },
  "/_nuxt/golden_mail_icon.b7d5465e.svg": {
    "type": "image/svg+xml",
    "etag": "\"58f-2/vsGHA4d3leCyGfkjKZysaiJlk\"",
    "mtime": "2023-06-18T09:42:11.908Z",
    "size": 1423,
    "path": "../public/_nuxt/golden_mail_icon.b7d5465e.svg"
  },
  "/_nuxt/golden_phone_icon.2a62ba42.svg": {
    "type": "image/svg+xml",
    "etag": "\"5d8-87xbuBFpRBIm+rjD9o4BlWDyg5Y\"",
    "mtime": "2023-06-18T09:42:11.908Z",
    "size": 1496,
    "path": "../public/_nuxt/golden_phone_icon.2a62ba42.svg"
  },
  "/_nuxt/golden_twitter.cc8f6536.svg": {
    "type": "image/svg+xml",
    "etag": "\"933-1tBBslweiOwktNDsuPkssZ0TXRM\"",
    "mtime": "2023-06-18T09:42:11.909Z",
    "size": 2355,
    "path": "../public/_nuxt/golden_twitter.cc8f6536.svg"
  },
  "/_nuxt/golden_youtube.f8f69783.svg": {
    "type": "image/svg+xml",
    "etag": "\"7c0-8RDlFw9FPfvIBLRVn911sDjBOYM\"",
    "mtime": "2023-06-18T09:42:11.909Z",
    "size": 1984,
    "path": "../public/_nuxt/golden_youtube.f8f69783.svg"
  },
  "/_nuxt/guest.8dd55ff5.js": {
    "type": "application/javascript",
    "etag": "\"68-XFCk1LusBokcuV7tJ/R2Q6qy6D0\"",
    "mtime": "2023-06-18T09:42:11.926Z",
    "size": 104,
    "path": "../public/_nuxt/guest.8dd55ff5.js"
  },
  "/_nuxt/hamburger.ceae37cc.svg": {
    "type": "image/svg+xml",
    "etag": "\"259-TwYMSopEc197HoGGv+0740JVwU0\"",
    "mtime": "2023-06-18T09:42:11.920Z",
    "size": 601,
    "path": "../public/_nuxt/hamburger.ceae37cc.svg"
  },
  "/_nuxt/identify.0ebed1f3.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"376-ZWiohQZrB15p1hLD8sPZr/dLBR4\"",
    "mtime": "2023-06-18T09:42:11.930Z",
    "size": 886,
    "path": "../public/_nuxt/identify.0ebed1f3.css"
  },
  "/_nuxt/identify.f842d581.js": {
    "type": "application/javascript",
    "etag": "\"9d1-H36rOI9TG4ggCeFRB03zL5SON/4\"",
    "mtime": "2023-06-18T09:42:11.922Z",
    "size": 2513,
    "path": "../public/_nuxt/identify.f842d581.js"
  },
  "/_nuxt/index.310ed7e2.js": {
    "type": "application/javascript",
    "etag": "\"14dc-lT05etUMNHGDLyAZwkf38EK6UYc\"",
    "mtime": "2023-06-18T09:42:11.925Z",
    "size": 5340,
    "path": "../public/_nuxt/index.310ed7e2.js"
  },
  "/_nuxt/index.65946206.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"49b-389W/4r9PyGcbOXeYK12znePwFE\"",
    "mtime": "2023-06-18T09:42:11.933Z",
    "size": 1179,
    "path": "../public/_nuxt/index.65946206.css"
  },
  "/_nuxt/index.6ed5c837.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5a0-v4IMdJKHh668Z+n1cUbZOFIxVhg\"",
    "mtime": "2023-06-18T09:42:11.930Z",
    "size": 1440,
    "path": "../public/_nuxt/index.6ed5c837.css"
  },
  "/_nuxt/index.7a3de631.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"466-7I6AVyHzCgpXOgZxvPV4VycpatQ\"",
    "mtime": "2023-06-18T09:42:11.930Z",
    "size": 1126,
    "path": "../public/_nuxt/index.7a3de631.css"
  },
  "/_nuxt/index.7c586002.js": {
    "type": "application/javascript",
    "etag": "\"1460-MIaf0bZMtGObmDJCDAsw/BAV+XQ\"",
    "mtime": "2023-06-18T09:42:11.925Z",
    "size": 5216,
    "path": "../public/_nuxt/index.7c586002.js"
  },
  "/_nuxt/index.b69bf007.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1f49-2lHFkX2DWeOjHxPWwFeu7LaSzgw\"",
    "mtime": "2023-06-18T09:42:11.931Z",
    "size": 8009,
    "path": "../public/_nuxt/index.b69bf007.css"
  },
  "/_nuxt/index.dbc6222c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"70a-SGfh7XzGzAVaDjcO5AhI+zKf3ho\"",
    "mtime": "2023-06-18T09:42:11.932Z",
    "size": 1802,
    "path": "../public/_nuxt/index.dbc6222c.css"
  },
  "/_nuxt/index.e3409e9e.js": {
    "type": "application/javascript",
    "etag": "\"8e0-AycUyAR0Yb5Xv8LBc7sm6uvRlDk\"",
    "mtime": "2023-06-18T09:42:11.921Z",
    "size": 2272,
    "path": "../public/_nuxt/index.e3409e9e.js"
  },
  "/_nuxt/index.e8f4f722.js": {
    "type": "application/javascript",
    "etag": "\"8e8-oD6yZkG6NBqXb14anA9aGQPnYxM\"",
    "mtime": "2023-06-18T09:42:11.926Z",
    "size": 2280,
    "path": "../public/_nuxt/index.e8f4f722.js"
  },
  "/_nuxt/index.esm.b18c19fd.js": {
    "type": "application/javascript",
    "etag": "\"7afc-h4hWFd25rJN22zOUUIccigwki48\"",
    "mtime": "2023-06-18T09:42:11.923Z",
    "size": 31484,
    "path": "../public/_nuxt/index.esm.b18c19fd.js"
  },
  "/_nuxt/index.f74b1067.js": {
    "type": "application/javascript",
    "etag": "\"8da-TedVB+hiD72TQlNgsL1oiug9XOM\"",
    "mtime": "2023-06-18T09:42:11.926Z",
    "size": 2266,
    "path": "../public/_nuxt/index.f74b1067.js"
  },
  "/_nuxt/Inter-Bold.3e242080.woff": {
    "type": "font/woff",
    "etag": "\"22f68-5aSeWigRnpYFOabeC/j3K4EDYq8\"",
    "mtime": "2023-06-18T09:42:11.898Z",
    "size": 143208,
    "path": "../public/_nuxt/Inter-Bold.3e242080.woff"
  },
  "/_nuxt/Inter-Bold.c63158ba.woff2": {
    "type": "font/woff2",
    "etag": "\"19e9c-HpSg36yLqwlH6psLb7Zj661czrU\"",
    "mtime": "2023-06-18T09:42:11.893Z",
    "size": 106140,
    "path": "../public/_nuxt/Inter-Bold.c63158ba.woff2"
  },
  "/_nuxt/Inter-Light.36b86832.woff2": {
    "type": "font/woff2",
    "etag": "\"1978c-Cgzo3JK6byCvV+6zQeFgN1+XEmg\"",
    "mtime": "2023-06-18T09:42:11.893Z",
    "size": 104332,
    "path": "../public/_nuxt/Inter-Light.36b86832.woff2"
  },
  "/_nuxt/Inter-Light.4871aed0.woff": {
    "type": "font/woff",
    "etag": "\"22558-mWNkQ5zXdyPf0tOUGUbmO2YSLp8\"",
    "mtime": "2023-06-18T09:42:11.896Z",
    "size": 140632,
    "path": "../public/_nuxt/Inter-Light.4871aed0.woff"
  },
  "/_nuxt/Inter-Medium.1b498b95.woff2": {
    "type": "font/woff2",
    "etag": "\"19dc4-krMFJzBLXcgPRemX4LGsTHARChg\"",
    "mtime": "2023-06-18T09:42:11.893Z",
    "size": 105924,
    "path": "../public/_nuxt/Inter-Medium.1b498b95.woff2"
  },
  "/_nuxt/Inter-Medium.53deda46.woff": {
    "type": "font/woff",
    "etag": "\"22cd8-ytjPyE6/YQE4rvY+aUkJf/SNct0\"",
    "mtime": "2023-06-18T09:42:11.896Z",
    "size": 142552,
    "path": "../public/_nuxt/Inter-Medium.53deda46.woff"
  },
  "/_nuxt/Inter-Regular.d612f121.woff2": {
    "type": "font/woff2",
    "etag": "\"18234-+WNIJgdR6nix0j6VV9spcpC9ryg\"",
    "mtime": "2023-06-18T09:42:11.892Z",
    "size": 98868,
    "path": "../public/_nuxt/Inter-Regular.d612f121.woff2"
  },
  "/_nuxt/Inter-Regular.ef1f23c0.woff": {
    "type": "font/woff",
    "etag": "\"20ad4-cppFUbnMWXnzk0cnnW/txmIL8UE\"",
    "mtime": "2023-06-18T09:42:11.894Z",
    "size": 133844,
    "path": "../public/_nuxt/Inter-Regular.ef1f23c0.woff"
  },
  "/_nuxt/Inter-SemiBold.15226129.woff2": {
    "type": "font/woff2",
    "etag": "\"19d4c-36n489eb+KAAH+cu6trQSQy6Wcw\"",
    "mtime": "2023-06-18T09:42:11.893Z",
    "size": 105804,
    "path": "../public/_nuxt/Inter-SemiBold.15226129.woff2"
  },
  "/_nuxt/Inter-SemiBold.653fed7a.woff": {
    "type": "font/woff",
    "etag": "\"22e54-eulquZDHiB+ClHwb3Ef0F5S4SNc\"",
    "mtime": "2023-06-18T09:42:11.896Z",
    "size": 142932,
    "path": "../public/_nuxt/Inter-SemiBold.653fed7a.woff"
  },
  "/_nuxt/logo.515c10f7.js": {
    "type": "application/javascript",
    "etag": "\"4d-+EZDo/xh6wsZKMXAksY7Sn98V/s\"",
    "mtime": "2023-06-18T09:42:11.925Z",
    "size": 77,
    "path": "../public/_nuxt/logo.515c10f7.js"
  },
  "/_nuxt/logo.8f9fe9f9.svg": {
    "type": "image/svg+xml",
    "etag": "\"346e-4CkixbmnPTwP2t1xMNUrO5WNuw0\"",
    "mtime": "2023-06-18T09:42:11.913Z",
    "size": 13422,
    "path": "../public/_nuxt/logo.8f9fe9f9.svg"
  },
  "/_nuxt/mouse.710601d1.svg": {
    "type": "image/svg+xml",
    "etag": "\"249-Po3EMV5oCujEE5/pRqm51zwXQaY\"",
    "mtime": "2023-06-18T09:42:11.913Z",
    "size": 585,
    "path": "../public/_nuxt/mouse.710601d1.svg"
  },
  "/_nuxt/PATTERN.2143be41.js": {
    "type": "application/javascript",
    "etag": "\"50-ddJLI6IG3L0YY56RyfpMbC85tSM\"",
    "mtime": "2023-06-18T09:42:11.921Z",
    "size": 80,
    "path": "../public/_nuxt/PATTERN.2143be41.js"
  },
  "/_nuxt/PATTERN.474e19f4.svg": {
    "type": "image/svg+xml",
    "etag": "\"724c-JTkVVrncGBK7wNsacxG/8N9y41M\"",
    "mtime": "2023-06-18T09:42:11.908Z",
    "size": 29260,
    "path": "../public/_nuxt/PATTERN.474e19f4.svg"
  },
  "/_nuxt/primeicons.131bc3bf.ttf": {
    "type": "font/ttf",
    "etag": "\"11a0c-zutG1ZT95cxQfN+LcOOOeP5HZTw\"",
    "mtime": "2023-06-18T09:42:11.908Z",
    "size": 72204,
    "path": "../public/_nuxt/primeicons.131bc3bf.ttf"
  },
  "/_nuxt/primeicons.3824be50.woff2": {
    "type": "font/woff2",
    "etag": "\"75e4-VaSypfAuNiQF2Nh0kDrwtfamwV0\"",
    "mtime": "2023-06-18T09:42:11.894Z",
    "size": 30180,
    "path": "../public/_nuxt/primeicons.3824be50.woff2"
  },
  "/_nuxt/primeicons.5e10f102.svg": {
    "type": "image/svg+xml",
    "etag": "\"4727e-0zMqRSQrj27b8/PHF2ooDn7c2WE\"",
    "mtime": "2023-06-18T09:42:11.908Z",
    "size": 291454,
    "path": "../public/_nuxt/primeicons.5e10f102.svg"
  },
  "/_nuxt/primeicons.90a58d3a.woff": {
    "type": "font/woff",
    "etag": "\"11a58-sWSLUL4TNQ/ei12ab+eDVN3MQ+Q\"",
    "mtime": "2023-06-18T09:42:11.908Z",
    "size": 72280,
    "path": "../public/_nuxt/primeicons.90a58d3a.woff"
  },
  "/_nuxt/primeicons.ce852338.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"11abc-5N8jVcQFzTiq2jbtqQFagQ/quUw\"",
    "mtime": "2023-06-18T09:42:11.892Z",
    "size": 72380,
    "path": "../public/_nuxt/primeicons.ce852338.eot"
  },
  "/_nuxt/reset-password.02a78bf2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"37a-ZhdNcBzQfIy1HX/ssetpKYbSKQE\"",
    "mtime": "2023-06-18T09:42:11.930Z",
    "size": 890,
    "path": "../public/_nuxt/reset-password.02a78bf2.css"
  },
  "/_nuxt/reset-password.ab296fec.js": {
    "type": "application/javascript",
    "etag": "\"a8b-a1aUcEGMI/VRiG8E2zdUru34alw\"",
    "mtime": "2023-06-18T09:42:11.924Z",
    "size": 2699,
    "path": "../public/_nuxt/reset-password.ab296fec.js"
  },
  "/_nuxt/saved_vehicles.103046f2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4e0-w4T/68IzAi/7vug3Ganj9cHZDPk\"",
    "mtime": "2023-06-18T09:42:11.933Z",
    "size": 1248,
    "path": "../public/_nuxt/saved_vehicles.103046f2.css"
  },
  "/_nuxt/saved_vehicles.c8d35bc3.js": {
    "type": "application/javascript",
    "etag": "\"3d6-u8tCquWOC4x4O45pGCxrp9sa5qw\"",
    "mtime": "2023-06-18T09:42:11.926Z",
    "size": 982,
    "path": "../public/_nuxt/saved_vehicles.c8d35bc3.js"
  },
  "/_nuxt/search_icon.9ebb051f.js": {
    "type": "application/javascript",
    "etag": "\"54-Y/MWGHML2VDk2+JCngjq5B0aM/I\"",
    "mtime": "2023-06-18T09:42:11.926Z",
    "size": 84,
    "path": "../public/_nuxt/search_icon.9ebb051f.js"
  },
  "/_nuxt/search_icon.a05ab06d.svg": {
    "type": "image/svg+xml",
    "etag": "\"26b-k313dqsz++as+bRnmdRVAnefjVQ\"",
    "mtime": "2023-06-18T09:42:11.914Z",
    "size": 619,
    "path": "../public/_nuxt/search_icon.a05ab06d.svg"
  },
  "/_nuxt/share.3389e979.svg": {
    "type": "image/svg+xml",
    "etag": "\"44a-HTfS+taXa03AAlDe5eF4kbwOp5o\"",
    "mtime": "2023-06-18T09:42:11.909Z",
    "size": 1098,
    "path": "../public/_nuxt/share.3389e979.svg"
  },
  "/_nuxt/show-all.527ef8eb.js": {
    "type": "application/javascript",
    "etag": "\"a66-TJLbJ8lwrQekd2gpdr4+MDwmglA\"",
    "mtime": "2023-06-18T09:42:11.926Z",
    "size": 2662,
    "path": "../public/_nuxt/show-all.527ef8eb.js"
  },
  "/_nuxt/show-all.afdf95c8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"4e0-viHsUrTCyaWMGn1RmeILLD+WoaI\"",
    "mtime": "2023-06-18T09:42:11.931Z",
    "size": 1248,
    "path": "../public/_nuxt/show-all.afdf95c8.css"
  },
  "/_nuxt/sign-in.86360297.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"376-OkorkA4nt0Npl1veYOc5EV7RzLQ\"",
    "mtime": "2023-06-18T09:42:11.930Z",
    "size": 886,
    "path": "../public/_nuxt/sign-in.86360297.css"
  },
  "/_nuxt/sign-in.fd32d7c4.js": {
    "type": "application/javascript",
    "etag": "\"ca4-D3AZpD+RwaYFTT8CKgHT7dw3CmI\"",
    "mtime": "2023-06-18T09:42:11.924Z",
    "size": 3236,
    "path": "../public/_nuxt/sign-in.fd32d7c4.js"
  },
  "/_nuxt/sign-up.01277721.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"368-rT4oTkBKWAbezX7InWYdMHcfKiw\"",
    "mtime": "2023-06-18T09:42:11.931Z",
    "size": 872,
    "path": "../public/_nuxt/sign-up.01277721.css"
  },
  "/_nuxt/sign-up.5cc679da.js": {
    "type": "application/javascript",
    "etag": "\"dce-u2NBKswkDt31+wLN+8/72tGTJY0\"",
    "mtime": "2023-06-18T09:42:11.924Z",
    "size": 3534,
    "path": "../public/_nuxt/sign-up.5cc679da.js"
  },
  "/_nuxt/success_icon.35d42210.svg": {
    "type": "image/svg+xml",
    "etag": "\"233-EuSmcOOXzY1XrW581wVSkKEeMmA\"",
    "mtime": "2023-06-18T09:42:11.913Z",
    "size": 563,
    "path": "../public/_nuxt/success_icon.35d42210.svg"
  },
  "/_nuxt/swiper-vue.9b6bf1d2.js": {
    "type": "application/javascript",
    "etag": "\"2ce64-1OHvrHHwsptNYBq3RQIV6/wu1uo\"",
    "mtime": "2023-06-18T09:42:11.921Z",
    "size": 183908,
    "path": "../public/_nuxt/swiper-vue.9b6bf1d2.js"
  },
  "/_nuxt/swiper-vue.efc98f66.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"44f5-DfMrZwR+JEfmzcWDYVmX4xMo+oY\"",
    "mtime": "2023-06-18T09:42:11.929Z",
    "size": 17653,
    "path": "../public/_nuxt/swiper-vue.efc98f66.css"
  },
  "/_nuxt/the-bold-font.2874ddbd.ttf": {
    "type": "font/ttf",
    "etag": "\"8f90-0xD4GmOsmvq1CBmW5a2lTPrO3Jg\"",
    "mtime": "2023-06-18T09:42:11.920Z",
    "size": 36752,
    "path": "../public/_nuxt/the-bold-font.2874ddbd.ttf"
  },
  "/_nuxt/useAPIFetch.ca81a2db.js": {
    "type": "application/javascript",
    "etag": "\"141-tu6PEXyvdqyOqIjmeLxpPLjc2uw\"",
    "mtime": "2023-06-18T09:42:11.926Z",
    "size": 321,
    "path": "../public/_nuxt/useAPIFetch.ca81a2db.js"
  },
  "/_nuxt/user_icon.d2d52263.svg": {
    "type": "image/svg+xml",
    "etag": "\"2be-R3o/y+FXF8NlxH2PliAA7mUXReo\"",
    "mtime": "2023-06-18T09:42:11.920Z",
    "size": 702,
    "path": "../public/_nuxt/user_icon.d2d52263.svg"
  },
  "/_nuxt/VehicleProducts.816c06e2.js": {
    "type": "application/javascript",
    "etag": "\"df1-pNTcgB/Uf0FhUnfa2mZknil/1Jk\"",
    "mtime": "2023-06-18T09:42:11.926Z",
    "size": 3569,
    "path": "../public/_nuxt/VehicleProducts.816c06e2.js"
  },
  "/_nuxt/VehicleProducts.fa069af5.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8a0-TF6R2a1WAglO0tPB8IdxK2BQDV8\"",
    "mtime": "2023-06-18T09:42:11.933Z",
    "size": 2208,
    "path": "../public/_nuxt/VehicleProducts.fa069af5.css"
  },
  "/_nuxt/verified.07c49cdf.js": {
    "type": "application/javascript",
    "etag": "\"59e-BjK6ndfKwxEAA3YMscksjT0SnD8\"",
    "mtime": "2023-06-18T09:42:11.924Z",
    "size": 1438,
    "path": "../public/_nuxt/verified.07c49cdf.js"
  },
  "/_nuxt/verified.4c886dff.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"536-ONeypsqCQ8/BRz843+04ioZXoWM\"",
    "mtime": "2023-06-18T09:42:11.932Z",
    "size": 1334,
    "path": "../public/_nuxt/verified.4c886dff.css"
  },
  "/_nuxt/verify.3a8de55f.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"555-F4dpDuS4OI/sI3xvSxaZR+6rnk0\"",
    "mtime": "2023-06-18T09:42:11.930Z",
    "size": 1365,
    "path": "../public/_nuxt/verify.3a8de55f.css"
  },
  "/_nuxt/verify.b901a4dd.js": {
    "type": "application/javascript",
    "etag": "\"caf-IpD7/l9WSux1I9OUzQN8lLF8BaE\"",
    "mtime": "2023-06-18T09:42:11.923Z",
    "size": 3247,
    "path": "../public/_nuxt/verify.b901a4dd.js"
  },
  "/_nuxt/verify.d6f139c8.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"555-DwAaJ8mV3t5vpUprbpPgBJNq6eQ\"",
    "mtime": "2023-06-18T09:42:11.930Z",
    "size": 1365,
    "path": "../public/_nuxt/verify.d6f139c8.css"
  },
  "/_nuxt/verify.e2be50d8.js": {
    "type": "application/javascript",
    "etag": "\"c92-s4HC4GGMRjt89dXGLnKwjSm0PzA\"",
    "mtime": "2023-06-18T09:42:11.924Z",
    "size": 3218,
    "path": "../public/_nuxt/verify.e2be50d8.js"
  },
  "/_nuxt/VIP-Hala-Bold.57274d71.otf": {
    "type": "font/otf",
    "etag": "\"e144-pdXb92ZlVdT3huqTzjfxcdO6C6o\"",
    "mtime": "2023-06-18T09:42:11.926Z",
    "size": 57668,
    "path": "../public/_nuxt/VIP-Hala-Bold.57274d71.otf"
  },
  "/_nuxt/_id_.2559713e.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"151c-0y3P2sn0aQsD6CbWvczz7isRJZs\"",
    "mtime": "2023-06-18T09:42:11.930Z",
    "size": 5404,
    "path": "../public/_nuxt/_id_.2559713e.css"
  },
  "/_nuxt/_id_.7bf01df5.js": {
    "type": "application/javascript",
    "etag": "\"1974-48y1dMtz9nUEI811J1gVRXT4Vy4\"",
    "mtime": "2023-06-18T09:42:11.926Z",
    "size": 6516,
    "path": "../public/_nuxt/_id_.7bf01df5.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.req.method && !METHODS.includes(event.req.method)) {
    return;
  }
  let id = decodeURIComponent(withLeadingSlash(withoutTrailingSlash(parseURL(event.req.url).pathname)));
  let asset;
  const encodingHeader = String(event.req.headers["accept-encoding"] || "");
  const encodings = encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort().concat([""]);
  if (encodings.length > 1) {
    event.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.res.statusCode = 304;
    event.res.end();
    return;
  }
  const ifModifiedSinceH = event.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      event.res.statusCode = 304;
      event.res.end();
      return;
    }
  }
  if (asset.type && !event.res.getHeader("Content-Type")) {
    event.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.res.getHeader("ETag")) {
    event.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.res.getHeader("Last-Modified")) {
    event.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.res.getHeader("Content-Encoding")) {
    event.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size && !event.res.getHeader("Content-Length")) {
    event.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const BASE_KEY = "i18n";
const CONFIG_KEY = "config";
const configStorage = prefixStorage(useStorage(), BASE_KEY);
const PRECOMPILED_LOCALE_KEY = "i18n:locales";
const localeStorage = prefixStorage(useStorage(), PRECOMPILED_LOCALE_KEY);
const resolveKey = (key) => `${key}.js`;
const localeKey = (locale, hash) => `${locale}-${hash}`;
const configKey = (hash) => `${CONFIG_KEY}-${hash}`;
const _Hb6nUY = defineEventHandler(async (event) => {
  const body = await readBody(event);
  validate(body);
  const cacheCode = await getCacheCode(body);
  if (cacheCode) {
    await setResponseHeader(event, "content-type", "text/javascript");
    return cacheCode.toString();
  }
  const [code, errors] = generateCode(body);
  if (errors.length > 0) {
    throw createError({ statusMessage: errors.join("|"), statusCode: 400 });
  }
  await setCacheCode(code, body);
  await setResponseHeader(event, "content-type", "text/javascript");
  return code;
});
function validate(body) {
  if (!body.type) {
    throw createError({ statusMessage: `require the 'type'`, statusCode: 400 });
  }
  if (body.type === "locale") {
    if (!body.locale) {
      throw createError({ statusMessage: `require the 'locale'`, statusCode: 400 });
    }
  }
  if (!body.hash) {
    throw createError({ statusMessage: `require the 'hash'`, statusCode: 400 });
  }
  if (!body.resource) {
    throw createError({ statusMessage: `require the 'resource'`, statusCode: 400 });
  }
}
async function getCacheCode({ type, locale, hash }) {
  if (type === "locale") {
    return await localeStorage.getItem(resolveKey(localeKey(locale, hash)));
  } else if (type === "config") {
    return await configStorage.getItem(resolveKey(configKey(hash)));
  } else {
    return null;
  }
}
function generateCode(body) {
  const errors = [];
  const {
    i18n: {
      precompile: { strictMessage, escapeHtml }
    }
  } = useRuntimeConfig();
  const env = "production";
  let gen = "";
  if (body.type === "locale") {
    const { code } = generateJSON(JSON.stringify(body.resource), {
      env,
      strictMessage,
      escapeHtml,
      onError: (error) => {
        errors.push(error);
      }
    });
    gen = code;
  } else if (body.type === "config") {
    gen += `export default {
`;
    const codes = [];
    Object.keys(body.resource).reduce((codes2, key) => {
      const { code } = generateJSON(JSON.stringify(body.resource[key]), {
        type: "bare",
        env,
        strictMessage,
        escapeHtml,
        onError: (error) => {
          errors.push(error);
        }
      });
      codes2.push(`  ${JSON.stringify(key)}: ${code},
`);
      return codes2;
    }, codes);
    gen += codes.join("");
    gen += `}
`;
  }
  return [gen, errors];
}
async function setCacheCode(code, { type, locale, hash }) {
  if (type === "locale") {
    await localeStorage.setItem(resolveKey(localeKey(locale, hash)), code);
  } else if (type === "config") {
    await configStorage.setItem(resolveKey(configKey(hash)), code);
  }
}

const _LmA3qL = defineEventHandler(async (event) => {
  const hash = event.context.params?.hash;
  if (hash == null) {
    throw createError({ statusMessage: `require the 'hash'`, statusCode: 400 });
  }
  const i18nMeta = await getI18nMeta();
  const [filename] = hash.split(".");
  const target = i18nMeta[filename];
  const loadPath = await resolveModule(target.path);
  const loader = await import(loadPath).then((m) => m.default || m);
  if (target.type === "locale") {
    if (target.locale == null) {
      throw createError({ statusMessage: `not found locale`, statusCode: 500 });
    }
    const resource = await loader(target.locale);
    const code = await precompileLocale(target.locale, filename, resource);
    await setResponseHeader(event, "content-type", "text/javascript");
    return code;
  } else if (target.type === "config") {
    const config = isFunction(loader) ? await loader() : isObject$1(loader) ? loader : {};
    const messages = config.messages || {};
    const code = await precompileConfig(filename, messages);
    await setResponseHeader(event, "content-type", "text/javascript");
    return code;
  } else {
    throw new Error("Invalid type");
  }
});
async function getI18nMeta() {
  return await useStorage().getItem("build:dist:server:i18n-meta.json");
}
async function resolveModule(path) {
  const storage = await useStorage();
  const rootMount = await storage.getMount("root");
  const root = rootMount.driver.options.base;
  const rootRelative = relative(new URL(globalThis._importMeta_.url).pathname, root);
  return join(rootRelative, "dist/server", path);
}
async function precompileLocale(locale, filename, messages) {
  return await $fetch("/__i18n__/precompile", {
    method: "POST",
    body: {
      locale,
      type: "locale",
      hash: filename,
      resource: messages
    }
  });
}
async function precompileConfig(filename, messages) {
  return await $fetch("/__i18n__/precompile", {
    method: "POST",
    body: {
      type: "config",
      hash: filename,
      resource: getNeedPrecompileMessages(messages)
    }
  });
}
function deepCopy(src, des, predicate) {
  for (const key in src) {
    if (isObject$1(src[key])) {
      if (!isObject$1(des[key]))
        des[key] = {};
      deepCopy(src[key], des[key], predicate);
    } else {
      if (predicate) {
        if (predicate(src[key], des[key])) {
          des[key] = src[key];
        }
      } else {
        des[key] = src[key];
      }
    }
  }
}
function getNeedPrecompileMessages(messages) {
  const needPrecompileMessages = {};
  const predicate = (src) => !isFunction(src);
  for (const [locale, message] of Object.entries(messages)) {
    const dest = needPrecompileMessages[locale] = {};
    deepCopy(message, dest, predicate);
  }
  return needPrecompileMessages;
}

const _lazy_Bd6ENF = () => import('./register.mjs');
const _lazy_1L15LR = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/api/register', handler: _lazy_Bd6ENF, lazy: true, middleware: false, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_1L15LR, lazy: true, middleware: false, method: undefined },
  { route: '/__i18n__/precompile', handler: _Hb6nUY, lazy: false, middleware: false, method: "post" },
  { route: '/__i18n__/prerender/:hash', handler: _LmA3qL, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_1L15LR, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection] " + err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException] " + err));
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
