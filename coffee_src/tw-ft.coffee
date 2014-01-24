table = null

$(->
  $("#print_transit_window").click(->
    window.print()
  )

  $('#period').change(->
    period = switch $('#period').val()
      when '0' then 'd'
      when '1' then 'w'
      when '2' then 'M'

    $('#static-date-from').text(moment($('#date').val()).format("MMMM DD, YYYY"))
    $('#static-date-to').text(moment($('#date').val()).add(period, 1).format("MMMM DD, YYYY"))
  )

  $(document).ajaxStart(->
   $('#ajax_message').html('Please wait while we fetch your results')
   $('#ajax_message').show()
   $('#report_body').hide()
  )

  $(document).ajaxSuccess(->
   $('#ajax_message').hide()
   $('#report_body').show()
  )

  $(document).ajaxError(->
   $('#ajax_message').html('An error occured while retrieving your results')
   $('#ajax_message').show()
   $('#report_body').hide()
  )

  $('#date').change(->
    $.getJSON("/api/depths?date=#{$('#date').val()}", (data) ->
      $('#selected_discharge').empty()
      $.each(data.Flowrates, ->
        $('#selected_discharge').append("<option value='#{this}'>#{this}</option>")
      )
      $('#predicted_discharge').text(data.Predicted)
      $('#actual_discharge').text(data.Actual)

      if (data.Actual)
        $("#actual_radio").attr('disabled', false)
        $("#predicted_radio").attr('disabled', true)
        $('#actual_radio').prop('checked', true)
      else
        $("#actual_radio").attr('disabled', true)
        $("#predicted_radio").attr('disabled', false)
        $("#predicted_radio").prop('checked', true)

      $('input[name=discharge]:checked').change()
    )

    $('#period').change()
  ).change()

  $('#selected_discharge').change(->
    $('#discharge_radio').prop('checked', true).change()
  )

  $('input[name=discharge]').change(->
    flowrate = switch $(this).val()
      when 'Actual' then $('#actual_discharge').text()
      when 'Predicted' then $('#predicted_discharge').text()
      when 'Defined' then $('#defined_discharge').val()
      when 'Selected' then $('#selected_discharge').val()
    $('#flowRate').val(flowrate)
    $('#static-discharge').text(flowrate)
    $('#static-discharge-eval').text($(this).val())

    flowtype = switch $(this).val()
      when 'Actual' then 0
      when 'Predicted' then 1
      when 'Defined' then 2
      when 'Selected' then 3
    $('#flowType').val(flowtype)
  )

  $('#compliance').change(->
    $('#cmp_box').val(0)
    if ($('#compliance').is(':checked'))
      $('input[name="cmp_box"]').attr('disabled', false)
    else
      $('input[name="cmp_box"]').attr('disabled', true)
      $('input[name=cmp_box]').change(->
        $('#cmp_box').val()
      )
  )
  
  $('#defined_discharge').change(->
    if ($('input[name="discharge"].checked').val() == "Defined")
      $('#static-discharge').text($('#defined_discharge').val())
  )
  
  $('#selected_discharge').change(->
    if ($('input[name="discharge"].checked').val() == "Selected")
      $('#static-discharge').text($('#selected_discharge').val())
  )
  
  $('input[name="channel"]').change(->
    $('#static-channel').text($(this).next().text())
  )

  $('input[name="sounding"]').change(->
    $('#static-sounding').text($(this).next().text())
  )
  
  $('select#width').change(->
    $('#static-width').text($(this).val())
  )
  
  $('select#chainage').change(->
    $('#static-chainage').text($(this).val())
  )

  $('#window').change(->
    $('#static-window').text("Transit Window: #{$(this).val()} hrs")
  )
  
  $('#minimum_window').change(->
    $('#max_depth_radio').prop('checked','checked')
    $('#window').val($(this).val())
    $('#cmp').val(0)
    $('#static-window').text("Transit Window: #{$('#window').val()} hrs")
  )

  $('#depth').change(->
    $('#min_win_radio').prop('checked','checked')
    $('#cmp').val($(this).val())
    $('input[name="window_radio"]').change()
  )

  $('input[name="window_radio"]').change(->
    if $(this).val() == 'Maximum Depth'
      #$('#window').val($('#maximum_depth').val())
      $('#cmp').val(0)
      $('#static-window').text("Transit Window: #{$('#window').val()} hrs")
    else
      #$('#window').val($('#minimum_window').val())
      $('#cmp').val($('#depth').val())
      $('#static-window').text("Available Transit Window for #{$('#cmp').val()}m depth & Minimum #{$('#minimum_window').val()} hr window")
    #$('#window').change()
  )

  ###
  $('#date, ' +
      'input[name=discharge], ' +
      '#defined_discharge,'  +
      '#selected_discharge,' +
      '#chainage,' +
      'input[name="sounding"],' +
      'input[name="channel"], ' +
      '#width,'  +
      '#period,' +
      '#window,' +
      '#compliance,'+
      '#cmp_box').change(update)
  ###
  $("#submit").click(update)
)

update = (data) ->
  $.getJSON("api/transit?date=#{$('#date').val()}&" +
      "lane=#{$('input[name=channel]:checked').val()}&" +
      "window=#{$('#window').val()}&" +
      "cmp=#{$('#cmp').val()}&" +
      "flowType=#{$('#flowType').val()}&" +
      "periodType=#{$('#period').val()}&" +
      "chainage=#{$('#chainage').val()}&" +
      "flowRate=#{$('#flowRate').val()}&" +
      "width=#{$('#width').val()}&" +
      "sounding=#{$('input[name=sounding]:checked').val()}", (data2) ->
    $('#num_days').text(data2.statistics.numberOfDays)
    $('#min_depth').text(data2.statistics.minimumDepth.toFixed(2))
    $('#max_depth').text(data2.statistics.maximumDepth.toFixed(2))
    $('#avg_depth').text(data2.statistics.totalWindow.toFixed(2))

    table ||= $('#transit-window').dataTable(
        bPaginate: false
        bInfo: false
        bFilter: false
        aaSorting: [])
    table.fnClearTable()

    for item in data2.items
      table.fnAddData([item.startTime, item.windowStart, item.endTime, item.windowEnd, item.depth])
      table.fnAdjustColumnSizing()
      $('#transit-window tbody td').css('text-align', 'center')
  )

