// data.js

window.texts = {
    en: {
        "main-title": "AI Agent Studio Foundations Associate",
        subtitle: "Certification Exam Simulator - Real Past Exam Questions",
        welcome: "Welcome to the Exam Simulator!",
        description: "Practice with real questions from previous certification exams. Aim for 65% to pass!",
        "quiz-info-title": "📋 Simulator Information:",
        "info-1": "25 unique certification questions per session",
        "info-2": "Questions are randomized for each quiz attempt",
        "info-3": "Focus: Templates, Tools, Security, Metrics",
        "info-4": "Detailed feedback and explanations provided at the end",
        "info-5": "✨ Enhanced explanations available for each question!",
        "start-quiz": "🚀 Start Simulator",
        "question-label": "Question",
        of: "of",
        previous: "⬅️ Previous",
        next: "Next ➡️",
        finish: "🏁 Finish",
        completed: "🎉 Simulator Completed!",
        "correct-label": "Correct",
        "incorrect-label": "Incorrect",
        "time-used": "Total Time",
        status: "Status",
        restart: "🔄 Try Again",
        "tip-title": "💡 Strategy Tip:",
        approved: "PASSED ✅",
        failed: "FAILED ❌",
        "view-details": "🔍 View Detailed Results",
        "detailed-results-title": "Detailed Results",
        "back-to-summary": "⬅️ Back to Summary",
        your_answer: "Your Answer:",
        correct_answer: "Correct Answer:",
        explanation_label: "Explanation:",
        tip_label: "Strategy Tip:",
        "enhanced-explanation": "✨ Get Enhanced Explanation",
        "fetching-explanation": "Fetching enhanced explanation:",
        "multi-select-instruction": "Please select the required number of options.",
        "ai-generated-tag": "(AI-generated Question)",
        "official-tag": "(Real Past Exam Question)",
        "key-concepts-label": "Key Concepts to Remember:",
        "history-title": "Last 3 Attempts",
        "history-score": "Score:",
        "history-date": "Date:",
        "history-view": "View"
    }
};

window.officialQuestionBank = [
    { id: 'q1', type: 'multiple', en: { question: "A supply chain specialist uses the Outbound Compliance Agent template but needs to ensure the agent accounts for recently updated hazardous material regulations. In which two ways can the specialist customize the OCTB agent?", options: [ "Remove access to business object tools to restrict data retrieval", "Create additional topics to address specific regulation updates", "Revise the system prompt to provide information on new regulatory requirements", "Replace the semantic search function with manual document lookup" ], correct: [1, 2], explanation: "To customize OCTB agents, you can create additional topics for specific regulations and revise the system prompt with new regulatory requirements. These are the two main customization methods.", tip: "When the question mentions 'two ways', look for options involving content customization (topics) and configuration (system prompts)." } },
    { id: 'q2', type: 'multiple', en: { question: "A sales leader wants agents to generate customer communications that match their company's tone. Which two customizations should the sales leader make to the agent template?", options: [ "Create additional topics depicting various customer interaction scenarios", "Disable LLM-based content generation", "Limit the agent to internal notification messages only", "Modify the system prompt to specify tone and language preferences" ], correct: [0, 3], explanation: "To ensure agent communications match company tone, the sales leader should create additional topics for interaction scenarios and modify the system prompt to specify tone and language preferences.", tip: "Agent tone and content are primarily controlled by topics and the system prompt." } },
    { id: 'q3', type: 'single', en: { question: "When preparing to test agents in AI Agent Studio, how do you use evaluation test data?", options: [ "Use evaluation test data to automatically fine-tune the LLM behind the agent", "Upload a collection of test inputs and reference answers to compare agent performance during offline testing", "Add evaluation sets to determine which business objects are available to the agent at runtime" ], correct: [1], explanation: "Evaluation test data is used to upload test inputs and reference answers, allowing performance comparison during offline testing before deployment.", tip: "Evaluation testing = Offline comparison. Always involves test inputs and reference answers for validation." } },
    // ... (repita para todas as perguntas em inglês do seu HTML)
]; 