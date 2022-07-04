//Adding antd modules and style
import { Form, Input, Modal } from 'antd';
// import "antd/dist/antd.css";

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

export default CollectionCreateForm2;
