export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          labels: ['#7159c1'],
          user: 'https://avatars2.githubusercontent.com/u/37991230?s=460&u=93bdd1c3673cc0a4685c138dbf74e0c6ec8a50e0&v=4'
        },
        {
          id: 2,
          content: 'Estudar módulo 05 de C#',
          labels: ['#7159c1'],
          user: 'https://avatars2.githubusercontent.com/u/37991230?s=460&u=93bdd1c3673cc0a4685c138dbf74e0c6ec8a50e0&v=4'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          labels: ['#7159c1'],
          user: 'https://avatars2.githubusercontent.com/u/37991230?s=460&u=93bdd1c3673cc0a4685c138dbf74e0c6ec8a50e0&v=4'
        },
        {
          id: 4,
          content: 'Estudar módulo 15 de ReactJS',
          labels: ['#54e1f7'],
          user: 'https://avatars2.githubusercontent.com/u/37991230?s=460&u=93bdd1c3673cc0a4685c138dbf74e0c6ec8a50e0&v=4'
        },
        {
          id: 5,
          content: 'Debugar App',
          labels: ['#54e1f7'],
          user: 'https://avatars2.githubusercontent.com/u/37991230?s=460&u=93bdd1c3673cc0a4685c138dbf74e0c6ec8a50e0&v=4'
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          labels: [],
          user: 'https://avatars2.githubusercontent.com/u/37991230?s=460&u=93bdd1c3673cc0a4685c138dbf74e0c6ec8a50e0&v=4'
        }
      ]
    },
    { 
      title: 'Pausado', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Estudo de GraphQL',
          labels: ['#7159c1'],
          user: 'https://avatars2.githubusercontent.com/u/37991230?s=460&u=93bdd1c3673cc0a4685c138dbf74e0c6ec8a50e0&v=4'
        },
        {
          id: 8,
          content: 'Microserviços',
          labels: ['#54e1f7'],
          user: 'https://avatars2.githubusercontent.com/u/37991230?s=460&u=93bdd1c3673cc0a4685c138dbf74e0c6ec8a50e0&v=4'
        },
        {
          id: 9,
          content: 'Aparencia do repo no github',
          labels: [],
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: 'Avançado de HTML5, CSS3 e JS',
          labels: [],
        },
        {
          id: 12,
          content: 'Build NodeJS',
          labels: ['#54e1f7'],
        },
        {
          id: 13,
          content: 'Google Cloud Services',
          labels: ['#7159c1'],
        }
      ]
    },
  ];
}