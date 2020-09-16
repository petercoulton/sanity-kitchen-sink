export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f629fe5b0ade27d48d222d3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-79qs6zqo',
                  apiId: 'dc5b11ca-b2ea-47ec-8f00-03e9f833b3fd'
                },
                {
                  buildHookId: '5f629fe6924ff08e2b89f629',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-xs1ex2ps',
                  apiId: 'fc208fb5-b801-492e-987a-b23023bbbe37'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/petercoulton/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-xs1ex2ps.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
