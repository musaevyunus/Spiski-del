const todoList = {
    items: [
      {
        text: 'Завершить текущий челлендж',
        completed: false,
      },
      {
        text: 'Отдохнуть во время перерыва',
        completed: false,
      },
      {
        text: 'Помочь напарнику понять код',
        completed: false,
      },
      {
        text: 'Выиграть в мафию',
        completed: true,
      },
    ],
  
    printAll: function() {
        for (let i = 0; i < items.length; i++) {
            return this.items.text
              
        }
    },
  
    add: function(text) {
        let start = {
            text: "Перейти к следующему релизу",
            completed: false
          };
            this.items.unshift(start);

    },
  
    remove: function(index) {
        this.items.splice(index, 1)
    },
  
    print: function(index) {},
  
    complete: function(index) {},
  };