import { SDropdown, SDropdownButton, SDropdownContent, SDropdownItem, SIcon } from './style';

const SeasonDropdown = ({ isOpen, onToggle, selectedSeason, onSelect }) => {
    const seasons = ['시즌 1', '시즌 2', '시즌 3', '시즌 4'];

    const handleSelect = (season) => {
        onSelect(season);
    };

    return (
        <SDropdown>
            <SDropdownButton onClick={onToggle}>
                {isOpen ? selectedSeason : '시즌'}
                <SIcon src='/contentdetail/ui/live area.png' alt='dropdownIcon' $isOpen={isOpen} />
            </SDropdownButton>

            {isOpen && (
                <SDropdownContent>
                    {seasons.map((season) => (
                        <SDropdownItem key={season} onClick={() => handleSelect(season)}>
                            {season}
                        </SDropdownItem>
                    ))}
                </SDropdownContent>
            )}
        </SDropdown>
    );
};

export default SeasonDropdown;
