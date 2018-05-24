
$("button").click(function () {
 
var div =	$(".hidden").show();

    var	isbnEntry = $("#nisbn").val() ;
    isbn_array=isbnEntry.split(",").map(item => item.trim());;
   	//var urlBook = "https://www.googleapis.com/books/v1/volumes?q=isbn:";
  	var urlBookHead = "http://xisbn.worldcat.org/webservices/xid/isbn/";
  	var urlBookTail = "%20?method=getEditions&fl=*&format=json";
  	console.log(isbn_array.length);
  	
  	for (i = 0; i < isbn_array.length; i++){
		 var aux= isbn_array[i];
  		var y =urlBookHead+ aux+urlBookTail;
  		$.ajax({
            async:false,
            url:y,
            dataType:"json",
            success:function(data){
            //console.log(data.list[0]);
           	if(data.list != undefined){


		           	var book = data.list[0];
		           	var title = (book["title"]);
			        var author = (book["author"]);
			        var publisher = (book["publisher"]);
			        var publishedDate = (book["year"]);
			         $( "<tr>"+
			                    '<th scope="row">'+aux+"</th>"+
			                    "<td>"+title+"</td>"+
			                    "<td>"+author+"</td>"+
			                    "<td>"+publisher+"</td>"+
			                    "<td>"+publishedDate+"</td>"+
			                "</tr>"
			                ).appendTo( "tbody" );
			}else{
					var title = "livro não encontrado pela api ";
	                var author =  "não encontrado";
	                var publisher = "não encontrado";	                
	                var publishedDate ="não encontrado" ;
	                $( "<tr>"+
	                    '<th scope="row">'+aux+"</th>"+
	                    "<td>"+title+"</td>"+
	                    "<td>"+author+"</td>"+
	                    "<td>"+publisher+"</td>"+
	                    "<td>"+publishedDate+"</td>"+
	                "</tr>"
	                ).appendTo( "tbody" );



			}
			
            },
            error:"abort",
            complete:function(jqxhr,str){
                console.log(jqxhr);
				console.log(str);
				
            }
        }
       
		); 
		aux="";
         y="";

  		
  		
  	}
	
	
        
  		 
  	 



	$("table").tableExport({
		bootstrap: false,
		exportButtons: true,
		position:'top', 
	});
	div.hide();
    }
   );
   
 



   /*
    $.ajax({
            async:true,
            url:urlBook,
            dataType:"json",
            success:function(data){
                if(data.items != undefined) {
	                var book = data.items[0];
	       
	                var title = (book["volumeInfo"]["title"]);
	                var subtitle = (book["volumeInfo"]["subtitle"]);
	                var authors = (book["volumeInfo"]["authors"]).join(", ");
	                var printType = (book["volumeInfo"]["printType"]);
	                var pageCount = (book["volumeInfo"]["pageCount"]);
	                var publisher = (book["volumeInfo"]["publisher"]);
	                var publishedDate = (book["volumeInfo"]["publishedDate"]);
	                var webReaderLink = (book["accessInfo"]["webReaderLink"]);
	                $( "<tr>"+
	                    '<th scope="row">'+isbn+"</th>"+
	                    "<td>"+title+"</td>"+
	                    "<td>"+authors+"</td>"+
	                    "<td>"+publisher+"</td>"+
	                    "<td>"+publishedDate+"</td>"+
	                "</tr>"
	                ).appendTo( "tbody" );
	                console.log(title,authors,publisher,publishedDate);
            }else{
            		console.log("Livro não encontrado pela api");
            	 	var title = "livro não encontrado pela api do google";
	                var authors =  "não encontrado";
	                var publisher = "não encontrado";	                
	                var publishedDate ="não encontrado" ;
	                $( "<tr>"+
	                    '<th scope="row">'+isbn+"</th>"+
	                    "<td>"+title+"</td>"+
	                    "<td>"+authors+"</td>"+
	                    "<td>"+publisher+"</td>"+
	                    "<td>"+publishedDate+"</td>"+
	                "</tr>"
	                ).appendTo( "tbody" );
            }
                
            },
            error:"abort",
            complete:function(jqxhr,str){
                console.log(jqxhr);
                console.log(str);
            }
        }
        );
    
   */


    
   