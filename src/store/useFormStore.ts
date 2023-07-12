import { create } from "zustand";

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
};

const useFormStore = create((set) => ({
	...initialState,
	setSelectedAttendance: (selectedAttendance: any) =>
		set((state: FormState) => ({ selectedAttendance })),
	setFirstName: (firstName: string) =>
		set((state: FormState) => ({ firstName })),
	setLastName: (lastName: string) => set((state: FormState) => ({ lastName })),
	setEmail: (email: string) => set((state: FormState) => ({ email })),
	setPhoneNumber: (phoneNumber: number) =>
		set((state: FormState) => ({ phoneNumber })),
}));

export default useFormStore;
