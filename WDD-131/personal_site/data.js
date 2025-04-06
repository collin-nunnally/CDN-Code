const internalVulnerabilities = [
    { id: "1", name: "Weak Passwords", description: "Employees using simple or reused passwords that are easy to guess or crack.", severity: "Medium" },
    { id: "2", name: "Insider Threats", description: "Current or former employees who intentionally steal, leak, or damage data.", severity: "High" },
    { id: "3", name: "Lack of Access Control", description: "Too many users have access to sensitive data or systems they shouldn't.", severity: "High" },
    { id: "4", name: "Shadow IT", description: "Employees using unauthorized apps or tools without IT approval, creating blind spots.", severity: "Medium" },
    { id: "5", name: "Untrained Staff", description: "Employees not trained in cybersecurity best practices, making them vulnerable to social engineering.", severity: "Medium" }
];

const externalVulnerabilities = [
    { id: "1", name: "Phishing", description: "Deceptive emails or messages that trick users into revealing sensitive information.", severity: "High" },
    { id: "2", name: "DDoS Attacks", description: "Attackers flood a server or network with traffic to bring down services.", severity: "Medium" },
    { id: "3", name: "Zero-Day Exploits", description: "Attacks that target unknown vulnerabilities before a fix is available.", severity: "High" },
    { id: "4", name: "Ransomware", description: "Malware that encrypts a victim’s data and demands payment to restore access.", severity: "High" },
    { id: "5", name: "SQL Injection", description: "Attackers insert malicious SQL commands into web forms or URLs to access databases.", severity: "High" }
];
