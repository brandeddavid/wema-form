import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type FormState = any;

const initialState = {
	attendanceType: [
		{
			label: "Playing golf",
			value: "playing-golf",
			amount: 2500,
		},
		{
			label: "Dinner Only",
			value: "dinner-only",
			amount: 2000,
		},
	],
	selectedAttendance: {
		label: "Playing golf",
		value: "playing-golf",
		amount: 2500,
	},
	firstName: "",
	lastName: "",
	email: "",
	phoneNumber: null,
	isSubmitting: false,
};

const useFormStore = create()(
	devtools(
		persist(
			(set) => ({
				...initialState,
				setSelectedAttendance: (selectedAttendance: any) =>
					set((state: FormState) => ({ selectedAttendance })),
				setFirstName: (firstName: string) =>
					set((state: FormState) => ({ firstName })),
				setLastName: (lastName: string) =>
					set((state: FormState) => ({ lastName })),
				setEmail: (email: string) => set((state: FormState) => ({ email })),
				setPhoneNumber: (phoneNumber: number) =>
					set((state: FormState) => ({ phoneNumber })),
				subitForm: async () => {
					set((state: FormState) => ({ isSubmitting: true }));
				},
			}),
			{ name: "form-store" }
		)
	)
);

export default useFormStore;
