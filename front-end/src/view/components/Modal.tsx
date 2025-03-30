import { ModalProps } from "../../types/PropsModal";

export default function Modal({ children, isOpen }: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="bg-black/50 p-8 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 flex justify-center items-center w-full h-full">
      <div className="py-6 px-8 rounded-lg bg-primary-color-darker w-full max-w-lg  max-h-135 overflow-y-scroll">
        {children}
      </div>
    </div>
  );
}
