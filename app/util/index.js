'use strict';

import { Dimensions, Platform, DeviceInfo, NativeModules } from 'react-native'

const deviceH = Dimensions.get('window').height
const deviceW = Dimensions.get('window').width

const basePx = 375

const { PlatformConstants = {} } = NativeModules;
const { minor = 0 } = PlatformConstants.reactNativeVersion || {};

export default function px2dp(px) {
    return px * deviceW / basePx
}

export const isIPhoneX = (() => {
    if (Platform.OS === 'web') return false;

    if (minor >= 50) {
        return DeviceInfo.isIPhoneX_deprecated;
    }

    return (
        Platform.OS === 'ios' &&
        ((D_HEIGHT === X_HEIGHT && D_WIDTH === X_WIDTH) ||
            (D_HEIGHT === X_WIDTH && D_WIDTH === X_HEIGHT))
    );
})();