const list = [

{lista: 'Laura', id: 5
},
{lista: 'Joao', id: 2
},

{lista: 'Maria', id: 3
},

{lista: 'Junior', id: 6
},


]



const result = list.filter(item => item.id > 4).reduce((acc, {lista}) => acc + `${lista}\n`, 'Listas:\n' )


console.log(result)