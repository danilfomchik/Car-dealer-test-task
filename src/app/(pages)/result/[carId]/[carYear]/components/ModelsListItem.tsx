import React from 'react';

import {ICarModel} from '@/app/services/types';

const ModelsListItem = ({car}: {car: ICarModel}) => {
    return (
        <div className="group relative">
            <div className="flex justify-between rounded-md border p-2">
                <div>
                    <h3 className="text-sm">{car.Make_Name}</h3>
                    <p className="mt-1 text-sm">{car.Model_Name}</p>
                </div>
                <p className="text-sm font-medium">Model ID: {car.Model_ID}</p>
            </div>
        </div>
    );
};

export default ModelsListItem;
