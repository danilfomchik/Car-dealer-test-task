import type {ResponseType} from 'axios';

interface Request {
    url: string;
    body?: unknown;
}

export interface IFetch {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    request: Request;
    override?: {
        [key: string]: string;
    };
    responseType?: ResponseType;
    contentType?: string;
    accept?: string;
}

export interface IError {
    message: string | string[];
}

export interface ICar {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
}

export interface ICarModel {
    Make_ID: number;
    Make_Name: string;
    Model_ID: number;
    Model_Name: string;
}

export enum IModelsResultsMessages {
    success = 'Results returned successfully',
}

export enum ICarsResponseMessages {
    success = 'Response returned successfully',
}
