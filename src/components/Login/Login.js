import React, { useState } from 'react';

//Adding antd modules and style
import { Button, Modal, Form, Input, Radio } from 'antd';
// import "antd/dist/antd.css";
import { QuestionCircleOutlined } from '@ant-design/icons';
import useMounted from 'hooks/useMounted';
import { useDispatch } from 'store';
import { login } from 'slices/authentication';
import toast from 'react-hot-toast';

function Login(props) {
    const CollectionCreateForm2 = ({ visible, onCreate, onCancel }) => {
        const [form] = Form.useForm();
        const handleValidateEmail = async (e) => {
            const emailValue = e.target.value;
            try {
                const request = {
                    email: emailValue,
                };

                //Call API validate email
                const validateResponse = { status: 'failed' };
                if (validateResponse?.status === 'success') {
                    //Do something
                } else {
                    console.log('validate failed');
                    form.setFields([
                        {
                            name: 'email',
                            errors: ['Email is already exist'],
                        },
                    ]);
                }
            } catch (error) {}
        };
        return (
            <Modal
                visible={visible}
                title="Login"
                okText="Login"
                cancelText="Cancel"
                onCancel={onCancel}
                onOk={() => {
                    form.validateFields()
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
                        onBlur={handleValidateEmail}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
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
        const mounted = useMounted();
        const dispatch = useDispatch();

        const onCreate = async (values) => {
            try {
                console.log('Received values of form: ', values);

                await dispatch(login(values.email, values.password));

                if (mounted.current) {
                    setVisible(false);
                    toast.success('Login Successfully');
                }
            } catch (error) {
                console.log('The following error occurred: ', error);
                setVisible(false);
                toast.error(error?.message);
            }
        };
        return (
            <div className="header-info-right">
                <Button
                    type="primary"
                    onClick={() => {
                        setVisible(true);
                    }}
                >
                    {' '}
                    Login{' '}
                </Button>
                <CollectionCreateForm2
                    visible={visible}
                    onCreate={onCreate}
                    onCancel={() => {
                        setVisible(false);
                    }}
                />
            </div>
        );
    };
    return <CollectionsPage2 />;
}

Login.propTypes = {};

export default Login;
