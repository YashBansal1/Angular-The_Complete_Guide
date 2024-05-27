import { Component, EventEmitter, Input, Output, inject } from '@angular/core';

import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  // @Output() cancel = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewTaskData>();

  @Input({ required: true }) userId!: string;
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private taskService = inject(TaskService);

  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDueDate = signal('');

  onCancel() {
    // this.cancel.emit();
    this.close.emit();
  }

  onSubmit() {
    this.taskService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDueDate,
      },
      this.userId
    );
    this.close.emit();
    // this.add.emit(
    //     {
    //     title: this.enteredTitle,
    //     summary: this.enteredSummary,
    //     date: this.enteredDueDate,
    //   }

    // );
  }
}
