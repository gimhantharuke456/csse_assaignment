import * as mongoose from 'mongoose';
export declare const LabReportSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: NativeDate;
    patientId: string;
    reportDetails: string;
    doctorId: string;
    fileUrl: string;
    status: "Pending" | "Distributed";
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: NativeDate;
    patientId: string;
    reportDetails: string;
    doctorId: string;
    fileUrl: string;
    status: "Pending" | "Distributed";
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    createdAt: NativeDate;
    patientId: string;
    reportDetails: string;
    doctorId: string;
    fileUrl: string;
    status: "Pending" | "Distributed";
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
