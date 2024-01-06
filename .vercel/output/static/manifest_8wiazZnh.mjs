import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_kDT6Bb8E.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/static","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.vuJdZX9L.js"}],"styles":[{"type":"external","src":"/_astro/1.V0C6cHvn.css"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.vuJdZX9L.js"}],"styles":[{"type":"external","src":"/_astro/1.V0C6cHvn.css"}],"routeData":{"route":"/growwithus","type":"page","pattern":"^\\/growwithus\\/?$","segments":[[{"content":"growwithus","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/growwithus.astro","pathname":"/growwithus","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.a34PLu_t.js"}],"styles":[{"type":"external","src":"/_astro/1.V0C6cHvn.css"}],"routeData":{"route":"/careers","type":"page","pattern":"^\\/careers\\/?$","segments":[[{"content":"careers","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/careers.astro","pathname":"/careers","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.2uUph_iT.js"}],"styles":[{"type":"external","src":"/_astro/1.V0C6cHvn.css"}],"routeData":{"route":"/apply/1","type":"page","pattern":"^\\/apply\\/1\\/?$","segments":[[{"content":"apply","dynamic":false,"spread":false}],[{"content":"1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/apply/1.astro","pathname":"/apply/1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.vuJdZX9L.js"}],"styles":[{"type":"external","src":"/_astro/1.V0C6cHvn.css"}],"routeData":{"route":"/apply/2","type":"page","pattern":"^\\/apply\\/2\\/?$","segments":[[{"content":"apply","dynamic":false,"spread":false}],[{"content":"2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/apply/2.astro","pathname":"/apply/2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/stephen/Documents/projects/leafy/src/pages/apply/1.astro",{"propagation":"none","containsHead":true}],["/Users/stephen/Documents/projects/leafy/src/pages/apply/2.astro",{"propagation":"none","containsHead":true}],["/Users/stephen/Documents/projects/leafy/src/pages/careers.astro",{"propagation":"none","containsHead":true}],["/Users/stephen/Documents/projects/leafy/src/pages/growwithus.astro",{"propagation":"none","containsHead":true}],["/Users/stephen/Documents/projects/leafy/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/growwithus@_@astro":"pages/growwithus.astro.mjs","\u0000@astro-page:src/pages/careers@_@astro":"pages/careers.astro.mjs","\u0000@astro-page:src/pages/apply/1@_@astro":"pages/apply/1.astro.mjs","\u0000@astro-page:src/pages/apply/2@_@astro":"pages/apply/2.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/apply/2.astro":"chunks/pages/2_LH-JHHKL.mjs","/src/pages/careers.astro":"chunks/pages/careers_6j1-nnlD.mjs","/src/pages/growwithus.astro":"chunks/pages/growwithus_-5TpGXMf.mjs","/src/pages/index.astro":"chunks/pages/index_CJAG22io.mjs","\u0000@astrojs-manifest":"manifest_8wiazZnh.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.2uUph_iT.js","/astro/hoisted.js?q=2":"_astro/hoisted.vuJdZX9L.js","/astro/hoisted.js?q=1":"_astro/hoisted.a34PLu_t.js","astro:scripts/before-hydration.js":""},"assets":[]});

export { manifest };
