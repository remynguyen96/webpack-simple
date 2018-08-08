import '../css/app.scss';
function bubbleSort(arr){
  var len = arr.length;
  for (var i = len-1; i>=0; i--){
    for(var j = 1; j<=i; j++){
      if(arr[j-1]>arr[j]){
          var temp = arr[j-1];
          arr[j-1] = arr[j];
          arr[j] = temp;
       }
    }
  }
  return arr;
}



bubbleSort([7,5,2,4,10,3,9]);