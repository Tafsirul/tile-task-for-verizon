var chart = c3.generate({
    bindto: '#chart',
    data: {
        
        columns: [
            ['Foo', 70],
            ['Foo', 30]
            
        ],
        type : 'pie',
        
    }
});

var chart1 = c3.generate({
    bindto: '#chart1',
    data: {
        
         columns: [
            ['January', 5],
            ['Ferruary', 9],
            ['March', 12],
            ['April', 4],
            ['May', 7],
            ['June', 13],
            ['July', 5],
            ['August', 9],
            ['September', 20],
            ['October', 10],
            ['November', 5],
            ['December', 3]
        ],
        type : 'pie',
        
    }
});