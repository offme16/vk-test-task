import { Group, User } from 'enteties/Community/model/type/type';
import React from 'react';

interface Props {
    group: Group | null;
}

const FriendList: React.FC<Props> = ({ group }) => {
    return (
        <>
            {group && (
                <div>
                    <h3>{group.name} - Список друзей</h3>
                    <ul>
                        {group.friends?.map((friend: User, id) => (
                            <li key={id}>{friend.first_name} {friend.last_name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default FriendList;
