import {HttpHeaders} from '@angular/common/http';

/**
 * @author Elton H. Paula
 */
export class Config {
    public static httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Cache-Control': 'no-cache'

        })
    };
}
