import { observable, action } from 'mobx';

class Store{

    @observable user: any = null;
    

    @action setUser(username: string, password: string){
        this.user = {
            name: username,
            password: password
        }
    }

}

export const store = new Store();