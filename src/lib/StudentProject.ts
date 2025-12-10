export interface StudentProject {
  id: string;
  title: string;
  description: string;
  skills: string[];
  deadline?: string;
  status: "open" | "in-progress" | "completed";
}

export const studentProjects: StudentProject[] = [
  {
    id: "1",
    title: "Blockchain-Enhanced KYC System",
    description: "Research on a secure and decentralized framework for Identity Verification (KYC) using Blockchain Technology. Focuses on privacy-preserving mechanisms.",
    skills: ["Blockchain", "Smart Contracts", "Cryptography", "Web3"],
    status: "open",
  },
  {
    id: "2",
    title: "AI-Driven Phishing Email Detection",
    description: "Development of a Machine Learning-based system for real-time phishing email detection, including a Chrome Extension for Gmail integration.",
    skills: ["Machine Learning", "Natural Language Processing (NLP)", "Chrome Extension", "Python"],
    status: "open",
  },
  {
    id: "3",
    title: "5G Network Handover Optimization",
    description: "Design and implementation of seamless handover mechanisms for 5G Networks including WLAN to LTE transitions, focusing on reducing latency.",
    skills: ["5G Networks", "Network Protocols", "Python", "Network Simulation"],
    status: "open",
  },
  {
    id: "4",
    title: "IoT-Based Healthcare Monitoring System",
    description: "Research on autonomous healthcare systems using Deep Learning and Internet of Things (IoT) for continuous monitoring and adaptive treatment.",
    skills: ["Internet of Things (IoT)", "Deep Learning", "Healthcare Systems", "Sensor Networks"],
    status: "open",
  },
  {
    id: "5",
    title: "Cybersecurity Threat Detection Using ML",
    description: "Development of Explainable Machine Learning (XAI) models for real-time cyber-attack detection in Industrial IoT environments.",
    skills: ["Machine Learning", "Cybersecurity", "IoT Security", "TensorFlow"],
    status: "open",
  },
  {
    id: "6",
    title: "Smart Traffic Management System",
    description: "Creation of an AI-driven traffic management system for Smart Cities using Computer Vision for traffic flow optimization.",
    skills: ["Computer Vision", "Artificial Intelligence (AI)", "Smart Cities", "Python"],
    status: "open",
  },
  {
    id: "7",
    title: "ASL Translation Using CNN",
    description: "Development of a Convolutional Neural Network (CNN) based system to enhance American Sign Language (ASL) communication with gesture recognition.",
    skills: ["Computer Vision", "Convolutional Neural Networks (CNN)", "Deep Learning", "OpenCV"],
    status: "open",
  },
  {
    id: "8",
    title: "Document Query System Using RAG",
    description: "Building an interactive document query system using Retrieval-Augmented Generation (RAG) and LangChain for intelligent document understanding.",
    skills: ["Natural Language Processing (NLP)", "RAG", "LangChain", "Vector Databases"],
    status: "open",
  },
];