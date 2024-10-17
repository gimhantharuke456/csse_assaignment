export declare class CreateLabReportDto {
    readonly patientId: string;
    readonly reportDetails: string;
    readonly doctorId: string;
}
export declare class UpdateLabReportDto {
    readonly status?: 'Pending' | 'Distributed';
}
