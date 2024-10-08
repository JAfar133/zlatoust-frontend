import {makeAutoObservable} from "mobx";

interface User {
    _id: number;
    username: string;
    email: string;
    role: string;
}

class UserState {
    _isAuth: boolean;
    _user: User | null;
    _loading: boolean = true;

    constructor() {
        this._isAuth = false;
        this._user = null;
        makeAutoObservable(this);
    }

    isAdmin() {
        return this.user?.role === 'admin';
    }

    setUser(user: User | null) {
        this._user = user;
    }

    setIsAuth(isAuth: boolean) {
        this._isAuth = isAuth;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }

    logout() {
        this.setUser(null);
        this.setIsAuth(false);
        localStorage.removeItem('auth_token');
    }
}