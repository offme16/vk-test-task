import React, { useEffect, useState } from 'react';
import cls from './GroupList.module.scss';
import { useSelector } from 'react-redux';
import { getData } from 'enteties/Community/model/selectors/getData/getData';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { groupService } from 'enteties/Community/model/service/groupService';
import Modal from 'shared/UI/Modal/Modal';import { Group } from 'enteties/Community/model/type/type';


interface Props {
    privacyFilter: 'all' | 'closed' | 'open';
    colorFilter: string;
    friendFilter: boolean;
}

const GroupList: React.FC<Props> = ({ privacyFilter, colorFilter, friendFilter }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

    const dispatch = useAppDispatch();
    const groups = useSelector(getData);

    useEffect(() => {
        dispatch(groupService());
    }, [dispatch]);

    const handleOpenModal = (group: Group) => {
        setSelectedGroup(group);
        setModalVisible(true);
    };

    const filteredGroups = groups?.filter(group => {
        if (privacyFilter === 'all' || group.closed === (privacyFilter === 'closed')) {
            if (colorFilter === '' || group.avatar_color === colorFilter) {
                if (!friendFilter || (group.friends && group.friends.length > 0)) {
                    return true;
                }
            }
        }
        return false;
    });

    return (
        <div className={cls.container}>
            {filteredGroups?.map((group) => (
                <div key={group.id} className={cls.group_box}>
                    <div className={cls.avatar} style={{ backgroundColor: group.avatar_color || 'transparent' }}></div>
                    <div>
                        <h2>{group.name}</h2>
                        <div>Подписчики: <span>{group.members_count}</span></div>
                        <div className={cls.group_friends} onClick={() => handleOpenModal(group)}>
                            <p>Друзья:</p>
                            <span>{group.friends?.length || 0}</span>
                        </div>
                        <div>{group.closed ? <p>Закрытая</p> : <p>Открытая</p>}</div>
                    </div>
                </div>
            ))}
            <Modal visible={modalVisible} setVisible={setModalVisible}>
                <h3>{selectedGroup?.name} - Список друзей</h3>
                <ul>
                    {selectedGroup?.friends?.map((friend, id) => (
                        <li key={id}>{friend.first_name} {friend.last_name}</li>
                    ))}
                </ul>
            </Modal>
        </div>
    );
};

export default GroupList;
