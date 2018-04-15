import * as React from 'react';
import './themesListItem.css';

interface ThemesListItemProps {
    active: boolean;
    children?: any;
}

export function ThemesListItem(props: ThemesListItemProps) {

    return (
        <li className={props.active ? 'selected' : ''}>
            {props.children}
        </li>
    );
}
