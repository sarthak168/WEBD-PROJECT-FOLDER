document.getElementById('trackBtn').addEventListener('click', function() {
    // Get selected tracking type
    var referenceSelected = document.getElementById('reference').checked;
    var trackingType = referenceSelected ? 'Reference Number' : 'Waybill Number';
  
    // Get the entered number
    var trackingNumber = referenceSelected
      ? document.getElementById('referenceNumber').value
      : document.getElementById('waybillNumber').value;
  
    // Perform tracking (You can add your tracking logic here)
    alert('Tracking ' + trackingType + ': ' + trackingNumber);
  });
  