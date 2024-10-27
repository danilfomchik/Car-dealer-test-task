import React, {ChangeEvent} from 'react';

import {ISelectProps} from './types';

const Select = ({label, options, id, value, onChange}: ISelectProps) => {
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value);
    };

    return (
        <div className="pt-4">
            <label htmlFor={id} className="block text-md font-medium leading-6">
                {label}
            </label>
            <div className="mt-2">
                <select
                    id={id}
                    value={value}
                    onChange={onSelectChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                    <option disabled value="">
                        Select an option
                    </option>
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Select;
