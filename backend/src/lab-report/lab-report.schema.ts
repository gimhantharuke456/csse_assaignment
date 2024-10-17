// src/lab-report/lab-report.schema.ts
import * as mongoose from 'mongoose';

export const LabReportSchema = new mongoose.Schema(
  {
    patientId: { type: String, required: true },
    reportDetails: { type: String, required: true },
    doctorId: { type: String, required: true },
    status: {
      type: String,
      enum: ['Pending', 'Distributed'],
      default: 'Pending',
    },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  },
);
