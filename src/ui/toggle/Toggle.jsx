import { SwitchContainer, SwitchInput, Slider } from './style';

const ToggleSwitch = ({ isRound }) => {
    return (
        <SwitchContainer>
            <SwitchInput type='checkbox' />
            <Slider $isRound={isRound} />
        </SwitchContainer>
    );
};

export default ToggleSwitch;
