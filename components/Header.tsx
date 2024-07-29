import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './styles/Header.module.scss';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Link href="/">
                <FaArrowLeft />
                Go Back
            </Link>
        </header>
    );
};

export default Header;