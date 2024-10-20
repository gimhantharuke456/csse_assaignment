import React from "react";
import { Modal, Form, Input, DatePicker, Button, message } from "antd";
import { useForm } from "antd/lib/form/Form";
import staffAppointmentService from "../../services/staffAppointmentService";

const MakeAppointment = ({ visible, onClose }) => {
  const [form] = useForm();

  const handleSubmit = async (values) => {
    try {
      await staffAppointmentService.createStaffAppointment(values);
      message.success("Appointment submitted successfully");
      onClose();
    } catch (error) {
      console.error(error);
      message.error(`Error submitting yout appointment`);
    }
  };

  return (
    <Modal
      title="Make an Appointment"
      visible={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item
          name="patientName"
          label="Patient Name"
          rules={[{ required: true, message: "Please enter patient name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="doctorName"
          label="Doctor Name"
          rules={[{ required: true, message: "Please enter doctor name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="hospital"
          label="Hospital"
          rules={[{ required: true, message: "Please enter hospital name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="appointmentDate"
          label="Appointment Date"
          rules={[
            { required: true, message: "Please select appointment date" },
          ]}
        >
          <DatePicker showTime format="YYYY-MM-DD HH:mm" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button onClick={onClose} style={{ marginLeft: 8 }}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default MakeAppointment;
