$(document).ready(function() {

  window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

  var DBOpenRequest,db;

  if(!window.indexedDB) {
    console.log("Your Browser does not support IndexedDB");
  } else {
    DBOpenRequest = window.indexedDB.open('testDB',1);

    DBOpenRequest.onerror = (event) => {
      console.log('Error open DB', event);
    }

    DBOpenRequest.onupgradeneeded = (event) => {
      console.log('Upgrading');
      db = event.target.result;
      var objectStore = db.createObjectStore('customers', {keyPath: 'email'})
    };

    DBOpenRequest.onsuccess = (event) => {
      console.log("Success opening DB");
      db = event.target.result;
    }
  }


  $("#addBtn").click(function() {
    var email = $("#email").val();
    var name = $("#name").val();
    var transaction = db.transaction(["customers"],"readwrite");

    transaction.oncomplete = (event) => {
      $("#result").html("Add : Successful");
    };

    transaction.onerror = (event) => {
        $("#result").html("Add : Error");
    };
    var objectStore = transaction.objectStore("customers");
    // console.log(objectStore.autoIncrement);
    // console.log(objectStore.indexNames);
    // console.log(objectStore.keyPath);
    // console.log(objectStore.name);
    objectStore.add({email: email, name: name});
  });

  $("#removeBtn").click(function() {
    var email = $("#email").val();

    let transaction = db.transaction(['customers'], 'readwrite');

    let objectStore = transaction.objectStore('customers');
        objectStore.delete(email);
  });

  $("#getBtn").click(function() {
    var email = $("#email").val();

    let transaction = db.transaction(['customers'], 'readwrite');
    let objectStore = transaction.objectStore('customers');


    var request = objectStore.get(email);
        request.onsuccess = (event) => {
          $("#result").html(`Name: ${request.result.name} -- Email: ${request.result.email}`)
        }
  });

  $('#getAllBtn').click(function(){
    let transaction = db.transaction(['customers'],'readwrite');
    let objectStore = transaction.objectStore('customers');
    var countRequest = objectStore.count();
     countRequest.onsuccess = function() {
       console.log(countRequest.result);
     }

    var request = objectStore.getAll();
        request.onsuccess = (event) => {
          let html = '';
          request.result.forEach((item) => {
            html += `
              <p> Name : ${item.name} --- Email : ${item.email}
            `
          });
          $("#result").html(html);
        }
  });

  $("#updateBtn").click(function() {
     var email = $("#email").val();
     var name = $("#name").val();

     var transaction = db.transaction(["customers"],"readwrite");
     var objectStore = transaction.objectStore("customers");

     var request = objectStore.get(email);

     request.onsuccess = function(event){
         $("#result").html("Updating : "+request.result.name + " to " + name);
         request.result.name = name;
         objectStore.put(request.result);
     };
  });

  $("#openCursorBtn").click(function(){
    var transaction = db.transaction('customers',"readonly");
    var objectStore = transaction.objectStore("customers");
    var request = objectStore.openCursor();
    request.onsuccess = function(event) {
      var cursor = event.target.result;
      if(cursor) {
        console.log(cursor);
        cursor.continue();
      }else{
        console.log('End Record !');
      }
    }

  });

});
