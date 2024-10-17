import { Test, TestingModule } from '@nestjs/testing';
import { StaffAppointmentService } from './staff-appointment.service';
import { getModelToken } from '@nestjs/mongoose';
import { StaffAppointment } from './staff-appointment.interface';

const mockStaffAppointment = {
  patientName: 'John Doe',
  doctorName: 'Dr. Brown',
  appointmentDate: new Date(),
  hospital: 'City Hospital',
  status: 'Pending',
};

const mockStaffAppointmentModel = {
  create: jest.fn().mockResolvedValue(mockStaffAppointment),
  find: jest.fn().mockResolvedValue([mockStaffAppointment]),
  findById: jest.fn().mockResolvedValue(mockStaffAppointment),
  findByIdAndUpdate: jest.fn().mockResolvedValue(mockStaffAppointment),
  findByIdAndDelete: jest.fn().mockResolvedValue(mockStaffAppointment),
};

describe('StaffAppointmentService', () => {
  let service: StaffAppointmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StaffAppointmentService,
        {
          provide: getModelToken('StaffAppointment'),
          useValue: mockStaffAppointmentModel,
        },
      ],
    }).compile();

    service = module.get<StaffAppointmentService>(StaffAppointmentService);
  });

  it('should create a staff appointment', async () => {
    const result = await service.createStaffAppointment(mockStaffAppointment);
    expect(result).toEqual(mockStaffAppointment);
  });

  it('should return all staff appointments', async () => {
    const result = await service.getAllStaffAppointments();
    expect(result).toEqual([mockStaffAppointment]);
  });

  it('should return a single staff appointment by ID', async () => {
    const result = await service.getStaffAppointmentById('1');
    expect(result).toEqual(mockStaffAppointment);
  });

  it('should update a staff appointment', async () => {
    const result = await service.updateStaffAppointment('1', {
      status: 'Confirmed',
    });
    expect(result).toEqual(mockStaffAppointment);
  });

  it('should delete a staff appointment', async () => {
    const result = await service.deleteStaffAppointment('1');
    expect(result).toEqual(mockStaffAppointment);
  });
});
