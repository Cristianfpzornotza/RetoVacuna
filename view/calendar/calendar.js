(function(){
    var single;
    var element;

    function closeHandler( e ) {
        e = e || window.event;
        var t = e.target || e.srcElement;
        if( single.contains( t ) ) {
            return;
        }
        if( t == element ) {
            return;
        }
        single.hide();
    }
    

    function checkElementValue() {
        if( !element.checkDateAction ) {
            addEventHandler( element, 'blur', function() {
                if( this.value != '' && this.value != undefined && !checkDate( this.value ) ) {
                    alert( '日期格式不正确' );
                    this.value = '';
                }
            } );
            element.checkDateAction = true;
        }
    }

    function renderCalendar() {
        if( !single ) {
            single = new Calender();
            single.onSelected = function( y, m, d ) {
                var datestr = y + '-' + ( m + 1 )  + '-' + d;
                element.value = datestr;
                this.hide();
            }
            single.onSetToday = function() {
                var now = new Date();
                element.value = now.getFullYear() + '-' + ( now.getMonth() + 1 ) + '-' + now.getDate();
                this.hide();
            }
            single.onClear = function() {
                element.value = '';
                this.hide();
            }
            single.render();
        }
        var offset = getOffset( element );
        single.position( offset.left, offset.top + element.offsetHeight );
    }

    function initCalendarSelectedValue() {
        var date = element.value;
        if( checkDate( date ) ) {
            var date    = date.replace(/\-|\/|\./g,"/");
            var ymd    = date.split("/");
            var y    = parseInt(ymd[0]);
            var m    = parseInt(ymd[1]) - 1;
            var d    = parseInt(ymd[2]);
            single.setDate( y, m, d );
        }
    }

    function calendar() {
        var e = calendar.caller.arguments[0] || window.event;
        element = e.target || e.srcElement; 
       
        removeEventHandler( document.documentElement, 'click', closeHandler );
        checkElementValue();
        renderCalendar();
        initCalendarSelectedValue();
        addEventHandler( document.documentElement, 'click', closeHandler );
    }

    window.calendar = calendar;
})();