import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Post('create')
  createTasks(@Body() newTask: CreateTaskDto) {
    return this.taskService.createTasks(newTask.title, newTask.description);
  }

  @Delete(':id')
  deleteTasks(@Param('id') id: string) {
    this.taskService.deleteTasks(id);
  }
}
