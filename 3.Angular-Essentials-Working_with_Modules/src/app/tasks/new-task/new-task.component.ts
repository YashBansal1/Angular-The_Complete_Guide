import {
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
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
