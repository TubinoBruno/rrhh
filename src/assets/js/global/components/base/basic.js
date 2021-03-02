var KTHeatCalendarBasic = function() {
    function randomInt(min,max)
    {
      return Math.floor(Math.random()*(max-min+1)+min);
    };

    function getRandomTimeStamps( min, max, fromDate ){
      var return_list = [];
      
      var entries =  randomInt( min, max );
      for ( var i =0; i < entries; i++ ){
        var day = fromDate ? new Date(fromDate.getTime()):  new Date();
        
        //Genrate random
        var previous_date = randomInt(0,365);
        if (!fromDate){
          previous_date = - previous_date;
        }
        day.setDate( day.getDate() + previous_date );
        
        return_list.push( day.getTime() );
      }

      return return_list;

    };
    var subRemoteHeatCalendar = function() {
        var start_from_2021 = new Date(2021,00,00,0,0,0);
        $('#heat-calendar').github_graph( {
            //Generate random entries from 50-> 200 entries
            start_date: start_from_2021,
            data: getRandomTimeStamps(50,120, start_from_2021) ,
            texts: ['Vacación','Vacaciones'],
            month_names: ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'],
            h_days:['Lun','Mie','Vie'],
        });
    };

    return {
        // public functions
        init: function() {
            subRemoteHeatCalendar();
        }
    };
}();



jQuery(document).ready(function() {
    KTHeatCalendarBasic.init();
});