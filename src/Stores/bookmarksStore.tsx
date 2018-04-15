import { observable } from 'mobx';

export class BookmarksStore {
    // ThemesList
    @observable isThemesListSelected: boolean = false;
    @observable themesListSelectedTheme: string;
}

var store = new BookmarksStore();

export default store;
