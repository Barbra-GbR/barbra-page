import * as React from 'react';
import { divWithClass } from '../../../Helpers/divWithClass';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import './themesList.css';
import { BookmarksStore } from '../../../Stores/bookmarksStore';
import { ThemesListItem } from './themesListItem/themesListItem';

const ThemesListHeader = divWithClass('themes-list-header');
const ThemesListContent = divWithClass('themes-list-content');

interface ThemesListProps {
    themes: string[];
    store: BookmarksStore;
}

@observer
export class ThemesList extends React.Component<ThemesListProps, {}> {

    @observable activeIndex: number;

    constructor(props: any) {
        super(props);
    }

    @action('select item')
    selectItem = (index: number) => {
        this.activeIndex = index;
        this.props.store.themesListSelectedTheme = this.props.themes[index];
        this.props.store.isThemesListSelected = true;
    }

    render() {

        return (
            <div className="themes-list">
                <ThemesListHeader>
                    Your Themes
                </ThemesListHeader>

                <ThemesListContent>
                    <ul>
                        {this.props.themes.map((theme: string, index: number) =>
                            <span key={index} onClick={() => this.selectItem(index)}>
                                <ThemesListItem active={index === this.activeIndex}>
                                    {theme}
                                </ThemesListItem>
                            </span>
                        )}
                    </ul>
                </ThemesListContent>

            </div>
        );
    }
}
