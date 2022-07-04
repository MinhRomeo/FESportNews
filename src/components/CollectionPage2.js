import { useState } from 'react';
import { useTranslation } from 'react-i18next';
//Adding antd modules and style
import { Button } from 'antd';
// import "antd/dist/antd.css";
import useMounted from 'hooks/useMounted';
import toast from 'react-hot-toast';
import { login } from 'slices/authentication';
import { useDispatch } from 'store';
import CollectionCreateForm2 from './CollectionCreateForm2';

const CollectionsPage2 = () => {
    const [visible, setVisible] = useState(false);
    const mounted = useMounted();
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation();

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
                {t('header.login')}{' '}
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

export default CollectionsPage2;
