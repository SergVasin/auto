 $( function() {
  var handle = $( "#custom-handle" );
  $( "#slider" ).slider({
    value: 220000,
    range: "min",
    min: 0,
    max: 3000000,
    step: 10000,
    create: function() {
      handle.text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
      handle.text( ui.value );
      $( "#custom-handle" ).val( ui.value );
      var calcDay = Number($('#custom-handle').val()) * Number($('#custom-handle1').val()) / 22;
      $( "#custom-handle3" ).val((calcDay.toFixed(0)) + " рублей");
    }
  });
  var handle1 = $( "#custom-handle1" );
  $( "#slider1" ).slider({
    value: 1,
    range: "min",
    min: 0,
    max: 36,
    step: 1,
    create: function() {
      handle1.text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
      handle1.text( ui.value );
      $( "#custom-handle1" ).val( ui.value );
      var calcMon = Number($('#custom-handle').val()) * Number($('#custom-handle1').val()) / 440;
      $( "#custom-handle2" ).val((calcMon.toFixed(0)) + " рублей");
    }
  });
} );

  $( function() {
  var handle = $( "#custom-handle" );
  $( "#slider" ).slider({
    value: 220000,
    range: "min",
    min: 0,
    max: 3000000,
    step: 10000,
    create: function() {
      handle.text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
      handle.text( ui.value );
      $( "#custom-handle" ).val( ui.value );
      var calcDay = Number($('#custom-handle').val()) * Number($('#custom-handle1').val()) / 22;
      $( "#custom-handle5" ).val((calcDay.toFixed(0)) + " рублей");
    }
  });
  var handle1 = $( "#custom-handle1" );
  $( "#slider1" ).slider({
    value: 1,
    range: "min",
    min: 0,
    max: 36,
    step: 1,
    create: function() {
      handle1.text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
      handle1.text( ui.value );
      $( "#custom-handle1" ).val( ui.value );
      var calcMon = Number($('#custom-handle').val()) * Number($('#custom-handle1').val()) / 440;
      $( "#custom-handle4" ).val((calcMon.toFixed(0)) + " рублей");
    }
  });
} );