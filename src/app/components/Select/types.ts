import {Dispatch, SetStateAction} from 'react';

export interface ISelectProps {
    label: string;
    options: string[];
    id: string;
    value: string;
    onChange: Dispatch<SetStateAction<string>>;
}
