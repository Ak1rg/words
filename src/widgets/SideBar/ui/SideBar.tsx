'use client';
import { useState } from 'react';
import styles from './styles.module.scss';

export const SideBar = () => {

    const [hide, setHide] = useState(false)

    const change = () => {
        setHide(e => !e)
    }

    return (
        <header 
            className={styles.header}
            style={{
                width: hide ? '30px' : '100%',
                transition: 'width 0.2s ease-in-out'
            }}
        >
            <button className={styles.button} onClick={change}>
                click
            </button>
        </header>
    )
}
