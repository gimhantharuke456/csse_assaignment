import { LabReportStatus } from './lab-report-status';
export declare class LabReportFactory {
    createLabReport(patientId: string, reportDetails: string, doctorId: string, status: LabReportStatus): {
        patientId: string;
        reportDetails: string;
        doctorId: string;
        status: LabReportStatus;
    };
}
