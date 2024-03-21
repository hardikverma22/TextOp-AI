"use client";
import {motion} from "framer-motion";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import {FiGithub, FiMenu} from "@/constants/icon";
import {container, fadeIn, fadeInX} from "@/constants/motion";
import {tabs} from "@/constants";
import {useRef, useState} from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <header
      className="flex items-center justify-between
            fixed top-0
            px-5 py-2
            shadow-lg
            bg-transparent
            h-12 w-full z-50"
    >
      <motion.div
        initial={{x: -200, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 1, type: "spring", ease: "backInOut"}}
        className="text-3xl font-Josefin
              text-teal-800 font-bold cursor-pointer"
      >
        <Link href="/">
          <div>
            Textop.<span className="text-teal-500">AI</span>
          </div>
        </Link>
      </motion.div>
      {pathname === "/" ? (
        <motion.a
          initial={{x: 200, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 1, type: "spring", ease: "backInOut"}}
          href="https://github.com/hardikverma22/textop.AI"
          target="_blank"
          className="px-2 py-1 rounded-md bg-teal-900 text-white
                flex gap-1 justify-center items-center
                hover:bg-teal-700 cursor-pointer"
        >
          <FiGithub className="text-lg" />
          <span>Github</span>
        </motion.a>
      ) : (
        <nav>
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="md:flex hidden gap-5
                 text-primary/80 tracking-wide text-md font-semibold font-Josefin"
          >
            {tabs.map((tab, index) => (
              <motion.div variants={fadeInX()} key={`${tab}_${index}`}>
                <Link href={tab.link}>
                  <li
                    className={`relative  rounded-full p-2 transition duration-500 cursor-pointer`}
                  >
                    {pathname === tab.link && (
                      <motion.span
                        layoutId="bubble"
                        className="absolute inset-0 z-10 bg-[#2962d62b] mix-blend-color-burn"
                        style={{borderRadius: 9999}}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}

                    {tab.title}
                  </li>
                </Link>
              </motion.div>
            ))}
          </motion.ul>
          <button
            ref={navRef}
            className="md:hidden flex justify-center items-center
                bg-white/50 p-[.35rem] rounded-full
                          hover:bg-white cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <FiMenu className="text-2xl" />
          </button>
          {open ? (
            <motion.div
              initial={{opacity: 0, y: "2.5rem"}}
              animate={{opacity: 1, y: "3rem"}}
              transition={{duration: 0.1, delay: 0}}
              className={`bg-gradient-to-r from-rose-100 to-teal-100
                      w-full absolute top-0 left-0 shadow-lg
                      transition-all duration-500 ease-in-out`}
            >
              <motion.ul
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col w-full justify-center items-center"
              >
                {tabs.map((tab) => (
                  <motion.li
                    variants={fadeIn()}
                    key={tab.link}
                    className="text-lg text-center py-2
                           border-b border-b-gray-200
                          w-full cursor-pointer hover:bg-teal-100 hover:font-bold"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(tab.link);
                    }}
                  >
                    {tab.title}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ) : null}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
