import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import { FaBars, FaHome} from "react-icons/fa";
import {SiAboutdotme} from "react-icons/si"
import { MdMessage } from "react-icons/md";
import { AiFillContacts } from "react-icons/ai";
import {Link} from "react-scroll"
import { GrProjects } from "react-icons/gr";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import  SidebarMenu from "./sidemenu";
import "./sidebar.css"
const routes = [
  {
    path: "first",
    name: "home",
    icon: <FaHome />,
  },
  {
    path: "about",
    name: "About",
    icon: <SiAboutdotme />,
  },
  {
    path: "skills",
    name: "skills",
    icon: <MdMessage />,
  },
  {
    path: "projects",
    name: "Project's",
    icon: <GrProjects />,
  },
  {
    path: "contact",
    name: "Contact",
    icon: <AiFillContacts />,
  },
 
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  let location=useLocation()
  let [pem,setprm]=useSearchParams()
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  let [value,set]=useState("")
 
  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  menu
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <Link
                  to={route.path}
                  key={index}
                  spy={true} smooth={true} offset={0} duration={900}
                  className={"link"}
                  
                 
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                        style={{textDecoration:"none"}}
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
