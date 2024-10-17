import { Test, TestingModule } from '@nestjs/testing';
import { PatientService } from './patient.service';
import { getModelToken } from '@nestjs/mongoose';
import { Patient } from './patient.interface';

const mockPatient = {
  name: 'Alice Smith',
  contactInfo: 'alice.smith@example.com',
  medicalHistory: 'No prior conditions',
  healthcareCard: 'HC987654321',
};

const mockPatientModel = {
  create: jest.fn().mockResolvedValue(mockPatient),
  find: jest.fn().mockResolvedValue([mockPatient]),
  findById: jest.fn().mockResolvedValue(mockPatient),
  findByIdAndUpdate: jest.fn().mockResolvedValue(mockPatient),
  findByIdAndDelete: jest.fn().mockResolvedValue(mockPatient),
};

describe('PatientService', () => {
  let service: PatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PatientService,
        {
          provide: getModelToken('Patient'),
          useValue: mockPatientModel,
        },
      ],
    }).compile();

    service = module.get<PatientService>(PatientService);
  });

  it('should create a patient', async () => {
    const result = await service.createPatient(mockPatient);
    expect(result).toEqual(mockPatient);
  });

  it('should return all patients', async () => {
    const result = await service.getAllPatients();
    expect(result).toEqual([mockPatient]);
  });

  it('should return a single patient by ID', async () => {
    const result = await service.getPatientById('1');
    expect(result).toEqual(mockPatient);
  });

  it('should update a patient', async () => {
    const result = await service.updatePatient('1', {
      contactInfo: 'alice.newemail@example.com',
    });
    expect(result).toEqual(mockPatient);
  });

  it('should delete a patient', async () => {
    const result = await service.deletePatient('1');
    expect(result).toEqual(mockPatient);
  });
});
