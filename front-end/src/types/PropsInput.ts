export interface PropsInput {
	id?: string;
	placeholder: string;
	requiredInput?: boolean;
	type: "text" | "e-mail" | "date" | "password" | "number" | "tel";
	value?: string;
}
