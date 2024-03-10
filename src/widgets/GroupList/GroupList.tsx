import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import cls from "./GroupList.module.scss";
import { useSelector } from "react-redux";
import { getData } from "enteties/Community/model/selectors/getData/getData";
import { useEffect, useState } from "react";
import { groupService } from "enteties/Community/model/service/groupService";
import Modal from "shared/UI/Modal/Modal";

const GroupList = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(null); // Состояние для хранения id выбранного элемента

    const dispatch = useAppDispatch();
    const data = useSelector(getData);

    useEffect(() => {
        dispatch(groupService());
    }, [dispatch]);

    const OpenWindow = (id: number) => { // Принимаем id выбранного элемента
        setSelectedId(id); // Сохраняем id выбранного элемента
        setModalVisible(true);
    } 

    return (
        <div className={cls.container}>
            {data?.map((e) => (
                <div key={e.id} className={cls.group_box}>
                    <div className={cls.avatar} style={{ backgroundColor: e.avatar_color }}></div>
                    <div>
                        <h2>{e.name}</h2>
                        <div>Подписчики: <span>{e.members_count}</span></div>
                        {/* При клике передаем id в функцию OpenWindow */}
                        <div className={cls.group_friends} onClick={() => OpenWindow(e.id)}>
                            <p>Друзья:</p><span>{e.friends?.length}</span>
                        </div>
                        <div>{e.closed ? <p>Закрытая</p> : <p>Открытая</p>}</div>
                    </div>
                </div>
            ))}
            {/* Передаем selectedId в модальное окно */}
            <Modal visible={modalVisible} setVisible={setModalVisible}>{selectedId}</Modal>
        </div>
    );
}

export default GroupList;
