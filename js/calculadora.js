var calculadora = function(){
    var total_v = document.getElementById('total_visualizacao').value;
    var receita_e = document.getElementById('receita_estimada').value;
    var calc_valor = document.getElementById('calc_valor').value;
    var calc_visualizacao = document.getElementById('calc_visualizacao').value;

    var pagPorVisualizacao = receita_e/total_v;
    
    var rend_calc_valor = calc_valor / pagPorVisualizacao;
    var rend_calc_visualizacao = pagPorVisualizacao * calc_visualizacao;
    if(total_v && receita_e){
        document.getElementById('res_calc_valor').innerHTML = rend_calc_valor.toFixed(2)+" Visualizações";
        document.getElementById('res_calc_visualizacao').innerHTML = "$ "+rend_calc_visualizacao.toFixed(2)+" dólares";
    }

};