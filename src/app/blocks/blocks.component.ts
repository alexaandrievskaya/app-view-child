import {Component, OnInit, ViewChild} from '@angular/core';
import {BlockItemComponent} from '../block-item/block-item.component';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  /* Декоратор необходим для получения доступа к дочернему компоненту
  Получаем доступ только к первому найденому в шаблоне элементу, с указанным класссом */
  @ViewChild(BlockItemComponent)
  private block: BlockItemComponent;
  /* Создаем свойство block типа BlocksComponent (тип дочернего компонента)
  Для того чтобы свойство инициализировалось, мы должныприменить декоратор ViewChild
  и указать тип того компонента, который находится в разметке родительского (этого) компонента */

  constructor() { }

  ngOnInit(): void {
  }

  showBlock(): void {
    this.block.show();
  }

}
