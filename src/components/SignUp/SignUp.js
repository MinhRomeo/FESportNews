//Adding antd modules and style
import CollectionsPage1 from 'components/CollectionPage1';
// import "antd/dist/antd.css";

function SignUp(props) {
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
