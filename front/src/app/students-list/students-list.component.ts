import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { StudentService } from '../services/student.service';

@Component({
    selector: 'app-students-list',
    templateUrl: './students-list.component.html',
    styleUrls: ['students-list.component.scss']
})

export class StudentsListComponent implements OnInit {

    public students: any;
    public research: string;

    constructor(private studentService: StudentService) { }

    ngOnInit() {
        this.studentService.getStudents()
            .subscribe(
                (res: Response) => {
                    this.students = res.json();
                    console.log(this.students);
                });
    }

}
