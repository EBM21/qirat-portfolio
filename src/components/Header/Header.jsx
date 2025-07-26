import React, { useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight, BiX } from "react-icons/bi";
import { motion } from "framer-motion";
import { headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  useOutsideAlerter({ menuRef, setMenuOpened });

  const handleLinkClick = () => setMenuOpened(false);

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>Qirat Nasir</div>

        {/* Navigation */}
        <ul
          className={`flexCenter ${css.menu} ${menuOpened ? css.active : ""}`}
          ref={menuRef}
        >
          {/* Close Icon */}
          <div className={css.closeIcon} onClick={() => setMenuOpened(false)}>
            <BiX size={30} />
          </div>

          <li><a href="#experties" onClick={handleLinkClick}>Services</a></li>
          <li><a href="#work" onClick={handleLinkClick}>Experience</a></li>
          <li><a href="#portfolio" onClick={handleLinkClick}>Portfolio</a></li>
          <li><a href="#people" onClick={handleLinkClick}>Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+92 317 3712789</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        {/* Mobile Icon */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
