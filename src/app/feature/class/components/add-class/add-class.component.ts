import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CardComponent } from 'src/app/shared/components/ui/card/card.component';
import { FormComponent } from 'src/app/shared/components/ui/form/form.component';
import { LinkButtonComponent } from 'src/app/shared/components/ui/link-button/link-button.component';

const CLASS_FORM={
  name:{label:'Name',type:'text',value:'',required:true},
  grade:{label:'Grade',type:'number',value:'',required:true,min:1,max:12},
  section:{label:'Section',type:'text',value:''},
  fee:{label:'Fees',type:'number',value:'',required:true,min:0},
  // teacher_id:{value:''}
}

@Component({
  selector: 'app-add-class',
  standalone: true,
  imports: [FormComponent,CardComponent],
  templateUrl: './add-class.component.html',
  styleUrl: './add-class.component.scss'
})
export class AddClassComponent {
  classForm=CLASS_FORM;
  constructor(){}

  createClass(formData: any) {
    console.log('Form Submitted:', formData);
  }
}
