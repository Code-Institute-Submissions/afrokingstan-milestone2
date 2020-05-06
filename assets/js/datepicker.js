//this datepicker javasript collects and prompts user selection
$(document).ready(function() {
    var nowTemp = new Date();
    var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);

    //variable to collect user outbound date selection
    var outDate = $('#dp1').datepicker({

        beforeShowDay: function(date) {
            return date.valueOf() >= now.valueOf();
        },
        autoclose: true

    }).on('changeDate', function(ev) {
        if (ev.date.valueOf() > inDate.datepicker("getDate").valueOf() || !inDate.datepicker("getDate").valueOf()) {

            var newDate = new Date(ev.date);
            newDate.setDate(newDate.getDate() + 1);
            inDate.datepicker("update", newDate);

        }
        $('#dp2')[0].focus();
    });

    //variable to collect user inbound date selection
    var inDate = $('#dp2').datepicker({
        beforeShowDay: function(date) {
            if (!outDate.datepicker("getDate").valueOf()) {
                return date.valueOf() >= new Date().valueOf();
            } else {
                return date.valueOf() > outDate.datepicker("getDate").valueOf();
            }
        },
        autoclose: true

    }).on('changeDate', function(ev) {});

});