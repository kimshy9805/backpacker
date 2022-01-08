import React, {useEffect} from 'react';
import {Animated} from 'react-native';

export const usePrev = value => {
    // 매번 새로운 ref 가 생성이 되나?

    const ref = useRef();
    //ref.current는 update되었지만
    // return당시에는 prev를 return하기떄문에
    // 항상 component render가 ready가 된 이후에 execute됨.
    useEffect(() => {
        ref.current = value;
    }, [value]);

    // re
    return ref.current;
};

export const useScrollX = images => {
    const [value, setValue] = useState(new Animated.Value(0));

    useEffect(() => {
        scrollX.addListener(({value}) => {
            if (Math.floor(value / Sizes.width) === images.length - 1) {
            }
        });

        return () => scrollX.removeListener();
    }, []);
};
