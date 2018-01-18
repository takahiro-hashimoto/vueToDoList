import todoInputView from './../view/todoInputView.vue';
import doneListView from './../view/doneListView.vue';

export default [
  { path: '/', component: todoInputView },
  { path: '/doneList', component: doneListView },
];
