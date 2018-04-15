import * as React from 'react';
import './App.css';
import { BookmarksStore } from './Stores/bookmarksStore';
import { UserStore } from './Stores/userStore';
import { Bookmarks } from './Components/Bookmarks/bookmarks';

let bookmarksStore: BookmarksStore = new BookmarksStore();
let userStore: UserStore = new UserStore();

class App extends React.Component {

  render() {

    return (
        <Bookmarks store={bookmarksStore} user={userStore}/>
    );
  }
}

export default App;
