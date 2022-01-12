export default {
  'GET /api/menu':(req,res)=>{
    res.status(200).json(
      [
        {name:'item1',key:'sub1',icon:''},
        { name: 'item2', key: 'sub2', icon: '',
          children:[
            {name:'child1',key:1,icon:''},
            {name:'child2',key:2,icon:''},
            {name:'child4',key:3,icon:''},
          ]
        },
        { name: 'item3', key:'sub3',icon:'',
          children: [
            { name: 'child_3-1', key: 3-1, icon: '' ,
              children: [
                { name: 'child_3-1-1', key: 3-1-1, icon: '' },
                { name: 'child_3-1-2', key: 3-1-2, icon: '' },
                { name: 'child_3-1-4', key: 3-1-3, icon: '' },
              ]
          },
            { name: 'child_3-2', key: 3-2, icon: '' },
            { name: 'child_3-3', key: 3-3, icon: '' },
          ]},
        { name: 'item4', key:'sub4',icon:''},
        { name: 'item3', key:'sub3',icon:''},
      ])
  }
}