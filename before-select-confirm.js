<script>

// this method is beforeSelect using select2 library
// for example you want to show a confirmation before the user makes changes to the dropdown select2
// reference: https://select2.org/programmatic-control/events

$('#select2form').on('select2:selecting', function(e){
  if(confirm('Are you sure you choose this?)){
    alert('successfully selected!')
  }else{ 
    alert('deselect!')
    return false; 
  }
});

</script>
