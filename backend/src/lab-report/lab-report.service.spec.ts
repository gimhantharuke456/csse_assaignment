import { Test, TestingModule } from '@nestjs/testing';
import { LabReportService } from './lab-report.service';
import { getModelToken } from '@nestjs/mongoose';
import { LabReport } from './lab-report.interface';

const mockLabReport = {
  patientId: '1',
  reportDetails: 'Blood Test Results',
  doctorId: '2',
  status: 'Pending',
};

const mockLabReportModel = {
  create: jest.fn().mockResolvedValue(mockLabReport),
  find: jest.fn().mockResolvedValue([mockLabReport]),
  findById: jest.fn().mockResolvedValue(mockLabReport),
  findByIdAndUpdate: jest.fn().mockResolvedValue(mockLabReport),
  findByIdAndDelete: jest.fn().mockResolvedValue(mockLabReport),
};

describe('LabReportService', () => {
  let service: LabReportService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LabReportService,
        {
          provide: getModelToken('LabReport'),
          useValue: mockLabReportModel,
        },
      ],
    }).compile();

    service = module.get<LabReportService>(LabReportService);
  });

  it('should create a lab report', async () => {
    const result = await service.createLabReport(mockLabReport);
    expect(result).toEqual(mockLabReport);
  });

  it('should return all lab reports', async () => {
    const result = await service.getAllLabReports();
    expect(result).toEqual([mockLabReport]);
  });

  it('should return a single lab report by ID', async () => {
    const result = await service.getLabReportById('1');
    expect(result).toEqual(mockLabReport);
  });

  it('should update a lab report', async () => {
    const result = await service.updateLabReport('1', {
      status: 'Distributed',
    });
    expect(result).toEqual(mockLabReport);
  });

  it('should delete a lab report', async () => {
    const result = await service.deleteLabReport('1');
    expect(result).toEqual(mockLabReport);
  });
});
