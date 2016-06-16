

var chart = c3.generate({
    bindto: '#bar',
    data: {
        
        columns: [
            ['user1', 10],
            ['user2', 10],
            ['user3', 10],
            ['user4', 10],
            ['user5', 10],
            ['user6', 10],
            ['user7', 10],
            ['user8', 10],
            ['user9', 10],
            ['user10', 10],
            ['user11', 10],
            ['user12', 10],
            ['user13', 10],
            ['user14', 10],
            ['user15', 10],
            ['user16', 10],
            ['user17', 10],
            ['user18', 10],
            ['user19', 10],
            ['user20', 10],
            ['user21', 10],
            ['user22', 10],
            ['user23', 10],
            ['user24', 10],
            ['user25', 10],
            ['user26', 10],
            ['user27', 10],
            ['user28', 10],
            ['user29', 10],
            ['user30', 10],
            ['user31', 10],
            ['user32', 10],
            ['user33', 10]
        ],
        type : 'bar',
      },
    bar: {
        //width: {
          //  ratio: 0.5 // this makes bar width 50% of length between ticks
        //}
        // or
        width: 12 // this makes bar width 100px
    }
});