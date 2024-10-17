import * as mongoose from 'mongoose';
export declare const StaffAppointmentSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    patientName: string;
    doctorName: string;
    appointmentDate: NativeDate;
    status: "Pending" | "Confirmed" | "Rejected";
    hospital: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    patientName: string;
    doctorName: string;
    appointmentDate: NativeDate;
    status: "Pending" | "Confirmed" | "Rejected";
    hospital: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    patientName: string;
    doctorName: string;
    appointmentDate: NativeDate;
    status: "Pending" | "Confirmed" | "Rejected";
    hospital: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
