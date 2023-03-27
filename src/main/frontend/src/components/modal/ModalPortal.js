import ReactDOM from 'react-dom';

const ModalPortal = ({ children }) => {
    const el = document.getElementById("modal");
    console.log(el);
    return ReactDOM.createPortal(children, el);
};

export default ModalPortal;