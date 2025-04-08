import { 
  FaHandshake,    // for Integrity
  FaComments,     // for Communication
  FaUserTie,      // for Client Centricity
  FaRunning,      // for Persistence
  FaAward         // for Excellence
} from "react-icons/fa";

export const values = [
  { name: "Integrity", icon: <FaHandshake className="text-3xl text-white" /> }, // Handshake represents honesty & trust
  { name: "Communication", icon: <FaComments className="text-3xl text-white" /> }, // Comments represent communication
  { name: "Client Centricity", icon: <FaUserTie className="text-3xl text-white" /> }, // Business professional icon
  { name: "Persistence", icon: <FaRunning className="text-3xl text-white" /> }, // Running figure for persistence and effort
  { name: "Excellence", icon: <FaAward className="text-3xl text-white" /> }, // Award for excellence and achievement
];
