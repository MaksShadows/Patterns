// The State Pattern

class Context {
   public state: State = new UnauthorizedState();


    get isAuthorized(): boolean {
        return this.state.isAuthorized(this);
    }

    get userId(): string {
        return this.state.getUserId(this);
    }

    public changeStateToAuthorized(userId: string) {
        this.state = new AuthorizedState(userId);
    }

    public changeStateToUnauthorized() {
        this.state = new UnauthorizedState();
    }

    public printAuthorizationStatus() : void {
        console.log(`Is user authorized: ${this.isAuthorized}. User id is: ${this.userId}.`);
    }
}

interface State {
    isAuthorized(context: Context): boolean;
    getUserId(context: Context): string;
}

class UnauthorizedState implements State {
    public isAuthorized(context: Context): boolean {
        return false;
    }

    public getUserId(context: Context): string {
        return `no admin`;
    }
}

class AuthorizedState implements State {
    private userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }

    public isAuthorized(context: Context): boolean {
        return true;
    }

    public getUserId(context: Context): string {
        return this.userId;
    }
}

let userContext = new Context();
userContext.printAuthorizationStatus();
userContext.changeStateToAuthorized("admin");
userContext.printAuthorizationStatus();
userContext.changeStateToUnauthorized();
userContext.printAuthorizationStatus();