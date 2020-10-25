var app = new Vue({
el: '#app',
data: {
    message: 'Hello Vue!'
}
})

var app4 = new Vue({
el: '#app-4',
data: {
    todos: [
    { text: 'Learn JavaScript' },
    { text: 'Learn Vue' },
    { text: 'Build something awesome' }
    ]
}
})

Vue.component('todo-item', {
// The todo-item component now accepts a
// "prop", which is like a custom attribute.
// This prop is called todo.
props: ['todo'],
template: '<li>{{ todo.text }}</li>'
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  })