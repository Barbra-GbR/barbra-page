import './bookmarks.css';
import * as React from 'react';
import 'bootstrap-grid/dist/grid.css';
import { observer } from 'mobx-react';
import { ThemesList } from './themesList/themesList';
import { Greeting } from './greeting/greeting';
import BookmarksInformationCardContainer from './bookmarksInformationCardContainer/bookmarksInformationCardContainer';
import { BookmarksStore } from '../../Stores/bookmarksStore';
import { action } from 'mobx';
import { UserStore } from '../../Stores/userStore';

@observer
export class Bookmarks extends React.Component<{ store: BookmarksStore, user: UserStore }, {}> {

    private greeting: Greeting = new Greeting('test'); // this.props.user.userName
    private bookmarksInformationCardContainer: BookmarksInformationCardContainer = new BookmarksInformationCardContainer(this.props.user.userBookmarks);

    @action('update onChange')
    onThemesListChangeUpdate = () => {
        if (this.props.store.isThemesListSelected) {
            this.greeting.setTheme(this.props.store.themesListSelectedTheme);
            this.bookmarksInformationCardContainer.filterContentBookmarks(this.props.store.themesListSelectedTheme, this.props.user.userBookmarks);
        }
    }

    render() {
        return (
            <div id={'bookmark-base'} className={'container'}>
                <div id={'bookmark-header'} className={'row'}>
                    <div className="col-md-12">
                        {this.greeting.render()}
                    </div>
                </div>
                <div id={'bookmark-container'}>
                    <div className="row">
                        <div className="col-md-4" onChange={this.onThemesListChangeUpdate}>
                            <ThemesList themes={this.props.user.userThemes} store={this.props.store}/>
                        </div>
                        <div className={'col-md-8' + this.props.store.isThemesListSelected ? '' : 'invisible'} >
                            {this.bookmarksInformationCardContainer.render()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}