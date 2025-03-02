import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'e2a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '65a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'b58'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '07b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'ded'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'a8b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ef2'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '4de'),
    routes: [
      {
        path: '/api-integration',
        component: ComponentCreator('/api-integration', 'ff2'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/challenges-solutions',
        component: ComponentCreator('/challenges-solutions', 'cba'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/project-setup',
        component: ComponentCreator('/project-setup', '652'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/refresh-behavior',
        component: ComponentCreator('/refresh-behavior', '7b9'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/state-management',
        component: ComponentCreator('/state-management', 'a6a'),
        exact: true,
        sidebar: "docs"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
