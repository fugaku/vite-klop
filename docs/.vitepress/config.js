import { defineConfig } from "vitepress"

export default defineConfig({
  lang: 'en-US',
  title: 'Klearance One Portal',
  description: 'Vite & Vue powered static site generator.',
  lastUpdated: true,
  themeConfig: {
    nav: nav(),
    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/guide/': [
        {
          text: 'Guide',
          items: [
            // This shows `/guide/index.md` page.
            { text: 'Index', link: '/guide/' }, // /guide/index.md
            { text: 'One', link: '/guide/one' }, // /guide/one.md
            { text: 'Two', link: '/guide/two' } // /guide/two.md
          ]
        }
      ],

      // This sidebar gets displayed when user is
      // under `config` directory.
      '/config/': [
        {
          text: 'Config',
          items: [
            // This shows `/config/index.md` page.
            { text: 'Index', link: '/config/' }, // /config/index.md
            { text: 'Three', link: '/config/three' }, // /config/three.md
            { text: 'Four', link: '/config/four' } // /config/four.md
          ]
        }
      ],

      // This sidebar gets displayed when user is
      // under `config` directory.
      '/': [
        {
          text: 'Config',
          items: [
            // This shows `/config/index.md` page.
            { text: 'this is home', link: '/config/' }, // /config/index.md
            { text: 'Three', link: '/config/three' }, // /config/three.md
            { text: 'Four', link: '/config/four' } // /config/four.md
          ]
        }
      ]
    },
  }
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    { text: 'Configs', link: '/config/', activeMatch: '/config/' },
  ]
}
