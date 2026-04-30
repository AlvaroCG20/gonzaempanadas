
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/gonzaempanadas/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/gonzaempanadas"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 15458, hash: 'b6f0dd26151bfd9e77b97f4ff686eb78bedfbc9b8c31f4f9d324f937b4e0d385', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 961, hash: '457ed51df97866298dce1797dffa26e92fc00482782db086e2afdd6ba064ee8f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 44880, hash: 'fe0490603d7af90dfe8b5c99af6084a048f00ddb339a223881e1b99cdf80944b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BN3D5CPX.css': {size: 16253, hash: 'QXVa91NRAsk', text: () => import('./assets-chunks/styles-BN3D5CPX_css.mjs').then(m => m.default)}
  },
};
