import React, { useState } from 'react';
import './Dashboard.css';
import Navbar from '../components/Navbar.js';
import {
  PieChartOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  UserOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
  UserDeleteOutlined,
  TableOutlined
} from '@ant-design/icons';
import { Layout, Menu, MenuProps, Table, Tag, Modal, Form, Input, DatePicker, TimePicker, Select } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  studentID: string;
  studentProgram: string;
  studentYear: number;
  contactNum: string;
  offenceTags: string[];
  remark: string;
}

const recordData: DataType[] = [
  {
    key: '1',
    firstName: 'Earl',
    lastName: 'Batenga',
    studentID: '0000291231',
    studentProgram: 'EMC',
    studentYear: 1,
    contactNum: '09271102041',
    offenceTags: ['1st Offence', '2nd Offence', '3rd Offence', '4th Offence', '5th Offence'],
    remark: 'Very Good Boy Student'
  },
];

const violationData: DataType[] = [
  // Add data for violations here
];

const { Column, ColumnGroup } = Table;
const { Header, Content, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items: MenuItem[] = [
  getItem('Home', 'sub1', <HomeOutlined/>, [
    getItem('Info', '1', <InfoCircleOutlined />),
    getItem('Dashboards', '2', <PieChartOutlined />),
  ]),

  getItem('Student Records', 'sub2', <UserOutlined />, [
    getItem('Record Table', '3', <TableOutlined/>),
    getItem('Add Record', '4', <UserAddOutlined/>),
    getItem('Edit Record', '5', <UserSwitchOutlined/>),
    getItem('Remove Record', '6', <UserDeleteOutlined/>),
  ]),
  getItem('Student Violations', 'sub3', <UserOutlined />, [
    getItem('Violation Table', '7', <TableOutlined/>),
    getItem('Add Violation', '8', <UserAddOutlined/>),
    getItem('Edit Violation', '9', <UserSwitchOutlined/>),
    getItem('Remove Violation', '10', <UserDeleteOutlined/>)
  ]),
];

const Dashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisibleR, setIsModalVisibleRecord] = useState(false);
  const [isModalVisibleV, setIsModalVisibleViolation] = useState(false);
  const [isTableVisibleR, setIsTableVisibleRecord] = useState(false);
  const [isTableVisibleV, setIsTableVisibleViolation] = useState(false);

  const showModalR = () => {
    setIsModalVisibleRecord(true);
  };
  const showModalV = () => {
    setIsModalVisibleViolation(true);
  };
  const showRecordTable = () => {
    setIsTableVisibleRecord(true);
    setIsTableVisibleViolation(false);
    
  };
  const showViolationTable = () => {
    setIsTableVisibleViolation(true);
    setIsTableVisibleRecord(false);
  };

  const handleOkR = () => {
    console.log('Ok clicked for Student Records');
    setIsModalVisibleRecord(false);
  };

  const handleCancelR = () => {
    console.log('Cancel clicked for Student Records');
    setIsModalVisibleRecord(false);
  };

  const handleOkV = () => {
    console.log('Ok clicked for Student Violations');
    setIsModalVisibleViolation(false);
  };

  const handleCancelV = () => {
    console.log('Cancel clicked for Student Violations');
    setIsModalVisibleViolation(false);
  };
 

  const handleMenuClick = (item: MenuInfo) => {
    console.log('Menu item clicked:', item);
    
    const topLevelKey = item.key?.split('-')[0]; // Extract the top-level key
    if (topLevelKey === '3') {
      showRecordTable();
    } else if (item.key === '4' || item.key === '5') {
      showRecordTable();
      showModalR();
    }
    
    else if (topLevelKey === '7') {
      showViolationTable();
    } else if (item.key === '8' || item.key === '9') {
      showViolationTable();
      showModalV();
    }
  };
  

  return (
    <div>
      <Navbar/>
      <Layout style={{ minHeight: '100vh', color: '#ffffff' }}>
        <Sider className='sider' width={'250'} collapsedWidth={'158'} collapsible
               collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
          <div>
            <Menu
              defaultSelectedKeys={['1']}
              mode="inline"
              items={items}
              onClick={(item) => handleMenuClick(item)}
            />
          </div>
        </Sider>
        <Layout>
          <Content style={{ margin: '0 16px' }}>
            <div style={{ padding: 24, minHeight: 360 }}>
              { /* Placeholder/No SQL Yet/Bust be 2 Table for Record and Violation */ }
              {isTableVisibleR && (
                <Table dataSource={recordData}>
                  <ColumnGroup title="Name">
                    <Column title="First Name" dataIndex="firstName" key="firstName" />
                    <Column title="Last Name" dataIndex="lastName" key="lastName" />
                  </ColumnGroup>
                  <ColumnGroup title="Student Details">
                    <Column title="Student ID" dataIndex="studentID" key="studentID" />
                    <Column title="College Program" dataIndex="studentProgram" key="studentProgram" />
                    <Column title="College Year" dataIndex="studentYear" key="studentYear" />
                    <Column title="Contact Number" dataIndex="contactNum" key="contactNum" />
                  </ColumnGroup>
                  <ColumnGroup title="Student Offences">
                    <Column
                      title="Student Offences"
                      dataIndex="offenceTags"
                      key="offenceTags"
                      render={(tags: string[]) => (
                        <>
                          {tags.map((tag) => (
                            <Tag color="blue" key={tag}>
                              {tag}
                            </Tag>
                          ))}
                        </>
                      )}
                    />
                    <Column title="Remark" dataIndex="remark" key="remark" />
                  </ColumnGroup>
                </Table>
              )}
              {isTableVisibleV && (
                <Table dataSource={violationData}>
                  <ColumnGroup title="Name">
                    <Column title="First Name" dataIndex="firstName" key="firstName" />
                    <Column title="Last Name" dataIndex="lastName" key="lastName" />
                  </ColumnGroup>
                  <ColumnGroup title="Student Details">
                    <Column title="Student ID" dataIndex="studentID" key="studentID" />
                    <Column title="College Program" dataIndex="studentProgram" key="studentProgram" />
                    <Column title="College Year" dataIndex="studentYear" key="studentYear" />
                    <Column title="Contact Number" dataIndex="contactNum" key="contactNum" />
                  </ColumnGroup>
                  <ColumnGroup title="Violation Details">
                    <Column title="Location Happened" dataIndex="locationHappened" key="locationHappened" />
                    <Column title="Time Happened" dataIndex="time" key="time" />
                    <Column title="Date Happened" dataIndex="date" key="date" />
                    <Column title="Violation" dataIndex="violation" key="violation" />
                    <Column title="Offence" dataIndex="offence" key="offence" />
                    <Column title="Remarks" dataIndex="remarks" key="remarks" />
                  </ColumnGroup>
                </Table>
              )}
            </div>
          </Content>
        </Layout>
      </Layout>
      <Modal title="Student Records" visible={isModalVisibleR} onOk={handleOkR} onCancel={handleCancelR}>
        {/* Your content for the Student Records modal goes here */}
        <Form layout="vertical">
          <Form.Item label="Student Name" name="studentName">
            <Input />
          </Form.Item>
          <Form.Item label="Student ID" name="studentID">
            <Input />
          </Form.Item>
          <Form.Item label="Student Program" name="studentProgram">
            <Input />
          </Form.Item>
          <Form.Item label="Student Year Level" name="studentYear">
            <Input />
          </Form.Item>
          <Form.Item label="Student Birthdate" name="studentBirthdate">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Student Birthplace" name="studentBirthplace">
            <Input />
          </Form.Item>
          <Form.Item label="Student Address" name="studentAddress">
            <Input />
          </Form.Item>
          <Form.Item label="Student Father Name" name="fatherName">
            <Input />
          </Form.Item>
          <Form.Item label="Student Father Occupation" name="fatherOccupation">
            <Input />
          </Form.Item>
          <Form.Item label="Student Mother Name" name="motherName">
            <Input />
          </Form.Item>
          <Form.Item label="Student Mother Occupation" name="motherOccupation">
            <Input />
          </Form.Item>
          <Form.Item label="Student Guardian Name" name="guardianName">
            <Input />
          </Form.Item>
          <Form.Item label="Student Contact Number" name="contactNumber">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      <Modal title="Student Violations" visible={isModalVisibleV} onOk={handleOkV} onCancel={handleCancelV}>
        {/* Your content for the Student Violations modal goes here */}
        <Form layout="vertical">
          <Form.Item label="Student Name" name="studentName">
            <Input />
          </Form.Item>
          <Form.Item label="Student ID" name="studentID">
            <Input />
          </Form.Item>
          <Form.Item label="Student Program" name="studentProgram">
            <Input />
          </Form.Item>
          <Form.Item label="Student Year" name="studentYear">
            <Input />
          </Form.Item>
          <Form.Item label="Location Happened" name="locationHappened">
            <Input />
          </Form.Item>
          <Form.Item label="Time Happened" name="time">
            <TimePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Date Happened" name="date">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="Violation" name="violation">
            <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
          </Form.Item>
          <Form.Item label="Offence" name="offence">
            <Select>
              <Select.Option value="1st Offence">1st Offence</Select.Option>
              <Select.Option value="2nd Offence">2nd Offence</Select.Option>
              <Select.Option value="3rd Offence">3rd Offence</Select.Option>
              <Select.Option value="4th Offence">4th Offence</Select.Option>
              <Select.Option value="5th Offence">5th Offence</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Remarks" name="remarks">
            <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Dashboard;
