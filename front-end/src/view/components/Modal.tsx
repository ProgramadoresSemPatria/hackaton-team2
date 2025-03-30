import { useEffect } from "react";
import { ModalProps } from "../../types/PropsModal";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ children, isOpen }: ModalProps) {

  useEffect(() => {
    if(isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = ""
      document.body.style.paddingRight = "";
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && <motion.div
                    className="bg-black/50 p-8 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 flex justify-center items-center w-full h-full"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}>
                      <motion.div
                        className="py-6 px-8 rounded-lg bg-primary-color-darker w-full max-h-135 max-w-lg overflow-auto"
                        initial={{scale: 0.8, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.8, opacity: 0}}
                        transition={{duration: 0.2}}>
                        {children}
                      </motion.div>
                 </motion.div>}
    </AnimatePresence>
  )
}
