import React, { useState } from 'react';
import cls from './MainPage.module.scss';
import GroupList from 'widgets/GroupList/GroupList';
import PrivacyFilter from 'widgets/PrivacyFilter/PrivacyFilter';
import ColorFilter from 'widgets/ColorFilter/ColorFilter';
import FriendFilter from 'widgets/FriendFilter/FriendFilter';
import { useSelector } from 'react-redux';
import { getData } from 'enteties/Community/model/selectors/getData/getData';

const MainPage = () => {
    const [privacyFilter, setPrivacyFilter] = useState<'all' | 'closed' | 'open'>('all');
    const [colorFilter, setColorFilter] = useState<string>('');
    const [friendFilter, setFriendFilter] = useState<boolean>(false);
    const data = useSelector(getData)
    const distinctColors = Array.from(new Set(data?.map(group => group.avatar_color || '')));
    return (
        <div className={cls.MainPage}>
            <div className={cls.filters}>
                <PrivacyFilter onSelectPrivacy={setPrivacyFilter} />
                <ColorFilter onSelectColor={setColorFilter} colors={distinctColors}/>
                <FriendFilter onSelectFriends={setFriendFilter} />
            </div>
            <GroupList
                privacyFilter={privacyFilter}
                colorFilter={colorFilter}
                friendFilter={friendFilter}
            />
        </div>
    );
}

export default MainPage;
