import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

interface ModalFeedbackCompanyProps {
    isOpen: boolean
    onClose: () => void
}

export default function ModalFeedbackCompany({ isOpen, onClose }: ModalFeedbackCompanyProps) {
    return(
        <Modal isOpen={isOpen}>
            <section className="text-color-font flex flex-col gap-3">
                <h2 className="font-semibold text-center sm:text-left mb-2">Qual foi o feedback da empresa?</h2>

                {/* OBS: exclude this code when creating the "BigInput" component */}
                <textarea aria-label="Campo para inserir feedback da empresa"
                          autoFocus 
                          rows={6} 
                          className="w-full resize-none bg-bg-input rounded-lg p-4 outline-none"></textarea>

                <footer className="flex flex-col-reverse items-center sm:grid sm:grid-cols-2 gap-3 mt-3">
                    <a onClick={onClose} href="#" className="text-center hover:text-place-color transition-colors duration-150 ease-linear p-3">Pular</a>
                    <Button name="Salvar"/>
                </footer>
            </section>
        </Modal>
    )
}