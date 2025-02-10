import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'DJ Services',
      href: getPermalink('/dj-services'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: 'Sitemap',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Blog', href: '/blog' },
        { text: 'DJ Services', href: '/dj-services' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/denismayer' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/denismayer' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/i_am_denis_mayer/' },
    { ariaLabel: 'Medium', icon: 'tabler:brand-medium', href: 'https://medium.com/@denismayer' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/denmayer' },
    {
      ariaLabel: 'Spotify',
      icon: 'tabler:brand-spotify',
      href: 'https://open.spotify.com/user/denismayer',
    },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Copyright 2025 - Denis Mayer -  All rights reserved.
  `,
};
