import myEarnings from "../public/logos/Group19.png";
import myJobs from "../public/logos/Group21.png";
import myServices from "../public/logos/Group22.png";
import overview from "../public/logos/Group23.png";
import calender from "../public/logos/Group24.png";
import message from "../public/logos/Group25.png";
import setting from "../public/logos/Group26.png";
import bankAccount from "../public/logos/Group27.png";
import termsCondition from "../public/logos/Group28.png";
import help from "../public/logos/Group29.png";

export const dashboardList = [
  //   { title: "Home", route: "/", icon: <IconMessage2 /> },
  {
    title: "Overview",
    route: "/overview",
    icon: overview,
  },
  {
    title: "My Services",
    route: "/reservations",
    icon: myServices,
  },
  { title: "My Jobs", route: "/", icon: myJobs },
  { title: "My Earnings", route: "/", icon: myEarnings },
  { title: "Calender", route: "/calender", icon: calender },
  { title: "Message", route: "/", icon: message },
  {
    title: "Settings",
    route: "/",
    icon: setting,
  },
  {
    title: "Bank Account",
    route: "/",
    icon: bankAccount,
  },
  {
    title: "Term & Conditions",
    route: "/",
    icon: termsCondition,
  },
  {
    title: "Help & Support",
    route: "/",
    icon: help,
  },
];
