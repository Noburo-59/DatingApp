import { User } from "../_models/user";

enum LOCALSTORAGE_KEYS {
    user = 'user'        
}

export class LocalStorageHelper {

    static keys = LOCALSTORAGE_KEYS;

    //static userToken: string = (JSON.parse(localStorage.getItem(LocalStorageHelper.keys.user) || '{}') as User)?.token;

    static GetUser() {
        return localStorage.getItem(LocalStorageHelper.keys.user);
    }

    static SetItem(key: string, user: User) {
        localStorage.setItem(key, JSON.stringify(user));        
    }

    static RemoveItem(key: string) {
        localStorage.removeItem(key);
    }
}