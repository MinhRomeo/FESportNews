import React, { useState } from 'react';



//Adding antd modules and style
import { Button, Modal, Form, Input, Radio } from 'antd';
// import "antd/dist/antd.css";
import { QuestionCircleOutlined } from '@ant-design/icons';

function Login(props) {
  
    const CollectionCreateForm2 = ({ visible, onCreate, onCancel }) => {
      const [form] = Form.useForm();
      return (
        <Modal
          visible={visible}
          title="Login"
          okText="Login"
          cancelText="Cancel"
          onCancel={onCancel}
          onOk={() => {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                onCreate(values);
              })
              .catch((info) => {
                console.log('Validate Failed:', info);
              });
          }}
        >
          <Form
            form={form}
            layout="vertical"
            name="form_in_modal"
            initialValues={{
              modifier: 'public',
            }}
          >
            <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            <Form.Item name="password" label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please enter password!',
                },
              ]}
            >
              <Input type="password" />
            </Form.Item>
  
          </Form>
        </Modal>
      );
  
    };
     const CollectionsPage2 = () => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values) => {
      console.log('Received values of form: ', values);
      setVisible(false);
    }
    return (
      <div className="header-info-right">
        <Button type="primary" onClick={() => { setVisible(true) }}> Login </Button>
        <CollectionCreateForm2 visible={visible} onCreate={onCreate} onCancel={() => { setVisible(false); }} />
      </div>
    );
  }
  return (
      <CollectionsPage2 />
  );
}

Login.propTypes = {}

export default Login