import {KeyboardAPI} from '../../utils/keyboard-api';

const GET_KEYBOARD_VALUE = 0x02;
const SET_KEYBOARD_VALUE = 0x03;

const KB_VALUES = {
    ENABLED_ENCODER_MODES: 0x80,
    OLED_DEFAULT_MODE: 0x81,
    ENCODER_CUSTOM: 0x82,
}

const getEncoderModes = async (api: KeyboardAPI) => {
    const bytes = [KB_VALUES.ENABLED_ENCODER_MODES];
    const [, , enabledModes] = await api.hidCommand(
        GET_KEYBOARD_VALUE,
        bytes
    );
    console.log(enabledModes);
    return enabledModes;
}

export default {
    getEncoderModes
};
