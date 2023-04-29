import tour1 from '../src/images/tour-1.jpeg'
import tour2 from '../src/images/tour-2.jpeg'
import tour3 from '../src/images/tour-3.jpeg'
import tour4 from '../src/images/tour-4.jpeg'


export const Pagelinks = [
  { id: 1, href: '#home', title: 'Home' },
  { id: 2, href: '#about', title: 'about' },
  { id: 3, href: '#services', title: 'services' },
  { id: 4, href: '#tours', title: 'Tours' },
]

export const SocialLinks = [
  { id: 1, href: 'https://www.facebook.com', fa: 'fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', fa: 'fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', fa: 'fa-squarespace' },
]

export const ServicesText = [
  { id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money' },
  { id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking' },
  { id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort' },
]

export const TourData = [
  {
    id: 1,
    img: tour1,
    date: 'august 26th, 2020',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicingelitAsperiores, officia',
    icon: 'fas fa-map',
    name: 'china',
    days: '6 days',
    price: 'from $2100',
  },

  {
    id: 2,
    img: tour2,
    date: 'october 1th, 2020',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicingelitAsperiores, officia',
    icon: 'fas fa-map',
    name: 'indonesia',
    days: '11 days',
    price: 'from $1400',
  },

  {
    id: 3,
    img: tour3,
    date: 'august 14th, 2023',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicingelitAsperiores, officia',
    icon: 'fas fa-map',
    name: 'Explore hong kong',
    days: '8 days',
    price: 'from $5100',
  },
  {
    id: 4,
    img: tour4,
    date: 'august 26th, 2023',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicingelitAsperiores, officia',
    icon: 'fas fa-map',
    name: 'kenya highlights',
    days: '20 days',
    price: 'from $3300',
  },
]
