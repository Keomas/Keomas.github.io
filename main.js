var global=false;
var table;

function search () {
 
$("#wait").modal({
	backdrop: 'static'
});

    var	isbnEntry = $("#nisbn").val() ;
    isbn_array=isbnEntry.split(",").map(item => item.trim());;
var urlBook = "https://www.googleapis.com/books/v1/volumes?q=isbn:";
  //	var urlBookHead = "http://xisbn.worldcat.org/webservices/xid/isbn/";
  //	var urlBookTail = "%20?method=getEditions&fl=*&format=json";
  	console.log(isbn_array.length);
  	
  	for (i = 0; i < isbn_array.length; i++){
		 var aux= isbn_array[i];
  		var y =urlBook+ aux;
  		$.ajax({
            async:false,
            url:y,
			dataType:"json",
			headers:{'Access-Control-Allow-Origin':'*'},
            success:function(data){
            console.log(data);
           	if(data.items != undefined){


				var book = data.items[0];
	       
				var title = (book["volumeInfo"]["title"]);
				
				var authors = (book["volumeInfo"]["authors"]).join(", ");
				authors = authors != undefined ? authors : "não encontrado";
				var publisher = (book["volumeInfo"]["publisher"]);
				publisher = publisher != undefined ? publisher : "não encontrado";
				var publishedDate = (book["volumeInfo"]["publishedDate"]);
				publishedDate = publishedDate != undefined ? publishedDate : "não encontrado";
				
			         $( "<tr>"+
			                    '<th scope="row">'+aux+"</th>"+
			                    "<td>"+title+"</td>"+
			                    "<td>"+authors+"</td>"+
			                    "<td>"+publisher+"</td>"+
			                    "<td>"+publishedDate+"</td>"+
			                "</tr>"
			                ).appendTo( "tbody" );
			}else{
					var title = "livro não encontrado pela api ";
	                var authors =  "não encontrado";
	                var publisher = "não encontrado";	                
	                var publishedDate ="não encontrado" ;
	                $( "<tr>"+
	                    '<th scope="row">'+aux+"</th>"+
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
		
		aux="";
         y="";

  		
  		
  	}
	
	
        
  		 
  	 

	  if(!global){

			table = $("table").tableExport({
				bootstrap: false,
				exportButtons: true,
				position:'top', 
			});
			global=!global;
		}else{
			table.remove();
			table.reset();

		}
	$('#wait').modal("hide");
	$('#wait').css("display","none");
	$('#wait').attr("class","modal");
    }
   
   
 



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


    
   