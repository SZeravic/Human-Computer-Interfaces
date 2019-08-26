export default [
  {
    text: "Home",
    path: "/"
  },
  {
    text: "Blog",
    path: "/blog"
  },
  {
    text: "Contact",
    path: "/contact"
  },
  {
    text: "About",
    path: "/about"
  },
  {
    text: "Login",
    path: "/login",
    login: true
  },
  // Private routes
  {
    text: "Dashboard",
    path: "/private/dashboard",
    private: true
  }
];
