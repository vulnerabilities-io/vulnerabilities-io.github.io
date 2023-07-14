import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '9e8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '636'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '56e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f8b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'fd1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'ba3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '2c2'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '055'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e36'),
    routes: [
      {
        path: '/docs/category/getting-started',
        component: ComponentCreator('/docs/category/getting-started', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/congratulations',
        component: ComponentCreator('/docs/getting-started/congratulations', '5ac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/create-a-blog-post',
        component: ComponentCreator('/docs/getting-started/create-a-blog-post', '9d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/create-a-document',
        component: ComponentCreator('/docs/getting-started/create-a-document', 'd77'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/create-a-page',
        component: ComponentCreator('/docs/getting-started/create-a-page', '95f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/deploy-your-site',
        component: ComponentCreator('/docs/getting-started/deploy-your-site', 'd26'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/markdown-features',
        component: ComponentCreator('/docs/getting-started/markdown-features', 'd6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'aae'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
