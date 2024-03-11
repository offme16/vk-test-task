interface Props {
    colors: string[];
    onSelectColor: (color: string) => void;
}

const ColorFilter: React.FC<Props> = ({ colors, onSelectColor }) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onSelectColor(event.target.value);
    };

    return (
        <div>
            <label>Цвет аватарки:</label>
            <select onChange={handleChange}>
                <option value="">Любой</option>
                {colors.map((color, id) => (
                    <option key={id} value={color}>{color}</option>
                ))}
            </select>
        </div>
    );
};

export default ColorFilter;