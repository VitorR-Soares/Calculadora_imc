const form = document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const imc = (peso / (altura*altura)).toFixed(2);
    console.log(imc);

    const valorFinal = document.getElementById('valor');
    let descricao = '';
    valorFinal.classList.add('atencao');

    document.getElementById('infos').classList.remove('hidden')

    if (imc < 18.5) {
        descricao = "Cuidado! Você está abaixo do peso!"
    }   else if ( imc >= 18.5 && imc < 25) {
        descricao = 'Você está no peso ideal!'
        valorFinal.classList.remove('atencao');
        valorFinal.classList.add('normal');
    }   else if ( imc >= 25 && imc < 30) {
        descricao = 'Cuidado! Você está acima do peso!'
    }   else if ( imc >= 30 && imc < 35) {
        descricao = 'Cuidado! Você está com obesidade moderada'
    }   else if ( imc >= 35 && imc < 40) {
        descricao = 'Cuidado! Você está com obesidade severa!'
    }   else {
        descricao = 'Cuidado! Você está com obesidade extrema!'
    }


    document.getElementById('descrição').textContent = descricao;
    valorFinal.textContent = imc.replace('.', ',');
} )
