import React from 'react';
import Link from 'next/link';

import ModelsList from './components/ModelsList';
import {fetchWrap} from '@/app/services/common';
import {buttonLinkClasses, modelYearsOptions} from '@/app/services/constants';
import {ICarModel, IModelsResultsMessages} from '@/app/services/types';
import {IModelsResponse, IResultPageProps} from './types';
import NotFound from '@/app/[...not-found]/page';

export async function generateStaticParams() {
    const {Results} = await fetchWrap({
        request: {
            url: `${process.env.NEXT_PUBLIC_VEHICLES_URL}`,
        },
    });

    const result = [];

    for (let i = 0; i < Results.length; i++) {
        const currentCar = Results[i];
        const staticParamsForOneModel = [];

        for (let j = 0; j < modelYearsOptions.length; j++) {
            staticParamsForOneModel.push({
                carId: `${currentCar.MakeId}`,
                carYear: `${modelYearsOptions[j]}`,
            });
        }

        result.push(...staticParamsForOneModel);
    }

    return result;
}

const ResultPage = async ({params}: IResultPageProps) => {
    const {carId, carYear} = await params;
    const modelsData: IModelsResponse = await fetchWrap({
        request: {
            url: `${process.env.NEXT_PUBLIC_MODELS_URL}/makeId/${carId}/modelyear/${carYear}?format=json`,
        },
    });

    return (
        <>
            {modelsData.Message === IModelsResultsMessages.success ? (
                <div className="flex flex-col mx-auto max-w-2xl mt-2 px-4 py-16 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
                    <h2 className="text-2xl font-bold tracking-tight pb-6 border-b">
                        Results for {modelsData.SearchCriteria}
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {modelsData.Count > 0 ? (
                            <ModelsList modelsData={modelsData.Results as ICarModel[]} />
                        ) : (
                            <p>Nothing to show...</p>
                        )}
                    </div>

                    <Link
                        href="/"
                        className={`${buttonLinkClasses} focus-visible:outline-indigo-600 bg-indigo-600 hover:bg-indigo-500 lg:w-1/4 mt-8 mx-auto`}>
                        Go home
                    </Link>
                </div>
            ) : (
                <NotFound />
            )}
        </>
    );
};

export default ResultPage;
