import Link from "next/link";
import { useRouter } from "next/router";
import FilesIcon from "./icons/FilesIcon";
import CodeIcon from "./icons/CodeIcon";
import MailIcon from "./icons/MailIcon";
import AccountIcon from "./icons/AccountIcon";
import SettingsIcon from "./icons/SettingsIcon";
import styles from "../styles/Sidebar.module.css";
import SkillsIcon from "./icons/SkillsIcon";

const sidebarTopItems = [
  {
    id: 1,
    Icon: FilesIcon,
    path: "/",
  },
  {
    id: 2,
    Icon: SkillsIcon,
    path: "/skills",
  },
  {
    id: 3,
    Icon: CodeIcon,
    path: "/projects",
  },
  {
    id: 4,
    Icon: MailIcon,
    path: "/contact",
  },
];

const sidebarBottomItems = [
  {
    id: 1,
    Icon: AccountIcon,
    path: "/about",
  },
  {
    id: 2,
    Icon: SettingsIcon,
    path: "/settings",
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ id, Icon, path }) => (
          <Link href={path} key={id}>
            <div
              className={`${styles.iconContainer} ${
                router.pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ id, Icon, path }) => (
          <div className={styles.iconContainer}>
            <Link href={path} key={id}>
              <Icon
                fill={
                  router.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
