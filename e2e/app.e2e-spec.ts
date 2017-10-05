import { NgTodoListPage } from './app.po';

describe('ng-todo-list App', () => {
  let page: NgTodoListPage;

  beforeEach(() => {
    page = new NgTodoListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
