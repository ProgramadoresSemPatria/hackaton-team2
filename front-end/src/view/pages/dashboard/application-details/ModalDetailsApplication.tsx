import Modal from "../../../components/Modal";
import Button from "../../../components/Button";

interface PropsModalDetailsApplication {
	isOpen: boolean;
	onClose: () => void;
}

export default function ModalDetailsApplication({
	isOpen,
	onClose,
}: PropsModalDetailsApplication) {
	return (
		<>
			<Modal isOpen={isOpen}>
				<section className="text-white font-inter flex flex-col gap-2 ">
					<header className="mb-2">
						<h2 className="font-semibold sm:text-2xl text-color-font mb-1">
							Fullstack Engineer - Google LLC
						</h2>
						<p className="text-place-color font-semibold">
							$140,000 - No Equity
						</p>
					</header>
					<div className="my-1">
						<a href="#" className="underline">
							www.google.com/careers/123
						</a>
						<p className="text-place-color">Link da vaga</p>
					</div>

					<div className="grid gap-5 grid-cols-1 sm:grid-cols-2 2xl:grid-cols-2 mt-3 mb-5">
						<div>
							<p>-</p>
							<p className="text-place-color">Telefone da empresa</p>
						</div>
						<div>
							<p>Sim</p>
							<p className="text-place-color">É internacional?</p>
						</div>
						<div>
							<a href="#" className="underline">
								linkedin.com/john-doe
							</a>
							<p className="text-place-color">Contato direto na empresa</p>
						</div>
						<div>
							<p>Entrevista com RH</p>
							<p className="text-place-color">Status</p>
						</div>
					</div>
					<footer className="flex flex-col-reverse items-center sm:grid grid-cols-2 gap-2 mt-1 sm:mt-5">
						<button
							onClick={onClose}
							className="text-center hover:text-primary-color transition-colors duration-150 ease-linear hover:cursor-pointer"
						>
							Fechar
						</button>
						<Button name="Editar" icon="edit" />
					</footer>
				</section>
			</Modal>
		</>
	);
}
