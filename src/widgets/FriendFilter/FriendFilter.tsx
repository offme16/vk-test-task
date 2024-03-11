
interface Props {
    onSelectFriends: (hasFriends: boolean) => void;
}

const FriendFilter: React.FC<Props> = ({ onSelectFriends }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSelectFriends(event.target.checked);
    };

    return (
        <div>
            <label>
                <input type="checkbox" onChange={handleChange} />
                Есть друзья
            </label>
        </div>
    );
};

export default FriendFilter;