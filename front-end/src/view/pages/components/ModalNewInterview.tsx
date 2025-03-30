import Button from "../../components/Button";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import Select from "../../components/Select";

export default function ModalNewInterview() {
	return (
		<Modal isOpen={true}>
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
						href="#"
						className="underline flex items-center justify-center hover:text-primary-color duration-150 ease-linear"
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
						href="#"
						className="p-3 text-center hover:text-primary-color transition-colors duration-150 ease-linear"
					>
						Fechar
					</a>
					<Button name="Salvar" />
				</footer>
			</section>
		</Modal>
	);
}
