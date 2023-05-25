import React from 'react';
import SuperButton from "../SuperButton/SuperButton";
import SuperCheckbox from "../SuperCheckbox/SuperCheckbox";
import SuperInputText from "../SuperInputText/SuperInputText";

const SuperComponents = () => {
    return (
        <div>
            <div>
                <SuperButton>click me</SuperButton>
                <SuperCheckbox>remember me</SuperCheckbox>
                <SuperInputText/>
            </div>
        </div>
    );
};

export default SuperComponents;