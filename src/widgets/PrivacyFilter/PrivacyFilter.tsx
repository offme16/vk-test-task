interface Props {
    onSelectPrivacy: (privacy: 'all' | 'closed' | 'open') => void;
}

const PrivacyFilter: React.FC<Props> = ({ onSelectPrivacy }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelectPrivacy(event.target.value as 'all' | 'closed' | 'open');
    };

    return (
        <div>
            <label>Тип приватности:</label>
            <select onChange={handleChange}>
                <option value="all">Все</option>
                <option value="closed">Закрытая</option>
                <option value="open">Открытая</option>
            </select>
        </div>
    );
};

export default PrivacyFilter;