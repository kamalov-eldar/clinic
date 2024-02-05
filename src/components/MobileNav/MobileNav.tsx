import classNames from "classnames";
import styles from "./MobileNav.module.scss";
import { FC } from "react";
import Button from "../Button/Button";

const MobileNav: FC = () => {
    return (
        <nav className={classNames(styles.nav)}>
            <ul className={classNames(styles.nav__list)}>
                <li className={styles.nav__item}>
                    <a href="/">О клинике</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="/">Услуги</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="/">Специалисты</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="/">Цены</a>
                </li>
                <li className={styles.nav__item}>
                    <a href="/">Контакты</a>
                </li>
            </ul>
            <Button className={styles.btn} variant="primary"> Записаться на прием </Button>
        </nav>
    );
};

export default MobileNav;