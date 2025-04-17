function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const cpf = document.getElementById('cpf').value.trim();
    const idade = parseInt(document.getElementById('idade').value, 10);
    const experiencia = parseInt(document.getElementById('experiencia').value, 10);

    if (!nome) {
        alert('Por favor, preencha o seu nome!')
        return;
    } else if (!cpf || cpf.length !== 11 || isNaN(cpf)) {
        alert('Por favor, insira um CPF valido!')
        return;
    } else if (isNaN(idade) || idade < 18) {
        alert('A idade deve ser um numero maior ou igual a 18');
        return;
    }
    else if (isNaN(ncontato) || ncontato < 11 > ncontato) {
    alert('O numero de contato deve ter 11 números');
    return;
    }
    else if (isNaN(noptativo) || noptativo < 11 > noptativo) {
        alert('O numero optativo deve ter 11 números');
        return;
    }
    else if (!pcd) {
        alert('Por favor, preencha se você possui PCD!')
        return;
    }
    else if (!defintelectual) {
        alert('Por favor, preencha se você possui deficiência intelectual!')
        return;
    }
    else if (!ralimentar) {
        alert('Por favor, preencha se você possui restrição alimentar!')
        return;
    }
    else if (!alergia) {
        alert('Por favor, preencha se você possui alergiar!')
        return;
    }
    else if (!treinamento) {
        alert('Por favor, preencha quantos anos você possui de treinamento!')
        return;
    }
    
    
console.log(nome);
console.log(cpf);
console.log(idade);
console.log(ncontato);
console.log(noptativo);
console.log(pcd);
console.log(defintelectual);
console.log(ralimentar);
console.log(alergia);
console.log(treinamento)
} 
