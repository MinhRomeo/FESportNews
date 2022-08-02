import { useState } from 'react';
//Adding antd modules and style
import { Button } from 'antd';
// import "antd/dist/antd.css";
import CollectionCreateForm1 from 'components/CollectionCreateForm1';
import useMounted from 'hooks/useMounted';
import toast from 'react-hot-toast';
import { login, register } from 'slices/authentication';
import { useDispatch } from 'store';
import { useTranslation } from 'react-i18next';

const CollectionsPage1 = () => {
    const [visible, setVisible] = useState(false);
    const mounted = useMounted();
    const dispatch = useDispatch();

    const { t, i18n } = useTranslation();

    const onCreate = async (values) => {
        setVisible(false);
        try {
            await dispatch(register(values.email, values.password, values.userName));

            if (mounted.current) {
                toast.success('Register Successfully');
                // await dispatch(login(values.email, values.password));
                alert("Đăng kí thành công")
            }
        } catch (err) {
            console.log('The following error occurred: ', err);
            setVisible(true);
            alert(err?.message)
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

export default CollectionsPage1;
