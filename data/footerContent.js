module.exports = [
  {
    id: 1,
    title: "Pour les candidats",
    menuList: [
      { name: "Parcourir les offres", route: "/job-list-v4" },
      { name: "Parcourir les entreprises", route: "/employers-list-v1" },
      { name: "Tableau de bord", route: "/candidates-dashboard/dashboard" },
      { name: "Alertes d'offres", route: "/candidates-dashboard/job-alerts" },
    ],
  },
  {
    id: 2,
    title: "Pour les entreprises",
    menuList: [
      {
        name: "Trouver des candidats",
        route: "/candidates-list-v1",
      },
      { name: "Tableau de bord", route: "/employers-dashboard/dashboard" },
      { name: "Publié un offre", route: "/employers-dashboard/post-jobs" },
    ],
  },
  {
    id: 3,
    title: "A propos",
    menuList: [
      { name: "A propos", route: "/about" },
      { name: "Conditions d'utilisation", route: "/terms" },
      { name: "Blog", route: "/blog-list-v1" },
      { name: "Contact", route: "/contact" },
    ],
  },
];
