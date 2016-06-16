

var chart = c3.generate({
    bindto: '#bar',
    data: {
        
        columns: [
            ['data1', 30],
            ['data2', 50],
            ['data3', 20]
        ],
        type : 'bar',
      },
    bar: {
        //width: {
          //  ratio: 0.5 // this makes bar width 50% of length between ticks
        //}
        // or
        width: 100 // this makes bar width 100px
    }
});