import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";

export default function ModalNewInterview() {
    return (
        <Modal isOpen={true}>
            <section className="flex flex-col gap-2 text-color-font">

                <Input placeholder="Cargo" 
                       type="text"/>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input type="text" 
                           placeholder="É Internacional?" 
                           list="optInternacional" 
                           className="p-4 bg-bg-input placeholder-place-color rounded-lg text-zinc-200 outline-none my-2 w-full"
                    />

                    <Input placeholder="Equity" 
                           type="text"/>

                    <datalist id="optInternacional">
                        <option value="Sim"/>
                        <option value="Não"/>
                    </datalist>
                </div> 

                <Input placeholder="Link da vaga" 
                       type="text"/>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Input placeholder="Nome da empresa" 
                           type="text"/>

                    <Input placeholder="Site da empresa" 
                           type="text"/>
                </div>

                <Input placeholder="Contato direto na empresa" 
                       type="text"/>
                       
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <Input placeholder="Telefone da empresa" 
                           type="tel"/>

                    <input type="text" placeholder="Status" 
                           list="optStatus"
                           className="p-4 bg-bg-input placeholder-place-color rounded-lg text-zinc-200 outline-none my-2 w-full" />

                    <datalist id="optStatus">
                        <option value="Aberta"/>
                        <option value="Fechada"/>
                    </datalist>
                </div>

                <div className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-3">
                    <a href="#" className="underline flex items-center justify-center hover:text-primary-color duration-150 ease-linear">Feedback da empresa</a>
                    <Input placeholder="Data da entrevista" type="date" className="scheme-dark"/>
                </div>

                <footer className="flex flex-col-reverse sm:grid grid-cols-2 mt-4 gap-2">
                    <a href="#" className="p-3 text-center hover:text-primary-color transition-colors duration-150 ease-linear">Fechar</a>
                    <Button name="Salvar"/>
                </footer>

            </section>
        </Modal>
    )
}