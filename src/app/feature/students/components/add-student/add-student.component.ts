import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CardComponent } from 'src/app/shared/components/ui/card/card.component';
import { FormComponent } from 'src/app/shared/components/ui/form/form.component';
import { LinkButtonComponent } from 'src/app/shared/components/ui/link-button/link-button.component';
const STUDENT_FORM={
  first_name:{label:'First Name',type:'text',value:'',required:true},
  last_name:{label:'Last Name',type:'text',value:'',required:false},
  email:{label:'Email',type:'text',value:'',email:true,required:true},
  phone_number:{label:'Phone Number',type:'text',value:'',required:false},
  // password
  
}

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormComponent,CardComponent],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.scss'
})
export class AddStudentComponent {
  studentForm=STUDENT_FORM;
  constructor(){}

  createStudent(formData: any) {
    console.log('Form Submitted:', formData);
  }
}
