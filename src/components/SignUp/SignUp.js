import { useState } from 'react';
import { useTranslation } from 'react-i18next';
//Adding antd modules and style
import { AutoComplete, Button, Checkbox, Col, Form, Input, Modal, Row, Select, Tooltip } from 'antd';
// import "antd/dist/antd.css";
import { QuestionCircleOutlined } from '@ant-design/icons';
import useMounted from 'hooks/useMounted';
import toast from 'react-hot-toast';
import { login, register } from 'slices/authentication';
import { useDispatch } from 'store';

function SignUp(props) {
    const { t, i18n } = useTranslation();
    const { Option } = Select;
    const AutoCompleteOption = AutoComplete.Option;
    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 8,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 16,
            },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };
    const CollectionCreateForm1 = ({ visible, onCreate, onCancel }) => {
        const [form] = Form.useForm();

        const onFinish = (values) => {
            console.log('Received values of form: ', values);
        };
        const [autoCompleteResult, setAutoCompleteResult] = useState([]);

        return (
            <Modal
                visible={visible}
                title="Register"
                okText="Register"
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
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        // residence: ['zhejiang', 'hangzhou', 'xihu'],
                        prefix: '86',
                    }}
                    scrollToFirstError
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

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="nickname"
                        label={
                            <span>
                                Nickname
                                <Tooltip title="What do you want others to call you?">
                                    <QuestionCircleOutlined />
                                </Tooltip>
                            </span>
                        }
                        rules={[
                            {
                                required: true,
                                message: 'Please input your nickname!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                        <Row gutter={8}>
                            <Col span={12}>
                                <Form.Item
                                    name="captcha"
                                    noStyle
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input the captcha you got!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Button>Get captcha</Button>
                            </Col>
                        </Row>
                    </Form.Item>

                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) => (value ? Promise.resolve() : Promise.reject('Should accept agreement')),
                            },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            I have read the <a href="">agreement</a>
                        </Checkbox>
                    </Form.Item>
                </Form>
            </Modal>
        );
    };
    const CollectionsPage1 = () => {
        const [visible, setVisible] = useState(false);
        const mounted = useMounted();
        const dispatch = useDispatch();

        const onCreate = async (values) => {
            console.log('Received values of form: ', values);
            setVisible(false);
            try {
                await dispatch(register(values.email, values.password, values.nickname));

                if (mounted.current) {
                    toast.success('Register Successfully');
                    await dispatch(login(values.email, values.password));
                }
            } catch (err) {
                console.log('The following error occurred: ', err);
                setVisible(false);
                toast.error(err?.message);
            }
        };
        return (
            <div className="header-info-right">
                <Button
                    type="default"
                    onClick={() => {
                        setVisible(true);
                    }}
                >
                    {' '}
                    {t('header.register')}{' '}
                </Button>
                <CollectionCreateForm1
                    visible={visible}
                    onCreate={onCreate}
                    onCancel={() => {
                        setVisible(false);
                    }}
                />
            </div>
        );
    };
    return <CollectionsPage1 />;
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //  mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
    });
    return response.json();
}

SignUp.propTypes = {};

export default SignUp;
