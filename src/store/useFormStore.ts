import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import submitForm from "../api/submitForm";

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
	phoneNumber: "",
	isSubmitting: false,
	paymentStatus: "",
};

const useFormStore = create<FormState>()(
	devtools((set, get) => ({
		...initialState,
		setSelectedAttendance: (selectedAttendance: any) =>
			set(() => ({ selectedAttendance })),
		setFirstName: (firstName: string) => set(() => ({ firstName })),
		setLastName: (lastName: string) => set(() => ({ lastName })),
		setEmail: (email: string) => set(() => ({ email })),
		setPhoneNumber: (phoneNumber: number) => set(() => ({ phoneNumber })),
		submitForm: async () => {
			set(() => ({ isSubmitting: true }));

			await submitForm({
				firstName: get().firstName,
				lastName: get().lastName,
				phoneNumber: get().phoneNumber,
				attendance: get().selectedAttendance.value,
			});

			set(() => ({ isSubmitting: false, paymentStatus: "processing" }));
		},
	}))
);

export default useFormStore;
