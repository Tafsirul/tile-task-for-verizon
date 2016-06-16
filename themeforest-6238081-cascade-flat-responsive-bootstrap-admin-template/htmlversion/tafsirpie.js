var chart = c3.generate({
    bindto: '#chart',
    data: {
        
        columns: [
            ['Foo', 70],
            
        ],
        type : 'pie',
        
    }
});

var chart1 = c3.generate({
    bindto: '#chart1',
    data: {
        
        columns: [
            ['data1', 30],
            ['data2', 50],
            ['data3', 20]
        ],
        type : 'pie',
        
    }
});