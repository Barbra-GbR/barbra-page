import { observable } from 'mobx';
import InformationCard from '../Components/InformationCard/informationCard';

export class UserStore {
    @observable userBookmarks: InformationCard[];
    @observable userThemes: string[] = [];
    @observable userName: string;
    // 1.1 @observable userBlacklistedInformationCards: InformationCard[];
}

var userStore = new UserStore();

export default userStore;