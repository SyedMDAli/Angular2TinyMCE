import { Component, OnDestroy, AfterViewInit,  EventEmitter, Input,  Output } from '@angular/core';
declare var tinymce: any; 

@Component({
  selector: 'simple-tiny',
  template: `<textarea [(ngModel)]="doc" ></textarea>

  <button id="{{elementId}}"(click)="updateDoc()">Update Doc</button>`
})
export class SimpleTinyComponent implements AfterViewInit, OnDestroy {

  // @Input() elementId: String;
  // @Output() onEditorKeyup = new EventEmitter<any>();
  elementId = 'my-editor-id';
  editor;
  doc = `<p>CERTIFIED TRUE COPY OF THE RESOLUTION PASSED AT THE MEETING OF THE BOARD OF DIRECTORS OF  ("COMPANY") HELD ON </p>`
  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'table'],
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          // this.onEditorKeyup.emit(content);
        });
      },
    });
    this.doc = `<p>CERTIFIED TRUE COPY OF THE RESOLUTION PASSED AT THE MEETING OF THE BOARD OF DIRECTORS OF  ("COMPANY") HELD ON </p>`
  }

  updateDoc(){
    this.editor.setContent('<p>This is updated component</p>')
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}