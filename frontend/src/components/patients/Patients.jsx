import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  message,
  Popconfirm,
  Upload,
} from "antd";
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import patientService from "../../services/patientService";
import { uploadFile } from "../../services/uploadFIleService";

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingPatient, setEditingPatient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [createLoading, setCreateLoading] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const data = await patientService.getAllPatients();
      setPatients(data);
    } catch (error) {
      message.error("Failed to fetch patients");
    } finally {
      setLoading(false);
    }
  };

  const showModal = (patient = null) => {
    setEditingPatient(patient);
    if (patient) {
      form.setFieldsValue(patient);
    } else {
      form.resetFields();
    }
    setIsModalVisible(true);
  };

  const handleOk = () => {
    form.validateFields().then(async (values) => {
      let url = "https://i.sstatic.net/y9DpT.jpg";
      try {
        const file = values.healthcareCard.file;

        if (file) {
          if (file.originFileObj) {
            url = await uploadFile(file.originFileObj);
          } else {
            url = editingPatient?.healthcareCard;
          }
        } else {
          url = editingPatient?.healthcareCard;
        }

        if (editingPatient) {
          setUpdateLoading(true);
          await patientService.updatePatient(editingPatient._id, {
            ...values,
            healthcareCard: url,
          });
          message.success("Patient updated successfully");
          setUpdateLoading(false);
        } else {
          setCreateLoading(true);
          await patientService.createPatient({
            ...values,
            healthcareCard: url,
          });
          message.success("Patient created successfully");
          setCreateLoading(false);
        }
        setIsModalVisible(false);
        fetchPatients();
      } catch (error) {
        message.error("Operation failed");
        setUpdateLoading(false);
        setCreateLoading(false);
      }
    });
  };

  const handleDelete = async (id) => {
    setDeleteLoading(true);
    try {
      await patientService.deletePatient(id);
      message.success("Patient deleted successfully");
      fetchPatients();
    } catch (error) {
      message.error("Failed to delete patient");
    } finally {
      setDeleteLoading(false);
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Contact Info", dataIndex: "contactInfo", key: "contactInfo" },
    {
      title: "Medical History",
      dataIndex: "medicalHistory",
      key: "medicalHistory",
    },
    {
      title: "Healthcare Card",
      dataIndex: "healthcareCard",
      key: "healthcareCard",
      render: (text) =>
        text ? (
          <a href={text} target="_blank" rel="noopener noreferrer">
            View Card
          </a>
        ) : (
          "No card uploaded"
        ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <span>
          <Button
            icon={<EditOutlined />}
            onClick={() => showModal(record)}
            style={{ marginRight: 8, color: "#FF6B6B", borderColor: "#FF6B6B" }}
          />
          <Popconfirm
            title="Are you sure you want to delete this patient?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              style={{ color: "#FF6B6B", borderColor: "#FF6B6B" }}
              loading={deleteLoading}
            />
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={() => showModal()}
        style={{
          marginBottom: 16,
          backgroundColor: "#FF6B6B",
          borderColor: "#FF6B6B",
        }}
      >
        Add Patient
      </Button>
      <Table
        columns={columns}
        dataSource={patients}
        rowKey="id"
        loading={loading}
      />
      <Modal
        title={editingPatient ? "Edit Patient" : "Add Patient"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={() => setIsModalVisible(false)}
        okButtonProps={{
          style: { backgroundColor: "#FF6B6B", borderColor: "#FF6B6B" },
          loading: createLoading || updateLoading,
        }}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="contactInfo"
            label="Contact Info"
            rules={[
              { required: true, message: "Please input the contact info!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="medicalHistory"
            label="Medical History"
            rules={[
              { required: true, message: "Please input the medical history!" },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            name="healthcareCard"
            label="Healthcare Card"
            rules={[
              { required: true, message: "Please upload the healthcare card!" },
            ]}
          >
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Patients;
