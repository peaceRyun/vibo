import { SDropdown, SDropdownButton, SDropdownContent, SDropdownItem, SIcon } from './style';

const SeasonDropdown = ({ isOpen, onToggle, selectedSeason, onSelect }) => {
    const seasons = ['시즌 1', '시즌 2', '시즌 3', '시즌 4'];
    const hasSelection = selectedSeason !== '';

    return (
        <SDropdown>
            <SDropdownButton onClick={onToggle}>
                {hasSelection ? (
                    <>
                        {selectedSeason}
                        <SIcon src='/contentdetail/ui/live area.png' alt='dropdownIcon' $isDropOpen={isOpen} />
                    </>
                ) : (
                    '시즌 클릭'
                )}
            </SDropdownButton>

            {isOpen && (
                <SDropdownContent>
                    {seasons.map((season) => (
                        <SDropdownItem key={season} onClick={() => onSelect(season)}>
                            {season}
                        </SDropdownItem>
                    ))}
                </SDropdownContent>
            )}
        </SDropdown>
    );
};

export default SeasonDropdown;
