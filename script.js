var records = [];

$(document).ready(function(){
console.log( 'jq' );
//button click event test
$( '#addToCollectionButton' ).on( 'click', function(){
  console.log( 'addToCollectionButton clicked...');

  //get new record information
  var newRecord = {
    name: $( '#artistName' ).val(),
    title: $( '#albumTitle' ).val(),
    imageUrl: $( '#imageUrl').val()
  }; //end new record information
  console.log( 'adding:', newRecord);
  records.push(newRecord);
  displayRecords();
}); //end on click for #addToCollectionButton
   var displayRecords = function(){
     //loop through the collection and display each record
     var outputText = '';
    for (var i = 0; i < records.length; i++) {
      outputText += '<p><strong>' + records[i].name + '</strong></p>';
      outputText += '<p>' + records[i].title + '</p>';
      outputText += '<img src="' + records[i].imageUrl + '""/>';
      console.log( 'in displayRecords:', records);
   } //end for loop
   $( '#outputDiv' ).html( outputText );
};
}); //end doc ready
