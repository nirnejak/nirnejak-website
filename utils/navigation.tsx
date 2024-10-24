import {
  Camera,
  HomeAlt1,
  LaptopDevice,
  Pencil,
  Phone,
  DribbbleFill,
  GithubFill,
  LinkedinFill,
  XFill,
  Frame,
  UnsplashFill,
  ProductHuntFill,
} from "akar-icons"

export const navLinks = [
  {
    content: "Home",
    value: "home",
    link: "/",
    icon: <HomeAlt1 size={15} />,
  },
  {
    content: "Work",
    value: "work",
    link: "/work/",
    icon: <LaptopDevice size={15} />,
  },
  {
    content: "Blogs",
    value: "blogs",
    link: "/blogs/",
    icon: <Pencil size={15} />,
  },
  {
    content: "Photos",
    value: "photos",
    link: "/photos/",
    icon: <Camera size={15} />,
  },
  {
    content: "Uses",
    value: "uses",
    link: "/uses/",
    icon: <LaptopDevice size={15} />,
  },
  {
    content: "Contact",
    value: "contact",
    link: "/contact/",
    icon: <Phone size={15} />,
  },
]

export const socialLinks = [
  {
    content: "X",
    href: "https://twitter.com/jeetnirnejak/",
    icon: <XFill size={15} />,
  },
  {
    content: "Github",
    href: "https://github.com/nirnejak/",
    icon: <GithubFill size={15} />,
  },
  {
    content: "Layers.to",
    href: "https://layers.to/nirnejak/",
    icon: <Frame size={15} />,
  },
  {
    content: "Dribbble",
    href: "https://dribbble.com/nirnejak/",
    icon: <DribbbleFill size={15} />,
  },
  {
    content: "ProductHunt",
    href: "https://www.producthunt.com/@nirnejak",
    icon: <ProductHuntFill size={15} />,
  },
  {
    content: "Unsplash",
    href: "https://unsplash.com/@nirnejak/",
    icon: <UnsplashFill size={15} />,
  },
  {
    content: "LinkedIn",
    href: "https://www.linkedin.com/in/nirnejak/",
    icon: <LinkedinFill size={15} />,
  },
]
