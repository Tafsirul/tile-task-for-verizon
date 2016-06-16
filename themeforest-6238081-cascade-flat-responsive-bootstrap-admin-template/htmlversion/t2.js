

var chart = c3.generate({
    bindto: '#bar',
    data: {
        
        columns: [
            ['January', 30],
            ['Ferruary', 40],
            ['March', 5],
            ['April', 10],
            ['May', 20],
            ['June', 20],
            ['July', 60],
            ['August', 70],
            ['September', 60],
            ['October', 30],
            ['November', 55],
            ['December', 75]
        ],
        type : 'bar',
      },
    bar: {
        //width: {
          //  ratio: 0.5 // this makes bar width 50% of length between ticks
        //}
        // or
        width: 40 // this makes bar width 100px
    }
});