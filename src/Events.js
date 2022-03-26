/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
import { doc } from 'prettier';

export function createButton() {
    const btn = document.createElement('button');
    btn.textContent = 'Удали меня';
    btn.onclick = () => btn.remove();
    document.body.prepend(btn);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const list = document.createElement('ul');
    arr.forEach((str) => {
        const line = document.createElement('li');
        line.textContent = str;
        line.onmouseover = () => line.setAttribute('title', str);
        list.append(line);
    });
    document.body.append(list);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const link = document.createElement('a');
    link.textContent = 'tensor';
    link.href = 'https://tensor.ru/';
    link.onclick = () => {
        link.textContent = `${link.text} ${link.getAttribute('href')}`;
        link.onclick = undefined;
    };
    document.body.append(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    function createItem(text) {
        const item = document.createElement('li');
        item.textContent = text;
        item.onclick = () => (item.textContent = `${text}!`);
        return item;
    }
    const list = document.createElement('ul');
    list.append(createItem('Пункт'));
    const addBtn = document.createElement('button');
    addBtn.textContent = 'Добавить пункт';
    addBtn.onclick = () => list.append(createItem('Пункт'));
    document.body.append(list);
    document.body.append(addBtn);
}
