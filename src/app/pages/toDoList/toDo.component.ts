import { Component, input, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { todoItem } from '../../app.model';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
    selector: 'selector-name',
    templateUrl: 'toDo.component.html',
    imports:[InputTextModule,ButtonModule,FormsModule,DividerModule,CheckboxModule]
})

export class todoComponent {
    todoList:todoItem[]=[]
    newTask:string=''
    checked !:boolean 
    addTask():void{
        if(this.newTask.trim() !== ''){
         const nowTodoItem :todoItem = {
               id: Date.now(),
               task:this.newTask,
               completed:false
            }

            this.todoList.push(nowTodoItem)
            this.newTask=''
            
    }
    
    }
    isComplitedin(index:number):void{
        this.todoList[index].completed = !this.todoList[index].completed
        console.log(this.todoList)

    }
    deleteTask(id:number):void{
        this.todoList=this.todoList.filter(item => item.id !== id)
        console.log(this.todoList)
        
    }

}
