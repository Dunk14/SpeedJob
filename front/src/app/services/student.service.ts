import { Injectable, Inject } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { speedJobApi } from '../globals';

@Injectable()
export class StudentService {
    private studentsUrl = speedJobApi + '/api/accounts/students';

    constructor(@Inject(Http) private http: Http) {}

    /**
     * Get all students without filtering
     */
    getStudents() {
        let sj = JSON.parse(localStorage.getItem('speedjob'));

        return this.http.get(this.studentsUrl + '?token=' + sj.token);
    }
}