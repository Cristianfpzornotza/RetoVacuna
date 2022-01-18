( function() {
    var instanceCount = 0;
    
    function newCalendarID(){
        return 'calender_' + ( ++instanceCount );
    }

	function Calender() {
		var calendarID = newCalendarID();
        var self = this;
        var calendarEl;
        var selectedYear;
        var selectedMonth;
        var selectedDate;
        console.log(calendarID);
        console.log(self);
        console.log(calendarEl);
        console.log(selectedYear);
        console.log(selectedMonth);
        console.log(selectedDate);


        var getStartDate = function( y, m ) {
            var dt = new Date( y, m, 1 );
            var week = dt.getDay();
            dt.setDate( dt.getDate() - week );
            return dt;
        }
        
        var getEndDate = function( y, m ) {
            var dt = new Date( y, m ,1 );
            dt.setMonth( dt.getMonth() + 1 );
            dt.setDate( 0 );
            return dt;
        }
        var j=1;
        var getContentItemHtml = function( date, currMonth,id ) {
            var content = '';
            if( date.getDate() == selectedDate && date.getMonth() == selectedMonth && date.getFullYear() == selectedYear ) {
                content += '<li class="selected">';
            } else if( currMonth == date.getMonth() ) {
                content += '<li id="'+j+'" class="c btncalendario" ng-click="Horas()">'
            } else {
                content += '<li id="'+j+'" class="btncalendario" ng-click="Horas()">';
            }
            content += '<a id="'+j+'" href="javascript:;">' + date.getDate() +'</a>';
            content += '</li>';
            return content;
        }
        
		var getContentHtml = function( y, m ) {
            var startDate = getStartDate( y, m );
            var endDate = getEndDate( y, m );
            var title = '<dl class="calendar_title"><dd>Lunes</dd><dd>Martes</dd><dd>Miercoles</dd><dd>Jueves</dd><dd>Viernes</dd><dd>Sabado</dd><dd>Domingo</dd></dl>';
            
            var content = '<div class="weeks"><ul>';
			for( var i = 0; i < 42; i++ ) {
                content += getContentItemHtml(startDate, m, j);
                j=j+1;
                if( ( i + 1 ) % 7 == 0 ) {
                    j=1;
                    content += '</ul><ul>';
                }
                startDate.setDate( startDate.getDate() + 1 );
            }
            content += '</ul></div>';
            return title + content;
		}

        var genCalanderElementID = function( id ) {
            return calendarID + "_" + id;
        }
        
        // document.getElementsByClassName("current-date").innerHTML=html;
        
        var getCalendarHtml = function() {
            var html =  '    <div class="calendar_tool" id="'+ genCalanderElementID("tool") +'">'+
                        '        <div class="calendar_month">'+
                        '            <select class="btncambiar" id="'+ genCalanderElementID("month_select") +'"><option value="0">Enero</option>'+
                        '                <option value="1">Febrero</option>'+
                        '                <option value="2">Marzo</option>'+
                        '                <option value="3">Abril</option>'+
                        '                <option value="4">Mayo</option>'+
                        '                <option value="5">Junio</option>'+
                        '                <option value="6">Julio</option>'+
                        '                <option value="7">Agosto</option>'+
                        '                <option value="8">Septiembre</option>'+
                        '                <option value="9">Octubre</option>'+
                        '                <option value="10">Noviembre</option>'+
                        '                <option value="11">Diciembre</option></select>'+
                        '        </div>'+
                        '        <div class="calendar_year btncambiar" id="btncambiarm">'+
                        '            <input type="button" value="&lt;" class="calendar_year_left" id="'+ genCalanderElementID("year_prev") +'"><input'+
                        '                type="text" class="calendar_year_input" id="'+ genCalanderElementID("year_input") +'"><input type="button"'+
                        '                value="&gt;" class="calendar_year_right" id="'+ genCalanderElementID("year_next") +'">'+
                        '        </div>'+
                        '    </div>'; 

            html += '<div class="calendar_content" id="'+ genCalanderElementID("date_list") +'"></div>';

            html += '<div class="calendar_action">' +
                        // '<input type="button" value="清空" id="'+ genCalanderElementID("clear") +'">' +
                        // '<input type="button" value="今天" id="'+ genCalanderElementID("today") +'">'+
                    '</div>';
                    
            return '<div class="calendar_body">' +  html + '</div>';
            //return '<div class="calendar_body">' +  html + '</div><div class="back"><input placeholder="Whats the event?"><div class="info"><div class="date"><p class="info-date">Date: <span>Jan 15th, 2016</span></p><p class="info-time">Time: <span>6:35 PM</span></p></div><div class="address"><p>Address: <span>129 W 81st St, New York, NY</span></p></div><div class="observations"><p>Observations: <span>Be there 15 minutes earlier</span></p></div></div><div class="actions"><button class="save">Save <i class="ion-checkmark"></i></button><button class="dismiss">Dismiss <i class="ion-android-close"></i></button></div></div>';

            
        }
        
        var getElement = function( id ) {
            return document.getElementById( calendarID + '_' + id );
        }

        var monthChangeAction = function() {
            
            var monthSelect = getElement( 'month_select' );
            var yearInput = getElement( 'year_input' );
            console.log(document.getElementById("calender_1_month_select"));
            console.log(document.getElementById("calender_1_year_input"));

            addEventHandler( monthSelect, 'change', function() {
                alert("month");
                var month = this.value;
                var year = yearInput.value;
                getElement( 'date_list' ).innerHTML = getContentHtml( year, month );
            } );
        }

        var yearChangeAction = function() {
            
            var monthSelect = getElement( 'month_select' );
            var yearInput = getElement( 'year_input' );
            var yearPrev = getElement( 'year_prev' );
            var yearNext = getElement( 'year_next' );

            addEventHandler( yearInput, 'blur', function() {
                alert("year");
                if( /[^\d]+/.test( this.value ) ) {
                    this.value = this.value.replace( /[^\d]+/g, '' );
                } 
                getElement( 'date_list' ).innerHTML = getContentHtml( yearInput.value, monthSelect.value ); 
            } );

            addEventHandler( yearPrev, 'click', function() {
                var year = yearInput.value;
                var month = monthSelect.value;
                getElement( 'date_list' ).innerHTML = getContentHtml( --year, month ); 
                yearInput.value = year;
            } );

            addEventHandler( yearNext, 'click', function() {
                var year = yearInput.value;
                var month = monthSelect.value;
                getElement( 'date_list' ).innerHTML = getContentHtml( ++year, month ); 
                yearInput.value = year;
            } );           
        }

        var dateSelectedChangeAction = function() {
            addEventHandler( getElement( 'date_list' ), 'click', function( e ) {
                alert("hola");
                e = e || window.event;
                var t = e.target || e.srcElement;
                if( t.tagName != 'A' ) {
                    return;
                }

                var year = getElement( 'year_input' ).value;
                var month = parseInt(getElement( 'month_select' ).value)+1;
                var date = t.innerHTML;

                

                if( typeof( self.onSelected ) == 'function' ) {
                    self.onSelected( parseInt( year ), parseInt( month ), parseInt( date ) );
                }
            } );

            addEventHandler( getElement( 'clear' ), 'click', function() {
                if( typeof( self.onClear ) == 'function' ) {
                    self.onClear();
                }
            } );

            addEventHandler( getElement( 'today' ), 'click', function() {
                if( typeof( self.onSetToday ) == 'function' ) {
                    self.onSetToday();
                }
            } ); 
        }

        var initCalendar = function( placeholder ) {
            calendarEl = document.createElement( 'div' );
            calendarEl.id = calendarID;
            calendarEl.className = 'aspwebchh';
            calendarEl.innerHTML = getCalendarHtml();
            document.getElementsByClassName("current-date").innerHTML=getCalendarHtml();
            console.log( document.getElementsByClassName("current-date"))
            
            placeholder = placeholder ? document.getElementById( placeholder ) : document.body;
            placeholder.appendChild( calendarEl );

            refreshCalender(selectedYear, selectedMonth, selectedDate);

            monthChangeAction();
            yearChangeAction();
            dateSelectedChangeAction();
        }

        var refreshCalender = function( y, m, d ) {
            getElement( 'month_select' ).value = m;
            getElement( 'year_input' ).value = y;            
            getElement( 'date_list' ).innerHTML = getContentHtml( y, m );
        }

        this.onClear = function() {};
        this.onSetToday = function() {};
        this.onSelected = function( y, m, d ) {};

        this.setDate = function( y, m, d ) {
            selectedYear = y;
            selectedMonth = m;
            selectedDate = d;
            refreshCalender( y, m, d );
        }

        this.position = function( left, top ) {
             calendarEl.style.display = 'block';
             calendarEl.style.position = 'absolute';
             calendarEl.style.left = left + 'px';
             calendarEl.style.top = top + 'px';
        }

        this.render = function( placeholder ) {
            var now = new Date();
            selectedYear = now.getFullYear();
            selectedMonth = now.getMonth();
            selectedDate = now.getDate();
            initCalendar( placeholder );
        }

        this.hide = function() {
            calendarEl.style.display = 'none';
        }

        this.contains = function( target ) {
            return calendarEl.contains( target );
        }
	}

    window.Calender = Calender;
} )();

