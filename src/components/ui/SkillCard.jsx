import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-primary p-6 rounded-xl border border-gray-800 flex items-center gap-4"
    >
      <Icon 
        icon={`skill-icons:${skill.icon}`} 
        className="text-4xl" 
      />
      <span className="font-medium">{skill.name}</span>
    </motion.div>
  );
};

export default SkillCard;