import {ICar, ICarModel} from '@/app/services/types';

export interface IModelsResponse {
    Count: number;
    Message: string;
    SearchCriteria: string | null;
    Results: ICarModel[];
}

export interface ICarsResponse {
    Count: number;
    Message: string;
    SearchCriteria: string | null;
    Results: ICar[];
}

export interface IResultPageProps {
    params: Promise<{carId: string; carYear: string}>;
}
