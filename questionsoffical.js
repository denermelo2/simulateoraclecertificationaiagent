window.officialQuestionBank = [
  {
    id: 'q1',
    type: 'multiple',
    en: {
      question: "A supply chain specialist uses the Outbound Compliance Agent template but needs to ensure the agent accounts for recently updated hazardous material regulations. In which two ways can the specialist customize the OCTB agent?",
      options: [
        "Remove access to business object tools to restrict data retrieval",
        "Create additional topics to address specific regulation updates",
        "Revise the system prompt to provide information on new regulatory requirements",
        "Replace the semantic search function with manual document lookup"
      ],
      correct: [1, 2],
      explanation: "To customize OCTB agents, you can create additional topics for specific regulations and revise the system prompt with new regulatory requirements. These are the two main customization methods.",
      tip: "When the question mentions 'two ways', look for options involving content customization (topics) and configuration (system prompts)."
    }
  },
  {
    id: 'q2',
    type: 'multiple',
    en: {
      question: "A sales leader wants agents to generate customer communications that match their company's tone. Which two customizations should the sales leader make to the agent template?",
      options: [
        "Create additional topics depicting various customer interaction scenarios",
        "Disable LLM-based content generation",
        "Limit the agent to internal notification messages only",
        "Modify the system prompt to specify tone and language preferences"
      ],
      correct: [0, 3],
      explanation: "To ensure agent communications match company tone, the sales leader should create additional topics for interaction scenarios and modify the system prompt to specify tone and language preferences.",
      tip: "Agent tone and content are primarily controlled by topics and the system prompt."
    }
  },
  {
    id: 'q3',
    type: 'single',
    en: {
      question: "When preparing to test agents in AI Agent Studio, how do you use evaluation test data?",
      options: [
        "Use evaluation test data to automatically fine-tune the LLM behind the agent",
        "Upload a collection of test inputs and reference answers to compare agent performance during offline testing",
        "Add evaluation sets to determine which business objects are available to the agent at runtime"
      ],
      correct: [1],
      explanation: "Evaluation test data is used to upload test inputs and reference answers, allowing performance comparison during offline testing before deployment.",
      tip: "Evaluation testing = Offline comparison. Always involves test inputs and reference answers for validation."
    }
  },    
  {
  id: 'q12',
  type: 'single',
  en: {
    question: "A retail company needs to streamline its order to cash process by using an AI Agent in Oracle AI Agent Studio to generate invoices and send them directly to customers. Which two tools are required to build this automation?",
    options: [
      "Business Object tool for accessing invoice data and Email tool for sending customer communications",
      "External REST tool for connecting to a payment gateway and Deep Link tool for directing users to account pages",
      "Document tool for uploading invoices and Calculator tool for verifying accurate invoices",
      "Notification tool for sending SMS alerts and User Session tool for customizing interface themes"
    ],
    correct: [0],
    explanation: "To generate and send invoices to customers, the Business Object tool for accessing invoice data and the Email tool for customer communications are required.",
    tip: "Invoice generation and communication: think about accessing transactional data (Business Object) and sending (Email)."
  }
},
{
  id: 'q13',
  type: 'multiple',
  en: {
    question: "When configuring agents in Oracle AI Agent Studio, which two types of tools can be included within agent workflows?",
    options: [
      "External REST tools for connecting to other systems",
      "Business Object tool for data transactions",
      "Formula Builder tools for financial forecasting",
      "Survey tools for collecting employee feedback"
    ],
    correct: [0, 1],
    explanation: "When configuring agents, External REST tools (for connecting to other systems) and Business Object tools (for data transactions) can be included in agent workflows.",
    tip: "Agent workflows focus on data (Business Object) and integration (External REST)."
  }
},
{
  id: 'q14',
  type: 'single',
  en: {
    question: "A developer notices that not all agents have access to sensitive customer information. Which feature of AI Agent Studio controls data that each agent can use?",
    options: [
      "Fusion's role-based access controls",
      "Pre-configured system prompts",
      "Document tool folder permissions",
      "Integrations defined in REST tool"
    ],
    correct: [0],
    explanation: "Fusion's role-based access controls dictate which data each agent can use, ensuring sensitive information access is securely managed.",
    tip: "Sensitive data access = Fusion's role-based access controls. It's the fundamental security layer."
  }
},
{
    id: 'q15',
    type: 'single',
    en: {
      question: "For an AI Agent configured to update employee data in Fusion Applications, what method within AI Agent Studio ensures sensitive changes are securely managed?",
      options: [
        "Configure the agent to send alerts to stakeholders after sensitive data is updated",
        "Add a human-in-the-loop step that requires approval before changing sensitive data",
        "Set agent permissions to restrict certain update actions to specific business hours"
      ],
      correct: [1],
      explanation: "To securely manage sensitive changes to employee data, a 'human-in-the-loop' step requiring approval before modifying sensitive data is the most effective method.",
      tip: "Sensitive changes = Human approval. Always look for 'human-in-the-loop' to ensure security and oversight."
    }
  },
  {
    id: 'q16',
    type: 'single',
    en: {
      question: "What are the components of Oracle AI Agent Studio?",
      options: [
        "Workflow templates, custom scripts, and scheduling triggers",
        "Process orchestrators, data connectors, and security profiles",
        "Agent teams, tools, templates, and topics"
      ],
      correct: [1],
      explanation: "The core components of Oracle AI Agent Studio are process orchestrators, data connectors, and security profiles, which work together to build and manage AI agents.",
      tip: "Think about the architecture: Orchestration (how it works), Connection (where it gets data), and Security (how it protects)."
    }
  },
  {
    id: 'q17',
    type: 'single',
    en: {
      question: "What is the role of the Topic Builder in Oracle AI Agent Studio?",
      options: [
        "To define automation rules for Oracle Cloud infrastructure",
        "To connect agents to Fusion business processes via APIs",
        "To create reusable conversation flows and control agent behavior"
      ],
      correct: [2],
      explanation: "The Topic Builder is used to create reusable conversation flows, guiding how the agent responds and interacts with users.",
      tip: "Topic Builder = Conversation flow designer. Think control over dialogue structure."
    }
  },
  {
    id: 'q18',
    type: 'single',
    en: {
      question: "What does the Deep Link tool enable in Oracle AI Agent Studio?",
      options: [
        "It allows embedding AI agents into third-party chat platforms",
        "It lets the agent directly navigate users to specific pages within Fusion Applications",
        "It enables the agent to perform calculations based on transaction history"
      ],
      correct: [1],
      explanation: "The Deep Link tool allows agents to generate links that take users directly to relevant pages in Fusion Applications.",
      tip: "Deep Link = Direct Navigation. Think about quick access to Fusion UI pages."
    }
  },
  {
    id: 'q19',
    type: 'multiple',
    en: {
      question: "Which two elements help maintain transparency and traceability in AI Agent decision-making?",
      options: [
        "Prompt injection mitigation tools",
        "Conversation transcript history",
        "Semantic search score display",
        "Audit logs of agent actions"
      ],
      correct: [1, 3],
      explanation: "Transcript history and audit logs are key to understanding past agent decisions and maintaining transparency.",
      tip: "Transparency = See what happened. Think transcripts + logs."
    }
  },
  {
    id: 'q20',
    type: 'single',
    en: {
      question: "Which feature in Oracle AI Agent Studio helps detect and prevent malicious inputs such as prompt injection?",
      options: [
        "Audit logs",
        "Content safety filter",
        "Data masking"
      ],
      correct: [1],
      explanation: "The content safety filter detects and blocks harmful or manipulative inputs to protect agent integrity.",
      tip: "Prompt injection defense = Content safety. Think prevention layer for LLM misuse."
    }
  },
  {
    id: 'q21',
    type: 'single',
    en: {
      question: "Which metric is used to calculate the financial cost of using an AI Agent?",
      options: [
        "Tokens consumed",
        "Accuracy",
        "Latency",
        "Number of users"
      ],
      correct: [0],
      explanation: "The financial cost of using an AI Agent is calculated based on tokens consumed, as they represent the volume of processing and interaction with the LLM.",
      tip: "AI financial cost = Tokens consumed. It's the standard metric for language model usage pricing."
    }
  },
  {
    id: 'q22',
    type: 'single',
    en: {
      question: "How do you assess the output quality of two versions of an agent?",
      options: [
        "Run an evaluation of each agent using expected inputs and outputs",
        "Analyze token counts for each agent in the Metrics Reporting Dashboard",
        "Change the agent's system prompt in AI Studio while they are running"
      ],
      correct: [0],
      explanation: "To assess the output quality of two agent versions, you should run an evaluation of each agent using expected inputs and outputs for direct comparison.",
      tip: "Compare version quality = Run evaluation with expected inputs/outputs. It's the most direct way to measure improvement."
    }
  },
  {
    id: 'q23',
    type: 'single',
    en: {
      question: "How do you use the agent tracing feature in the Metrics Reporting Dashboard?",
      options: [
        "To update agent security permissions based on detected access vulnerabilities",
        "To review specific prompts for analyzing inputs, outputs, and performance metrics",
        "To modify an agent's security roles directly from the trace files"
      ],
      correct: [1],
      explanation: "The agent tracing feature in the Metrics Reporting Dashboard is used to review specific prompts for analyzing agent inputs, outputs, and performance metrics.",
      tip: "Tracing = Flow tracking. Think about understanding the path and data the agent used."
    }
  },
  {
    id: 'q24',
    type: 'multiple',
    en: {
      question: "Executives require high-level report on how often agents run into errors, how quickly most queries are resolved, and the general quality of the agents' performance for quarterly review. Which two metrics in AI Agent Studio would deliver the required insights?",
      options: [
        "Prompt Injection",
        "LLM Requests",
        "Median Correctness",
        "Error Rate and Median/P99 Latency Reporting"
      ],
      correct: [2, 3],
      explanation: "For executive reports on errors, query resolution, and overall quality, 'Median Correctness' and 'Error Rate and Median/P99 Latency Reporting' metrics are the most relevant.",
      tip: "High-level executive report = Quality (Correctness) and efficiency (Error Rate, Latency) metrics."
    }
  },
  {
    id: 'q25',
    type: 'single',
    en: {
      question: "A company wants to implement an AI Agent to automate its customer service process. They want to use a tool to integrate with their CRM system to retrieve customer data. What type of tool should they use?",
      options: [
        "Document tool",
        "External REST tool",
        "Email tool",
        "Business Object tool"
      ],
      correct: [1],
      explanation: "To integrate with an external CRM system and retrieve customer data, the External REST tool is appropriate as it facilitates communication with external systems.",
      tip: "Integration with external systems (CRM) = External REST tool."
    }
  },
  {
    id: 'q26',
    type: 'single',
    en: {
      question: "A developer wants an agent to integrate data from inventory management system using the system's public API. Which tool can meet this requirement?",
      options: [
        "Business Object tool, to connect to data in Fusion",
        "Document tool, to ensure inventory levels are correct",
        "Email tool, to send inventory level alerts",
        "External REST tool, to connect to a system outside of Fusion"
      ],
      correct: [3],
      explanation: "To integrate data from an inventory management system using its public API, the External REST tool is ideal as it allows connection to systems outside Fusion.",
      tip: "Integration via public API = External REST tool. It's the tool of choice for interactions with external systems."
    }
  },
  {
    id: 'q27',
    type: 'single',
    en: {
      question: "Which tool can be used for enabling an agent to send summary notifications to users after key transactions?",
      options: [
        "Deep Link tool, to send users to specific pages",
        "Business Object tool, to record transaction metadata",
        "Calculator tool, to compute notification frequencies",
        "Email tool, to write and send summary emails to recipients"
      ],
      correct: [3],
      explanation: "To enable an agent to send summary notifications to users after key transactions, the Email tool is the most appropriate as it can draft and send summary emails to recipients.",
      tip: "Summary notifications = Email tool. When communication is via email."
    }
  },
  {
    id: 'q28',
    type: 'single',
    en: {
      question: "A department requires an agent workflow that must access data in a third party system and custom data objects with Fusion Applications. What should the department do to build this agent in AI Agent Studio?",
      options: [
        "Build the agent workflow from scratch",
        "Use generative AI services instead of an agent",
        "Select and customize a pre-built agent template",
        "Add an email tool to the agent workflow"
      ],
      correct: [2],
      explanation: "To build an agent that accesses data in a third-party system and custom data objects with Fusion Applications, the department should select and customize a pre-built agent template.",
      tip: "When there's a need for third-party integration and custom data, a pre-built (OOTB) template with customization is the most efficient approach."
    }
  },
  {
    id: 'q29',
    type: 'single',
    en: {
      question: "An agent needs to summarize information from uploaded company manuals or guides to provide up-to-date answers for users. Which tool in AI Agent Studio should be used?",
      options: [
        "Accuracy tool, to determine how many answers are correct",
        "Document tool, to enable semantic search to base responses in unstructured documents",
        "Business Object tool, to change information found in the manuals or guides",
        "Deep Link tool, to direct users to relevant pages or application interfaces"
      ],
      correct: [1],
      explanation: "To summarize information from manuals or guides and provide up-to-date answers, the Document tool is ideal as it enables semantic search in unstructured documents.",
      tip: "Summarizing documents/manuals = Document tool. It's the tool for handling textual content."
    }
  },
  {
    id: 'q30',
    type: 'multiple',
    en: {
      question: "When working in AI Agent Studio, what are the two reasons a user might decide to clone an out-of-the-box (OOTB) agent template?",
      options: [
        "To bypass Fusion's role-based security controls for agent operations",
        "To extend the agent's functionality by adding new tools or integrations unique to a use case",
        "To customize the agent's system prompts and topics for organization-specific requirements",
        "To publish the cloned agent directly to Oracle Partner Marketplace"
      ],
      correct: [1, 2],
      explanation: "A user might clone an OOTB agent template to extend the agent's functionality by adding new tools or integrations and to customize the agent's system prompts and topics for organization-specific requirements.",
      tip: "Clone OOTB = Extend functionality + Customize for specific requirements. It's about customization without reinventing the wheel."
    }
  },
  {
    id: 'q31',
    type: 'single',
    en: {
      question: "An HR manager wants a solution that allows managers to access employee information and initiate transactions like promotions within a single conversational interface. When selecting a pre-built agent template for this purpose, which OOTB agent should be used?",
      options: [
        "Pay Analyst agent, which provides automated notifications for payroll cycle completions",
        "Personal and Employment Details Agent, which retrieves personal and employment details and can generate deep links for HR transactions",
        "Compensation Advisor, which manages the workflow for approving new benefits enrollments",
        "Leave and Absence Analyst which creates and sends summary reports of team vacation usage to upper management"
      ],
      correct: [1],
      explanation: "The 'Personal and Employment Details Agent' is the most suitable OOTB template, as it allows access to personal and employment details and can generate deep links for HR transactions, meeting the HR manager's needs.",
      tip: "Access to employee information and HR transactions = Personal and Employment Details Agent. It's the most comprehensive for this scenario."
    }
  },
  {
    id: 'q32',
    type: 'multiple',
    en: {
      question: "Which two scenarios require an agent to use the External REST tool?",
      options: [
        "When an agent is expected to pause for a set period of time before responding",
        "When an agent needs to retrieve data from an internal compliance database",
        "When an agent needs to perform calculations on Fusion business objects",
        "When an agent needs to access data from a third-party logistics systems"
      ],
      correct: [1, 3],
      explanation: "The External REST tool is required when an agent needs to retrieve data from an internal compliance database (if it's a REST API) or access data from third-party logistics systems, as both involve communication with external systems or APIs.",
      tip: "External REST = Integration with systems outside Fusion or APIs (whether internal or third-party)."
    }
  },
  {
    id: 'q33',
    type: 'single',
    en: {
      question: "The HR team wants to provide employees with a self-service agent that can answer questions about the company's medical, dental, and vision benefits. Which OOTB Agent template fits this scenario?",
      options: [
        "Benefits Agent",
        "Help Desk Knowledge Agent",
        "SR Triage Agent",
        "Narrative Reporting Agent"
      ],
      correct: [0],
      explanation: "For a self-service agent answering questions about benefits (medical, dental, vision), the 'Benefits Agent' OOTB template is the most appropriate.",
      tip: "Questions about benefits = Benefits Agent. Self-explanatory name."
    }
  },
  {
    id: 'q34',
    type: 'single',
    en: {
      question: "Which pre-built agent in Oracle Fusion HCM enables users to review salary progression, additional compensation, and compare salary decisions for their teams based on market trends and benchmarks, across employees?",
      options: [
        "Compensation Agent",
        "Personal and Employment Details Agent",
        "Payslip Agent",
        "Benefits Agent"
      ],
      correct: [1],
      explanation: "The 'Personal and Employment Details Agent' in Oracle Fusion HCM enables users to review salary progression, additional compensation, and compare salary decisions based on market trends and benchmarks.",
      tip: "Salary and compensation review based on benchmarks = Personal and Employment Details Agent. Comprehensive for HR details."
    }
  },
  {
    id: 'q35',
    type: 'multiple',
    en: {
      question: "An HR administrator wants to quickly deploy an agent to help employees navigate company benefits and tailor the agent's responses to their organization's specific policies. Which two steps can the administrator take using prebuilt templates in AI Agent Studio?",
      options: [
        "Modify the agent's source code within the template editor",
        "Customize the system prompt of the Benefits Agent template with company policy details",
        "Adjust the agent's topics to cover organization-specific benefits scenarios",
        "Import policy data by uploading documents directly to the agent template"
      ],
      correct: [1, 2],
      explanation: "To quickly deploy an agent and tailor its responses based on specific policies, the HR administrator can customize the system prompt of the 'Benefits Agent' template and adjust the agent's topics to cover organization-specific benefits scenarios.",
      tip: "Customizing prebuilt agents for specific policies = Customize system prompt + Adjust topics."
    }
  },
  {
    id: 'q36',
    type: 'multiple',
    en: {
      question: "When using prebuilt templates in AI Agent Studio, which two actions are supported?",
      options: [
        "Designing single-agent workflows to meet business requirements",
        "Scheduling automatic deletion of inactive agent templates after a set period",
        "Configuring and deploying Oracle-delivered agents rapidly using a catalog of templates",
        "Importing existing agents from external cloud platforms for template customization"
      ],
      correct: [0, 2],
      explanation: "When using prebuilt templates in AI Agent Studio, two supported actions are designing single-agent workflows to meet business requirements and rapidly configuring and deploying Oracle-delivered agents using a template catalog.",
      tip: "Prebuilt templates = Accelerated development (designing workflows) and rapid deployment (configuring and deploying)."
    }
  },
  {
    id: 'q37',
    type: 'multiple',
    en: {
      question: "Before publishing a new agent built from a template in AI Agent Studio, which two actions must be completed?",
      options: [
        "Assigning the agent to a business object group for version control",
        "Configuring user session parameters to enable semantic search",
        "Performing design time/offline testing to ensure the agent works correctly",
        "Reviewing and adjusting the agent's system prompt and topics as needed"
      ],
      correct: [2, 3],
      explanation: "Before publishing a new agent built from a template, it is crucial to perform design time/offline testing to ensure the agent works correctly and to review and adjust the agent's system prompt and topics as needed.",
      tip: "Pre-publication = Functionality testing + Prompt/topic fine-tuning. Ensure it works and communication is correct."
    }
  },
  {
    id: 'q38',
    type: 'multiple',
    en: {
      question: "A finance team wants to automate the creation of narrative reports using AI Agent Studio. Which two methods are available to streamline report generation?",
      options: [
        "Enable multi-language support for narrative reports by adjusting agent workflow settings",
        "Use a prebuilt agent template designed for narrative reporting",
        "Change the data visualization library used by the narrative reporting agent template",
        "Customize the system prompt to align the agent's tone and content to company standards"
      ],
      correct: [1, 3],
      explanation: "To automate narrative report creation, the finance team can use a prebuilt agent template designed for narrative reporting and customize the system prompt to align the agent's tone and content with company standards.",
      tip: "Narrative report generation = Prebuilt template (for structure) + Prompt customization (for tone/content)."
    }
  },
  {
    id: 'q39',
    type: 'single',
    en: {
      question: "Your support lead wants to optimize agent workflow for both accuracy and customer wait time. Which combination of metrics should they use?",
      options: [
        "Input and Output Token Counts",
        "Token Usage and Latency",
        "Error Rate and User Token",
        "Correctness and Latency"
      ],
      correct: [3],
      explanation: "To optimize agent workflow for both accuracy and customer wait time, the combination of metrics that should be used is 'Correctness' and 'Latency'.",
      tip: "Workflow optimization = Accuracy (Correctness) and Speed (Latency). These are the essential metrics for performance and customer satisfaction."
    }
  },
  {
    id: 'q40',
    type: 'single',
    en: {
      question: "You are reviewing an agent that is in production. Your client wants you to improve the agent's logic and requires you to build a new version. To confirm that an agent's logic has improved in a new version after deployment, which AI Agent Studio capability should you use?",
      options: [
        "Perform a semantic search for similarity of the two versions",
        "Use the Document tool to compare the versions",
        "Run a comparative analysis of the two versions"
      ],
      correct: [2],
      explanation: "To confirm that an agent's logic has improved in a new version after deployment, you should run a comparative analysis of the two versions.",
      tip: "Post-deployment logic improvement = Comparative analysis. It's the most robust way to validate improvement."
    }
  }
];


