import axios, {AxiosError, AxiosResponse} from 'axios';

import {IError, IFetch} from './types';

export const fetchWrap = async ({
    request,
    method = 'GET',
    responseType = 'json',
    contentType,
    accept,
    override = {},
}: IFetch) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': contentType || 'application/json',
        Accept: accept || '*/*',
        ...override,
    };

    return axios
        .request({
            url: request.url,
            method,
            headers,
            data: request.body,
            responseType: responseType,
        })
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((err: AxiosError<IError>) => {
            return err || 'error';
        });
};
