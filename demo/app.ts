import { routerLinkCheck } from 'simplester/web';
import { S } from 'surplus';
import { Simplester } from 'simplester';

const app = new Simplester(
  {
    viewSelector: '#main',
    routeRenderer: (routeTreeItem, viewSelector, next) => {
      const parentDomNode = document.querySelector(viewSelector.toString());
      parentDomNode.innerHTML = '';
      S.root((dispose: () => void) => {
        routeTreeItem.deactivate = dispose;
        routeTreeItem.viewNode = routeTreeItem.render(routeTreeItem.controller);
        parentDomNode.appendChild(routeTreeItem.viewNode);
        next();
      });
    }
  },
  {
    path: '/demo',
    render: require('./default'),
    childs: [
      { path: '/button', render: require('./button') },
      { path: '/card', render: require('./card') },
      { path: '/checkbox', render: require('./checkbox') },
      { path: '/dialog', render: require('./dialog') },
      {
        path: '/drawer',
        abstract: true,
        childs: [
          {
            path: '/temporary-drawer',
            render: require('./drawer/temporary-drawer')
          },
          {
            path: '/persistent-drawer',
            render: require('./drawer/persistent-drawer')
          },
          {
            path: '/permanent-drawer-below-toolbar',
            render: require('./drawer/permanent-drawer-below-toolbar')
          },
          {
            path: '/permanent-drawer-above-toolbar',
            render: require('./drawer/permanent-drawer-above-toolbar')
          }
        ]
      },
      { path: '/elevation', render: require('./elevation') },
      { path: '/fab', render: require('./fab') },
      { path: '/grid-list', render: require('./grid-list') },
      { path: '/icon-toggle', render: require('./icon-toggle') },
      { path: '/layout-grid', render: require('./layout-grid') },
      { path: '/linear-progress', render: require('./linear-progress') },
      { path: '/list', render: require('./list') },
      { path: '/radio', render: require('./radio') },
      { path: '/ripple', render: require('./ripple') },
      { path: '/select', render: require('./select') },
      { path: '/simple-menu', render: require('./simple-menu') },
      { path: '/slider', render: require('./slider') },
      { path: '/snackbar', render: require('./snackbar') },
      { path: '/switch', render: require('./switch') },
      { path: '/tabs', render: require('./tabs') },
      { path: '/textfield', render: require('./textfield') },
      { path: '/theme', render: require('./theme') },
      { path: '/toolbar', render: require('./toolbar') },
      { path: '/typography', render: require('./typography') },
      {
        path: '/other',
        abstract: true,
        childs: [{ path: '/data-table', render: require('./other/data-table') }]
      }
    ]
  }
);

app.start();
routerLinkCheck(app['router'], app.options.viewSelector);
