import React, { useState } from 'react';
import { SDropdown, SDropdownButton, SDropdownContent, SDropdownItem, SIcon } from './style';

const SeasonDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSeason, setSelectedSeason] = useState('시즌 1');

    const seasons = ['시즌 1', '시즌 2', '시즌 3', '시즌 4'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (season) => {
        setSelectedSeason(season);
        setIsOpen(false);
    };

    return (
        <SDropdown>
            <SDropdownButton onClick={toggleDropdown}>
                {selectedSeason}
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
