import { create } from "zustand";
import { devtools } from "zustand/middleware";
import submitForm from "../api/submitForm";
import verifyTransaction from "../api/verifyTransaction";

export type FormState = any;

const initialState = {
	attendanceType: [
		{
			label: "Playing golf",
			value: "playing-golf",
			amount: 1,
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
		amount: 1,
	},
	firstName: "",
	lastName: "",
	email: "",
	phoneNumber: "",
	isSubmitting: false,
	paymentStatus: "",
	traceId: "",
	isVerifying: false,
	verified: false,
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
			set(() => ({ isSubmitting: true, verified: false }));

			const { traceId }: any = await submitForm({
				firstName: get().firstName,
				lastName: get().lastName,
				phoneNumber: get().phoneNumber,
				attendanceType: get().selectedAttendance.value,
				amount: get().selectedAttendance.amount,
			});

			set(() => ({
				isSubmitting: false,
				paymentStatus: "processing",
				traceId,
			}));
		},
		verifyTransaction: async () => {
			set(() => ({ isVerifying: true }));

			const { decodedStatus }: any = await verifyTransaction({
				traceId: get().traceId,
			});

			set(() => ({
				isVerifying: false,
				paymentStatus: decodedStatus.includes("success")
					? "successful"
					: "failed",
				verified: true,
			}));
		},
	}))
);

export default useFormStore;
