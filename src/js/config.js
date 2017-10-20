System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "build/main": [
      "src/js/main"
    ]
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-polyfill": "npm:babel-polyfill@6.26.0",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bitrate": "npm:bitrate@1.0.4",
    "buffer": "github:jspm/nodelibs-buffer@0.1.1",
    "cheerio": "npm:cheerio@1.0.0-rc.2",
    "clipboard": "npm:clipboard@1.7.1",
    "core-js": "npm:core-js@1.2.6",
    "d3": "npm:d3@4.4.0",
    "d3-svg-annotation": "npm:d3-svg-annotation@2.0.0",
    "ejs": "npm:ejs@2.5.7",
    "extend": "github:gamtiq/extend@0.1.1",
    "fraction": "npm:fraction@0.2.0",
    "fraction.js": "npm:fraction.js@4.0.3",
    "fractional": "npm:fractional@1.0.0",
    "graph-scroll": "npm:graph-scroll@0.0.3",
    "guardian/iframe-messenger": "github:guardian/iframe-messenger@master",
    "hls": "npm:hls@0.0.1",
    "hls.js": "npm:hls.js@0.8.2",
    "howler": "npm:howler@2.0.4",
    "jquery": "npm:jquery@3.2.0",
    "jquery-touchswipe": "npm:jquery-touchswipe@1.6.15",
    "json": "github:systemjs/plugin-json@0.1.2",
    "mark.js": "npm:mark.js@8.11.0",
    "odometer": "npm:odometer@0.4.8",
    "popper.js": "npm:popper.js@1.12.5",
    "requests": "npm:requests@0.1.7",
    "reqwest": "github:ded/reqwest@2.0.5",
    "text": "github:systemjs/plugin-text@0.0.2",
    "tooltip.js": "npm:tooltip.js@1.1.5",
    "turf": "npm:turf@3.0.14",
    "twemoji": "npm:twemoji@2.2.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.8"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:affine-hull@1.0.0": {
      "robust-orientation": "npm:robust-orientation@1.1.3"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:axo@0.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:babel-polyfill@6.26.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "core-js": "npm:core-js@2.5.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regenerator-runtime": "npm:regenerator-runtime@0.10.5"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@6.26.0": {
      "core-js": "npm:core-js@2.5.1",
      "regenerator-runtime": "npm:regenerator-runtime@0.11.0"
    },
    "npm:buffer@5.0.8": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:cheerio@1.0.0-rc.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "css-select": "npm:css-select@1.2.0",
      "dom-serializer": "npm:dom-serializer@0.1.0",
      "entities": "npm:entities@1.1.1",
      "htmlparser2": "npm:htmlparser2@3.9.2",
      "lodash": "npm:lodash@4.17.4",
      "parse5": "npm:parse5@3.0.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:clipboard@1.7.1": {
      "good-listener": "npm:good-listener@1.2.2",
      "select": "npm:select@1.1.2",
      "tiny-emitter": "npm:tiny-emitter@2.0.2"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:convex-hull@1.0.3": {
      "affine-hull": "npm:affine-hull@1.0.0",
      "incremental-convex-hull": "npm:incremental-convex-hull@1.0.1",
      "monotone-convex-hull-2d": "npm:monotone-convex-hull-2d@1.0.1"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:css-select@1.2.0": {
      "boolbase": "npm:boolbase@1.0.0",
      "css-what": "npm:css-what@2.1.0",
      "domutils": "npm:domutils@1.5.1",
      "nth-check": "npm:nth-check@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:d3-brush@1.0.3": {
      "d3-dispatch": "npm:d3-dispatch@1.0.2",
      "d3-drag": "npm:d3-drag@1.0.2",
      "d3-interpolate": "npm:d3-interpolate@1.1.2",
      "d3-selection": "npm:d3-selection@1.0.3",
      "d3-transition": "npm:d3-transition@1.0.3"
    },
    "npm:d3-chord@1.0.3": {
      "d3-array": "npm:d3-array@1.0.2",
      "d3-path": "npm:d3-path@1.0.3"
    },
    "npm:d3-drag@1.0.2": {
      "d3-dispatch": "npm:d3-dispatch@1.0.2",
      "d3-selection": "npm:d3-selection@1.0.2"
    },
    "npm:d3-dsv@1.0.3": {
      "commander": "npm:commander@2.9.0",
      "iconv-lite": "npm:iconv-lite@0.4.15",
      "rw": "npm:rw@1.3.2"
    },
    "npm:d3-force@1.0.4": {
      "d3-collection": "npm:d3-collection@1.0.2",
      "d3-dispatch": "npm:d3-dispatch@1.0.2",
      "d3-quadtree": "npm:d3-quadtree@1.0.2",
      "d3-timer": "npm:d3-timer@1.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:d3-geo@1.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "d3-array": "npm:d3-array@1.0.2"
    },
    "npm:d3-interpolate@1.1.2": {
      "d3-color": "npm:d3-color@1.0.3"
    },
    "npm:d3-request@1.0.3": {
      "d3-collection": "npm:d3-collection@1.0.2",
      "d3-dispatch": "npm:d3-dispatch@1.0.2",
      "d3-dsv": "npm:d3-dsv@1.0.3",
      "xmlhttprequest": "npm:xmlhttprequest@1.8.0"
    },
    "npm:d3-scale@1.0.4": {
      "d3-array": "npm:d3-array@1.0.2",
      "d3-collection": "npm:d3-collection@1.0.2",
      "d3-color": "npm:d3-color@1.0.2",
      "d3-format": "npm:d3-format@1.0.2",
      "d3-interpolate": "npm:d3-interpolate@1.1.2",
      "d3-time": "npm:d3-time@1.0.4",
      "d3-time-format": "npm:d3-time-format@2.0.3"
    },
    "npm:d3-shape@1.0.4": {
      "d3-path": "npm:d3-path@1.0.3"
    },
    "npm:d3-svg-annotation@2.0.0": {
      "d3-dispatch": "npm:d3-dispatch@1.0.2",
      "d3-drag": "npm:d3-drag@1.0.2",
      "d3-selection": "npm:d3-selection@1.0.2",
      "d3-shape": "npm:d3-shape@1.0.4",
      "d3-transition": "npm:d3-transition@1.0.3"
    },
    "npm:d3-time-format@2.0.3": {
      "d3-time": "npm:d3-time@1.0.4"
    },
    "npm:d3-transition@1.0.3": {
      "d3-color": "npm:d3-color@1.0.3",
      "d3-dispatch": "npm:d3-dispatch@1.0.2",
      "d3-ease": "npm:d3-ease@1.0.2",
      "d3-interpolate": "npm:d3-interpolate@1.1.2",
      "d3-selection": "npm:d3-selection@1.0.2",
      "d3-timer": "npm:d3-timer@1.0.3"
    },
    "npm:d3-zoom@1.1.0": {
      "d3-dispatch": "npm:d3-dispatch@1.0.2",
      "d3-drag": "npm:d3-drag@1.0.2",
      "d3-interpolate": "npm:d3-interpolate@1.1.2",
      "d3-selection": "npm:d3-selection@1.0.3",
      "d3-transition": "npm:d3-transition@1.0.3"
    },
    "npm:d3@4.4.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "d3-array": "npm:d3-array@1.0.2",
      "d3-axis": "npm:d3-axis@1.0.4",
      "d3-brush": "npm:d3-brush@1.0.3",
      "d3-chord": "npm:d3-chord@1.0.3",
      "d3-collection": "npm:d3-collection@1.0.2",
      "d3-color": "npm:d3-color@1.0.2",
      "d3-dispatch": "npm:d3-dispatch@1.0.2",
      "d3-drag": "npm:d3-drag@1.0.2",
      "d3-dsv": "npm:d3-dsv@1.0.3",
      "d3-ease": "npm:d3-ease@1.0.2",
      "d3-force": "npm:d3-force@1.0.4",
      "d3-format": "npm:d3-format@1.0.2",
      "d3-geo": "npm:d3-geo@1.4.0",
      "d3-hierarchy": "npm:d3-hierarchy@1.0.3",
      "d3-interpolate": "npm:d3-interpolate@1.1.2",
      "d3-path": "npm:d3-path@1.0.3",
      "d3-polygon": "npm:d3-polygon@1.0.2",
      "d3-quadtree": "npm:d3-quadtree@1.0.2",
      "d3-queue": "npm:d3-queue@3.0.3",
      "d3-random": "npm:d3-random@1.0.2",
      "d3-request": "npm:d3-request@1.0.3",
      "d3-scale": "npm:d3-scale@1.0.4",
      "d3-selection": "npm:d3-selection@1.0.3",
      "d3-shape": "npm:d3-shape@1.0.4",
      "d3-time": "npm:d3-time@1.0.4",
      "d3-time-format": "npm:d3-time-format@2.0.3",
      "d3-timer": "npm:d3-timer@1.0.3",
      "d3-transition": "npm:d3-transition@1.0.3",
      "d3-voronoi": "npm:d3-voronoi@1.1.0",
      "d3-zoom": "npm:d3-zoom@1.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:dom-serializer@0.1.0": {
      "domelementtype": "npm:domelementtype@1.1.3",
      "entities": "npm:entities@1.1.1"
    },
    "npm:domhandler@2.4.1": {
      "domelementtype": "npm:domelementtype@1.3.0"
    },
    "npm:domutils@1.5.1": {
      "dom-serializer": "npm:dom-serializer@0.1.0",
      "domelementtype": "npm:domelementtype@1.3.0"
    },
    "npm:earcut@2.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ejs@2.5.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:entities@1.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:fraction@0.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:geojson-area@0.2.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "wgs84": "npm:wgs84@0.0.0"
    },
    "npm:geojson-normalize@0.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:good-listener@1.2.2": {
      "delegate": "npm:delegate@3.1.3"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:graph-scroll@0.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "d3": "npm:d3@4.4.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:hls.js@0.8.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "url-toolkit": "npm:url-toolkit@2.1.1"
    },
    "npm:howler@2.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:htmlparser2@3.9.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "domelementtype": "npm:domelementtype@1.3.0",
      "domhandler": "npm:domhandler@2.4.1",
      "domutils": "npm:domutils@1.5.1",
      "entities": "npm:entities@1.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.15": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:incremental-convex-hull@1.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "robust-orientation": "npm:robust-orientation@1.1.3",
      "simplicial-complex": "npm:simplicial-complex@1.0.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jquery-touchswipe@1.6.15": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jsts@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loads@0.0.4": {
      "failure": "npm:failure@1.1.1",
      "one-time": "npm:one-time@0.0.4",
      "xhr-response": "npm:xhr-response@1.0.1",
      "xhr-status": "npm:xhr-status@1.0.0"
    },
    "npm:mark.js@8.11.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:monotone-convex-hull-2d@1.0.1": {
      "robust-orientation": "npm:robust-orientation@1.1.3"
    },
    "npm:nth-check@1.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "boolbase": "npm:boolbase@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse5@3.0.2": {
      "@types/node": "npm:@types/node@6.0.89",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:regenerator-runtime@0.10.5": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:regenerator-runtime@0.11.0": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:requests@0.1.7": {
      "axo": "npm:axo@0.0.2",
      "eventemitter3": "npm:eventemitter3@1.1.1",
      "extendible": "npm:extendible@0.1.1",
      "hang": "npm:hang@1.0.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "loads": "npm:loads@0.0.4",
      "xhr-send": "npm:xhr-send@1.0.0"
    },
    "npm:robust-orientation@1.1.3": {
      "robust-scale": "npm:robust-scale@1.0.2",
      "robust-subtract": "npm:robust-subtract@1.0.0",
      "robust-sum": "npm:robust-sum@1.0.0",
      "two-product": "npm:two-product@1.0.2"
    },
    "npm:robust-scale@1.0.2": {
      "two-product": "npm:two-product@1.0.2",
      "two-sum": "npm:two-sum@1.0.0"
    },
    "npm:rw@1.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:simplicial-complex@1.0.0": {
      "bit-twiddle": "npm:bit-twiddle@1.0.2",
      "union-find": "npm:union-find@1.0.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:tooltip.js@1.1.5": {
      "popper.js": "npm:popper.js@1.12.5"
    },
    "npm:turf-along@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-bearing": "npm:turf-bearing@3.0.12",
      "turf-destination": "npm:turf-destination@3.0.12",
      "turf-distance": "npm:turf-distance@3.0.12",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-area@3.0.12": {
      "geojson-area": "npm:geojson-area@0.2.1"
    },
    "npm:turf-bbox-polygon@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-bbox@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-meta": "npm:turf-meta@3.0.12"
    },
    "npm:turf-bearing@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-invariant": "npm:turf-invariant@3.0.12"
    },
    "npm:turf-bezier@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-buffer@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "geojson-normalize": "npm:geojson-normalize@0.0.0",
      "jsts": "npm:jsts@1.1.2",
      "turf-combine": "npm:turf-combine@3.0.12",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-center@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-bbox": "npm:turf-bbox@3.0.12",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-centroid@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-helpers": "npm:turf-helpers@3.0.12",
      "turf-meta": "npm:turf-meta@3.0.12"
    },
    "npm:turf-circle@3.0.12": {
      "turf-destination": "npm:turf-destination@3.0.12",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-collect@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-inside": "npm:turf-inside@3.0.12"
    },
    "npm:turf-combine@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-meta": "npm:turf-meta@3.0.12"
    },
    "npm:turf-concave@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-distance": "npm:turf-distance@3.0.12",
      "turf-meta": "npm:turf-meta@3.0.12",
      "turf-tin": "npm:turf-tin@3.0.12",
      "turf-union": "npm:turf-union@3.0.12"
    },
    "npm:turf-convex@3.0.12": {
      "convex-hull": "npm:convex-hull@1.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-helpers": "npm:turf-helpers@3.0.12",
      "turf-meta": "npm:turf-meta@3.0.12"
    },
    "npm:turf-destination@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-helpers": "npm:turf-helpers@3.0.12",
      "turf-invariant": "npm:turf-invariant@3.0.12"
    },
    "npm:turf-difference@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "jsts": "npm:jsts@1.1.2",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-distance@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-helpers": "npm:turf-helpers@3.0.12",
      "turf-invariant": "npm:turf-invariant@3.0.12"
    },
    "npm:turf-envelope@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "turf-bbox": "npm:turf-bbox@3.0.12",
      "turf-bbox-polygon": "npm:turf-bbox-polygon@3.0.12"
    },
    "npm:turf-explode@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-helpers": "npm:turf-helpers@3.0.12",
      "turf-meta": "npm:turf-meta@3.0.12"
    },
    "npm:turf-flip@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-meta": "npm:turf-meta@3.0.12"
    },
    "npm:turf-grid@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-point": "npm:turf-point@2.0.1"
    },
    "npm:turf-helpers@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:turf-hex-grid@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "turf-distance": "npm:turf-distance@3.0.12",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-inside@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-invariant": "npm:turf-invariant@3.0.12"
    },
    "npm:turf-intersect@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "jsts": "npm:jsts@1.1.2"
    },
    "npm:turf-isolines@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "turf-bbox": "npm:turf-bbox@3.0.12",
      "turf-grid": "npm:turf-grid@1.0.1",
      "turf-helpers": "npm:turf-helpers@3.0.12",
      "turf-inside": "npm:turf-inside@3.0.12",
      "turf-planepoint": "npm:turf-planepoint@3.0.12",
      "turf-square": "npm:turf-square@3.0.12",
      "turf-tin": "npm:turf-tin@3.0.12"
    },
    "npm:turf-kinks@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-line-distance@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-distance": "npm:turf-distance@3.0.12",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-line-slice@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-bearing": "npm:turf-bearing@3.0.12",
      "turf-destination": "npm:turf-destination@3.0.12",
      "turf-distance": "npm:turf-distance@3.0.12",
      "turf-helpers": "npm:turf-helpers@3.0.12",
      "turf-point-on-line": "npm:turf-point-on-line@3.0.12"
    },
    "npm:turf-meta@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:turf-midpoint@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-bearing": "npm:turf-bearing@3.0.12",
      "turf-destination": "npm:turf-destination@3.0.12",
      "turf-distance": "npm:turf-distance@3.0.12",
      "turf-invariant": "npm:turf-invariant@3.0.12"
    },
    "npm:turf-nearest@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-distance": "npm:turf-distance@3.0.12"
    },
    "npm:turf-planepoint@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:turf-point-grid@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-distance": "npm:turf-distance@3.0.12",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-point-on-line@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-bearing": "npm:turf-bearing@3.0.12",
      "turf-destination": "npm:turf-destination@3.0.12",
      "turf-distance": "npm:turf-distance@3.0.12",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-point-on-surface@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-center": "npm:turf-center@3.0.12",
      "turf-distance": "npm:turf-distance@3.0.12",
      "turf-explode": "npm:turf-explode@3.0.12",
      "turf-helpers": "npm:turf-helpers@3.0.12",
      "turf-inside": "npm:turf-inside@3.0.12"
    },
    "npm:turf-point@2.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:turf-random@3.0.12": {
      "geojson-random": "npm:geojson-random@0.2.2"
    },
    "npm:turf-sample@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-simplify@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "simplify-js": "npm:simplify-js@1.2.1"
    },
    "npm:turf-square-grid@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "turf-distance": "npm:turf-distance@3.0.12",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-square@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-distance": "npm:turf-distance@3.0.12",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-tag@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-inside": "npm:turf-inside@3.0.12"
    },
    "npm:turf-tesselate@3.0.12": {
      "earcut": "npm:earcut@2.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-tin@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-triangle-grid@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "turf-distance": "npm:turf-distance@3.0.12",
      "turf-helpers": "npm:turf-helpers@3.0.12"
    },
    "npm:turf-union@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "jsts": "npm:jsts@1.1.2"
    },
    "npm:turf-within@3.0.12": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "turf-helpers": "npm:turf-helpers@3.0.12",
      "turf-inside": "npm:turf-inside@3.0.12"
    },
    "npm:turf@3.0.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "turf-along": "npm:turf-along@3.0.12",
      "turf-area": "npm:turf-area@3.0.12",
      "turf-bbox": "npm:turf-bbox@3.0.12",
      "turf-bbox-polygon": "npm:turf-bbox-polygon@3.0.12",
      "turf-bearing": "npm:turf-bearing@3.0.12",
      "turf-bezier": "npm:turf-bezier@3.0.12",
      "turf-buffer": "npm:turf-buffer@3.0.12",
      "turf-center": "npm:turf-center@3.0.12",
      "turf-centroid": "npm:turf-centroid@3.0.12",
      "turf-circle": "npm:turf-circle@3.0.12",
      "turf-collect": "npm:turf-collect@3.0.12",
      "turf-combine": "npm:turf-combine@3.0.12",
      "turf-concave": "npm:turf-concave@3.0.12",
      "turf-convex": "npm:turf-convex@3.0.12",
      "turf-destination": "npm:turf-destination@3.0.12",
      "turf-difference": "npm:turf-difference@3.0.12",
      "turf-distance": "npm:turf-distance@3.0.12",
      "turf-envelope": "npm:turf-envelope@3.0.12",
      "turf-explode": "npm:turf-explode@3.0.12",
      "turf-flip": "npm:turf-flip@3.0.12",
      "turf-helpers": "npm:turf-helpers@3.0.12",
      "turf-hex-grid": "npm:turf-hex-grid@3.0.12",
      "turf-inside": "npm:turf-inside@3.0.12",
      "turf-intersect": "npm:turf-intersect@3.0.12",
      "turf-isolines": "npm:turf-isolines@3.0.12",
      "turf-kinks": "npm:turf-kinks@3.0.12",
      "turf-line-distance": "npm:turf-line-distance@3.0.12",
      "turf-line-slice": "npm:turf-line-slice@3.0.12",
      "turf-meta": "npm:turf-meta@3.0.12",
      "turf-midpoint": "npm:turf-midpoint@3.0.12",
      "turf-nearest": "npm:turf-nearest@3.0.12",
      "turf-planepoint": "npm:turf-planepoint@3.0.12",
      "turf-point-grid": "npm:turf-point-grid@3.0.12",
      "turf-point-on-line": "npm:turf-point-on-line@3.0.12",
      "turf-point-on-surface": "npm:turf-point-on-surface@3.0.12",
      "turf-random": "npm:turf-random@3.0.12",
      "turf-sample": "npm:turf-sample@3.0.12",
      "turf-simplify": "npm:turf-simplify@3.0.12",
      "turf-square": "npm:turf-square@3.0.12",
      "turf-square-grid": "npm:turf-square-grid@3.0.12",
      "turf-tag": "npm:turf-tag@3.0.12",
      "turf-tesselate": "npm:turf-tesselate@3.0.12",
      "turf-tin": "npm:turf-tin@3.0.12",
      "turf-triangle-grid": "npm:turf-triangle-grid@3.0.12",
      "turf-union": "npm:turf-union@3.0.12",
      "turf-within": "npm:turf-within@3.0.12"
    },
    "npm:twemoji@2.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:xmlhttprequest@1.8.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0"
    }
  }
});
