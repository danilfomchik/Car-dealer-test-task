'use client';

import {useEffect, useMemo, useState} from 'react';
import Link from 'next/link';

import Select from './components/Select';
import {buttonLinkClasses, modelYearsOptions} from './services/constants';
import {fetchWrap} from './services/common';
import {ICar, ICarsResponseMessages} from './services/types';
import {ICarsResponse} from './(pages)/result/[carId]/[carYear]/types';

export const Home = () => {
    const [carsList, setCarsList] = useState<ICar[] | null>(null);
    const [isError, setIsError] = useState(false);
    const [selectedCarName, setselectedCarName] = useState('');
    const [selectedCarYear, setSelectedCarYear] = useState('');

    const carsModelsOptions = useMemo(() => (carsList ? carsList.map(car => car.MakeName) : []), [carsList]);

    const carId = useMemo(
        () => (carsList && selectedCarName ? carsList.filter(car => car.MakeName === selectedCarName)[0].MakeId : null),
        [carsList, selectedCarName],
    );

    const isButtonDisabled = !selectedCarName || !selectedCarYear;

    const getCarsList = async () => {
        const carsData: ICarsResponse = await fetchWrap({
            request: {
                url: `${process.env.NEXT_PUBLIC_VEHICLES_URL}`,
            },
        });

        if (carsData.Message === ICarsResponseMessages.success) {
            setIsError(false);
            setCarsList(carsData.Results);
        } else {
            setIsError(true);
        }
    };

    useEffect(() => {
        getCarsList();
    }, []);

    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <main className="flex flex-col gap-8 row-start-2 items-center flex-1 justify-center">
                {isError ? (
                    <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
                        Unfortunately, our service is unavailable now, please try again later!
                    </h2>
                ) : (
                    <>
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
                                Hello! I&apos;m your car dealer
                            </h2>
                        </div>
                        <div>
                            <Select
                                id="model"
                                label="Model"
                                options={carsModelsOptions}
                                value={selectedCarName}
                                onChange={setselectedCarName}
                            />
                            <Select
                                id="year"
                                label="Year"
                                options={modelYearsOptions}
                                value={selectedCarYear}
                                onChange={setSelectedCarYear}
                            />

                            <div className="pt-8">
                                <Link
                                    href={`/result/${carId}/${selectedCarYear}`}
                                    aria-disabled={isButtonDisabled}
                                    className={
                                        isButtonDisabled
                                            ? `${buttonLinkClasses} pointer-events-none bg-gray-400 text-gray-800`
                                            : `${buttonLinkClasses} focus-visible:outline-indigo-600 bg-indigo-600 hover:bg-indigo-500`
                                    }>
                                    Next
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
};

export default Home;
