import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-modal',
  template: `
    <div *ngIf="visible" class="overlay">
      <div class="modal">
        <h3>{{ title }}</h3>
        <ng-content></ng-content>
        <button (click)="close()">Close</button>
      </div>
    </div>
  `,
  styles: [`
    .overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); display: flex; align-items: center; justify-content: center; }
    .modal { background: white; padding: 20px; border-radius: 10px; }
  `],
  imports: [CommonModule],
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() visible: boolean = false;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.closeModal.emit();
  }
}
