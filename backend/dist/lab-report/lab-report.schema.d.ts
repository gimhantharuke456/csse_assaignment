import * as mongoose from 'mongoose';
export declare const LabReportSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "Pending" | "Distributed";
    createdAt: NativeDate;
    patientId: string;
    reportDetails: string;
    doctorId: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "Pending" | "Distributed";
    createdAt: NativeDate;
    patientId: string;
    reportDetails: string;
    doctorId: string;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    status: "Pending" | "Distributed";
    createdAt: NativeDate;
    patientId: string;
    reportDetails: string;
    doctorId: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
