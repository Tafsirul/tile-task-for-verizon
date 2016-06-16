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
            ['this weeks sale', 22],
            ['last weeks sale', 78]
        ],
        type : 'pie',
        
    }
});