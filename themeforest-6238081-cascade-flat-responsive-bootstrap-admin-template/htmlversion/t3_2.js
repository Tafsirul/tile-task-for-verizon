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
            ['Jan-Mar', 10],
            ['Apr-Jun', 50],
            ['Jul-Sep', 15],
            ['Oct-Dec', 5],
        ],
        type : 'pie',
        
    }
});