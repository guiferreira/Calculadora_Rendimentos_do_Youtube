var calculadora = function(){
    var calc_valor = document.getElementById('calc_valor').value;
    var calc_visualizacao = document.getElementById('calc_visualizacao').value;
       
    var pagPorVisualizacao = 4.93/3545;
    var rend_calc_valor = calc_valor / pagPorVisualizacao;
    var rend_calc_visualizacao = pagPorVisualizacao * calc_visualizacao;
    document.getElementById('res_calc_valor').innerHTML = number_format(rend_calc_valor,0,',','.')+" Visualizações";
    document.getElementById('res_calc_visualizacao').innerHTML = "$ "+number_format(rend_calc_visualizacao,2,'.',',')+" dólares";
   
};