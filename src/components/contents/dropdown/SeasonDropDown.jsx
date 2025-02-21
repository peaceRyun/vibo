import { SDropdown, SDropdownButton, SDropdownContent, SDropdownItem, SIcon } from './style';

const SeasonDropdown = ({ isOpen, onToggle, selectedSeason, onSelect, options = [], loading = false }) => {
    const hasSelection = selectedSeason !== '';

    const handleSeasonSelect = (season) => {
        // 시즌 선택 시 EpList로 스크롤
        const epListElement = document.getElementById('episode-list');
        if (epListElement) {
            epListElement.scrollIntoView({ behavior: 'smooth' });
        }
        onSelect(season);
    };

    return (
        <SDropdown>
            <SDropdownButton onClick={onToggle} disabled={loading}>
                {loading ? (
                    '로딩 중...'
                ) : hasSelection ? (
                    <>
                        {selectedSeason}
                        <SIcon
                            src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/live area.png'
                            alt='dropdownIcon'
                            $isDropOpen={isOpen}
                        />
                    </>
                ) : (
                    <>
                        시즌 클릭
                        <SIcon
                            src='https://raw.githubusercontent.com/peaceRyun/vibostatic/refs/heads/main/public/mockup/contentdetail/ui/live area.png'
                            alt='dropdownIcon'
                            $isDropOpen={isOpen}
                        />
                    </>
                )}
            </SDropdownButton>

            {isOpen && options.length > 0 && (
                <SDropdownContent>
                    {options.map((season) => (
                        <SDropdownItem key={season.id || season.name} onClick={() => handleSeasonSelect(season.name)}>
                            {season.name}
                        </SDropdownItem>
                    ))}
                </SDropdownContent>
            )}
        </SDropdown>
    );
};

export default SeasonDropdown;
