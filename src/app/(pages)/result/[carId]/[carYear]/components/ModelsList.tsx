import React from 'react';

import ModelsListItem from './ModelsListItem';
import {ICarModel} from '@/app/services/types';

const ModelsList = ({modelsData}: {modelsData: ICarModel[]}) => {
    return (
        <>
            {modelsData.map((car, index) => {
                return <ModelsListItem key={index} car={car} />;
            })}
        </>
    );
};

export default ModelsList;
