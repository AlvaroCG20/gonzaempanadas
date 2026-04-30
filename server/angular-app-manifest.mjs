
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15443, hash: 'ff3d091a2f1d418706a8479649e5600cbb11b29e951b68758b849587df5bf4f1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 946, hash: '598eb14c03c968be0c98da136934081914e29bcffe4ee5e50e70c129ffe80c93', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 44865, hash: '37ad9502cd8039d43fd07e5a8beeb065780af079bf71b2c8f100a0e38df67618', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BN3D5CPX.css': {size: 16253, hash: 'QXVa91NRAsk', text: () => import('./assets-chunks/styles-BN3D5CPX_css.mjs').then(m => m.default)}
  },
};
