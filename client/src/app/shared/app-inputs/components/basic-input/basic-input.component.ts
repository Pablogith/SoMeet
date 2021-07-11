import { Component, Input } from '@angular/core';

interface IBasicInput {
  title: string;
  name: string;
  type: string;
  placeholder?: string;
}

@Component({
  selector: 'app-basic-input',
  templateUrl: './basic-input.component.html',
  styleUrls: ['./basic-input.component.scss']
})
export class BasicInputComponent {

  @Input() inputData!: IBasicInput;

}
