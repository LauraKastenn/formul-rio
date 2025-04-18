function validarFormulario() {
    const nome = document.getElementById('nome').value.trim();
    const dataNascimento = document.getElementById('data_nascimento').value;
    const nacionalidade = document.getElementById('nacionalidade').value.trim();
    const genero = document.getElementById('genero').value;
    const endereco = document.getElementById('endereco').value.trim();
    const cidade = document.getElementById('cidade').value.trim();
    const estado = document.getElementById('estado').value.trim();
    const cep = document.getElementById('cep').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const modalidade = document.getElementById('modalidade').value.trim();
    const clube = document.getElementById('clube').value.trim();
    const registro = document.getElementById('registro').value.trim();
    const experiencia = parseInt(document.getElementById('experiencia').value.trim());
    const treinador = document.getElementById('treinador').value.trim();
    const contatoTreinador = document.getElementById('contato_treinador').value.trim();
    const tipoSanguineo = document.getElementById('tipo_sanguineo').value.trim();
    const contatoEmergencia = document.getElementById('contato_emergencia').value.trim();
    const telefoneEmergencia = document.getElementById('telefone_emergencia').value.trim();

    if (!nome) {
        alert('Por favor, preencha o seu nome!');
        return;
    } else if (!dataNascimento) {
        alert('Por favor, preencha a data de nascimento!');
        return;
    } else if (!nacionalidade) {
        alert('Por favor, preencha a nacionalidade!');
        return;
    } else if (genero === "") {
        alert('Por favor, selecione o gênero!');
        return;
    } else if (!endereco) {
        alert('Por favor, preencha o endereço completo!');
        return;
    } else if (!cidade) {
        alert('Por favor, preencha a cidade!');
        return;
    } else if (!estado) {
        alert('Por favor, preencha o estado!');
        return;
    } else if (!cep || cep.length !== 8 || isNaN(cep)) {
        alert('Por favor, insira um CEP válido com 8 dígitos!');
        return;
    } else if (!telefone || telefone.length < 10) {
        alert('Por favor, insira um telefone válido com pelo menos 10 dígitos!');
        return;
    } else if (!email || !email.includes('@')) {
        alert('Por favor, insira um e-mail válido!');
        return;
    } else if (!modalidade) {
        alert('Por favor, preencha a modalidade esportiva!');
        return;
    } else if (!clube) {
        alert('Por favor, preencha o clube/equipe!');
        return;
    } else if (!registro) {
        alert('Por favor, preencha o número de registro da federação!');
        return;
    } else if (isNaN(experiencia) || experiencia < 0) {
        alert('Por favor, insira uma experiência válida (número de anos)!');
        return;
    } else if (!treinador) {
        alert('Por favor, preencha o nome do treinador!');
        return;
    } else if (!contatoTreinador || contatoTreinador.length < 10) {
        alert('Por favor, insira um contato válido do treinador com pelo menos 10 dígitos!');
        return;
    } else if (!tipoSanguineo) {
        alert('Por favor, preencha o tipo sanguíneo!');
        return;
    } else if (!contatoEmergencia) {
        alert('Por favor, preencha o nome da pessoa para contato em emergência!');
        return;
    } else if (!telefoneEmergencia || telefoneEmergencia.length < 10) {
        alert('Por favor, insira um telefone válido da pessoa de contato em emergência com pelo menos 10 dígitos!');
        return;
    }
    
console.log(nome);
console.log(dataNascimento);
console.log(nacionalidade);
console.log(genero);
console.log(endereco);
console.log(cidade);
console.log(estado);
console.log(cep);
console.log(telefone);
console.log(email);
console.log(modalidade);
console.log(clube);
console.log(registro);
console.log(experiencia);
console.log(treinador);
console.log(contatoTreinador);
console.log(tipoSanguineo);
console.log(contatoEmergencia);
console.log(telefoneEmergencia);
} 

