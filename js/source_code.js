
var construct_item = function(item,peso,valor){
	this.item=item;
	this.peso=peso;
	this.valor=valor;


};

function do_matriz(peso,quant_item){
	var matriz = new Array(quant_item);

	for (i=0;i<=quant_item;i++){

		matriz[i]=new Array(peso);
	
	}
	for (i=0;i<=peso;i++){

		matriz[0][i]=0;
	}

	for (i=0;i<=quant_item;i++){

		matriz[i][0]=0;
	}


	return matriz;
}


function organiza_items(q_itens){

	var itens = new Array(q_itens);


	
	itens[1]=new construct_item(1,2,12);
	itens[2]=new construct_item(2,1,10);
	itens[3]=new construct_item(3,3,20);
	itens[4]=new construct_item(4,2,15);

return itens;
}







function calcula_mochila (i,w){
	if((w -array_itens[i].peso) < 0 ){

		mochila[i][w]=mochila[i-1][w];



	}else{

		if((mochila[i-1][w]) > (mochila[i-1][w-array_itens[i].peso] + array_itens[i].valor)){
				mochila[i][w]=mochila[i-1][w];


		}else{

			mochila[i][w]=mochila[i-1][w-array_itens[i].peso] + array_itens[i].valor;

		}

	}



}

function resolve(){
	for(i=1;i<=n_itens;i++){
		for(j=1;j<=peso ;j++){
			calcula_mochila(i,j);


		}

	}
}

function print_mochila(){
document.write("<h4>matriz</h4>");
document.write('<div class="table-responsive">');
document.write('<table class="table  table-condensed table-bordered table-hover"  >');

document.write("<thead>","<tr>","<th>Item/Peso</th>");


for(y=0; y<= peso;y++){

	document.write("<th class=\"text-center\">",y,"</th>");



}
document.write("</tr>","</thead>");

document.write("<tboby>");

for(i=0;i<=n_itens;i++){
		document.write("<tr>");

		document.write("<td><b>",i,"</b></td>");
		
		for(j=0;j<= peso;j++){
			
		document.write("<td class=\"text-primary text-center\">",mochila[i][j],"</td>");


		}
		document.write("</tr>");


	}
	document.write("<tboby>","</table>","</div>");

}



function determina_itens(){
	i=n_itens;
	k=peso;
		
	while( (i !=0) || (k!=0) ){

		if(mochila[i][k] == mochila[i-1][k]){

			i=i-1;
			

		}else if(mochila[i][k] != mochila[i-1][k]){

			array_solucao.push(i);
			k=k-array_itens[i].peso;
			i=i-1;
			
		}else{

			alert("erro");
		}






	}


}


function print_itens(){

document.write("<h4>itens</h4>");
document.write('<div class="table-responsive">');
document.write('<table class="table  table-condensed table-bordered table-hover"  >');

document.write("<thead>","<tr>","<th>Item</th>");


for(y=1; y<= n_itens;y++){

	document.write("<th class=\"text-center\">",y,"</th>");



}
document.write("</tr>","</thead>");

document.write("<tboby>");

for(i=0;i<=1;i++){
		
	if(i==0){
		document.write("<tr>");

		document.write("<td><b>peso</b></td>");
		}else{

		document.write("<tr>");

		document.write("<td><b>valor</b></td>");


		}

		for(j=1;j<=n_itens ;j++){
			
		if(i==0){
		document.write("<td class=\"text-primary text-center\">",array_itens[j].peso,"</td>");

		}else{
			document.write("<td class=\"text-primary text-center\">",array_itens[j].valor,"</td>");

		}


		}
		document.write("</tr>");


	}
	document.write("<tboby>","</table>","</div>");


}





function print_solucao(){

	document.write("<h1>");


	for(i=0; i < array_solucao.length;i++){

		document.write(array_solucao[i], "&nbsp" );

	}


	document.write("</h1>");

}

function get_itens(){

document.write(n_itens);


}
function get_peso(){
	document.write(peso);


}

function set_peso(p){


	peso=p;
}

function set_nitem(i){

n_itens=i;

}
function zera_matriz(m){
		


}

//////VARIAVEIS
peso=5;
n_itens=4;
array_solucao=new Array();
mochila = do_matriz(peso,n_itens);

array_itens = organiza_items(n_itens);
