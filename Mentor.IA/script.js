// Navegação na tela de login
if (document.getElementById('login-button')) {
    document.getElementById('login-button').addEventListener('click', function() {
        window.location.href = 'home.html';
    });
}

// Links da página inicial
if (document.getElementById('aluno-link')) {
    document.getElementById('aluno-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'aluno.html';
    });
}

if (document.getElementById('professor-link')) {
    document.getElementById('professor-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'professor.html';
    });
}

if (document.getElementById('sair-link')) {
    document.getElementById('sair-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });
}

// Interações na tela do professor
if (document.getElementById('select-aluno')) {
    document.getElementById('select-aluno').addEventListener('change', function() {
        var selectedAluno = this.value;
        if (selectedAluno) {
            document.getElementById('dashboard-aluno').style.display = 'block';
        } else {
            document.getElementById('dashboard-aluno').style.display = 'none';
        }
    });
}

if (document.getElementById('perfil-button')) {
    document.getElementById('perfil-button').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'professor_perfil.html';
    });
}

// Dados de exemplo para os alunos
const alunosData = {
    'aluno1': {
        notas: '85%',
        presenca: '95%',
        tarefas: '12/15',
        desempenho: [80, 85, 90, 75, 88, 92],
    },
    'aluno2': {
        notas: '78%',
        presenca: '88%',
        tarefas: '10/15',
        desempenho: [70, 75, 80, 65, 78, 82],
    },
    'aluno3': {
        notas: '92%',
        presenca: '98%',
        tarefas: '15/15',
        desempenho: [90, 92, 95, 88, 94, 96],
    }
};

// Função para atualizar o dashboard com os dados do aluno selecionado
function updateDashboard(alunoId) {
    const aluno = alunosData[alunoId];
    if (aluno) {
        // Atualizar estatísticas
        document.getElementById('nota-aluno').innerText = aluno.notas;
        document.getElementById('presenca-aluno').innerText = aluno.presenca;
        document.getElementById('tarefas-aluno').innerText = aluno.tarefas;

        // Gerar gráfico de desempenho
        const ctx = document.getElementById('desempenho-chart').getContext('2d');
        if (window.desempenhoChart) {
            window.desempenhoChart.destroy();
        }
        window.desempenhoChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    label: 'Desempenho',
                    data: aluno.desempenho,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    fill: false,
                    tension: 0.1
                }]
            },
            options: {
                responsive: true
            }
        });
    }
}

// Interações na tela do professor
if (document.getElementById('select-aluno')) {
    document.getElementById('select-aluno').addEventListener('change', function() {
        var selectedAluno = this.value;
        if (selectedAluno) {
            document.getElementById('dashboard-aluno').style.display = 'block';
            updateDashboard(selectedAluno);
        } else {
            document.getElementById('dashboard-aluno').style.display = 'none';
        }
    });
}

// Salvar comentários (função simulada)
if (document.getElementById('salvar-comentarios')) {
    document.getElementById('salvar-comentarios').addEventListener('click', function() {
        var comentarios = document.getElementById('comentarios-professor').value;
        alert('Comentários salvos: ' + comentarios);
        document.getElementById('comentarios-professor').value = '';
    });
}

// Navegação na tela do aluno
if (document.getElementById('atividade-button')) {
    document.getElementById('atividade-button').addEventListener('click', function() {
        window.location.href = 'atividade.html';
    });
}

// Lógica do Quiz
if (document.getElementById('submit-quiz')) {
    document.getElementById('submit-quiz').addEventListener('click', function() {
        var score = 0;
        var totalQuestions = 3;

        // Respostas corretas
        var correctAnswers = {
            'question1': 'Brasília',
            'question2': '4',
            'question3': 'Machado de Assis'
        };

        // Obter respostas do usuário
        var userAnswers = {
            'question1': document.querySelector('input[name="question1"]:checked'),
            'question2': document.querySelector('input[name="question2"]:checked'),
            'question3': document.querySelector('input[name="question3"]:checked')
        };

        // Verificar respostas
        for (var question in correctAnswers) {
            if (userAnswers[question] && userAnswers[question].value === correctAnswers[question]) {
                score++;
            }
        }

        // Exibir feedback
        var feedbackDiv = document.getElementById('quiz-feedback');
        var feedbackMessage = document.getElementById('feedback-message');
        feedbackDiv.style.display = 'block';
        feedbackMessage.innerText = 'Você acertou ' + score + ' de ' + totalQuestions + ' perguntas. (Exemplo de feedback instantaneo para ser inserido com I.A.)';

        // Destacar respostas corretas/incorretas
        for (var question in correctAnswers) {
            var options = document.getElementsByName(question);
            options.forEach(function(option) {
                if (option.value === correctAnswers[question]) {
                    option.parentElement.style.color = 'green';
                } else if (userAnswers[question] && option === userAnswers[question]) {
                    option.parentElement.style.color = 'red';
                }
            });
        
        }
    });
}

// Navegação para a página IES
if (document.getElementById('ies-link')) {
    document.getElementById('ies-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'ies.html';
    });
}

// Funções para a página IES
if (window.location.pathname.endsWith('ies.html')) {

    // Dados simulados
    const totalAlunos = 500;
    const alunosConectados = 120; // Exemplo
    const professoresData = [
        { nome: 'Professor A', especialidade: 'Matemática', metodo: 'Interativo' },
        { nome: 'Professor B', especialidade: 'Física', metodo: 'Expositivo' },
        { nome: 'Professor C', especialidade: 'Química', metodo: 'Experimental' },
        // Adicione mais professores conforme necessário
    ];

    const satisfacaoData = {
        labels: ['Professor A', 'Professor B', 'Professor C'],
        datasets: [{
            label: 'Satisfação (%)',
            data: [85, 90, 75],
            backgroundColor: ['#76c7c0', '#ffb74d', '#ef5350'],
        }]
    };

    // Atualizar a barra de progresso de alunos conectados
    function updateProgressBar() {
        const percentage = (alunosConectados / totalAlunos) * 100;
        const progressBar = document.getElementById('progress');
        progressBar.style.width = percentage + '%';
        progressBar.innerText = Math.round(percentage) + '%';
        document.getElementById('progress-text').innerText = `${alunosConectados} de ${totalAlunos} alunos conectados com o professor`;
    }

    // Renderizar o gráfico de satisfação dos alunos
    function renderSatisfacaoChart() {
        const ctx = document.getElementById('satisfacao-chart').getContext('2d');
        const satisfacaoChart = new Chart(ctx, {
            type: 'bar',
            data: satisfacaoData,
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 10
                        }
                    }
                }
            }
        });
    }

    // Preencher a tabela de professores
    function fillProfessoresTable() {
        const tbody = document.querySelector('#tabela-professores tbody');
        professoresData.forEach(professor => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${professor.nome}</td>
                <td>${professor.especialidade}</td>
                <td>${professor.metodo}</td>
            `;
            tbody.appendChild(tr);
        });
    }

    // Executar as funções ao carregar a página
    updateProgressBar();
    renderSatisfacaoChart();
    fillProfessoresTable();
}

// Atualizar os links de navegação nas páginas
if (document.getElementById('aluno-link')) {
    document.getElementById('aluno-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'aluno.html';
    });
}

if (document.getElementById('professor-link')) {
    document.getElementById('professor-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'professor.html';
    });
}

if (document.getElementById('sair-link')) {
    document.getElementById('sair-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });
}
if (document.getElementById('ies-link')) {
    document.getElementById('ies-link').addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'ies.html';
    });
}


