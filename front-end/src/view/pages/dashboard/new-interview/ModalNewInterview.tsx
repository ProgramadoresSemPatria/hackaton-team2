import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import Select from "../../../components/Select";
import ModalFeedbackCompany from "../feedback-company/ModalFeedbackCompany";
import useDashboard from "../use-dashboard";

interface ModalNewInterviewProps {
	isOpen: boolean
	onClose: () => void
}

export default function ModalNewInterview({ isOpen, onClose }: ModalNewInterviewProps) {
	const {handleOpenFeedbackCompany, isFeedbackCompanyOpen, handleCloseFeedbackComapny} = useDashboard()

	return (
		<Modal isOpen={isOpen}>
			<section className="flex flex-col gap-2 text-color-font">
				<Input placeholder="Cargo" type="text" />

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
					<Select label="É internacional?" options={["Sim", "Não"]} />
					<Input placeholder="Equity" type="text" />
				</div>

				<Input placeholder="Link da vaga" type="text" />

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
					<Input placeholder="Nome da empresa" type="text" />
					<Input placeholder="Site da empresa" type="text" />
				</div>

				<Input placeholder="Contato direto na empresa" type="text" />

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
					<Input placeholder="Telefone da empresa" type="tel" />
					<Select label="Status" options={["Aberta", "Fechada"]} />
				</div>

				<div className="flex flex-col-reverse sm:grid sm:grid-cols-2 gap-3">
					<a
						onClick={handleOpenFeedbackCompany}
						href="#"
						className="underline flex items-center justify-center hover:text-place-color duration-150 ease-linear font-semibold"
					>
						Feedback da empresa
					</a>
					<Input
						placeholder="Data da entrevista"
						type="date"
						className="scheme-dark"
					/>
				</div>

				<footer className="flex flex-col-reverse sm:grid grid-cols-2 mt-4 gap-2">
					<a
						onClick={onClose}
						href="#"
						className="p-3 text-center hover:text-place-color transition-colors duration-150 ease-linear  font-semibold"
					>
						Fechar
					</a>
					<Button name="Salvar" />
				</footer>
				<ModalFeedbackCompany isOpen={isFeedbackCompanyOpen} onClose={handleCloseFeedbackComapny} />
			</section>
		</Modal>
	);
}
