// app.js

// Aqui vai todo o JS do simulador, exceto os dados (texts, officialQuestionBank)
// O código deve assumir que texts e officialQuestionBank já estão disponíveis (via data.js)

// Exemplo de início:
// ...
// (Cole aqui todo o JS do <script> do index.html, removendo texts e officialQuestionBank) 

// --- Global Quiz State ---
let currentQuizQuestions;
let currentQuestionIndex;
let userAnswers;
let timeLeft;
let timerInterval;
let startTime;
const PASS_SCORE = 65;
const TOTAL_QUESTIONS = 25;
let currentLanguage = 'en';
let selectedVersion = 'A';

// --- Utility Functions ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- Language and Version Selection ---
function applyLanguage() {
    document.querySelectorAll('[data-text]').forEach(element => {
        const key = element.getAttribute('data-text');
        if (window.texts[currentLanguage] && window.texts[currentLanguage][key]) {
            element.textContent = window.texts[currentLanguage][key];
        }
    });
    document.getElementById('languageDropdown').value = currentLanguage;
    if (document.getElementById('quizContent').style.display !== 'none') displayQuestion();
    if (document.getElementById('results').style.display !== 'none') finishQuiz(true);
    if (document.getElementById('detailedResults').style.display !== 'none') viewDetailedResults(true);
}
function setLanguage(lang) { currentLanguage = lang; applyLanguage(); }
function selectVersion(version) { selectedVersion = version; }

// --- Quiz Flow Management ---
async function startQuiz() {
    startTime = new Date();
    currentQuestionIndex = 0;
    userAnswers = [];
    timeLeft = 60 * 60;
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizContent').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    document.getElementById('detailedResults').style.display = 'none';
    document.body.insertAdjacentHTML('beforeend', `<div id="loadingOverlay" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center text-white text-xl z-50"><div class="spinner mr-3"></div> Loading questions...</div>`);
    let tempQuestions = [...window.officialQuestionBank];
    shuffleArray(tempQuestions);
    // Garante que não haja repetição
    let selectedQuestions = [];
    if (tempQuestions.length <= TOTAL_QUESTIONS) {
        selectedQuestions = tempQuestions;
    } else {
        selectedQuestions = tempQuestions.slice(0, TOTAL_QUESTIONS);
    }
    currentQuizQuestions = selectedQuestions.map(q => ({ ...q, typeTag: 'official' }));
    userAnswers = Array(currentQuizQuestions.length).fill(null).map(() => []);
    document.getElementById('totalQuestions').textContent = currentQuizQuestions.length;
    document.getElementById('loadingOverlay').remove();
    document.getElementById('quizContent').style.display = 'block';
    displayQuestion();
    updateNavigationButtons();
    updateProgressBar();
}

function displayQuestion() {
    const questionData = currentQuizQuestions[currentQuestionIndex][currentLanguage];
    const questionObj = currentQuizQuestions[currentQuestionIndex];
    const multiSelectInstructionDiv = document.getElementById('multiSelectInstruction');
    const questionTypeTag = document.getElementById('questionTypeTag');

    document.getElementById('questionNum').textContent = currentQuestionIndex + 1;
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = questionData.question;

    // Exibe tag de tipo de questão
    if (questionObj.typeTag === 'ai-generated') {
        questionTypeTag.className = 'ai-generated-tag';
        questionTypeTag.textContent = window.texts[currentLanguage]["ai-generated-tag"];
    } else {
        questionTypeTag.className = 'official-tag';
        questionTypeTag.textContent = window.texts[currentLanguage]["official-tag"];
    }

    // Instrução para múltipla escolha
    if (questionObj.type === 'multiple' && questionData.correct.length > 1) {
        multiSelectInstructionDiv.textContent = window.texts[currentLanguage]["multi-select-instruction"];
        multiSelectInstructionDiv.style.display = 'block';
    } else {
        multiSelectInstructionDiv.style.display = 'none';
    }

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    const inputType = questionObj.type === 'multiple' ? 'checkbox' : 'radio';
    questionData.options.forEach((option, index) => {
        const optionWrapper = document.createElement('label');
        optionWrapper.classList.add('option');
        const inputElement = document.createElement('input');
        inputElement.type = inputType;
        inputElement.name = 'question' + currentQuestionIndex;
        inputElement.value = index;
        if (userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].includes(index)) {
            inputElement.checked = true;
            optionWrapper.classList.add('selected');
        }
        inputElement.addEventListener('change', () => selectOption(index));
        const spanText = document.createElement('span');
        spanText.textContent = option;
        optionWrapper.appendChild(inputElement);
        optionWrapper.appendChild(spanText);
        optionsContainer.appendChild(optionWrapper);
    });
    document.getElementById('explanation').style.display = 'none';
    document.getElementById('tip').style.display = 'none';
}

function selectOption(selectedIndex) {
    const questionObj = currentQuizQuestions[currentQuestionIndex];
    const isMultiSelect = questionObj.type === 'multiple';
    if (!Array.isArray(userAnswers[currentQuestionIndex])) {
        userAnswers[currentQuestionIndex] = [];
    }
    if (isMultiSelect) {
        const indexInAnswers = userAnswers[currentQuestionIndex].indexOf(selectedIndex);
        if (indexInAnswers > -1) {
            userAnswers[currentQuestionIndex].splice(indexInAnswers, 1);
        } else {
            userAnswers[currentQuestionIndex].push(selectedIndex);
        }
    } else {
        userAnswers[currentQuestionIndex] = [selectedIndex];
    }
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        const inputElement = opt.querySelector('input');
        const optIndex = parseInt(inputElement.value);
        if (userAnswers[currentQuestionIndex].includes(optIndex)) {
            opt.classList.add('selected');
            inputElement.checked = true;
        } else {
            opt.classList.remove('selected');
            inputElement.checked = false;
        }
    });
    updateNavigationButtons();
}

function nextQuestion() {
    const questionObj = currentQuizQuestions[currentQuestionIndex];
    const currentAnswer = userAnswers[currentQuestionIndex];
    if (questionObj.type === 'multiple' && (currentAnswer.length !== questionObj[currentLanguage].correct.length)) {
        return;
    }
    if (currentQuestionIndex < currentQuizQuestions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
        updateNavigationButtons();
        updateProgressBar();
    } else {
        finishQuiz();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
        updateNavigationButtons();
        updateProgressBar();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');
    prevBtn.disabled = currentQuestionIndex === 0;
    const questionObj = currentQuizQuestions[currentQuestionIndex];
    const currentAnswer = userAnswers[currentQuestionIndex];
    let isCurrentQuestionValid = false;
    if (questionObj.type === 'multiple') {
        isCurrentQuestionValid = currentAnswer && currentAnswer.length === questionObj[currentLanguage].correct.length;
    } else {
        isCurrentQuestionValid = currentAnswer && currentAnswer.length === 1;
    }
    nextBtn.disabled = !isCurrentQuestionValid;
    if (currentQuestionIndex === currentQuizQuestions.length - 1) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'inline-block';
        let allQuestionsAnsweredValidly = true;
        for (let i = 0; i < currentQuizQuestions.length; i++) {
            const q = currentQuizQuestions[i];
            const ans = userAnswers[i];
            if (q.type === 'multiple' && (!ans || ans.length !== q[currentLanguage].correct.length)) {
                allQuestionsAnsweredValidly = false;
                break;
            } else if (q.type === 'single' && (!ans || ans.length !== 1)) {
                allQuestionsAnsweredValidly = false;
                break;
            }
        }
        finishBtn.disabled = !allQuestionsAnsweredValidly;
    } else {
        nextBtn.style.display = 'inline-block';
        finishBtn.style.display = 'none';
    }
}

function updateProgressBar() {
    const progressFill = document.getElementById('progressFill');
    const progress = ((currentQuestionIndex + 1) / currentQuizQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function updateTimer() {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timeLeft').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        finishQuiz();
    }
}

async function generateQuestionWithAI(seedQuestion) {
    // Placeholder para IA. Retorna a mesma questão para não travar o fluxo local.
    return seedQuestion;
}

function finishQuiz(isReRender = false) {
    let allQuestionsValid = true;
    let firstInvalidQuestionIndex = -1;
    for (let i = 0; i < currentQuizQuestions.length; i++) {
        const q = currentQuizQuestions[i];
        const ans = userAnswers[i];
        if (q.type === 'multiple' && (!ans || ans.length !== q[currentLanguage].correct.length)) {
            allQuestionsValid = false;
            firstInvalidQuestionIndex = i;
            break;
        } else if (q.type === 'single' && (!ans || ans.length !== 1)) {
            allQuestionsValid = false;
            firstInvalidQuestionIndex = i;
            break;
        }
    }
    if (!allQuestionsValid && !isReRender) {
        alert(currentLanguage === 'pt' ? "Por favor, responda todas as perguntas corretamente antes de finalizar o simulado. Para as perguntas de múltipla escolha, selecione exatamente duas opções." : "Please answer all questions correctly before finishing the simulator. For multiple-choice questions, select exactly two options.");
        currentQuestionIndex = firstInvalidQuestionIndex;
        displayQuestion();
        return;
    }
    if (!isReRender) {
        clearInterval(timerInterval);
        const endTime = new Date();
        const totalTimeInSeconds = Math.floor((endTime - startTime) / 1000);
        sessionStorage.setItem('totalTime', totalTimeInSeconds);
    }
    let correctCount = 0;
    let incorrectCount = 0;
    const quizResults = [];
    currentQuizQuestions.forEach((q, qIndex) => {
        const questionLangData = q[currentLanguage];
        const userAnswer = userAnswers[qIndex] || [];
        const correctAnswers = questionLangData.correct;
        let isQuestionCorrect = true;
        if (q.type === 'multiple') {
            if (userAnswer.length !== correctAnswers.length) {
                isQuestionCorrect = false;
            } else {
                for (const ans of correctAnswers) {
                    if (!userAnswer.includes(ans)) {
                        isQuestionCorrect = false;
                        break;
                    }
                }
                questionLangData.options.forEach((opt, idx) => {
                    if (userAnswer.includes(idx) && !correctAnswers.includes(idx)) {
                        isQuestionCorrect = false;
                    }
                });
            }
        } else {
            isQuestionCorrect = (userAnswer.length === 1 && userAnswer[0] === correctAnswers[0]);
        }
        if (isQuestionCorrect) {
            correctCount++;
        } else {
            incorrectCount++;
        }
        quizResults.push({
            question: questionLangData.question,
            options: questionLangData.options,
            correctAnswers: correctAnswers,
            userAnswer: userAnswer,
            isCorrect: isQuestionCorrect,
            explanation: questionLangData.explanation,
            tip: questionLangData.tip,
            typeTag: q.typeTag
        });
    });
    sessionStorage.setItem('quizResults', JSON.stringify(quizResults));
    const score = (correctCount / currentQuizQuestions.length) * 100;
    const passStatus = score >= PASS_SCORE ? window.texts[currentLanguage].approved : window.texts[currentLanguage].failed;
    const totalTimeInSeconds = sessionStorage.getItem('totalTime');
    document.getElementById('finalScore').textContent = `${score.toFixed(0)}%`;
    document.getElementById('correctCount').textContent = correctCount;
    document.getElementById('incorrectCount').textContent = incorrectCount;
    document.getElementById('passStatus').textContent = passStatus;
    const timeMinutes = Math.floor(totalTimeInSeconds / 60);
    const timeSeconds = totalTimeInSeconds % 60;
    document.getElementById('timeUsed').textContent = `${String(timeMinutes).padStart(2, '0')}:${String(timeSeconds).padStart(2, '0')}`;
    document.getElementById('quizContent').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('detailedResults').style.display = 'none';
    
    // Salvar pontuação no histórico
    saveScoreToHistory(score, correctCount, currentQuizQuestions.length);
}

function viewDetailedResults() {
    const quizResults = JSON.parse(sessionStorage.getItem('quizResults'));
    const detailedResultsContent = document.getElementById('detailedResultsContent');
    detailedResultsContent.innerHTML = '';
    quizResults.forEach((result, qIndex) => {
        const qDiv = document.createElement('div');
        qDiv.classList.add('results-detail-question');
        const questionTitle = document.createElement('h4');
        questionTitle.textContent = `${qIndex + 1}. ${result.question}`;
        const typeTagSpan = document.createElement('span');
        typeTagSpan.classList.add(result.typeTag === 'ai-generated' ? 'ai-generated-tag' : 'official-tag');
        typeTagSpan.textContent = window.texts[currentLanguage][result.typeTag === 'ai-generated' ? 'ai-generated-tag' : 'official-tag'];
        questionTitle.appendChild(typeTagSpan);
        qDiv.appendChild(questionTitle);
        const questionObjForType = currentQuizQuestions.find(q => q.id === result.id);
        if (questionObjForType && questionObjForType.type === 'multiple' && questionObjForType[currentLanguage].correct.length > 1) {
            const detailedInstruction = document.createElement('div');
            detailedInstruction.classList.add('multi-select-instruction');
            detailedInstruction.textContent = window.texts[currentLanguage]["multi-select-instruction"];
            qDiv.appendChild(detailedInstruction);
        }
        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('results-detail-options');
        result.options.forEach((optionText, optIndex) => {
            const optionWrapper = document.createElement('label');
            optionWrapper.classList.add('option');
            const inputElement = document.createElement('input');
            inputElement.type = result.correctAnswers.length > 1 ? 'checkbox' : 'radio';
            inputElement.name = 'detailed_q' + qIndex;
            inputElement.value = optIndex;
            inputElement.disabled = true;
            const isCorrectOption = result.correctAnswers.includes(optIndex);
            const isUserSelected = result.userAnswer.includes(optIndex);
            if (isUserSelected) {
                optionWrapper.classList.add('selected');
            }
            if (isCorrectOption) {
                optionWrapper.classList.add('correct-feedback');
                inputElement.checked = true;
            }
            if (isUserSelected && !isCorrectOption) {
                optionWrapper.classList.add('incorrect-feedback', 'selected-by-user');
                inputElement.checked = true;
            } else if (!isUserSelected && isCorrectOption) {
                inputElement.checked = true;
            }
            const spanText = document.createElement('span');
            spanText.textContent = optionText;
            optionWrapper.appendChild(inputElement);
            optionWrapper.appendChild(spanText);
            optionsDiv.appendChild(optionWrapper);
        });
        qDiv.appendChild(optionsDiv);
        const explanation = document.createElement('div');
        explanation.classList.add('explanation');
        explanation.innerHTML = `<strong>${window.texts[currentLanguage].explanation_label}</strong> ${result.explanation}`;
        qDiv.appendChild(explanation);
        if (result.tip) {
            const tip = document.createElement('div');
            tip.classList.add('tip');
            const tipTitle = document.createElement('div');
            tipTitle.classList.add('tip-title');
            tipTitle.textContent = window.texts[currentLanguage].tip_label;
            tip.appendChild(tipTitle);
            const tipText = document.createElement('div');
            tipText.textContent = result.tip;
            tip.appendChild(tipText);
            qDiv.appendChild(tip);
        }
        detailedResultsContent.appendChild(qDiv);
    });
    document.getElementById('results').style.display = 'none';
    document.getElementById('detailedResults').style.display = 'block';
}

function hideDetailedResults() {
    document.getElementById('detailedResults').style.display = 'none';
    document.getElementById('results').style.display = 'block';
}

function restartQuiz() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('detailedResults').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
    currentQuestionIndex = 0;
    userAnswers = [];
    timeLeft = 60 * 60;
    clearInterval(timerInterval);
    document.getElementById('timeLeft').textContent = '60:00';
    document.getElementById('progressFill').style.width = '0%';
    updateNavigationButtons();
    applyLanguage();
}

function showReusabilityGuide() {
    // Remove overlay se já existir
    const existing = document.getElementById('reusabilityGuideOverlay');
    if (existing) existing.remove();

    const overlay = document.createElement('div');
    overlay.id = 'reusabilityGuideOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.7)';
    overlay.style.zIndex = 9999;
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';

    const modal = document.createElement('div');
    modal.style.background = '#fff';
    modal.style.borderRadius = '16px';
    modal.style.maxWidth = '700px';
    modal.style.width = '90%';
    modal.style.padding = '40px 30px';
    modal.style.boxShadow = '0 8px 32px rgba(0,0,0,0.25)';
    modal.style.position = 'relative';
    modal.style.maxHeight = '90vh';
    modal.style.overflowY = 'auto';

    modal.innerHTML = `
        <h2 style="font-size:2em;margin-bottom:18px;color:#dc2626;font-weight:700;">📖 Reusability Guide</h2>
        <p style="margin-bottom:18px;">Este tutorial mostra como adaptar o simulador para qualquer certificação ou quiz, reaproveitando o código e preenchendo um novo banco de questões.</p>
        <ol style="margin-bottom:18px;">
            <li><b>Altere o título e textos principais:</b><br>
                No arquivo <code>index.html</code>, edite o título da página (&lt;title&gt;), o cabeçalho (&lt;h1 data-text="main-title"&gt;) e as descrições para refletir a nova certificação ou tema.</li>
            <li style="margin-top:10px;"><b>Edite o banco de questões:</b><br>
                No arquivo <code>questionsoffical.js</code>, substitua ou edite o array <code>window.officialQuestionBank</code>.<br>
                Cada questão deve seguir o formato:<br>
                <pre style="background:#f8f9fa;padding:10px;border-radius:8px;overflow-x:auto;font-size:0.95em;">{
                    id: 'q1',
                    type: 'single' ou 'multiple',
                    en: {
                        question: 'Texto da pergunta',
                        options: ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'],
                        correct: [índices das corretas],
                        explanation: 'Explicação',
                        tip: 'Dica'
                    }
                }</pre>
                <b>Importante:</b> Remova perguntas antigas e adicione as novas conforme sua necessidade.<br>
                Para multilíngue, use o arquivo <code>questions_pt.js</code> para as versões em português.
            </li>
            <li style="margin-top:10px;"><b>Adapte textos de interface:</b><br>
                No arquivo <code>data.js</code>, ajuste o objeto <code>window.texts</code> para alterar textos de botões, instruções e mensagens do simulador.</li>
            <li style="margin-top:10px;"><b>Salve e teste:</b><br>
                Abra o <code>index.html</code> no navegador e verifique se o quiz está funcionando com as novas perguntas e textos.</li>
        </ol>
        <div style="margin-top:18px;font-size:0.98em;color:#555;">Dúvidas? Consulte o README ou peça ajuda ao assistente de IA!</div>
        <button id="closeGuideBtn" style="position:absolute;top:18px;right:18px;background:#dc2626;color:#fff;border:none;border-radius:50%;width:36px;height:36px;font-size:1.3em;cursor:pointer;">&times;</button>
    `;
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    document.getElementById('closeGuideBtn').onclick = () => overlay.remove();
}

// Exibir histórico na tela inicial
function renderHistory() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    const container = document.getElementById('historyContainer');
    if (!container) return;
    if (history.length === 0) {
        container.innerHTML = '<p>No attempts yet.</p>';
        return;
    }
    container.innerHTML = '<h3>Last 3 Attempts</h3>' +
        '<ul>' +
        history.map(h => `<li><b>Date:</b> ${h.date} | <b>Score:</b> ${h.score}% | <b>Correct:</b> ${h.correct}/${TOTAL_QUESTIONS}</li>`).join('') +
        '</ul>';
}

// Funções para o histórico de pontuação
function showScoreHistory() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    const modal = document.getElementById('scoreHistoryModal');
    const content = document.getElementById('scoreHistoryContent');
    
    if (history.length === 0) {
        content.innerHTML = '<p style="color: #666; font-style: italic;">No scores recorded yet.</p>';
    } else {
        const last3Scores = history.slice(0, 3);
        content.innerHTML = last3Scores.map((score, index) => {
            const status = score.score >= PASS_SCORE ? '✅ PASSED' : '❌ FAILED';
            const date = new Date(score.date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            return `
                <div style="margin-bottom: 12px; padding: 12px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid ${score.score >= PASS_SCORE ? '#10b981' : '#ef4444'};">
                    <div style="font-weight: 600; color: #374151;">Attempt ${index + 1}</div>
                    <div style="font-size: 1.2em; font-weight: 700; color: ${score.score >= PASS_SCORE ? '#10b981' : '#ef4444'};">
                        ${score.score}% ${status}
                    </div>
                    <div style="font-size: 0.9em; color: #6b7280;">
                        ${score.correct}/${TOTAL_QUESTIONS} correct • ${date}
                    </div>
                </div>
            `;
        }).join('');
    }
    
    modal.style.display = 'flex';
}

function closeScoreHistory() {
    document.getElementById('scoreHistoryModal').style.display = 'none';
}

// Salvar pontuação no histórico
function saveScoreToHistory(score, correct, total) {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    const newScore = {
        score: score,
        correct: correct,
        total: total,
        date: new Date().toISOString()
    };
    
    history.unshift(newScore);
    if (history.length > 10) history = history.slice(0, 10); // Manter apenas os últimos 10
    localStorage.setItem('quizHistory', JSON.stringify(history));
}

document.addEventListener('DOMContentLoaded', () => {
    const langDropdown = document.getElementById('languageDropdown');
    if (langDropdown) {
        currentLanguage = langDropdown.value;
    } else {
        currentLanguage = 'en';
    }
    applyLanguage();
    selectVersion('A');
    renderHistory();
});

window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.finishQuiz = finishQuiz;
window.viewDetailedResults = viewDetailedResults;
window.restartQuiz = restartQuiz;
window.hideDetailedResults = hideDetailedResults;
window.setLanguage = setLanguage;
window.selectVersion = selectVersion;
window.showReusabilityGuide = showReusabilityGuide;
window.showScoreHistory = showScoreHistory;
window.closeScoreHistory = closeScoreHistory; 