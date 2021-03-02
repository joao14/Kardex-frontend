import { Injectable } from "@angular/core";
import { BehaviorSubject, throwError, Observable } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
} from "@angular/common/http";
export class AuthInfo {
    constructor(public $uid: string) { }

    isLoggedIn() {
        return !!this.$uid;
    }
}

@Injectable({
    providedIn: "root",
})
export class ApisService {
    static UNKNOWN_USER = new AuthInfo(null);

    public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(
        ApisService.UNKNOWN_USER
    );
    constructor(
        private http: HttpClient
    ) { }

    /** Http Options */
    httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
        }),
    };

    /** Captura de errores */
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error("An error occurred:", error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` + `body was: ${error.error}`
            );
        }
        // return an observable with a user-facing error message
        return throwError("Something bad happened; please try again later.");
    }


    public login(email: string, password: string): Promise<any> {
        let credential = {
            user: email,
            password: password,
        };
        console.log(credential);
        return this.http
            .post<any>(
                environment.login,
                JSON.stringify(credential),
                this.httpOptions  
            )
            .pipe(retry(2), catchError(this.handleError)).toPromise();
    }

    public products(token: string): Promise<any> {
        let opt = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }
        return new Promise<any>((resolve, reject) => {
            this.http.get<any>(environment.products, opt).toPromise().then(email => {
                resolve(email);
            }).catch(error => {
                reject(error);
            })
        });
    }   

    public addproduct(product: any, token: string): Promise<any> {
        let opt = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }
        return new Promise<any>((resolve, reject) => {
            this.http.post<any>(environment.add, product, opt).toPromise().then(product => {
                resolve(product);
            }).catch(error => {
                reject(error);
            })
        });
    }

    public updateproduct(product: any, token: string): Promise<any> {
        let opt = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }
        return new Promise<any>((resolve, reject) => {
            this.http.put<any>(environment.update, product, opt).toPromise().then(product => {
                resolve(product);
            }).catch(error => {
                reject(error);
            })
        });
    }

    public deleteproduct(id: any, token: string): Promise<any> {
        let opt = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token,
                'idProduct': id
            })
        }
        return new Promise<any>((resolve, reject) => {
            this.http.put<any>(environment.delete, null, opt).toPromise().then(product => {
                resolve(product);
            }).catch(error => {
                reject(error);
            })
        });
    }

    public users(token: string): Promise<any> {
        let opt = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        }
        return new Promise<any>((resolve, reject) => {
            this.http.get<any>(environment.users, opt).toPromise().then(user => {
                resolve(user);
            }).catch(error => {
                reject(error);
            })
        });
    }   


    httpPost(url, body) {
        const header = {
            headers: new HttpHeaders()
                .set("Content-Type", "application/x-www-form-urlencoded")
            //.set("Authorization", `Bearer ${environment.stripe.sk}`),
        };
        const order = this.JSON_to_URLEncoded(body);
        console.log(order);
        return this.http.post(url, order, header);
    }

    httpGet(url) {
        const header = {
            headers: new HttpHeaders()
                .set("Content-Type", "application/x-www-form-urlencoded")
            //.set("Authorization", `Bearer ${environment.stripe.sk}`),
        };

        return this.http.get(url, header);
    }

    JSON_to_URLEncoded(element, key?, list?) {
        let new_list = list || [];
        if (typeof element == "object") {
            for (let idx in element) {
                this.JSON_to_URLEncoded(
                    element[idx],
                    key ? key + "[" + idx + "]" : idx,
                    new_list
                );
            }
        } else {
            new_list.push(key + "=" + encodeURIComponent(element));
        }
        return new_list.join("&");
    }
}
