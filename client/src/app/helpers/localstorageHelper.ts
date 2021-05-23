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

    static SetItem(name: string, value: string) {
        localStorage.setItem(name, JSON.stringify(value));        
    }

    static RemoveItem(name: string) {
        localStorage.removeItem(name);
    }
}