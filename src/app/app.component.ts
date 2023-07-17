import { Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder} from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {
editing:boolean=true;


  navbar=[
    {
      name:'City Council Meetings',
      reference:'',
    },
    {
      name:'News & Media',
      reference:'',
    },
    {
      name:'Ask Stockton',
      reference:'',
    },
    {
      name:'Podcast',
      reference:'',
    },
    {
      name:'Events',
      reference:'',
    },
    {
      name:'Contact Us',
      reference:'',
    },
  ]

   // TEXT EDITOR
   toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  html = '';
  form: FormGroup;
  editor!: Editor;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      editorContent: ['']
    });
  }

  ngOnInit(): void {
    this.editor = new Editor();
    this.loadContent();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
    this.saveContent();
  }

  saveContent(): void {
    setTimeout(()=>{

      localStorage.setItem('editorContent', this.form.controls['editorContent'].value);
      console.log('saved!!');
    }, 10)
  }

  loadContent(): void {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
      this.form.controls['editorContent'].setValue(savedContent);
      console.log('loaded!');
    }
  }


}
