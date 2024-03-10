import sl from './Modal.module.scss';

interface ModalProps {
    children: React.ReactNode; // Тип для дочерних элементов
    visible: boolean; // Тип для видимости модального окна
    setVisible: React.Dispatch<React.SetStateAction<boolean>>; // Тип для функции установки видимости модального окна
}

const Modal: React.FC<ModalProps> = ({ children, visible, setVisible }) => {
    const rootClasses = [sl.myModal];
    if (visible) {
        rootClasses.push(sl.active);
    }
    return (
        <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
            <div className={sl.myModalContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
